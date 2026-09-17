import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ProjectItem } from '../../types';
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Star,
  Image,
  X,
  Search,
  MapPin,
  Calendar,
  Upload
} from 'lucide-react';

export const AdminProjects: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject } = useApp();
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [search, setSearch] = useState('');

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setEditingProject(prev => prev ? { ...prev, coverImage: reader.result as string } : null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const emptyProject: ProjectItem = {
    id: `proj-${Date.now()}`,
    slug: 'new-project',
    title: '',
    category: 'Residential',
    location: 'London, UK',
    completionDate: '2026',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: '',
    scope: ['Full interior decorating', 'Custom joinery installation'],
    featured: false,
    published: true,
    order: projects.length + 1
  };

  const handleCreateNew = () => {
    setEditingProject({ ...emptyProject, id: `proj-${Date.now()}` });
    setIsNew(true);
  };

  const handleEdit = (project: ProjectItem) => {
    setEditingProject({ ...project });
    setIsNew(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    if (isNew) {
      addProject(editingProject);
    } else {
      updateProject(editingProject);
    }
    setEditingProject(null);
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete project "${title}"?`)) {
      deleteProject(id);
    }
  };

  const togglePublish = (project: ProjectItem) => {
    updateProject({ ...project, published: !project.published });
  };

  const toggleFeatured = (project: ProjectItem) => {
    updateProject({ ...project, featured: !project.featured });
  };

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#202820]">Projects & Portfolio Management</h2>
          <p className="text-xs text-stone-500">
            Showcase residential refurbishments, commercial projects, bespoke joinery, and decorator case studies
          </p>
        </div>
        <button
          onClick={handleCreateNew}
          className="px-4 py-2.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Project</span>
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-3.5 rounded-2xl border border-[#DCEBDD] flex items-center gap-2">
        <Search className="w-4 h-4 text-stone-400" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Filter projects by title, category, or location..."
          className="w-full text-xs text-[#202820] focus:outline-none"
        />
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-3xl border border-[#DCEBDD] overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F8FAF8] text-stone-500 font-semibold border-b border-[#DCEBDD]">
              <tr>
                <th className="px-6 py-3.5">Cover & Title</th>
                <th className="px-6 py-3.5">Category</th>
                <th className="px-6 py-3.5">Location & Date</th>
                <th className="px-6 py-3.5">Featured</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map(proj => (
                <tr key={proj.id} className="hover:bg-[#F8FAF8]/80 transition-colors">
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <img
                        src={proj.coverImage}
                        alt={proj.title}
                        className="w-14 h-10 object-cover rounded-lg border border-stone-200"
                      />
                      <div>
                        <div className="font-bold text-[#202820]">{proj.title}</div>
                        <div className="text-[11px] text-stone-400 line-clamp-1 max-w-xs">
                          {proj.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3.5">
                    <span className="px-2.5 py-1 bg-stone-100 text-stone-700 rounded-md font-medium text-[11px]">
                      {proj.category}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-stone-600">
                    <div className="flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-[#6FAF7B]" />
                      <span>{proj.location}</span>
                    </div>
                    {proj.completionDate && (
                      <div className="flex items-center gap-1 text-[10px] text-stone-400 mt-0.5">
                        <Calendar className="w-2.5 h-2.5" />
                        <span>{proj.completionDate}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-3.5">
                    <button
                      onClick={() => toggleFeatured(proj)}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        proj.featured
                          ? 'text-amber-500 bg-amber-50'
                          : 'text-stone-300 hover:text-stone-400'
                      }`}
                      title={proj.featured ? 'Featured on homepage' : 'Mark as featured'}
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </button>
                  </td>
                  <td className="px-6 py-3.5">
                    <button
                      onClick={() => togglePublish(proj)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-colors ${
                        proj.published
                          ? 'bg-[#EAF5EC] text-[#315C3A] hover:bg-emerald-100'
                          : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                      }`}
                    >
                      {proj.published ? (
                        <>
                          <Eye className="w-3 h-3 text-[#6FAF7B]" /> Live
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3 h-3 text-stone-400" /> Hidden
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(proj)}
                        className="p-1.5 text-stone-600 hover:text-[#315C3A] hover:bg-[#EAF5EC] rounded-lg transition-colors cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(proj.id, proj.title)}
                        className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete Project"
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
      {editingProject && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#DCEBDD] p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#DCEBDD] mb-6">
              <h3 className="text-lg font-bold text-[#202820]">
                {isNew ? 'Create New Project' : `Edit: ${editingProject.title}`}
              </h3>
              <button
                onClick={() => setEditingProject(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingProject.title}
                    onChange={e =>
                      setEditingProject(prev =>
                        prev ? { ...prev, title: e.target.value } : null
                      )
                    }
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Category *
                  </label>
                  <select
                    value={editingProject.category}
                    onChange={e =>
                      setEditingProject(prev =>
                        prev ? { ...prev, category: e.target.value } : null
                      )
                    }
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-white focus:outline-none focus:border-[#6FAF7B]"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Interior">Interior</option>
                    <option value="Exterior">Exterior</option>
                    <option value="Refurbishment">Refurbishment</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={editingProject.location}
                    onChange={e =>
                      setEditingProject(prev =>
                        prev ? { ...prev, location: e.target.value } : null
                      )
                    }
                    placeholder="e.g. Croydon, South London"
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#202820] mb-1">
                    Completion Date / Year
                  </label>
                  <input
                    type="text"
                    value={editingProject.completionDate}
                    onChange={e =>
                      setEditingProject(prev =>
                        prev ? { ...prev, completionDate: e.target.value } : null
                      )
                    }
                    placeholder="e.g. 2026 or Spring 2026"
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Primary Cover Photo (URL or Device Upload) *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Image URL or upload below"
                    value={editingProject.coverImage}
                    onChange={e =>
                      setEditingProject(prev =>
                        prev ? { ...prev, coverImage: e.target.value } : null
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
                      onChange={handleCoverUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                {editingProject.coverImage && (
                  <div className="mt-2 aspect-video max-h-32 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                    <img
                      src={editingProject.coverImage}
                      alt="Cover Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Additional Gallery Images (One URL per line)
                </label>
                <textarea
                  rows={3}
                  value={editingProject.images.join('\n')}
                  onChange={e =>
                    setEditingProject(prev =>
                      prev
                        ? {
                            ...prev,
                            images: e.target.value.split('\n').filter(Boolean)
                          }
                        : null
                    )
                  }
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Project Description
                </label>
                <textarea
                  rows={3}
                  value={editingProject.description}
                  onChange={e =>
                    setEditingProject(prev =>
                      prev ? { ...prev, description: e.target.value } : null
                    )
                  }
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingProject.featured}
                    onChange={e =>
                      setEditingProject(prev =>
                        prev ? { ...prev, featured: e.target.checked } : null
                      )
                    }
                    className="rounded text-[#315C3A] focus:ring-[#6FAF7B] h-4 w-4"
                  />
                  <span className="font-semibold text-stone-700">Feature on Homepage</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingProject.published}
                    onChange={e =>
                      setEditingProject(prev =>
                        prev ? { ...prev, published: e.target.checked } : null
                      )
                    }
                    className="rounded text-[#315C3A] focus:ring-[#6FAF7B] h-4 w-4"
                  />
                  <span className="font-semibold text-stone-700">Published Live</span>
                </label>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#315C3A] hover:bg-[#202820] text-white font-bold"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
