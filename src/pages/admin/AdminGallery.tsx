import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GalleryItem } from '../../types';
import {
  Plus,
  Trash2,
  Image,
  Search,
  Check,
  Copy,
  ExternalLink,
  Upload,
  X
} from 'lucide-react';

export const AdminGallery: React.FC = () => {
  const { gallery, addGalleryItem, deleteGalleryItem } = useApp();
  const [showAddModal, setShowAddModal] = useState(false);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [newItem, setNewItem] = useState({
    url: '',
    title: '',
    category: 'Interior',
    tags: 'refurbishment, painting'
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setNewItem(prev => ({
            ...prev,
            url: reader.result as string,
            title: prev.title || file.name.replace(/\.[^/.]+$/, '')
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.url) return;

    addGalleryItem({
      url: newItem.url,
      title: newItem.title || 'Green Refurb Property Work',
      category: newItem.category,
      tags: newItem.tags.split(',').map(t => t.trim()).filter(Boolean)
    });

    setNewItem({
      url: '',
      title: '',
      category: 'Interior',
      tags: 'refurbishment, painting'
    });
    setShowAddModal(false);
  };

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filtered = gallery.filter(item => {
    if (filterCategory !== 'All' && item.category !== filterCategory) return false;
    if (search && !item.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#202820]">Media Library & Gallery</h2>
          <p className="text-xs text-stone-500">
            Upload and organize high-resolution images used across website banners, services, and project pages
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Media Image</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#DCEBDD] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {['All', 'Interior', 'Exterior', 'Commercial', 'Residential', 'Carpentry', 'Kitchen'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#315C3A] text-white'
                  : 'bg-[#F8FAF8] text-stone-600 hover:bg-[#EAF5EC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search images..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-stone-200 focus:outline-none focus:border-[#6FAF7B]"
          />
        </div>
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filtered.map(item => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl border border-[#DCEBDD] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="relative aspect-square overflow-hidden bg-stone-100">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                {item.category}
              </span>
            </div>

            <div className="p-3">
              <div className="font-bold text-[#202820] text-xs truncate">
                {item.title}
              </div>

              <div className="flex items-center justify-between mt-3 pt-2 border-t border-stone-100">
                <button
                  onClick={() => handleCopy(item.url, item.id)}
                  className="p-1.5 text-stone-500 hover:text-[#315C3A] hover:bg-[#EAF5EC] rounded-lg transition-colors cursor-pointer"
                  title="Copy Image URL"
                >
                  {copiedId === item.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 text-stone-500 hover:text-[#315C3A] hover:bg-[#EAF5EC] rounded-lg transition-colors"
                  title="Open full size"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    if (confirm('Delete this image from gallery?')) {
                      deleteGalleryItem(item.id);
                    }
                  }}
                  className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                  title="Delete Image"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Image Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#DCEBDD] p-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#DCEBDD] mb-4">
              <h3 className="text-base font-bold text-[#202820]">
                Add Image to Media Library
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Photo (URL or Upload from Device) *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={newItem.url}
                    onChange={e => setNewItem({ ...newItem, url: e.target.value })}
                    placeholder="Paste image URL or upload below"
                    className="flex-1 px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                  />
                  <label className="px-3.5 py-2 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer border border-[#DCEBDD] transition-colors shrink-0">
                    <Upload className="w-3.5 h-3.5 text-[#6FAF7B]" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {newItem.url && (
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                  <img
                    src={newItem.url}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Title / Caption
                </label>
                <input
                  type="text"
                  value={newItem.title}
                  onChange={e => setNewItem({ ...newItem, title: e.target.value })}
                  placeholder="e.g. Victorian Hallway Painting"
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Category
                  </label>
                  <select
                    value={newItem.category}
                    onChange={e => setNewItem({ ...newItem, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-white focus:outline-none focus:border-[#6FAF7B]"
                  >
                    <option value="Interior">Interior</option>
                    <option value="Exterior">Exterior</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Residential">Residential</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Kitchen">Kitchen</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={newItem.tags}
                    onChange={e => setNewItem({ ...newItem, tags: e.target.value })}
                    placeholder="decorating, joinery"
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#315C3A] hover:bg-[#202820] text-white font-bold"
                >
                  Add to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
