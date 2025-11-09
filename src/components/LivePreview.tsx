import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Star, ExternalLink, Globe, Linkedin, Github, Trophy, CheckCircle, Code, Users, Wrench, Languages, FileText, Heart } from 'lucide-react';

interface SkillCategory {
  category: 'Technical' | 'Soft Skills' | 'Tools';
  name: string;
  proficiency?: 'Beginner' | 'Intermediate' | 'Expert';
}

interface Project {
  title: string;
  description: string;
  url?: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface Achievement {
  title: string;
  description: string;
}

interface Language {
  name: string;
  proficiency: string;
}

interface Reference {
  name: string;
  title: string;
  contact: string;
}

interface SocialLinks {
  linkedin?: string;
  github?: string;
  website?: string;
}

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    title: string;
    summary: string;
    photo?: string;
  };
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    year: string;
  }>;
  skills: string[];
  skillsCategories?: SkillCategory[];
  projects?: Project[];
  certifications?: Certification[];
  achievements?: Achievement[];
  languages?: Language[];
  hobbies?: string[];
  references?: Reference[];
  socialLinks?: SocialLinks;
  profession?: string;
  rawText?: string;
}

interface LivePreviewProps {
  resumeData: ResumeData;
  template: string;
  templateColorScheme?: number;
  atsScore: number;
  healthScore: number;
  exactMode?: boolean;
  onToggleExactMode?: () => void;
}

