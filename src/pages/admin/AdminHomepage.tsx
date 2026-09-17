import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Check, Sparkles, Upload, Loader2 } from 'lucide-react';
import { compressImageFile } from '../../utils/imageCompressor';

export const AdminHomepage: React.FC = () => {
  const { homepage, updateHomepage } = useApp();
  const [formData, setFormData] = useState({ ...homepage });
  const [saved, setSaved] = useState(false);
  const [uploadingHero, setUploadingHero] = useState(false);
  const [uploadingIntro, setUploadingIntro] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Sync if context updates from Firestore on load
  useEffect(() => {
    if (homepage) {
      setFormData(prev => ({
        ...homepage,
        // preserve uncommitted text fields if user is currently editing
        ...prev
      }));
    }
  }, [homepage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateHomepage(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleHeroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadingHero(true);
      setUploadError(null);
      try {
        const compressedBase64 = await compressImageFile(file, {
          maxWidth: 1600,
          maxHeight: 1200,
          quality: 0.82
        });
        setFormData(prev => ({ ...prev, heroImage: compressedBase64 }));
      } catch (err) {
        console.error('Failed to compress hero image', err);
        setUploadError('Could not process hero image. Please try another image.');
      } finally {
        setUploadingHero(false);
      }
    }
  };

  const handleIntroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadingIntro(true);
      setUploadError(null);
      try {
        const compressedBase64 = await compressImageFile(file, {
          maxWidth: 1400,
          maxHeight: 1200,
          quality: 0.82
        });
        setFormData(prev => ({ ...prev, introImage: compressedBase64 }));
      } catch (err) {
        console.error('Failed to compress intro image', err);
        setUploadError('Could not process intro image. Please try another image.');
      } finally {
        setUploadingIntro(false);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#202820]">Homepage Content Editor</h2>
          <p className="text-xs text-stone-500">
            Edit the public homepage hero banner, headlines, call-to-action buttons, and introduction section
          </p>
        </div>

        {saved && (
          <div className="px-4 py-2 bg-[#EAF5EC] text-[#315C3A] border border-[#DCEBDD] rounded-xl text-xs font-bold flex items-center gap-1.5 animate-in fade-in">
            <Check className="w-4 h-4 text-[#6FAF7B]" />
            <span>Homepage changes saved successfully!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 text-xs">
        {/* HERO BANNER SETTINGS */}
        <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
          <h3 className="text-sm font-bold text-[#202820] uppercase tracking-wider pb-2 border-b border-stone-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#6FAF7B]" />
            <span>Hero Banner Section</span>
          </h3>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Hero Main Headline *
            </label>
            <input
              type="text"
              required
              value={formData.heroHeadline}
              onChange={e => setFormData({ ...formData, heroHeadline: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Hero Subheading / Descriptive Paragraph
            </label>
            <textarea
              rows={3}
              value={formData.heroSubheading}
              onChange={e => setFormData({ ...formData, heroSubheading: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Primary Button Label (Free Quote)
              </label>
              <input
                type="text"
                value={formData.heroCtaQuoteText}
                onChange={e => setFormData({ ...formData, heroCtaQuoteText: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Secondary Button Label (Services)
              </label>
              <input
                type="text"
                value={formData.heroCtaServicesText}
                onChange={e => setFormData({ ...formData, heroCtaServicesText: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Hero Background Photo
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Image URL or upload from device"
                value={formData.heroImage}
                onChange={e => setFormData({ ...formData, heroImage: e.target.value })}
                className="flex-1 px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
              <label className="px-3 py-2 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer border border-[#DCEBDD] transition-colors shrink-0">
                {uploadingHero ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 text-[#6FAF7B] animate-spin" />
                    <span>Optimizing...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-3.5 h-3.5 text-[#6FAF7B]" />
                    <span>Upload Photo</span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  disabled={uploadingHero}
                  onChange={handleHeroImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            {uploadError && <p className="mt-1 text-xs text-rose-600">{uploadError}</p>}
            {formData.heroImage && (
              <div className="mt-2 aspect-[21/9] max-h-44 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src={formData.heroImage}
                  alt="Hero Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* INTRODUCTION SECTION */}
        <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
          <h3 className="text-sm font-bold text-[#202820] uppercase tracking-wider pb-2 border-b border-stone-100">
            Introduction Section
          </h3>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Introduction Heading
            </label>
            <input
              type="text"
              value={formData.introHeading}
              onChange={e => setFormData({ ...formData, introHeading: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              First Paragraph
            </label>
            <textarea
              rows={3}
              value={formData.introTextParagraph1}
              onChange={e => setFormData({ ...formData, introTextParagraph1: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Second Paragraph
            </label>
            <textarea
              rows={3}
              value={formData.introTextParagraph2}
              onChange={e => setFormData({ ...formData, introTextParagraph2: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Introduction Section Photo
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Image URL or upload from device"
                value={formData.introImage}
                onChange={e => setFormData({ ...formData, introImage: e.target.value })}
                className="flex-1 px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
              <label className="px-3 py-2 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer border border-[#DCEBDD] transition-colors shrink-0">
                {uploadingIntro ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 text-[#6FAF7B] animate-spin" />
                    <span>Optimizing...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-3.5 h-3.5 text-[#6FAF7B]" />
                    <span>Upload Photo</span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  disabled={uploadingIntro}
                  onChange={handleIntroImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            {formData.introImage && (
              <div className="mt-2 aspect-[16/9] max-h-44 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src={formData.introImage}
                  alt="Intro Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Bullet Points (one per line)
            </label>
            <textarea
              rows={4}
              value={formData.introBulletPoints.join('\n')}
              onChange={e =>
                setFormData({
                  ...formData,
                  introBulletPoints: e.target.value.split('\n').filter(Boolean)
                })
              }
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full font-bold text-xs shadow-md transition-colors cursor-pointer"
          >
            Save Homepage Changes
          </button>
        </div>
      </form>
    </div>
  );
};
