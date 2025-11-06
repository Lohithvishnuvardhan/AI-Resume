import React, { useState, useEffect, useRef } from 'react';
import { Download, FileText, CreditCard as Edit3, User, Briefcase, GraduationCap, Award, Plus, Trash2, Lightbulb, AlertCircle, CheckCircle, Move, Sparkles, Code, Trophy, Languages, Heart, Globe, Linkedin, Github, Image, Users as FileUser } from 'lucide-react';

interface EditableResumeFormProps {
  resumeData: any;
  template: string;
  colorScheme: number;
  onDataChange: (data: any) => void;
  onDownloadPDF: () => void;
  onDownloadWord: () => void;
}

const EditableResumeForm: React.FC<EditableResumeFormProps> = ({
  resumeData,
  onDataChange,
  onDownloadPDF,
  onDownloadWord
}) => {
  const [formData, setFormData] = useState(resumeData || {
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      title: '',
      summary: '',
      photo: ''
    },
    experience: [],
    education: [],
    skills: [],
    skillsCategories: [],
    projects: [],
    certifications: [],
    achievements: [],
    languages: [],
    hobbies: [],
    references: [],
    socialLinks: {
      linkedin: '',
      github: '',
      website: ''
    }
  });

  const [draggedItem, setDraggedItem] = useState<{ type: string; index: number } | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [showTips, setShowTips] = useState<Record<string, boolean>>({});
  const [aiSuggestions, setAiSuggestions] = useState<Record<string, string[]>>({});
  const [hobbiesText, setHobbiesText] = useState('');
  const [skillsText, setSkillsText] = useState('');

  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const isInternalUpdate = useRef(false);

  // Only update form data when resumeData changes from external sources (like AI generation)
  useEffect(() => {
    if (!isInternalUpdate.current && resumeData && JSON.stringify(formData) !== JSON.stringify(resumeData)) {
      setFormData(resumeData);
      setHobbiesText(resumeData?.hobbies?.join(', ') || '');
      setSkillsText(resumeData?.skills?.join(', ') || '');
    }
    // Do not reset isInternalUpdate here – it should only be set by internal updates
  }, [resumeData]);

  // AI suggestions for common fields
  useEffect(() => {
    const suggestions = {
      skills: [
        'JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Git',
        'Project Management', 'Leadership', 'Communication', 'Problem Solving', 'Teamwork',
        'Data Analysis', 'Machine Learning', 'SQL', 'MongoDB', 'GraphQL', 'REST APIs'
      ],
      titles: [
        'Senior Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer',
        'Marketing Manager', 'Sales Representative', 'Business Analyst', 'DevOps Engineer',
        'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Mobile Developer'
      ]
    };
    setAiSuggestions(suggestions);
  }, []);

  const validateField = (field: string, value: string) => {
    const newErrors: Record<string, string> = {};

    switch (field) {
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        const cleanPhone = value.replace(/[\s\-\(\)]/g, '');
        if (value && cleanPhone.length > 0 && !/^[\+]?[\d]{7,15}$/.test(cleanPhone)) {
          newErrors.phone = 'Please enter a valid phone number';
        }
        break;
      case 'fullName':
        if (value && !value.trim()) {
          newErrors.fullName = 'Full name is required';
        }
        break;
    }

    setValidationErrors(prev => {
      const updated = { ...prev };
      if (newErrors[field]) {
        updated[field] = newErrors[field];
      } else {
        delete updated[field];
      }
      return updated;
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (section: string, field: string, value: string, index?: number) => {
    // Validate field
    if (section === 'personalInfo') {
      validateField(field, value);
    }

    setFormData((prevData: any) => {
      const newData = { ...prevData };
      if (index !== undefined) {
        if (!newData[section]) newData[section] = [];
        if (!newData[section][index]) newData[section][index] = {};
        newData[section][index][field] = value;
      } else if (section === 'personalInfo') {
        if (!newData.personalInfo) newData.personalInfo = {};
        newData.personalInfo[field] = value;
      } else if (section === 'skills') {
        newData.skills = value.split(',').map((skill: string) => skill.trim()).filter((skill: string) => skill);
      }
      return newData;
    });

    isInternalUpdate.current = true; // Mark this as a local update

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      setFormData((currentData: any) => {
        onDataChange(currentData);
        return currentData;
      });
      isInternalUpdate.current = false; // Reset after debounce
    }, 150); // Faster response
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const handleDragStart = (e: React.DragEvent, type: string, index: number) => {
    setDraggedItem({ type, index });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, type: string, dropIndex: number) => {
    e.preventDefault();
    
    if (!draggedItem || draggedItem.type !== type) return;
    
    const dragIndex = draggedItem.index;
    if (dragIndex === dropIndex) return;

    setFormData((prevData: any) => {
      const newData = { ...prevData };
      const items = [...newData[type]];
      const draggedItemData = items[dragIndex];
      
      items.splice(dragIndex, 1);
      items.splice(dropIndex, 0, draggedItemData);
      
      newData[type] = items;
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
    
    setDraggedItem(null);
  };
  const addExperience = () => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      if (!newData.experience) newData.experience = [];
      newData.experience.push({
        company: '',
        position: '',
        duration: '',
        description: ''
      });
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const removeExperience = (index: number) => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      newData.experience.splice(index, 1);
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const addEducation = () => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      if (!newData.education) newData.education = [];
      newData.education.push({
        school: '',
        degree: '',
        year: ''
      });
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const removeEducation = (index: number) => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      newData.education.splice(index, 1);
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const addProject = () => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      if (!newData.projects) newData.projects = [];
      newData.projects.push({ title: '', description: '', url: '' });
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const removeProject = (index: number) => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      newData.projects.splice(index, 1);
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const addCertification = () => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      if (!newData.certifications) newData.certifications = [];
      newData.certifications.push({ name: '', issuer: '', year: '' });
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const removeCertification = (index: number) => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      newData.certifications.splice(index, 1);
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const addAchievement = () => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      if (!newData.achievements) newData.achievements = [];
      newData.achievements.push({ title: '', description: '' });
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const removeAchievement = (index: number) => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      newData.achievements.splice(index, 1);
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const addLanguage = () => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      if (!newData.languages) newData.languages = [];
      newData.languages.push({ name: '', proficiency: '' });
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const removeLanguage = (index: number) => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      newData.languages.splice(index, 1);
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const addReference = () => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      if (!newData.references) newData.references = [];
      newData.references.push({ name: '', title: '', contact: '' });
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const removeReference = (index: number) => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      newData.references.splice(index, 1);
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const addSkillCategory = () => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      if (!newData.skillsCategories) newData.skillsCategories = [];
      newData.skillsCategories.push({ name: '', category: 'Technical', proficiency: 'Intermediate' });
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const removeSkillCategory = (index: number) => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      newData.skillsCategories.splice(index, 1);
      isInternalUpdate.current = true;
      onDataChange(newData);
      return newData;
    });
  };

  const handleSocialLinkChange = (field: string, value: string) => {
    setFormData((prevData: any) => {
      const newData = { ...prevData };
      if (!newData.socialLinks) newData.socialLinks = {};
      newData.socialLinks[field] = value;
      return newData;
    });

    isInternalUpdate.current = true;
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      setFormData((currentData: any) => {
        onDataChange(currentData);
        return currentData;
      });
      isInternalUpdate.current = false;
    }, 150);
  };

  const getFieldTip = (field: string) => {
    const tips: Record<string, string> = {
      fullName: 'Use your full legal name as it appears on official documents',
      title: 'Include your current or target job title (e.g., "Senior Software Engineer")',
      summary: 'Write 2-3 sentences highlighting your key achievements and career goals',
      skills: 'List 8-12 relevant skills, separated by commas. Include both technical and soft skills',
      position: 'Use your official job title from your employment',
      company: 'Include the full company name',
      duration: 'Format: "Jan 2020 - Present" or "Jan 2020 - Dec 2022"',
      description: 'Use bullet points to describe achievements with quantifiable results'
    };
    return tips[field] || '';
  };

  const renderFieldWithTip = (field: string, input: React.ReactNode) => {
    const tip = getFieldTip(field);
    const hasError = validationErrors[field];
    
    return (
      <div className="relative">
        {input}
        {tip && (
          <button
            type="button"
            onClick={() => setShowTips(prev => ({ ...prev, [field]: !prev[field] }))}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
            title="Show tip"
          >
            <Lightbulb className="w-4 h-4" />
          </button>
        )}
        {showTips[field] && tip && (
          <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm text-blue-700 dark:text-blue-300">
            <div className="flex items-start space-x-2">
              <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{tip}</span>
            </div>
          </div>
        )}
        {hasError && (
          <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-300">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{hasError}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSkillSuggestions = (currentValue: string) => {
    const currentSkills = currentValue.split(',').map(s => s.trim().toLowerCase());
    const suggestions = aiSuggestions.skills?.filter(skill => 
      !currentSkills.includes(skill.toLowerCase()) && 
      skill.toLowerCase().includes(currentValue.split(',').pop()?.trim().toLowerCase() || '')
    ).slice(0, 5) || [];

    if (suggestions.length === 0) return null;

    return (
      <div className="mt-2 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Suggestions:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((skill, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                const newValue = currentValue.trim() ? `${currentValue}, ${skill}` : skill;
                setSkillsText(newValue);
                setFormData((prevData: any) => {
                  const newData = { ...prevData };
                  newData.skills = newValue.split(',').map((s: string) => s.trim()).filter((s: string) => s);
                  return newData;
                });
                isInternalUpdate.current = true;
                onDataChange({ ...formData, skills: newValue.split(',').map((s: string) => s.trim()).filter((s: string) => s) });
                isInternalUpdate.current = false;
              }}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
            >
              + {skill}
            </button>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8">
      {/* Premium Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-700/50">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
              <Edit3 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Edit Resume
            </h3>
            <p className="text-sm text-gray-400 hidden sm:block mt-1">Customize your resume content with AI assistance</p>
          </div>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button
            onClick={onDownloadPDF}
            className="group flex-1 sm:flex-initial px-6 py-3 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-600 hover:via-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 active:scale-95 will-change-transform border border-red-400/20 hover:border-red-400/40"
          >
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            <span>PDF</span>
          </button>
          <button
            onClick={onDownloadWord}
            className="group flex-1 sm:flex-initial px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 active:scale-95 will-change-transform border border-blue-400/20 hover:border-blue-400/40"
          >
            <FileText className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            <span>Word</span>
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3 pb-4 border-b border-gray-700/30">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-lg blur-md opacity-50"></div>
            <div className="relative w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Personal Information</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Full Name *</label>
            {renderFieldWithTip('fullName',
              <input
                type="text"
                value={formData?.personalInfo?.fullName || ''}
                onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
                className={`input-field ${validationErrors.fullName ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
                placeholder="John Doe"
                autoComplete="name"
              />
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Professional Title</label>
            {renderFieldWithTip('title',
              <input
                type="text"
                value={formData?.personalInfo?.title || ''}
                onChange={(e) => handleInputChange('personalInfo', 'title', e.target.value)}
                className="input-field"
                placeholder="Senior Software Engineer"
                autoComplete="organization-title"
                list="title-suggestions"
              />
            )}
            <datalist id="title-suggestions">
              {aiSuggestions.titles?.map((title, index) => (
                <option key={index} value={title} />
              ))}
            </datalist>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Email *</label>
            {renderFieldWithTip('email',
              <input
                type="email"
                value={formData?.personalInfo?.email || ''}
                onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                className={`input-field ${validationErrors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
                placeholder="john@example.com"
                autoComplete="email"
              />
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Phone</label>
            {renderFieldWithTip('phone',
              <input
                type="tel"
                value={formData?.personalInfo?.phone || ''}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                className={`input-field ${validationErrors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
                placeholder="+1 (555) 123-4567"
                autoComplete="tel"
              />
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Location</label>
          <input
            type="text"
            value={formData?.personalInfo?.location || ''}
            onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
            className="input-field"
            placeholder="San Francisco, CA"
            autoComplete="address-level2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Profile Photo URL (Optional)</label>
          <input
            type="url"
            value={formData?.personalInfo?.photo || ''}
            onChange={(e) => handleInputChange('personalInfo', 'photo', e.target.value)}
            className="input-field"
            placeholder="https://example.com/photo.jpg"
          />
          <p className="text-xs text-gray-500 mt-2 flex items-center">
            <Image className="w-3 h-3 mr-1" />
            Add a professional headshot URL for a polished look
          </p>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Professional Summary</label>
          {renderFieldWithTip('summary',
            <textarea
              value={formData?.personalInfo?.summary || ''}
              onChange={(e) => handleInputChange('personalInfo', 'summary', e.target.value)}
              rows={5}
              className="input-field resize-none"
              placeholder="Write a compelling professional summary highlighting your key achievements and career goals..."
            />
          )}
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Experience</h4>
          </div>
          <button
            onClick={addExperience}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl active:scale-95 sm:min-w-[160px]"
          >
            <Plus className="w-4 h-4 mr-2" />
            <span>Add Experience</span>
          </button>
        </div>
        {formData?.experience?.map((exp: any, index: number) => (
          <div
            key={index}
            className={`border-2 border-gray-200 dark:border-slate-600 rounded-xl p-6 space-y-4 transition-all duration-200 ${
              draggedItem?.type === 'experience' && draggedItem?.index === index
                ? 'opacity-50 scale-95'
                : 'hover:border-blue-300 dark:hover:border-blue-600'
            }`}
            draggable
            onDragStart={(e) => handleDragStart(e, 'experience', index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'experience', index)}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <Move className="w-4 h-4 text-gray-400 cursor-move" />
                <h5 className="font-semibold text-gray-900 dark:text-white">Experience {index + 1}</h5>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => removeExperience(index)}
                  className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                  title="Remove experience"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={exp.position || ''}
                onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                className="input-field"
                placeholder="Job Title"
              />
              <input
                type="text"
                value={exp.company || ''}
                onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                className="input-field"
                placeholder="Company Name"
              />
            </div>
            <input
              type="text"
              value={exp.duration || ''}
              onChange={(e) => handleInputChange('experience', 'duration', e.target.value, index)}
              className="input-field"
              placeholder="Duration (e.g., 2020 - Present)"
            />
            <textarea
              value={exp.description || ''}
              onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
              rows={4}
              className="input-field resize-none"
              placeholder="• Describe your key achievements and responsibilities&#10;• Use bullet points and quantify results when possible&#10;• Focus on impact and outcomes"
            />
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Education</h4>
          </div>
          <button
            onClick={addEducation}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl active:scale-95 sm:min-w-[160px]"
          >
            <Plus className="w-4 h-4 mr-2" />
            <span>Add Education</span>
          </button>
        </div>
        {formData?.education?.map((edu: any, index: number) => (
          <div
            key={index}
            className={`border-2 border-gray-200 dark:border-slate-600 rounded-xl p-6 space-y-4 transition-all duration-200 ${
              draggedItem?.type === 'education' && draggedItem?.index === index
                ? 'opacity-50 scale-95'
                : 'hover:border-blue-300 dark:hover:border-blue-600'
            }`}
            draggable
            onDragStart={(e) => handleDragStart(e, 'education', index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'education', index)}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <Move className="w-4 h-4 text-gray-400 cursor-move" />
                <h5 className="font-semibold text-gray-900 dark:text-white">Education {index + 1}</h5>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => removeEducation(index)}
                  className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                  title="Remove education"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={edu.degree || ''}
                onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                className="input-field"
                placeholder="Degree"
              />
              <input
                type="text"
                value={edu.school || ''}
                onChange={(e) => handleInputChange('education', 'school', e.target.value, index)}
                className="input-field"
                placeholder="School/University"
              />
            </div>
            <input
              type="text"
              value={edu.year || ''}
              onChange={(e) => handleInputChange('education', 'year', e.target.value, index)}
              className="input-field"
              placeholder="Year (e.g., 2020)"
            />
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Award className="w-6 h-6 text-blue-600" />
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Skills</h4>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Skills (comma-separated)</label>
          {renderFieldWithTip('skills',
            <div>
              <textarea
                value={skillsText}
                onChange={(e) => {
                  const value = e.target.value;
                  setSkillsText(value);

                  setFormData((prevData: any) => {
                    const newData = { ...prevData };
                    newData.skills = value.split(',').map((skill: string) => skill.trim()).filter((skill: string) => skill);
                    return newData;
                  });

                  isInternalUpdate.current = true;
                  if (debounceRef.current) {
                    clearTimeout(debounceRef.current);
                  }
                  debounceRef.current = setTimeout(() => {
                    setFormData((currentData: any) => {
                      onDataChange(currentData);
                      return currentData;
                    });
                    isInternalUpdate.current = false;
                  }, 150);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (skillsText && !skillsText.endsWith(', ') && !skillsText.endsWith(',')) {
                      setSkillsText(skillsText + ', ');
                    }
                  }
                }}
                rows={4}
                className="input-field resize-none"
                placeholder="JavaScript, React, Node.js, Python, AWS, Project Management, Leadership..."
              />
              {renderSkillSuggestions(skillsText)}
            </div>
          )}
        </div>

        {/* Skills with Categories */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Categorized Skills (Optional - for enhanced display)</label>
            <button
              onClick={addSkillCategory}
              className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center text-sm font-semibold shadow-md hover:shadow-lg active:scale-95"
            >
              <Plus className="w-3.5 h-3.5 mr-1.5" />
              <span>Add Skill</span>
            </button>
          </div>
          {formData?.skillsCategories?.map((skill: any, index: number) => (
            <div key={index} className="border border-gray-200 dark:border-slate-600 rounded-lg p-4 mb-3">
              <div className="flex justify-between items-start mb-3">
                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Skill {index + 1}</h5>
                <button
                  onClick={() => removeSkillCategory(index)}
                  className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  value={skill.name || ''}
                  onChange={(e) => handleInputChange('skillsCategories', 'name', e.target.value, index)}
                  className="input-field"
                  placeholder="Skill name"
                />
                <select
                  value={skill.category || 'Technical'}
                  onChange={(e) => handleInputChange('skillsCategories', 'category', e.target.value, index)}
                  className="input-field"
                >
                  <option value="Technical">Technical</option>
                  <option value="Soft Skills">Soft Skills</option>
                  <option value="Tools">Tools</option>
                </select>
                <select
                  value={skill.proficiency || 'Intermediate'}
                  onChange={(e) => handleInputChange('skillsCategories', 'proficiency', e.target.value, index)}
                  className="input-field"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-blue-600" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Projects (Optional)</h4>
          </div>
          <button
            onClick={addProject}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl active:scale-95 sm:min-w-[140px]"
          >
            <Plus className="w-4 h-4 mr-2" />
            <span>Add Project</span>
          </button>
        </div>
        {formData?.projects?.map((project: any, index: number) => (
          <div key={index} className="border-2 border-gray-200 dark:border-slate-600 rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h5 className="font-semibold text-gray-900 dark:text-white">Project {index + 1}</h5>
              <button
                onClick={() => removeProject(index)}
                className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              value={project.title || ''}
              onChange={(e) => handleInputChange('projects', 'title', e.target.value, index)}
              className="input-field"
              placeholder="Project Title"
            />
            <textarea
              value={project.description || ''}
              onChange={(e) => handleInputChange('projects', 'description', e.target.value, index)}
              rows={3}
              className="input-field resize-none"
              placeholder="Project description and key achievements"
            />
            <input
              type="url"
              value={project.url || ''}
              onChange={(e) => handleInputChange('projects', 'url', e.target.value, index)}
              className="input-field"
              placeholder="Project URL (optional)"
            />
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <Award className="w-6 h-6 text-blue-600" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Certifications (Optional)</h4>
          </div>
          <button
            onClick={addCertification}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl active:scale-95 sm:min-w-[180px]"
          >
            <Plus className="w-4 h-4 mr-2" />
            <span>Add Certification</span>
          </button>
        </div>
        {formData?.certifications?.map((cert: any, index: number) => (
          <div key={index} className="border-2 border-gray-200 dark:border-slate-600 rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h5 className="font-semibold text-gray-900 dark:text-white">Certification {index + 1}</h5>
              <button
                onClick={() => removeCertification(index)}
                className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              value={cert.name || ''}
              onChange={(e) => handleInputChange('certifications', 'name', e.target.value, index)}
              className="input-field"
              placeholder="Certification Name"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={cert.issuer || ''}
                onChange={(e) => handleInputChange('certifications', 'issuer', e.target.value, index)}
                className="input-field"
                placeholder="Issuing Organization"
              />
              <input
                type="text"
                value={cert.year || ''}
                onChange={(e) => handleInputChange('certifications', 'year', e.target.value, index)}
                className="input-field"
                placeholder="Year Obtained"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-blue-600" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Achievements (Optional)</h4>
          </div>
          <button
            onClick={addAchievement}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl active:scale-95 sm:min-w-[180px]"
          >
            <Plus className="w-4 h-4 mr-2" />
            <span>Add Achievement</span>
          </button>
        </div>
        {formData?.achievements?.map((achievement: any, index: number) => (
          <div key={index} className="border-2 border-gray-200 dark:border-slate-600 rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h5 className="font-semibold text-gray-900 dark:text-white">Achievement {index + 1}</h5>
              <button
                onClick={() => removeAchievement(index)}
                className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              value={achievement.title || ''}
              onChange={(e) => handleInputChange('achievements', 'title', e.target.value, index)}
              className="input-field"
              placeholder="Achievement Title"
            />
            <textarea
              value={achievement.description || ''}
              onChange={(e) => handleInputChange('achievements', 'description', e.target.value, index)}
              rows={2}
              className="input-field resize-none"
              placeholder="Brief description of the achievement"
            />
          </div>
        ))}
      </div>

      {/* Languages */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <Languages className="w-6 h-6 text-blue-600" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Languages (Optional)</h4>
          </div>
          <button
            onClick={addLanguage}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl active:scale-95 sm:min-w-[160px]"
          >
            <Plus className="w-4 h-4 mr-2" />
            <span>Add Language</span>
          </button>
        </div>
        {formData?.languages?.map((language: any, index: number) => (
          <div key={index} className="border-2 border-gray-200 dark:border-slate-600 rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h5 className="font-semibold text-gray-900 dark:text-white">Language {index + 1}</h5>
              <button
                onClick={() => removeLanguage(index)}
                className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={language.name || ''}
                onChange={(e) => handleInputChange('languages', 'name', e.target.value, index)}
                className="input-field"
                placeholder="Language Name"
              />
              <select
                value={language.proficiency || ''}
                onChange={(e) => handleInputChange('languages', 'proficiency', e.target.value, index)}
                className="input-field"
              >
                <option value="">Select Proficiency</option>
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Professional">Professional</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Basic">Basic</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Hobbies */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Heart className="w-6 h-6 text-blue-600" />
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Hobbies & Interests (Optional)</h4>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Hobbies (comma-separated)</label>
          <textarea
            value={hobbiesText}
            onChange={(e) => {
              const value = e.target.value;
              setHobbiesText(value);

              setFormData((prevData: any) => {
                const newData = { ...prevData };
                newData.hobbies = value.split(',').map((hobby: string) => hobby.trim()).filter((hobby: string) => hobby);
                return newData;
              });

              isInternalUpdate.current = true;
              if (debounceRef.current) {
                clearTimeout(debounceRef.current);
              }
              debounceRef.current = setTimeout(() => {
                setFormData((currentData: any) => {
                  onDataChange(currentData);
                  return currentData;
                });
                isInternalUpdate.current = false;
              }, 150);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                if (hobbiesText && !hobbiesText.endsWith(', ') && !hobbiesText.endsWith(',')) {
                  setHobbiesText(hobbiesText + ', ');
                }
              }
            }}
            rows={2}
            className="input-field resize-none"
            placeholder="Photography, Hiking, Reading, Volunteering..."
          />
        </div>
      </div>

      {/* References */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <FileUser className="w-6 h-6 text-blue-600" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">References (Optional)</h4>
          </div>
          <button
            onClick={addReference}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl active:scale-95 sm:min-w-[160px]"
          >
            <Plus className="w-4 h-4 mr-2" />
            <span>Add Reference</span>
          </button>
        </div>
        {formData?.references?.map((reference: any, index: number) => (
          <div key={index} className="border-2 border-gray-200 dark:border-slate-600 rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h5 className="font-semibold text-gray-900 dark:text-white">Reference {index + 1}</h5>
              <button
                onClick={() => removeReference(index)}
                className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              value={reference.name || ''}
              onChange={(e) => handleInputChange('references', 'name', e.target.value, index)}
              className="input-field"
              placeholder="Reference Name"
            />
            <input
              type="text"
              value={reference.title || ''}
              onChange={(e) => handleInputChange('references', 'title', e.target.value, index)}
              className="input-field"
              placeholder="Job Title & Company"
            />
            <input
              type="text"
              value={reference.contact || ''}
              onChange={(e) => handleInputChange('references', 'contact', e.target.value, index)}
              className="input-field"
              placeholder="Contact Information (Email or Phone)"
            />
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Globe className="w-6 h-6 text-blue-600" />
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Social Links (Optional)</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn URL
            </label>
            <input
              type="url"
              value={formData?.socialLinks?.linkedin || ''}
              onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
              className="input-field"
              placeholder="https://linkedin.com/in/username"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <Github className="w-4 h-4 mr-2" />
              GitHub URL
            </label>
            <input
              type="url"
              value={formData?.socialLinks?.github || ''}
              onChange={(e) => handleSocialLinkChange('github', e.target.value)}
              className="input-field"
              placeholder="https://github.com/username"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Personal Website
            </label>
            <input
              type="url"
              value={formData?.socialLinks?.website || ''}
              onChange={(e) => handleSocialLinkChange('website', e.target.value)}
              className="input-field"
              placeholder="https://yourwebsite.com"
            />
          </div>
        </div>
      </div>

      {/* Success Indicator */}
      {formData?.personalInfo?.fullName && formData?.personalInfo?.email && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-300 font-medium">
              Great! Your resume is taking shape. Keep adding details to improve your ATS score.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableResumeForm;