const LivePreview: React.FC<LivePreviewProps> = ({ resumeData, template, templateColorScheme = 0, atsScore, healthScore, exactMode = false, onToggleExactMode }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    setIsVisible(true);
  }, [resumeData]);
  const getTemplateColorSchemes = (templateId: string) => {
    switch (templateId) {
      case 'modern-executive':
        return [
          {
            bgGradient: 'from-blue-50 via-indigo-50 to-blue-100',
            border: 'border-l-4 border-blue-500',
            header: 'text-blue-900',
            accent: 'text-blue-700',
            skills: 'bg-blue-100 text-blue-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-cyan-50 via-blue-50 to-cyan-100',
            border: 'border-l-4 border-cyan-500',
            header: 'text-cyan-900',
            accent: 'text-cyan-700',
            skills: 'bg-cyan-100 text-cyan-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-indigo-50 via-purple-50 to-indigo-100',
            border: 'border-l-4 border-indigo-500',
            header: 'text-indigo-900',
            accent: 'text-indigo-700',
            skills: 'bg-indigo-100 text-indigo-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-slate-100 via-gray-50 to-slate-100',
            border: 'border-l-4 border-slate-600',
            header: 'text-slate-900',
            accent: 'text-slate-700',
            skills: 'bg-slate-100 text-slate-800',
            bodyText: 'text-gray-700'
          }
        ];
      case 'creative-designer':
        return [
          {
            bgGradient: 'from-teal-50 via-cyan-50 to-teal-100',
            border: 'border-l-4 border-teal-500',
            header: 'text-teal-900',
            accent: 'text-teal-700',
            skills: 'bg-teal-100 text-teal-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-cyan-50 via-sky-50 to-cyan-100',
            border: 'border-l-4 border-cyan-500',
            header: 'text-cyan-900',
            accent: 'text-cyan-700',
            skills: 'bg-cyan-100 text-cyan-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-emerald-50 via-teal-50 to-emerald-100',
            border: 'border-l-4 border-emerald-500',
            header: 'text-emerald-900',
            accent: 'text-emerald-700',
            skills: 'bg-emerald-100 text-emerald-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-sky-50 via-blue-50 to-sky-100',
            border: 'border-l-4 border-sky-500',
            header: 'text-sky-900',
            accent: 'text-sky-700',
            skills: 'bg-sky-100 text-sky-800',
            bodyText: 'text-gray-700'
          }
        ];
      case 'tech-minimal':
        return [
          {
            bgGradient: 'from-white to-gray-50',
            border: 'border border-gray-200',
            header: 'text-gray-900',
            accent: 'text-gray-600',
            skills: 'bg-gray-100 text-gray-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-slate-50 to-slate-100',
            border: 'border border-slate-300',
            header: 'text-slate-900',
            accent: 'text-slate-700',
            skills: 'bg-slate-100 text-slate-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-zinc-50 to-zinc-100',
            border: 'border border-zinc-300',
            header: 'text-zinc-900',
            accent: 'text-zinc-700',
            skills: 'bg-zinc-100 text-zinc-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-stone-50 to-stone-100',
            border: 'border border-stone-300',
            header: 'text-stone-900',
            accent: 'text-stone-700',
            skills: 'bg-stone-100 text-stone-800',
            bodyText: 'text-gray-700'
          }
        ];
      case 'classic-professional':
        return [
          {
            bgGradient: 'from-gray-50 via-slate-50 to-gray-100',
            border: 'border-l-4 border-gray-700',
            header: 'text-gray-900',
            accent: 'text-gray-700',
            skills: 'bg-gray-100 text-gray-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-blue-50 via-slate-50 to-blue-100',
            border: 'border-l-4 border-blue-700',
            header: 'text-blue-900',
            accent: 'text-blue-700',
            skills: 'bg-blue-100 text-blue-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-emerald-50 via-teal-50 to-emerald-100',
            border: 'border-l-4 border-emerald-700',
            header: 'text-emerald-900',
            accent: 'text-emerald-700',
            skills: 'bg-emerald-100 text-emerald-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-red-50 via-rose-50 to-red-100',
            border: 'border-l-4 border-red-700',
            header: 'text-red-900',
            accent: 'text-red-700',
            skills: 'bg-red-100 text-red-800',
            bodyText: 'text-gray-700'
          }
        ];
      case 'executive-gold':
        return [
          {
            bgGradient: 'from-yellow-50 via-amber-50 to-yellow-100',
            border: 'border-l-4 border-yellow-600',
            header: 'text-yellow-900',
            accent: 'text-yellow-700',
            skills: 'bg-yellow-100 text-yellow-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-amber-50 via-orange-50 to-amber-100',
            border: 'border-l-4 border-amber-600',
            header: 'text-amber-900',
            accent: 'text-amber-700',
            skills: 'bg-amber-100 text-amber-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-orange-50 via-red-50 to-orange-100',
            border: 'border-l-4 border-orange-600',
            header: 'text-orange-900',
            accent: 'text-orange-700',
            skills: 'bg-orange-100 text-orange-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-rose-50 via-pink-50 to-rose-100',
            border: 'border-l-4 border-rose-600',
            header: 'text-rose-900',
            accent: 'text-rose-700',
            skills: 'bg-rose-100 text-rose-800',
            bodyText: 'text-gray-700'
          }
        ];
      case 'startup-founder':
        return [
          {
            bgGradient: 'from-green-50 via-emerald-50 to-green-100',
            border: 'border-l-4 border-green-500',
            header: 'text-green-900',
            accent: 'text-green-700',
            skills: 'bg-green-100 text-green-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-emerald-50 via-teal-50 to-emerald-100',
            border: 'border-l-4 border-emerald-500',
            header: 'text-emerald-900',
            accent: 'text-emerald-700',
            skills: 'bg-emerald-100 text-emerald-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-teal-50 via-cyan-50 to-teal-100',
            border: 'border-l-4 border-teal-500',
            header: 'text-teal-900',
            accent: 'text-teal-700',
            skills: 'bg-teal-100 text-teal-800',
            bodyText: 'text-gray-700'
          },
          {
            bgGradient: 'from-lime-50 via-green-50 to-lime-100',
            border: 'border-l-4 border-lime-500',
            header: 'text-lime-900',
            accent: 'text-lime-700',
            skills: 'bg-lime-100 text-lime-800',
            bodyText: 'text-gray-700'
          }
        ];
      case 'executive':
        return [
          {
            bgGradient: 'from-slate-800 via-slate-900 to-slate-950',
            border: '',
            header: 'text-white',
            accent: 'text-gray-300',
            skills: 'bg-slate-700 text-gray-100',
            bodyText: 'text-gray-200'
          }
        ];
      default:
        return [
          {
            bgGradient: 'from-white to-gray-50',
            border: 'border border-gray-200',
            header: 'text-gray-900',
            accent: 'text-gray-700',
            skills: 'bg-gray-100 text-gray-800',
            bodyText: 'text-gray-700'
          }
        ];
    }
  };

  const getTemplateStyles = () => {
    const colorSchemes = getTemplateColorSchemes(template);
    const currentScheme = colorSchemes[templateColorScheme] || colorSchemes[0];
    
    // For resume templates, use white background for printing compatibility
    // But apply template accent colors for headers, borders, and skill badges
    return `bg-white`;
  };

  const getTextStyles = () => {
    const colorSchemes = getTemplateColorSchemes(template);
    const currentScheme = colorSchemes[templateColorScheme] || colorSchemes[0];
    
    // Apply template-specific styling while keeping white background for printing
    if (template === 'executive') {
      // Executive template uses dark background with light text
      return {
        header: currentScheme.header,
        accent: currentScheme.accent,
        skills: currentScheme.skills,
        bodyText: currentScheme.bodyText,
        border: currentScheme.border,
        containerBg: `bg-gradient-to-br ${currentScheme.bgGradient}`
      };
    } else {
      // Other templates: use template accent colors for headers/titles, but dark text for body
      // Extract the color from accent (e.g., "text-blue-700" -> keep for titles)
      // But use dark gray/black for body text for readability
      return {
        header: currentScheme.header.includes('white') || currentScheme.header.includes('gray-200') ? 'text-gray-900' : currentScheme.header,
        accent: currentScheme.accent, // Use template accent color for titles and accents
        skills: currentScheme.skills, // Use template skill badge colors
        bodyText: 'text-gray-900', // Always use dark text for body for readability
        border: currentScheme.border, // Use template border color
        containerBg: 'bg-white' // White background for printing
      };
    }
  };

  const textStyles = getTextStyles();
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  const getProficiencyColor = (proficiency?: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Beginner':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return textStyles.skills;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Technical':
        return <Code className="w-4 h-4" />;
      case 'Soft Skills':
        return <Users className="w-4 h-4" />;
      case 'Tools':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };

  const ATSBadge = ({ section, score }: { section: string; score: number }) => {
    const getScoreColor = (s: number) => {
      if (s >= 90) return 'bg-green-100 text-green-600 border-green-200';
      if (s >= 75) return 'bg-blue-100 text-blue-600 border-blue-200';
      if (s >= 60) return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      return 'bg-red-100 text-red-600 border-red-200';
    };

    const tooltips: Record<string, string> = {
      header: 'Clear contact info and professional title improve ATS parsing',
      summary: 'Keyword-rich summary helps ATS match job requirements',
      experience: 'Structured work history with achievements boosts ATS score',
      education: 'Properly formatted education helps ATS verify credentials',
      skills: 'Relevant skills improve keyword matching in ATS systems',
      projects: 'Showcasing projects demonstrates practical experience',
      certifications: 'Certifications validate expertise and pass ATS filters',
      achievements: 'Quantified achievements improve ranking in ATS systems',
    };

    return (
      <div
        className="relative inline-block ats-badge"
        onMouseEnter={() => setHoveredTooltip(section)}
        onMouseLeave={() => setHoveredTooltip(null)}
      >
        <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold border ${getScoreColor(score)}`}>
          ATS {score}%
        </span>
        {hoveredTooltip === section && (
          <div className="absolute z-50 left-0 top-full mt-1 w-64 p-2 bg-gray-900 text-white text-xs rounded shadow-lg">
            {tooltips[section] || 'This section is ATS-friendly'}
          </div>
        )}
      </div>
    );
  };

  // Exact Mode: render raw text under original headings with ATS scores
  const parseRawSections = (raw?: string) => {
    if (!raw) return [] as Array<{ heading: string; content: string }>;
    const lines = raw.split(/\r?\n/).map(l => l.replace(/\s+$/,'')); // preserve leading spaces, strip only trailing
    const sections: Array<{ heading: string; content: string }> = [];
    // Match heading at line start, allow optional colon and allow extra content on the same line after multiple spaces
    const headingStart = /^(\s*)(Professional\s+Summary|Summary|Education|Projects?|Skills?|Languages?|Achievements?|Awards?)(?:\s*:)?(\s*)(.*)$/i;
    let current: { heading: string; content: string } | null = null;
    lines.forEach(line => {
      const m = line.match(headingStart);
      if (m) {
        const heading = m[2];
        const inlineContent = m[4] || '';
        if (current) sections.push(current);
        current = { heading, content: inlineContent ? inlineContent : '' };
      } else if (current) {
        current.content += (current.content ? '\n' : '') + line;
      }
    });
    if (current) sections.push(current);
    return sections;
  };

  const scoreExactSection = (name: string, content: string) => {
    const len = content.trim().length;
    const wordCount = content.split(/\s+/).filter(Boolean).length;
    switch (true) {
      case /summary/i.test(name):
        return Math.max(70, Math.min(98, Math.round(wordCount / 2)));
      case /education/i.test(name):
        return len > 30 ? 95 : 80;
      case /project/i.test(name):
        return len > 50 ? 92 : 78;
      case /skill/i.test(name):
        return Math.min(96, 70 + Math.min(20, (content.match(/[,•\n]/g) || []).length * 3));
      case /language/i.test(name):
        return content ? 90 : 60;
      case /achievement|award/i.test(name):
        return len > 20 ? 88 : 72;
      default:
        return 85;
    }
  };

  const SectionDivider = () => {
    return (
      <div className={`my-5 border-t ${template === 'executive' ? 'border-gray-600' : 'border-gray-200'}`}></div>
    );
  };

  const renderCreativeDesignerTemplate = () => {
    const colorSchemes = getTemplateColorSchemes(template);
    const currentScheme = colorSchemes[templateColorScheme] || colorSchemes[0];

    return (
      <div className="resume-preview-content flex flex-col sm:flex-row gap-0 bg-white transform transition-all duration-300 min-w-[320px] shadow-lg rounded-lg" style={{margin: '0 auto', maxWidth: '210mm'}}>
        {/* Main Content Area - LEFT SIDE */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 bg-white">
          {/* Header */}
          <div className="mb-6">
              <h1 className={`text-4xl font-bold text-gray-900 mb-2`}>
                {resumeData.personalInfo.fullName || 'Emma Chen'}
              </h1>
              <p className={`text-xl ${currentScheme.accent} font-medium mb-4`}>
                {resumeData.personalInfo.title || 'Creative Director & UX Designer'}
              </p>
              {resumeData.personalInfo.summary && (
                <p className="text-gray-900 text-sm leading-relaxed">
                  {resumeData.personalInfo.summary}
                </p>
              )}
          </div>

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <div className="mb-6">
              <h2 className={`text-xl font-bold ${currentScheme.header} mb-4 uppercase tracking-wide border-b-2 ${currentScheme.border.replace('border-l-4', 'border-b-2')} pb-2`}>
                EXPERIENCE
              </h2>
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className={`pl-4 border-l-2 ${currentScheme.border.replace('border-l-4', 'border-l-2')}`}>
                    <h3 className={`font-bold text-gray-900 text-base`}>{exp.position}</h3>
                    <p className={`${currentScheme.accent} text-sm font-medium mb-2`}>
                      {exp.company} | {exp.duration}
                    </p>
                    {exp.description && (
                      <p className="text-gray-900 text-sm leading-relaxed">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Featured Projects */}
          {resumeData.projects && resumeData.projects.length > 0 && (
            <div className="mb-6">
              <h2 className={`text-xl font-bold ${currentScheme.header} mb-4 uppercase tracking-wide border-b-2 ${currentScheme.border.replace('border-l-4', 'border-b-2')} pb-2`}>
                FEATURED PROJECTS
              </h2>
              <div className="space-y-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${currentScheme.border} bg-gray-50`}>
                    <h3 className={`font-bold text-gray-900`}>{project.title}</h3>
                    <p className="text-gray-900 text-sm mt-1">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar with Contact & Skills */}
        <div className={`w-full sm:w-80 bg-white p-4 sm:p-6 flex-shrink-0 border-l border-gray-200`}>
          {/* Contact Info Box */}
          <div className={`bg-white rounded-lg p-4 mb-6 border-2 ${currentScheme.border.replace('border-l-4', 'border')}`}>
            <h3 className={`font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide`}>CONTACT</h3>
            <div className="space-y-2 text-xs">
              {resumeData.personalInfo.email && (
                <a
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="flex items-start gap-2 hover:opacity-70 transition-opacity underline"
                  style={{ color: '#2563eb', textDecoration: 'underline' }}
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span className="break-all text-gray-900">{resumeData.personalInfo.email}</span>
                </a>
              )}
              {resumeData.personalInfo.phone && (
                <a
                  href={`tel:${resumeData.personalInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity underline"
                  style={{ color: '#2563eb', textDecoration: 'underline' }}
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-gray-900">{resumeData.personalInfo.phone}</span>
                </a>
              )}
              {resumeData.personalInfo.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-gray-900">{resumeData.personalInfo.location}</span>
                </div>
              )}
              {resumeData.socialLinks?.linkedin && (
                <a
                  href={resumeData.socialLinks.linkedin.startsWith('http') ? resumeData.socialLinks.linkedin : `https://${resumeData.socialLinks.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity underline"
                  style={{ color: '#2563eb', textDecoration: 'underline' }}
                >
                  <Linkedin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-gray-900 text-xs break-all">{resumeData.socialLinks.linkedin.replace('https://', '').replace('http://', '')}</span>
                </a>
              )}
              {resumeData.socialLinks?.github && (
                <a
                  href={resumeData.socialLinks.github.startsWith('http') ? resumeData.socialLinks.github : `https://${resumeData.socialLinks.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity underline"
                  style={{ color: '#2563eb', textDecoration: 'underline' }}
                >
                  <Github className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-gray-900 text-xs break-all">{resumeData.socialLinks.github.replace('https://', '').replace('http://', '')}</span>
                </a>
              )}
              {resumeData.socialLinks?.website && (
                <a
                  href={resumeData.socialLinks.website.startsWith('http') ? resumeData.socialLinks.website : `https://${resumeData.socialLinks.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity underline"
                  style={{ color: '#2563eb', textDecoration: 'underline' }}
                >
                  <Globe className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-gray-700 text-xs break-all">{resumeData.socialLinks.website.replace('https://', '').replace('http://', '')}</span>
                </a>
              )}
            </div>
          </div>

          {/* Skills Box */}
          <div className={`bg-gradient-to-br ${currentScheme.bgGradient} rounded-lg p-4 mb-6 border-2 ${currentScheme.border.replace('border-l-4', 'border')}`}>
            <h3 className={`font-bold ${currentScheme.header} mb-3 text-sm uppercase tracking-wide`}>SKILLS</h3>
            <div className="space-y-2">
              {resumeData.skillsCategories && resumeData.skillsCategories.length > 0 ? (
                ['Technical', 'Soft Skills', 'Tools'].map((category) => {
                  const categorySkills = resumeData.skillsCategories?.filter(s => s.category === category);
                  if (!categorySkills || categorySkills.length === 0) return null;
                  return (
                    <div key={category}>
                      <h4 className={`text-xs font-semibold ${currentScheme.accent} mb-1`}>{category}</h4>
                      {categorySkills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 mb-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${currentScheme.border.includes('teal') ? 'bg-teal-500' : currentScheme.border.includes('cyan') ? 'bg-cyan-500' : 'bg-purple-500'}`}></div>
                          <span className="text-xs text-gray-700">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  );
                })
              ) : (
                resumeData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 mb-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${currentScheme.border.includes('teal') ? 'bg-teal-500' : currentScheme.border.includes('cyan') ? 'bg-cyan-500' : 'bg-purple-500'}`}></div>
                    <span className="text-xs text-gray-700">{skill}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Expertise - placeholder for compatibility */}
          <div className={`bg-gradient-to-br ${currentScheme.bgGradient} rounded-lg p-4 mb-6 border-2 ${currentScheme.border.replace('border-l-4', 'border')}`}>
            <h3 className={`font-bold ${currentScheme.header} mb-3 text-sm uppercase tracking-wide`}>EXPERTISE</h3>
            <div className="space-y-2">
              {resumeData.skillsCategories && resumeData.skillsCategories.filter(s => s.category === 'Technical').slice(0, 3).map((skill, index) => (
                <div key={index} className="flex items-center gap-2 mb-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${currentScheme.border.includes('teal') ? 'bg-teal-500' : currentScheme.border.includes('cyan') ? 'bg-cyan-500' : 'bg-purple-500'}`}></div>
                  <span className="text-xs text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Box */}
          {resumeData.education.length > 0 && (
            <div className={`bg-gradient-to-br ${currentScheme.bgGradient} rounded-lg p-4 mb-6 border-2 ${currentScheme.border.replace('border-l-4', 'border')}`}>
              <h3 className={`font-bold ${currentScheme.header} mb-3 text-sm uppercase tracking-wide`}>EDUCATION</h3>
              <div className="space-y-3">
                {resumeData.education.map((edu, index) => (
                  <div key={index}>
                    <h4 className={`font-semibold text-xs ${currentScheme.header}`}>{edu.degree}</h4>
                    <p className="text-xs text-gray-600">{edu.school}</p>
                    <p className="text-xs text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards Box */}
          {resumeData.achievements && resumeData.achievements.length > 0 && (
            <div className={`bg-gradient-to-br ${currentScheme.bgGradient} rounded-lg p-4 mb-6 border-2 ${currentScheme.border.replace('border-l-4', 'border')}`}>
              <h3 className={`font-bold ${currentScheme.header} mb-3 text-sm uppercase tracking-wide`}>AWARDS</h3>
              <div className="space-y-2">
                {resumeData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Award className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-yellow-600" />
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{achievement.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {resumeData.certifications && resumeData.certifications.length > 0 && (
            <div className={`bg-gradient-to-br ${currentScheme.bgGradient} rounded-lg p-4 mb-6 border-2 ${currentScheme.border.replace('border-l-4', 'border')}`}>
              <h3 className={`font-bold ${currentScheme.header} mb-3 text-sm uppercase tracking-wide`}>CERTIFICATIONS</h3>
              <div className="space-y-2">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index}>
                    <p className="text-xs font-semibold text-gray-800">{cert.name}</p>
                    <p className="text-xs text-gray-600">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {resumeData.languages && resumeData.languages.length > 0 && (
            <div className={`bg-gradient-to-br ${currentScheme.bgGradient} rounded-lg p-4 mb-6 border-2 ${currentScheme.border.replace('border-l-4', 'border')}`}>
              <h3 className={`font-bold ${currentScheme.header} mb-3 text-sm uppercase tracking-wide`}>LANGUAGES</h3>
              <div className="space-y-2">
                {resumeData.languages.map((language, index) => (
                  <div key={index} className="flex items-center gap-2 mb-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${currentScheme.border.includes('teal') ? 'bg-teal-500' : currentScheme.border.includes('cyan') ? 'bg-cyan-500' : 'bg-purple-500'}`}></div>
                    <span className="text-xs text-gray-700">{language.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hobbies */}
          {resumeData.hobbies && resumeData.hobbies.length > 0 && (
            <div className={`bg-gradient-to-br ${currentScheme.bgGradient} rounded-lg p-4 border-2 ${currentScheme.border.replace('border-l-4', 'border')}`}>
              <h3 className={`font-bold ${currentScheme.header} mb-3 text-sm uppercase tracking-wide`}>INTERESTS</h3>
              <div className="space-y-2">
                {resumeData.hobbies.map((hobby, index) => (
                  <div key={index} className="flex items-center gap-2 mb-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${currentScheme.border.includes('teal') ? 'bg-teal-500' : currentScheme.border.includes('cyan') ? 'bg-cyan-500' : 'bg-purple-500'}`}></div>
                    <span className="text-xs text-gray-700">{hobby}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 h-full overflow-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Live Preview</h3>
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${atsScore >= 80 ? 'bg-green-500' : atsScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
            <span className="text-xs sm:text-sm text-gray-600">ATS: {atsScore}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            <span className="text-xs sm:text-sm text-gray-600">Health: {healthScore}%</span>
          </div>
          {onToggleExactMode && (
            <button
              onClick={onToggleExactMode}
              className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg font-semibold transition-all shadow-sm ${exactMode ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 border border-gray-300'}`}
              title="Render uploaded resume exactly as-is"
            >
              {exactMode ? 'Exact Mode: On' : 'Exact Mode: Off'}
            </button>
          )}
        </div>
      </div>

      <div className="w-full overflow-x-auto">
      {exactMode && resumeData.rawText ? (
        <div className="resume-preview-content p-6 sm:p-8 lg:p-10 bg-white transform transition-all duration-300 min-w-[320px] shadow-lg rounded-lg" style={{margin: '0 auto', maxWidth: '210mm'}}>
          {parseRawSections(resumeData.rawText).map((sec, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold text-gray-900">{sec.heading}</h2>
                <ATSBadge section={sec.heading.toLowerCase()} score={scoreExactSection(sec.heading, sec.content)} />
              </div>
              <div className="whitespace-pre-wrap text-gray-900 text-sm bg-gray-50 p-4 rounded-lg border border-gray-200">
                {sec.content}
              </div>
            </div>
          ))}
        </div>
      ) : template === 'creative-designer' ? (
        <div className="min-w-[320px]">
          {renderCreativeDesignerTemplate()}
        </div>
      ) : (
        <div className={`resume-preview-content p-6 sm:p-8 lg:p-10 ${textStyles.containerBg} transform transition-all duration-300 min-w-[320px] shadow-lg rounded-lg`} style={{margin: '0 auto', maxWidth: '210mm', borderLeft: template !== 'executive' && textStyles.border.includes('border-l-4') ? '4px solid' : 'none', borderLeftColor: template !== 'executive' && textStyles.border.includes('blue') ? '#3b82f6' : template !== 'executive' && textStyles.border.includes('cyan') ? '#06b6d4' : template !== 'executive' && textStyles.border.includes('teal') ? '#14b8a6' : 'transparent'}}>
          <style>{`
            .resume-preview-content a {
              color: #2563eb !important;
              text-decoration: underline !important;
            }
            .resume-preview-content a[href^="mailto:"] {
              color: #2563eb !important;
              text-decoration: underline !important;
            }
            .resume-preview-content a[href^="tel:"] {
              color: #2563eb !important;
              text-decoration: underline !important;
            }
            .resume-preview-content a[href^="http"] {
              color: #2563eb !important;
              text-decoration: underline !important;
            }
          `}</style>
        {/* Header with Photo */}
        <div className={`pb-5 mb-5 ${template === 'executive' ? 'border-b border-gray-600' : 'border-b-2'}`} style={template !== 'executive' ? { borderBottomColor: textStyles.border.includes('blue') ? '#3b82f6' : textStyles.border.includes('cyan') ? '#06b6d4' : textStyles.border.includes('teal') ? '#14b8a6' : textStyles.border.includes('indigo') ? '#6366f1' : '#e5e7eb', borderBottomWidth: '2px' } : {}}>
          <div className="flex items-start gap-4 sm:gap-6">
            {resumeData.personalInfo.photo && (
              <img
                src={resumeData.personalInfo.photo}
                alt="Profile"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
              />
            )}
            <div className="flex-1 min-w-0">
              <h1 className={`text-2xl sm:text-3xl font-bold ${textStyles.header} mb-1 break-words`}>
                {resumeData.personalInfo.fullName || 'Your Name'}
              </h1>
              <p className={`text-base sm:text-lg ${textStyles.accent} mb-3 font-medium`}>
                {resumeData.personalInfo.title || 'Professional Title'}
              </p>
              <div className={`flex flex-wrap gap-2 sm:gap-3 text-xs mb-2 ${template === 'executive' ? 'text-gray-300' : 'text-gray-600'}`}>
                {resumeData.personalInfo.email && (
                  <a
                    href={`mailto:${resumeData.personalInfo.email}`}
                    className={`flex items-center transition-colors hover:text-blue-600 ${template === 'executive' ? 'text-gray-300' : 'text-gray-600'} underline`}
                    style={{ color: template === 'executive' ? '#d1d5db' : '#2563eb', textDecoration: 'underline' }}
                  >
                    <Mail className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                    <span className="break-all">{resumeData.personalInfo.email}</span>
                  </a>
                )}
                {resumeData.personalInfo.phone && (
                  <a
                    href={`tel:${resumeData.personalInfo.phone.replace(/\s/g, '')}`}
                    className={`flex items-center transition-colors hover:text-blue-600 ${template === 'executive' ? 'text-gray-300' : 'text-gray-600'} underline`}
                    style={{ color: template === 'executive' ? '#d1d5db' : '#2563eb', textDecoration: 'underline' }}
                  >
                    <Phone className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                    {resumeData.personalInfo.phone}
                  </a>
                )}
                {resumeData.personalInfo.location && (
                  <div className={`flex items-center ${template === 'executive' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                    {resumeData.personalInfo.location}
                  </div>
                )}
              </div>
              {/* Social Links in Header */}
              {(resumeData.socialLinks?.linkedin || resumeData.socialLinks?.github || resumeData.socialLinks?.website) && (
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs mt-2">
                  {resumeData.socialLinks?.linkedin && (
                    <a
                      href={resumeData.socialLinks.linkedin.startsWith('http') ? resumeData.socialLinks.linkedin : `https://${resumeData.socialLinks.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${template === 'executive' ? 'text-gray-300' : 'text-gray-600'} underline`}
                      style={{ color: template === 'executive' ? '#d1d5db' : '#2563eb', textDecoration: 'underline' }}
                    >
                      <Linkedin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {resumeData.socialLinks?.github && (
                    <a
                      href={resumeData.socialLinks.github.startsWith('http') ? resumeData.socialLinks.github : `https://${resumeData.socialLinks.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${template === 'executive' ? 'text-gray-300' : 'text-gray-600'} underline`}
                      style={{ color: template === 'executive' ? '#d1d5db' : '#2563eb', textDecoration: 'underline' }}
                    >
                      <Github className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {resumeData.socialLinks?.website && (
                    <a
                      href={resumeData.socialLinks.website.startsWith('http') ? resumeData.socialLinks.website : `https://${resumeData.socialLinks.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${template === 'executive' ? 'text-gray-300' : 'text-gray-600'} underline`}
                      style={{ color: template === 'executive' ? '#d1d5db' : '#2563eb', textDecoration: 'underline' }}
                    >
                      <Globe className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      <span>Website</span>
                    </a>
                  )}
                </div>
              )}
              <div className="mt-2">
                <ATSBadge section="header" score={98} />
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        {resumeData.personalInfo.summary && (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className={`text-lg font-bold ${textStyles.header} flex items-center`}>
                  <User className="w-5 h-5 mr-2" />
                  Professional Summary
                </h2>
                <ATSBadge section="summary" score={88} />
              </div>
              <p className={`${textStyles.bodyText} leading-relaxed`}>{resumeData.personalInfo.summary}</p>
            </div>
            <SectionDivider />
          </>
        )}

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-lg font-bold ${textStyles.header} flex items-center`}>
                  <Briefcase className="w-5 h-5 mr-2" />
                  Experience
                </h2>
                <ATSBadge section="experience" score={93} />
              </div>
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="pl-0">
                    <h3 className={`font-bold text-base ${textStyles.header}`}>{exp.position}</h3>
                    <p className={`${textStyles.accent} text-sm font-medium mb-2`}>{exp.company} • {exp.duration}</p>
                    {exp.description && <p className={`${textStyles.bodyText} text-sm leading-relaxed`}>{exp.description}</p>}
                  </div>
                ))}
              </div>
            </div>
            <SectionDivider />
          </>
        )}

        {/* Projects */}
        {resumeData.projects && resumeData.projects.length > 0 && (
          <>
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-lg font-bold ${textStyles.header} flex items-center`}>
                  <Code className="w-5 h-5 mr-2" />
                  Projects
                </h2>
                <ATSBadge section="projects" score={91} />
              </div>
              <div className="space-y-3 sm:space-y-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className={`p-4 rounded-lg hover:shadow-md transition-shadow ${template === 'executive' ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                    <div className="flex items-start justify-between">
                      <h3 className={`font-bold ${textStyles.header}`}>{project.title}</h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${textStyles.accent} hover:opacity-80 transition-colors`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className={`${textStyles.bodyText} mt-2 text-sm leading-relaxed`}>{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <SectionDivider />
          </>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <>
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-lg font-bold ${textStyles.header} flex items-center`}>
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </h2>
                <ATSBadge section="education" score={100} />
              </div>
              <div className="space-y-2 sm:space-y-3">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className={`p-3 rounded-lg ${template === 'executive' ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                    <h3 className={`font-bold ${textStyles.header}`}>{edu.degree}</h3>
                    <p className={`${textStyles.accent}`}>{edu.school} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
            <SectionDivider />
          </>
        )}

        {/* Certifications */}
        {resumeData.certifications && resumeData.certifications.length > 0 && (
          <>
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-lg font-bold ${textStyles.header} flex items-center`}>
                  <Award className="w-5 h-5 mr-2" />
                  Certifications
                </h2>
                <ATSBadge section="certifications" score={91} />
              </div>
              <div className="space-y-3">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className={`w-5 h-5 mr-2 mt-0.5 ${textStyles.accent}`} />
                    <div>
                      <h3 className={`font-semibold ${textStyles.header}`}>{cert.name}</h3>
                      <p className={`text-sm ${textStyles.accent}`}>{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <SectionDivider />
          </>
        )}

        {/* Skills with Categories */}
        {(resumeData.skillsCategories && resumeData.skillsCategories.length > 0) || resumeData.skills.length > 0 ? (
          <>
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-lg font-bold ${textStyles.header} flex items-center`}>
                  <Award className="w-5 h-5 mr-2" />
                  Skills
                </h2>
                <ATSBadge section="skills" score={94} />
              </div>

              {resumeData.skillsCategories && resumeData.skillsCategories.length > 0 ? (
                <div className="space-y-4">
                  {['Technical', 'Soft Skills', 'Tools'].map((category) => {
                    const categorySkills = resumeData.skillsCategories?.filter(s => s.category === category);
                    if (!categorySkills || categorySkills.length === 0) return null;

                    return (
                      <div key={category}>
                        <h3 className={`text-sm font-semibold ${textStyles.accent} mb-2 flex items-center`}>
                          {getCategoryIcon(category)}
                          <span className="ml-2">{category}</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {categorySkills.map((skill, index) => (
                            <span
                              key={index}
                              className={`px-3 py-1.5 rounded-full text-sm font-medium border ${getProficiencyColor(skill.proficiency)}`}
                            >
                              {skill.name}
                              {skill.proficiency && (
                                <span className="ml-1.5 text-xs opacity-75">• {skill.proficiency}</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${textStyles.skills} border ${template === 'executive' ? 'border-slate-600' : 'border-gray-300'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <SectionDivider />
          </>
        ) : null}

        {/* Achievements */}
        {resumeData.achievements && resumeData.achievements.length > 0 && (
          <>
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-lg font-bold ${textStyles.header} flex items-center`}>
                  <Trophy className="w-5 h-5 mr-2" />
                  Achievements
                </h2>
                <ATSBadge section="achievements" score={87} />
              </div>
              <div className="space-y-3">
                {resumeData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <Star className={`w-5 h-5 mr-2 mt-0.5 ${textStyles.accent} fill-current`} />
                    <div>
                      <h3 className={`font-semibold ${textStyles.header}`}>{achievement.title}</h3>
                      <p className={`${textStyles.bodyText || 'text-gray-700'} text-sm`}>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <SectionDivider />
          </>
        )}

        {/* Languages */}
        {resumeData.languages && resumeData.languages.length > 0 && (
          <>
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-xl font-bold ${textStyles.header} flex items-center`}>
                  <Languages className="w-5 h-5 mr-2" />
                  Languages
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {resumeData.languages.map((language, index) => (
                  <div key={index} className={`p-3 rounded-lg ${template === 'executive' ? 'bg-slate-800 bg-opacity-50' : 'bg-white bg-opacity-50'}`}>
                    <p className={`font-semibold ${textStyles.header}`}>{language.name}</p>
                    <p className={`text-sm ${template === 'executive' ? 'text-gray-400' : 'text-gray-600'}`}>{language.proficiency}</p>
                  </div>
                ))}
              </div>
            </div>
            <SectionDivider />
          </>
        )}

        {/* Hobbies */}
        {resumeData.hobbies && resumeData.hobbies.length > 0 && (
          <>
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <div className="flex items-center mb-4">
                <h2 className={`text-xl font-bold ${textStyles.header} flex items-center`}>
                  <Heart className="w-5 h-5 mr-2" />
                  Interests
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm bg-gray-100 text-gray-800 border border-gray-300`}
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
            <SectionDivider />
          </>
        )}

        {/* References */}
        {resumeData.references && resumeData.references.length > 0 && (
          <>
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <div className="flex items-center mb-4">
                <h2 className={`text-xl font-bold ${textStyles.header} flex items-center`}>
                  <FileText className="w-5 h-5 mr-2" />
                  References
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {resumeData.references.map((reference, index) => (
                  <div key={index} className={`p-3 rounded-lg ${template === 'executive' ? 'bg-slate-800 bg-opacity-50' : 'bg-white bg-opacity-50'}`}>
                    <h3 className={`font-semibold ${textStyles.header}`}>{reference.name}</h3>
                    <p className={`text-sm ${template === 'executive' ? 'text-gray-400' : 'text-gray-600'}`}>{reference.title}</p>
                    <p className={`text-sm mt-1 ${template === 'executive' ? 'text-gray-500' : 'text-gray-500'}`}>{reference.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Raw Uploaded Resume (fallback) */}
        {(!resumeData.experience.length && !resumeData.education.length && !resumeData.skills.length && !resumeData.projects?.length && resumeData.rawText) && (
          <>
            <SectionDivider />
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <div className="flex items-center mb-4">
                <h2 className={`text-lg font-bold text-gray-900 flex items-center`}>
                  <FileText className="w-5 h-5 mr-2" />
                  Uploaded Resume
                </h2>
              </div>
              <div className="whitespace-pre-wrap text-sm text-gray-900 bg-gray-50 rounded-lg p-4 border border-gray-200">
                {resumeData.rawText}
              </div>
            </div>
          </>
        )}

        {/* Footer with Social Links */}
        {resumeData.socialLinks && (Object.keys(resumeData.socialLinks).length > 0) && (
          <div className={`mt-8 pt-4 border-t-2 ${template === 'executive' ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {resumeData.socialLinks.linkedin && (
                <a
                  href={resumeData.socialLinks.linkedin.startsWith('http') ? resumeData.socialLinks.linkedin : `https://${resumeData.socialLinks.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center ${textStyles.accent} hover:opacity-70 transition-opacity underline`}
                  style={{ color: '#2563eb', textDecoration: 'underline' }}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              )}
              {resumeData.socialLinks.github && (
                <a
                  href={resumeData.socialLinks.github.startsWith('http') ? resumeData.socialLinks.github : `https://${resumeData.socialLinks.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center ${textStyles.accent} hover:opacity-70 transition-opacity underline`}
                  style={{ color: '#2563eb', textDecoration: 'underline' }}
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              )}
              {resumeData.socialLinks.website && (
                <a
                  href={resumeData.socialLinks.website.startsWith('http') ? resumeData.socialLinks.website : `https://${resumeData.socialLinks.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center ${textStyles.accent} hover:opacity-70 transition-opacity underline`}
                  style={{ color: '#2563eb', textDecoration: 'underline' }}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Website</span>
                </a>
              )}
            </div>
          </div>
        )}
        </div>
      )}
      </div>
    </div>
  );
};

export default LivePreview;