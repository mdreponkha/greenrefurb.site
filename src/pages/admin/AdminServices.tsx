import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ServiceItem } from '../../types';
import {
  Plus,
  Edit2,
  Trash2,
  Check,
  X,
  Eye,
  EyeOff,
  Image,
  Sparkles,
  Search,
  Upload
} from 'lucide-react';

export const AdminServices: React.FC = () => {
  const { services, addService, updateService, deleteService } = useApp();
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [search, setSearch] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setEditingService(prev => prev ? { ...prev, image: reader.result as string } : null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const emptyService: ServiceItem = {
    id: `srv-${Date.now()}`,
    slug: 'new-service',
    title: '',
    shortDescription: '',
    fullDescription: '',
    icon: 'brush',
    category: 'painting',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    features: ['Professional preparation', 'Dustless sanding', 'Clean handover'],
    benefits: ['Long lasting finish', 'Fixed price estimate', 'Experienced tradespeople'],
    whatWeProvide: [
      'Initial site consultation & quotation',
      'Surface preparation & floor protection',
      'Application of high-grade trade coatings',
      'Final joint inspection'
    ],
    faqs: [
      {
        question: 'How long does this work usually take?',
        answer: 'Timelines vary based on property size, typically between 2 to 5 days.'
      }
    ],
    galleryImages: [],
    published: true,
    order: services.length + 1
  };

  const handleCreateNew = () => {
    setEditingService({ ...emptyService, id: `srv-${Date.now()}` });
    setIsNew(true);
  };

  const handleEdit = (service: ServiceItem) => {
    setEditingService({ ...service });
    setIsNew(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;

    if (isNew) {
      addService(editingService);
    } else {
      updateService(editingService);
    }
    setEditingService(null);
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteService(id);
    }
  };

  const togglePublish = (service: ServiceItem) => {
    updateService({ ...service, published: !service.published });
  };

  const filtered = services.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.slug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#202820]">Services Management</h2>
          <p className="text-xs text-stone-500">
            Create, update, reorder or publish the 14 trade & refurbishment services
          </p>
        </div>
        <button
          onClick={handleCreateNew}
          className="px-4 py-2.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Search Filter */}
      <div className="bg-white p-3.5 rounded-2xl border border-[#DCEBDD] flex items-center gap-2">
        <Search className="w-4 h-4 text-stone-400" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Filter services by title or slug..."
          className="w-full text-xs text-[#202820] focus:outline-none"
        />
      </div>

      {/* Table / List */}
      <div className="bg-white rounded-3xl border border-[#DCEBDD] overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F8FAF8] text-stone-500 font-semibold border-b border-[#DCEBDD]">
              <tr>
                <th className="px-6 py-3.5">Image & Title</th>
                <th className="px-6 py-3.5">URL Slug</th>
                <th className="px-6 py-3.5">Category</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map(service => (
                <tr key={service.id} className="hover:bg-[#F8FAF8]/80 transition-colors">
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-12 h-10 object-cover rounded-lg border border-stone-200"
                      />
                      <div>
                        <div className="font-bold text-[#202820]">{service.title}</div>
                        <div className="text-[11px] text-stone-400 line-clamp-1 max-w-xs">
                          {service.shortDescription}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 font-mono text-[11px] text-stone-600">
                    /services/{service.slug}
                  </td>
                  <td className="px-6 py-3.5 capitalize text-stone-600">
                    {service.category}
                  </td>
                  <td className="px-6 py-3.5">
                    <button
                      onClick={() => togglePublish(service)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-colors ${
                        service.published
                          ? 'bg-[#EAF5EC] text-[#315C3A] hover:bg-emerald-100'
                          : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                      }`}
                    >
                      {service.published ? (
                        <>
                          <Eye className="w-3 h-3 text-[#6FAF7B]" /> Published
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3 h-3 text-stone-400" /> Draft
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(service)}
                        className="p-1.5 text-stone-600 hover:text-[#315C3A] hover:bg-[#EAF5EC] rounded-lg transition-colors cursor-pointer"
                        title="Edit Service"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(service.id, service.title)}
                        className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete Service"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit / Create Modal */}
      {editingService && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#DCEBDD] p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#DCEBDD] mb-6">
              <h3 className="text-lg font-bold text-[#202820]">
                {isNew ? 'Create New Service' : `Edit: ${editingService.title}`}
              </h3>
              <button
                onClick={() => setEditingService(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Service Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingService.title}
                    onChange={e => {
                      const val = e.target.value;
                      setEditingService(prev =>
                        prev
                          ? {
                              ...prev,
                              title: val,
                              slug: isNew
                                ? val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                                : prev.slug
                            }
                          : null
                      );
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingService.slug}
                    onChange={e =>
                      setEditingService(prev =>
                        prev ? { ...prev, slug: e.target.value } : null
                      )
                    }
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-mono focus:outline-none focus:border-[#6FAF7B]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Cover Photo (URL or Device Upload)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Image URL or upload below"
                    value={editingService.image}
                    onChange={e =>
                      setEditingService(prev =>
                        prev ? { ...prev, image: e.target.value } : null
                      )
                    }
                    className="flex-1 px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                  />
                  <label className="px-3.5 py-2 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer border border-[#DCEBDD] transition-colors shrink-0">
                    <Upload className="w-3.5 h-3.5 text-[#6FAF7B]" />
                    <span>Upload Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                {editingService.image && (
                  <div className="mt-2 aspect-video max-h-32 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                    <img
                      src={editingService.image}
                      alt="Service Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Short Summary (for homepage & cards)
                </label>
                <textarea
                  rows={2}
                  value={editingService.shortDescription}
                  onChange={e =>
                    setEditingService(prev =>
                      prev ? { ...prev, shortDescription: e.target.value } : null
                    )
                  }
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Full Service Description
                </label>
                <textarea
                  rows={4}
                  value={editingService.fullDescription}
                  onChange={e =>
                    setEditingService(prev =>
                      prev ? { ...prev, fullDescription: e.target.value } : null
                    )
                  }
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Category
                  </label>
                  <select
                    value={editingService.category}
                    onChange={e =>
                      setEditingService(prev =>
                        prev ? { ...prev, category: e.target.value } : null
                      )
                    }
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-white focus:outline-none focus:border-[#6FAF7B]"
                  >
                    <option value="painting">Painting & Decorating</option>
                    <option value="refurbishment">Refurbishment</option>
                    <option value="carpentry">Carpentry & Joinery</option>
                    <option value="trades">Trades (Plumbing / Electrical)</option>
                    <option value="interiors">Interiors & Kitchens</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Display Icon
                  </label>
                  <select
                    value={editingService.icon}
                    onChange={e =>
                      setEditingService(prev =>
                        prev ? { ...prev, icon: e.target.value } : null
                      )
                    }
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-white focus:outline-none focus:border-[#6FAF7B]"
                  >
                    <option value="brush">Brush (Painting)</option>
                    <option value="roller">Paint Roller</option>
                    <option value="hammer">Hammer (Carpentry)</option>
                    <option value="home">Home (Refurbishment)</option>
                    <option value="building">Building (Commercial)</option>
                    <option value="shield">Shield (Specialist)</option>
                    <option value="utensils">Kitchen (Joinery)</option>
                    <option value="sparkles">Sparkles (Interior)</option>
                    <option value="layers">Layers (Flooring/Plastering)</option>
                  </select>
                </div>
              </div>

              {/* Features (One per line) */}
              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Key Features (One feature per line)
                </label>
                <textarea
                  rows={3}
                  value={editingService.features.join('\n')}
                  onChange={e =>
                    setEditingService(prev =>
                      prev
                        ? {
                            ...prev,
                            features: e.target.value.split('\n').filter(Boolean)
                          }
                        : null
                    )
                  }
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>

              {/* Published Toggle */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="srv-published"
                  checked={editingService.published}
                  onChange={e =>
                    setEditingService(prev =>
                      prev ? { ...prev, published: e.target.checked } : null
                    )
                  }
                  className="rounded text-[#315C3A] focus:ring-[#6FAF7B] h-4 w-4"
                />
                <label htmlFor="srv-published" className="font-semibold text-stone-700">
                  Visible & Published on Public Site
                </label>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#315C3A] hover:bg-[#202820] text-white font-bold"
                >
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
