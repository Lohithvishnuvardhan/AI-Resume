import React from 'react';
import { X, Download, Star, Crown, Eye, FileText, CreditCard as Edit3, Loader2, Check } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  image: string;
  category: 'modern' | 'classic' | 'creative' | 'executive';
  isPremium: boolean;
  rating: number;
  downloads: string;
  preview: string;
}

interface TemplatePreviewModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (templateId: string, colorScheme?: number) => void;
  resumeData: any;
}

const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({
  template,
  isOpen,
  onClose,
  onSelectTemplate,
  resumeData
}) => {
  const [selectedColorScheme, setSelectedColorScheme] = React.useState(0);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [isApplying, setIsApplying] = React.useState(false);

  if (!isOpen || !template) return null;

  const getTemplateStyles = (templateId: string, colorIndex: number = 0) => {
    const colorSchemes = getTemplateColorSchemes(templateId);
    const currentScheme = colorSchemes[colorIndex] || colorSchemes[0];
    
    switch (templateId) {
      case 'modern-executive':
        return {
          container: `bg-gradient-to-br ${currentScheme.bgGradient} border-l-4 ${currentScheme.border}`,
          header: currentScheme.header,
          accent: currentScheme.accent,
          skills: currentScheme.skills
        };
      case 'creative-designer':
        return {
          container: `bg-gradient-to-br ${currentScheme.bgGradient} border-l-4 ${currentScheme.border}`,
          header: currentScheme.header,
          accent: currentScheme.accent,
          skills: currentScheme.skills
        };
      case 'tech-minimal':
        return {
          container: `${currentScheme.bgGradient} border ${currentScheme.border}`,
          header: currentScheme.header,
          accent: currentScheme.accent,
          skills: currentScheme.skills
        };
      case 'classic-professional':
        return {
          container: `bg-gradient-to-br ${currentScheme.bgGradient} border-l-4 ${currentScheme.border}`,
          header: currentScheme.header,
          accent: currentScheme.accent,
          skills: currentScheme.skills
        };
      case 'executive-gold':
        return {
          container: `bg-gradient-to-br ${currentScheme.bgGradient} border-l-4 ${currentScheme.border}`,
          header: currentScheme.header,
          accent: currentScheme.accent,
          skills: currentScheme.skills
        };
      case 'startup-founder':
        return {
          container: `bg-gradient-to-br ${currentScheme.bgGradient} border-l-4 ${currentScheme.border}`,
          header: currentScheme.header,
          accent: currentScheme.accent,
          skills: currentScheme.skills
        };
      default:
        return {
          container: `${currentScheme.bgGradient} border ${currentScheme.border}`,
          header: currentScheme.header,
          accent: currentScheme.accent,
          skills: currentScheme.skills
        };
    }
  };

  const getTemplateColorSchemes = (templateId: string) => {
    switch (templateId) {
      case 'modern-executive':
        return [
          {
            bgGradient: 'from-blue-50 to-indigo-50',
            border: 'border-blue-500',
            header: 'text-blue-900',
            accent: 'text-blue-600',
            skills: 'bg-blue-100 text-blue-800',
            color: 'bg-blue-500'
          },
          {
            bgGradient: 'from-cyan-50 to-blue-50',
            border: 'border-cyan-500',
            header: 'text-cyan-900',
            accent: 'text-cyan-600',
            skills: 'bg-cyan-100 text-cyan-800',
            color: 'bg-cyan-500'
          },
          {
            bgGradient: 'from-indigo-50 to-purple-50',
            border: 'border-indigo-500',
            header: 'text-indigo-900',
            accent: 'text-indigo-600',
            skills: 'bg-indigo-100 text-indigo-800',
            color: 'bg-indigo-500'
          },
          {
            bgGradient: 'from-slate-50 to-gray-50',
            border: 'border-slate-600',
            header: 'text-slate-900',
            accent: 'text-slate-600',
            skills: 'bg-slate-100 text-slate-800',
            color: 'bg-slate-600'
          }
        ];
      case 'creative-designer':
        return [
          {
            bgGradient: 'from-teal-50 to-cyan-50',
            border: 'border-teal-500',
            header: 'text-teal-900',
            accent: 'text-teal-600',
            skills: 'bg-teal-100 text-teal-800',
            color: 'bg-teal-500'
          },
          {
            bgGradient: 'from-cyan-50 to-sky-50',
            border: 'border-cyan-500',
            header: 'text-cyan-900',
            accent: 'text-cyan-600',
            skills: 'bg-cyan-100 text-cyan-800',
            color: 'bg-cyan-500'
          },
          {
            bgGradient: 'from-emerald-50 to-teal-50',
            border: 'border-emerald-500',
            header: 'text-emerald-900',
            accent: 'text-emerald-600',
            skills: 'bg-emerald-100 text-emerald-800',
            color: 'bg-emerald-500'
          },
          {
            bgGradient: 'from-sky-50 to-blue-50',
            border: 'border-sky-500',
            header: 'text-sky-900',
            accent: 'text-sky-600',
            skills: 'bg-sky-100 text-sky-800',
            color: 'bg-sky-500'
          }
        ];
      case 'tech-minimal':
        return [
          {
            bgGradient: 'bg-white',
            border: 'border-gray-200',
            header: 'text-gray-900',
            accent: 'text-gray-600',
            skills: 'bg-gray-100 text-gray-800',
            color: 'bg-gray-800'
          },
          {
            bgGradient: 'bg-slate-50',
            border: 'border-slate-300',
            header: 'text-slate-900',
            accent: 'text-slate-600',
            skills: 'bg-slate-100 text-slate-800',
            color: 'bg-slate-600'
          },
          {
            bgGradient: 'bg-zinc-50',
            border: 'border-zinc-300',
            header: 'text-zinc-900',
            accent: 'text-zinc-600',
            skills: 'bg-zinc-100 text-zinc-800',
            color: 'bg-zinc-600'
          },
          {
            bgGradient: 'bg-stone-50',
            border: 'border-stone-300',
            header: 'text-stone-900',
            accent: 'text-stone-600',
            skills: 'bg-stone-100 text-stone-800',
            color: 'bg-stone-600'
          }
        ];
      case 'classic-professional':
        return [
          {
            bgGradient: 'from-gray-50 to-slate-50',
            border: 'border-gray-700',
            header: 'text-gray-900',
            accent: 'text-gray-700',
            skills: 'bg-gray-100 text-gray-800',
            color: 'bg-gray-700'
          },
          {
            bgGradient: 'from-blue-50 to-slate-50',
            border: 'border-blue-700',
            header: 'text-blue-900',
            accent: 'text-blue-700',
            skills: 'bg-blue-100 text-blue-800',
            color: 'bg-blue-700'
          },
          {
            bgGradient: 'from-emerald-50 to-slate-50',
            border: 'border-emerald-700',
            header: 'text-emerald-900',
            accent: 'text-emerald-700',
            skills: 'bg-emerald-100 text-emerald-800',
            color: 'bg-emerald-700'
          },
          {
            bgGradient: 'from-red-50 to-slate-50',
            border: 'border-red-700',
            header: 'text-red-900',
            accent: 'text-red-700',
            skills: 'bg-red-100 text-red-800',
            color: 'bg-red-700'
          }
        ];
      case 'executive-gold':
        return [
          {
            bgGradient: 'from-yellow-50 to-amber-50',
            border: 'border-yellow-600',
            header: 'text-yellow-900',
            accent: 'text-yellow-700',
            skills: 'bg-yellow-100 text-yellow-800',
            color: 'bg-yellow-600'
          },
          {
            bgGradient: 'from-amber-50 to-orange-50',
            border: 'border-amber-600',
            header: 'text-amber-900',
            accent: 'text-amber-700',
            skills: 'bg-amber-100 text-amber-800',
            color: 'bg-amber-600'
          },
          {
            bgGradient: 'from-orange-50 to-red-50',
            border: 'border-orange-600',
            header: 'text-orange-900',
            accent: 'text-orange-700',
            skills: 'bg-orange-100 text-orange-800',
            color: 'bg-orange-600'
          },
          {
            bgGradient: 'from-rose-50 to-pink-50',
            border: 'border-rose-600',
            header: 'text-rose-900',
            accent: 'text-rose-700',
            skills: 'bg-rose-100 text-rose-800',
            color: 'bg-rose-600'
          }
        ];
      case 'startup-founder':
        return [
          {
            bgGradient: 'from-green-50 to-emerald-50',
            border: 'border-green-500',
            header: 'text-green-900',
            accent: 'text-green-600',
            skills: 'bg-green-100 text-green-800',
            color: 'bg-green-500'
          },
          {
            bgGradient: 'from-emerald-50 to-teal-50',
            border: 'border-emerald-500',
            header: 'text-emerald-900',
            accent: 'text-emerald-600',
            skills: 'bg-emerald-100 text-emerald-800',
            color: 'bg-emerald-500'
          },
          {
            bgGradient: 'from-teal-50 to-cyan-50',
            border: 'border-teal-500',
            header: 'text-teal-900',
            accent: 'text-teal-600',
            skills: 'bg-teal-100 text-teal-800',
            color: 'bg-teal-500'
          },
          {
            bgGradient: 'from-lime-50 to-green-50',
            border: 'border-lime-500',
            header: 'text-lime-900',
            accent: 'text-lime-600',
            skills: 'bg-lime-100 text-lime-800',
            color: 'bg-lime-500'
          }
        ];
      default:
        return [
          {
            bgGradient: 'bg-white',
            border: 'border-gray-200',
            header: 'text-gray-900',
            accent: 'text-gray-600',
            skills: 'bg-gray-100 text-gray-800',
            color: 'bg-blue-500'
          }
        ];
    }
  };

  const styles = getTemplateStyles(template.id, selectedColorScheme);

  const handleSelectTemplate = () => {
    setIsApplying(true);
    setTimeout(() => {
      onSelectTemplate(template.id, selectedColorScheme);
      onClose();
      setIsApplying(false);
    }, 300);
  };

  const handleDownloadSample = async () => {
    setIsDownloading(true);
    try {
      const element = document.querySelector('.template-preview-content') as HTMLElement;
      if (!element) {
        throw new Error('Template preview not found');
      }

      const html2pdf = (await import('html2pdf.js')).default;

      const opt = {
        margin: 0.5,
        filename: `${template.name}-Sample.pdf`,
        image: { type: 'jpeg' as 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating sample PDF:', error);
      alert('Unable to generate sample PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleUseTemplate = () => {
    onClose();
  };

  const getApplyButtonStyle = (templateId: string) => {
    switch (templateId) {
      case 'modern-executive':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700';
      case 'creative-designer':
        return 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600';
      case 'tech-minimal':
        return 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900';
      case 'classic-professional':
        return 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800';
      case 'executive-gold':
        return 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white hover:from-yellow-600 hover:to-amber-700';
      case 'startup-founder':
        return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700';
      default:
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700';
    }
  };

  const getTemplateRecommendations = (templateId: string) => {
    switch (templateId) {
      case 'modern-executive':
        return ['Senior Management Roles', 'Executive Positions', 'Corporate Leadership', 'C-Suite Applications'];
      case 'creative-designer':
        return ['Design Professionals', 'Creative Industries', 'Marketing Roles', 'Artistic Positions'];
      case 'tech-minimal':
        return ['Software Engineers', 'Tech Startups', 'IT Professionals', 'Data Scientists'];
      case 'classic-professional':
        return ['Traditional Industries', 'Government Jobs', 'Academic Positions', 'Healthcare Roles'];
      case 'executive-gold':
        return ['Fortune 500 Companies', 'Investment Banking', 'Consulting Firms', 'Luxury Brands'];
      case 'startup-founder':
        return ['Entrepreneurship', 'Startup Roles', 'Innovation Teams', 'Growth Positions'];
      default:
        return ['General Professional Use', 'Multiple Industries', 'Career Transitions'];
    }
  };


  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full my-8 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-black p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl font-bold">{template.name}</h2>
                  {template.isPremium && (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-0.5 rounded-full text-xs font-semibold">
                      <Crown className="w-3 h-3" />
                      <span>PRO</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-300 text-sm mt-0.5">{template.preview}</p>
                <div className="flex items-center space-x-3 mt-1 text-xs">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span>{template.rating}</span>
                  </div>
                  <span>{template.downloads} downloads</span>
                  <span className="px-2 py-0.5 bg-white/10 rounded-full capitalize">
                    {template.category}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex max-h-[70vh]">
          {/* Template Preview */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 max-h-full">
            {template.id === 'creative-designer' ? (
              <div className={`template-preview-content flex gap-0 bg-white rounded-xl mx-auto transform transition-all duration-300 text-sm max-w-4xl`}>
                {/* Sidebar */}
                <div className={`w-64 bg-gradient-to-br ${styles.container.includes('from-') ? styles.container.split(' ').find(c => c.includes('from-')) + ' ' + styles.container.split(' ').find(c => c.includes('to-')) : 'from-teal-50 to-cyan-50'} p-4 flex-shrink-0`}>
                  <div className={`bg-white/50 backdrop-blur-sm rounded-lg p-3 mb-4 border ${styles.container.includes('border-') ? styles.container.split(' ').find(c => c.includes('border-')) : 'border-teal-500'}`}>
                    <h3 className={`font-bold ${styles.header} mb-2 text-xs uppercase`}>CONTACT</h3>
                    <div className="space-y-1.5 text-xs text-gray-700">
                      <div className="break-all">{resumeData?.personalInfo?.email || 'emma.chen@design.com'}</div>
                      <div>{resumeData?.personalInfo?.phone || '(555) 345-6789'}</div>
                      <div>{resumeData?.personalInfo?.location || 'Los Angeles, CA'}</div>
                    </div>
                  </div>
                  <div className={`bg-white/50 backdrop-blur-sm rounded-lg p-3 mb-4 border ${styles.container.includes('border-') ? styles.container.split(' ').find(c => c.includes('border-')) : 'border-teal-500'}`}>
                    <h3 className={`font-bold ${styles.header} mb-2 text-xs uppercase`}>SKILLS</h3>
                    <div className="space-y-1">
                      {(resumeData?.skills || ['Figma', 'Adobe XD', 'Sketch', 'Design Tools', 'Prototyping', 'Branding']).map((skill: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                          <span className="text-xs text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`bg-white/50 backdrop-blur-sm rounded-lg p-3 border ${styles.container.includes('border-') ? styles.container.split(' ').find(c => c.includes('border-')) : 'border-teal-500'}`}>
                    <h3 className={`font-bold ${styles.header} mb-2 text-xs uppercase`}>EDUCATION</h3>
                    {(resumeData?.education || [{school: 'Art Institute', degree: 'BFA Graphic Design', year: '2014 - 2018'}]).map((edu: any, index: number) => (
                      <div key={index} className="mb-2">
                        <h4 className={`font-semibold text-xs ${styles.header}`}>{edu.degree}</h4>
                        <p className="text-xs text-gray-600">{edu.school}</p>
                        <p className="text-xs text-gray-500">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-white">
                  <h1 className={`text-3xl font-bold ${styles.header} mb-1`}>
                    {resumeData?.personalInfo?.fullName || 'Emma Chen'}
                  </h1>
                  <p className={`text-lg ${styles.accent} mb-4 font-medium`}>
                    {resumeData?.personalInfo?.title || 'Creative Director & UX Designer'}
                  </p>
                  {(resumeData?.personalInfo?.summary || 'Award-winning creative professional specializing in user-centered design and brand storytelling. Passionate about crafting beautiful, intuitive experiences.') && (
                    <p className="text-gray-700 text-xs leading-relaxed mb-4">
                      {resumeData?.personalInfo?.summary || 'Award-winning creative professional specializing in user-centered design and brand storytelling. Passionate about crafting beautiful, intuitive experiences.'}
                    </p>
                  )}

                  <h2 className={`text-base font-bold ${styles.header} mb-3 uppercase tracking-wide border-b-2 ${styles.container.includes('border-') ? styles.container.split(' ').find(c => c.includes('border-'))?.replace('border-l-4', 'border-b-2') : 'border-teal-500'} pb-1`}>EXPERIENCE</h2>
                  <div className="space-y-3">
                    {(resumeData?.experience || [
                      {company: 'Pixel Perfect Studios', position: 'Creative Director', duration: '2021 - Present', description: 'Lead creative team of designers and developers'},
                      {company: 'Digital Dreams Agency', position: 'Senior UX Designer', duration: '2018 - 2021', description: 'Redesigned e-commerce platform, boosting conversions 192%'}
                    ]).map((exp: any, index: number) => (
                      <div key={index} className={`pl-3 border-l-2 ${styles.container.includes('border-') ? styles.container.split(' ').find(c => c.includes('border-'))?.replace('border-l-4', 'border-l-2') : 'border-teal-500'}`}>
                        <h3 className={`font-bold text-sm ${styles.header}`}>{exp.position}</h3>
                        <p className={`${styles.accent} text-xs mb-1`}>{exp.company} | {exp.duration}</p>
                        <p className="text-gray-700 text-xs">{exp.description}</p>
                      </div>
                    ))}
                  </div>

                  <h2 className={`text-base font-bold ${styles.header} mb-3 mt-4 uppercase tracking-wide border-b-2 ${styles.container.includes('border-') ? styles.container.split(' ').find(c => c.includes('border-'))?.replace('border-l-4', 'border-b-2') : 'border-teal-500'} pb-1`}>FEATURED PROJECTS</h2>
                  <div className="space-y-2">
                    {[
                      {title: 'HealthTech Mobile App', description: 'iOS and Android design for wellness app with 120K+ downloads'},
                      {title: 'E-commerce Redesign', description: 'Complete UX overhaul resulting in 85% increase in user engagement'}
                    ].map((project, index) => (
                      <div key={index} className={`p-3 rounded-lg border-l-4 ${styles.container.includes('border-') ? styles.container.split(' ').find(c => c.includes('border-')) : 'border-teal-500'} bg-gray-50`}>
                        <h4 className={`font-bold text-xs ${styles.header}`}>{project.title}</h4>
                        <p className="text-gray-700 text-xs mt-1">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
            <div className={`template-preview-content p-6 rounded-xl ${styles.container} max-w-2xl mx-auto transform transition-all duration-300 text-sm`}>
              {/* Header */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h1 className={`text-2xl font-bold ${styles.header} mb-1.5`}>
                  {resumeData?.personalInfo?.fullName || 'Alex Johnson'}
                </h1>
                <p className={`text-lg ${styles.accent} mb-3`}>
                  {resumeData?.personalInfo?.title || 'Senior Software Engineer'}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                  <span>{resumeData?.personalInfo?.email || 'alex.johnson@email.com'}</span>
                  <span>{resumeData?.personalInfo?.phone || '+1 (555) 123-4567'}</span>
                  <span>{resumeData?.personalInfo?.location || 'San Francisco, CA'}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-4">
                <h2 className={`text-base font-semibold ${styles.header} mb-2`}>
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {resumeData?.personalInfo?.summary || 
                   'Innovative software engineer with 5+ years of experience building scalable web applications and leading cross-functional teams. Proven track record of delivering high-quality solutions that drive business growth and improve user experience.'}
                </p>
              </div>

              {/* Experience */}
              <div className="mb-4">
                <h2 className={`text-base font-semibold ${styles.header} mb-3`}>
                  Experience
                </h2>
                <div className="space-y-3">
                  {(resumeData?.experience || [
                    {
                      company: 'TechCorp Inc.',
                      position: 'Senior Software Engineer',
                      duration: '2022 - Present',
                      description: 'Led development of microservices architecture serving 1M+ users, resulting in 40% performance improvement.'
                    },
                    {
                      company: 'StartupXYZ',
                      position: 'Full Stack Developer',
                      duration: '2020 - 2022',
                      description: 'Built and maintained React/Node.js applications, collaborated with design team on user experience improvements.'
                    }
                  ]).map((exp: any, index: number) => (
                    <div key={index} className="border-l-2 border-gray-300 pl-3">
                      <h3 className={`font-semibold text-sm ${styles.header}`}>{exp.position}</h3>
                      <p className={`${styles.accent} mb-1.5 text-xs`}>{exp.company} • {exp.duration}</p>
                      <p className="text-gray-700 text-xs leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-4">
                <h2 className={`text-base font-semibold ${styles.header} mb-2`}>
                  Education
                </h2>
                <div className="space-y-1.5">
                  {(resumeData?.education || [
                    {
                      school: 'Stanford University',
                      degree: 'BS Computer Science',
                      year: '2020'
                    }
                  ]).map((edu: any, index: number) => (
                    <div key={index}>
                      <h3 className={`font-semibold text-sm ${styles.header}`}>{edu.degree}</h3>
                      <p className={`${styles.accent} text-xs`}>{edu.school} • {edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className={`text-base font-semibold ${styles.header} mb-2`}>
                  Skills
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {(resumeData?.skills || ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'Git']).map((skill: string, index: number) => (
                    <span
                      key={index}
                      className={`px-2.5 py-1 ${styles.skills} rounded-full text-xs font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            )}
          </div>

          {/* Actions Panel */}
          <div className="w-72 p-4 bg-white border-l border-gray-200 overflow-y-auto max-h-full">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Template Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium capitalize">{template.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{template.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Downloads:</span>
                    <span className="font-medium">{template.downloads}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      template.isPremium 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {template.isPremium ? 'Premium' : 'Free'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Template Features</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>ATS-Optimized Format</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Professional Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Easy Customization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Multiple Export Formats</span>
                  </li>
                  {template.isPremium && (
                    <>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <span>Premium Color Schemes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <span>Advanced Layouts</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleSelectTemplate}
                  disabled={isApplying || isDownloading}
                  className={`w-full px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center ${getApplyButtonStyle(template.id)} disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95`}
                >
                  {isApplying ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Applying...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Apply Template
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownloadSample}
                  disabled={isApplying || isDownloading}
                  className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 mr-2" />
                      Download Sample
                    </>
                  )}
                </button>

                <button
                  onClick={handleUseTemplate}
                  disabled={isDownloading}
                  className="w-full border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5 mr-2" />
                  Use This Template
                </button>
              </div>

              {template.isPremium && (
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Crown className="w-4 h-4 text-yellow-600" />
                    <span className="font-semibold text-yellow-800 text-sm">Premium Template</span>
                  </div>
                  <p className="text-xs text-yellow-700">
                    Unlock this premium template and 50+ others with ResumeAI Pro
                  </p>
                </div>
              )}

              {/* Additional Template Info */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Best For</h4>
                <div className="space-y-1.5 text-xs text-gray-600">
                  {getTemplateRecommendations(template.id).map((rec, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Scheme Preview */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Color Scheme</h4>
                <div className="flex space-x-2">
                  {getTemplateColorSchemes(template.id).map((scheme, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedColorScheme(index)}
                      className={`w-8 h-8 rounded-full ${scheme.color} cursor-pointer transition-all duration-200 hover:scale-110 ${
                        selectedColorScheme === index
                          ? 'ring-3 ring-offset-2 ring-gray-400 scale-110'
                          : 'hover:ring-2 hover:ring-offset-1 hover:ring-gray-300'
                      }`}
                      title={`Color Scheme ${index + 1}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1.5">
                  Click to preview different color schemes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewModal;