import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TestimonialItem } from '../../types';
import {
  Plus,
  Edit2,
  Trash2,
  Star,
  X,
  Sparkles,
  MapPin,
  Calendar,
  Upload,
  Check,
  Loader2
} from 'lucide-react';
import { compressImageFile } from '../../utils/imageCompressor';

export const AdminTestimonials: React.FC = () => {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useApp();
  const [editing, setEditing] = useState<TestimonialItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(null), 3000);
  };

  const emptyTestimonial: TestimonialItem = {
    id: `test-${Date.now()}`,
    name: '',
    location: 'London',
    serviceUsed: 'Interior Painting',
    rating: 5,
    testimonial: '',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    date: '2026-03-01'
  };

  const handleCreate = () => {
    setEditing({ ...emptyTestimonial, id: `test-${Date.now()}` });
    setIsNew(true);
  };

  const handleEdit = (item: TestimonialItem) => {
    setEditing({ ...item });
    setIsNew(false);
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        const compressed = await compressImageFile(file, { maxWidth: 400, maxHeight: 400, quality: 0.8 });
        setEditing(prev => prev ? { ...prev, photo: compressed } : null);
      } catch (err) {
        console.error('Error compressing avatar', err);
        showNotification('Failed to process image. Please try another photo.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;

    if (isNew) {
      addTestimonial(editing);
      showNotification(`Testimonial from "${editing.name}" added and synced!`);
    } else {
      updateTestimonial(editing);
      showNotification(`Testimonial from "${editing.name}" updated and synced!`);
    }
    setEditing(null);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Delete review from "${name}"?`)) {
      deleteTestimonial(id);
      showNotification(`Testimonial from "${name}" deleted successfully!`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#202820]">Client Testimonials</h2>
          <p className="text-xs text-stone-500">
            Manage customer feedback, ratings, and quotes displayed on the public homepage & service pages
          </p>
        </div>
        <div className="flex items-center gap-3">
          {feedback && (
            <div className="px-3 py-1.5 bg-[#EAF5EC] text-[#315C3A] border border-[#DCEBDD] rounded-xl text-xs font-bold flex items-center gap-1.5 animate-in fade-in">
              <Check className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>{feedback}</span>
            </div>
          )}

          <button
            onClick={handleCreate}
            className="px-4 py-2.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Testimonial</span>
          </button>
        </div>
      </div>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 border border-[#DCEBDD] shadow-2xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  {item.photo && (
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#6FAF7B]"
                    />
                  )}
                  <div>
                    <h3 className="font-bold text-sm text-[#202820]">{item.name}</h3>
                    <div className="text-xs text-stone-500 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#6FAF7B]" />
                      <span>{item.location}</span>
                      <span>•</span>
                      <span>{item.serviceUsed}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xs text-stone-600 italic leading-relaxed mb-4">
                "{item.testimonial}"
              </blockquote>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-100 text-xs">
              <span className="text-stone-400 text-[11px]">{item.date}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="p-1.5 text-stone-600 hover:text-[#315C3A] hover:bg-[#EAF5EC] rounded-lg transition-colors cursor-pointer"
                  title="Edit"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(item.id, item.name)}
                  className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit/Create Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#DCEBDD] p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#DCEBDD] mb-4">
              <h3 className="text-base font-bold text-[#202820]">
                {isNew ? 'Add Client Testimonial' : `Edit Review: ${editing.name}`}
              </h3>
              <button
                onClick={() => setEditing(null)}
                className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editing.name}
                    onChange={e => setEditing({ ...editing, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={editing.location}
                    onChange={e => setEditing({ ...editing, location: e.target.value })}
                    placeholder="e.g. Dulwich, London"
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Service Completed
                  </label>
                  <input
                    type="text"
                    value={editing.serviceUsed}
                    onChange={e => setEditing({ ...editing, serviceUsed: e.target.value })}
                    placeholder="e.g. Interior Painting"
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Rating (Stars)
                  </label>
                  <select
                    value={editing.rating}
                    onChange={e => setEditing({ ...editing, rating: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-white focus:outline-none focus:border-[#6FAF7B]"
                  >
                    <option value={5}>5 Stars (Exceptional)</option>
                    <option value={4}>4 Stars (Very Good)</option>
                    <option value={3}>3 Stars (Good)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Avatar / Client Photo (URL or Device Upload)
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={editing.photo || ''}
                    onChange={e => setEditing({ ...editing, photo: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="flex-1 px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                  />
                  <label className="px-3.5 py-2 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer border border-[#DCEBDD] transition-colors shrink-0">
                    {isUploading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 text-[#6FAF7B] animate-spin" />
                        <span>Optimizing...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-3.5 h-3.5 text-[#6FAF7B]" />
                        <span>Upload</span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      disabled={isUploading}
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Testimonial Quote *
                </label>
                <textarea
                  rows={4}
                  required
                  value={editing.testimonial}
                  onChange={e => setEditing({ ...editing, testimonial: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>

              <div className="pt-3 border-t border-stone-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditing(null)}
                  className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#315C3A] hover:bg-[#202820] text-white font-bold"
                >
                  Save Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
