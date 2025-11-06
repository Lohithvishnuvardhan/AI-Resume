import React, { useState } from 'react';
import { Sparkles, RefreshCw, Copy, Download, User, Briefcase, GraduationCap, Award, Target, Wand2 } from 'lucide-react';

interface AIResumeGeneratorProps {
  isVisible: boolean;
  onClose: () => void;
  onResumeGenerated: (resumeData: any) => void;
}

interface UserInput {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    title: string;
  };
  profession: string;
  experience: string;
  skills: string;
  education: string;
  achievements: string;
  jobDescription?: string;
  yearsOfExperience: string;
  careerLevel: string;
}

const AIResumeGenerator: React.FC<AIResumeGeneratorProps> = ({ 
  isVisible, 
  onClose, 
  onResumeGenerated 
}) => {
  const [userInput, setUserInput] = useState<UserInput>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      title: ''
    },
    profession: '',
    experience: '',
    skills: '',
    education: '',
    achievements: '',
    jobDescription: '',
    yearsOfExperience: '',
    careerLevel: ''
  });

  const [generatedResume, setGeneratedResume] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const professions = [
    'Software Engineer', 'Product Manager', 'Data Scientist', 'Marketing Manager',
    'Sales Representative', 'Designer', 'Financial Analyst', 'Project Manager',
    'HR Manager', 'Operations Manager', 'Consultant', 'DevOps Engineer',
    'Business Analyst', 'UX/UI Designer', 'Account Manager', 'Other'
  ];

  const careerLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (3-5 years)', 
    'Senior Level (6-10 years)',
    'Executive Level (10+ years)'
  ];

  const generateResume = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation with realistic delay
    setTimeout(() => {
      const resume = {
        personalInfo: {
          ...userInput.personalInfo,
          summary: generateAdvancedSummary()
        },
        experience: generateAdvancedExperience(),
        education: generateAdvancedEducation(),
        skills: generateAdvancedSkills(),
        profession: userInput.profession
      };

      setGeneratedResume(resume);
      setIsGenerating(false);
    }, 3000);
  };

  const generateAdvancedSummary = () => {
    // Generate summary based on user's actual input data
    const yearsExp = userInput.yearsOfExperience || 'several';
    const profession = userInput.profession || userInput.personalInfo.title || 'Professional';
    const skills = userInput.skills ? userInput.skills.split(',').slice(0, 3).map(s => s.trim()).join(', ') : '';
    const achievements = userInput.achievements ? userInput.achievements.split('\n')[0] : '';
    
    let summary = `Dedicated and experienced ${profession}`;
    
    if (yearsExp !== 'several') {
      summary += ` with ${yearsExp}+ years of professional experience`;
    }
    
    if (skills) {
      summary += ` specializing in ${skills}`;
    }
    
    summary += '. ';
    
    if (achievements) {
      summary += `Proven track record including ${achievements.toLowerCase()}. `;
    }
    
    if (userInput.jobDescription) {
      summary += `Seeking to leverage expertise and experience to contribute to organizational success in a challenging ${profession} role. `;
    }
    
    summary += `Strong analytical and problem-solving abilities with excellent communication skills and a commitment to delivering high-quality results. `;
    
    if (userInput.careerLevel.includes('Senior') || userInput.careerLevel.includes('Executive')) {
      summary += `Experienced in leading teams and managing complex projects while maintaining focus on strategic objectives and operational excellence.`;
    } else if (userInput.careerLevel.includes('Mid')) {
      summary += `Demonstrated ability to work independently and collaboratively in fast-paced environments while consistently meeting deadlines and exceeding expectations.`;
    } else {
      summary += `Eager to apply knowledge and skills in a dynamic environment while contributing to team success and organizational growth.`;
    }
    
    return summary;
  };

  const generateAdvancedExperience = () => {
    if (!userInput.experience || userInput.experience.trim() === '') {
      return []; // Return empty array if no experience provided
    }

    const experiences = userInput.experience.split('\n').filter(exp => exp.trim());
    return experiences.map((exp, index) => {
      // Parse user input more carefully
      let position, company, duration = '';
      
      if (exp.includes(' at ')) {
        const parts = exp.split(' at ');
        position = parts[0]?.trim();
        const companyPart = parts[1]?.trim();
        
        // Check if duration is included
        if (companyPart && companyPart.includes('(') && companyPart.includes(')')) {
          const durationMatch = companyPart.match(/\(([^)]+)\)/);
          duration = durationMatch ? durationMatch[1] : generateDuration(index);
          company = companyPart.replace(/\s*\([^)]+\)/, '').trim();
        } else {
          company = companyPart;
          duration = generateDuration(index);
        }
      } else {
        // If format is different, try to extract what we can
        position = exp.trim();
        company = 'Company Name'; // Placeholder
        duration = generateDuration(index);
      }
      
      return {
        company: company || 'Company Name',
        position: position || 'Position Title',
        duration: generateDuration(index),
        description: generateDetailedExperienceDescription(position || 'Position Title', company || 'Company Name', index)
      };
    });
  };

  const generateDuration = (index: number) => {
    const currentYear = new Date().getFullYear();
    if (index === 0) return `${currentYear - 2} - Present`;
    if (index === 1) return `${currentYear - 5} - ${currentYear - 2}`;
    return `${currentYear - 8} - ${currentYear - 5}`;
  };

  const generateDetailedExperienceDescription = (position: string, company: string, index: number) => {
    // Create more detailed, comprehensive descriptions based on user's achievements and job description
    let description = '';
    
    // Use user's achievements if provided
    if (userInput.achievements) {
      const achievementsList = userInput.achievements.split('\n').filter(a => a.trim());
      if (achievementsList.length > index) {
        description += `• ${achievementsList[index].trim()}\n`;
      }
    }
    
    // Add job-specific responsibilities based on profession
    const responsibilities = {
      'Software Engineer': [
        'Designed and developed scalable web applications using modern frameworks and technologies',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented best practices for code quality, testing, and deployment processes',
        'Participated in code reviews and mentored junior developers',
        'Troubleshot and resolved complex technical issues to ensure optimal system performance'
      ],
      'Product Manager': [
        'Managed product lifecycle from conception to launch, ensuring alignment with business objectives',
        'Conducted market research and user analysis to inform product strategy and feature prioritization',
        'Collaborated with engineering, design, and marketing teams to deliver successful product releases',
        'Analyzed product metrics and user feedback to drive continuous improvement initiatives',
        'Facilitated stakeholder meetings and presented product updates to executive leadership'
      ],
      'Data Scientist': [
        'Developed and implemented machine learning models to solve complex business problems',
        'Analyzed large datasets to extract meaningful insights and identify trends',
        'Created data visualizations and reports to communicate findings to stakeholders',
        'Collaborated with business teams to understand requirements and translate them into analytical solutions',
        'Maintained and optimized data pipelines to ensure data quality and accessibility'
      ],
      'Marketing Manager': [
        'Developed and executed comprehensive marketing strategies to drive brand awareness and lead generation',
        'Managed multi-channel marketing campaigns across digital and traditional media platforms',
        'Analyzed campaign performance metrics and optimized strategies for maximum ROI',
        'Collaborated with sales teams to align marketing efforts with revenue objectives',
        'Created compelling content and messaging to engage target audiences effectively'
      ],
      'Designer': [
        'Created user-centered designs for web and mobile applications',
        'Conducted user research and usability testing to inform design decisions',
        'Developed wireframes, prototypes, and high-fidelity mockups for various projects',
        'Collaborated with product managers and developers to ensure design feasibility',
        'Maintained design systems and style guides to ensure consistency across products'
      ],
      'default': [
        'Executed key responsibilities and contributed to team objectives and organizational goals',
        'Collaborated effectively with colleagues and stakeholders to achieve project milestones',
        'Demonstrated strong problem-solving skills and attention to detail in all assignments',
        'Participated in professional development activities and stayed current with industry trends',
        'Maintained high standards of quality and professionalism in all work deliverables'
      ]
    };

    const professionResponsibilities = responsibilities[userInput.profession as keyof typeof responsibilities] || responsibilities.default;
    
    // Add 3-4 responsibilities per role for more comprehensive content
    const selectedResponsibilities = professionResponsibilities.slice(0, 4);
    selectedResponsibilities.forEach(resp => {
      description += `• ${resp}\n`;
    });
    
    // Add skills-based responsibilities if skills are provided
    if (userInput.skills) {
      const skillsList = userInput.skills.split(',').map(s => s.trim()).slice(0, 3);
      if (skillsList.length > 0) {
        description += `• Utilized expertise in ${skillsList.join(', ')} to deliver technical solutions\n`;
      }
    }
    
    // Add job description alignment if provided
    if (userInput.jobDescription && index === 0) {
      description += `• Aligned work with organizational objectives and contributed to strategic initiatives\n`;
    }
    
    return description.trim();
  };

  const generateAdvancedEducation = () => {
    if (!userInput.education || userInput.education.trim() === '') {
      return []; // Return empty array if no education provided
    }

    const educationEntries = userInput.education.split('\n').filter(edu => edu.trim());
    return educationEntries.map(edu => {
      let degree, school, year = '';
      
      if (edu.includes(' from ')) {
        const parts = edu.split(' from ');
        degree = parts[0]?.trim();
        const schoolPart = parts[1]?.trim();
        
        // Check if year is included
        if (schoolPart && schoolPart.includes('(') && schoolPart.includes(')')) {
          const yearMatch = schoolPart.match(/\(([^)]+)\)/);
          year = yearMatch ? yearMatch[1] : '2020';
          school = schoolPart.replace(/\s*\([^)]+\)/, '').trim();
        } else {
          school = schoolPart;
          year = '2020';
        }
      } else {
        // Try to parse different formats
        degree = edu.trim();
        school = 'University Name';
        year = '2020';
      }
      
      return {
        school: school || 'University Name',
        degree: degree || 'Degree',
        year: year || '2020',
        details: userInput.achievements ? `Relevant coursework and activities aligned with career objectives` : ''
      };
    });
  };

  const generateAdvancedSkills = () => {
    let skillsArray = [];
    
    if (userInput.skills) {
      skillsArray = userInput.skills.split(',').map(skill => skill.trim()).filter(skill => skill);
      return skillsArray; // Return only user-provided skills
    }
    
    // Only add profession-specific skills if user didn't provide any
    const professionSkills = {
      'Software Engineer': [
        'Programming Languages', 'Web Development', 'Database Management', 'Version Control'
      ],
      'Product Manager': [
        'Product Strategy', 'Project Management', 'Market Analysis', 'Stakeholder Management'
      ],
      'Data Scientist': [
        'Data Analysis', 'Statistical Modeling', 'Machine Learning', 'Data Visualization'
      ],
      'Marketing Manager': [
        'Digital Marketing', 'Campaign Management', 'Market Research', 'Brand Strategy'
      ],
      'Designer': [
        'Design Software', 'User Experience', 'Visual Design', 'Prototyping'
      ],
      'default': [
        'Communication', 'Problem Solving', 'Team Collaboration', 'Project Management'
      ]
    };

    const defaultSkills = professionSkills[userInput.profession as keyof typeof professionSkills] || professionSkills.default;
    
    return defaultSkills;
  };

  const copyResumeData = () => {
    if (generatedResume) {
      const resumeText = JSON.stringify(generatedResume, null, 2);
      navigator.clipboard.writeText(resumeText);
    }
  };

  const useGeneratedResume = () => {
    if (generatedResume) {
      onResumeGenerated(generatedResume);
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Wand2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">AI Resume Generator</h2>
                <p className="opacity-90">Create a professional resume with AI assistance</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-2xl"
            >
              ×
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step ? 'bg-white text-purple-600' : 'bg-white/20 text-white'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    currentStep > step ? 'bg-white' : 'bg-white/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-[calc(90vh-140px)]">
          {/* Input Form */}
          <div className="w-1/2 p-6 border-r border-gray-200 overflow-y-auto">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={userInput.personalInfo.fullName}
                      onChange={(e) => setUserInput(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, fullName: e.target.value }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title *</label>
                    <input
                      type="text"
                      value={userInput.personalInfo.title}
                      onChange={(e) => setUserInput(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, title: e.target.value }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Senior Software Engineer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={userInput.personalInfo.email}
                      onChange={(e) => setUserInput(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, email: e.target.value }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={userInput.personalInfo.phone}
                      onChange={(e) => setUserInput(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, phone: e.target.value }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={userInput.personalInfo.location}
                    onChange={(e) => setUserInput(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, location: e.target.value }
                    }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="San Francisco, CA"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profession *</label>
                    <select
                      value={userInput.profession}
                      onChange={(e) => setUserInput(prev => ({ ...prev, profession: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Select your profession</option>
                      {professions.map(prof => (
                        <option key={prof} value={prof}>{prof}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                    <select
                      value={userInput.yearsOfExperience}
                      onChange={(e) => setUserInput(prev => ({ ...prev, yearsOfExperience: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Select experience</option>
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                      <option value="3">3 Years</option>
                      <option value="4">4 Years</option>
                      <option value="5">5 Years</option>
                      <option value="7">7 Years</option>
                      <option value="10">10+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Career Level</label>
                  <select
                    value={userInput.careerLevel}
                    onChange={(e) => setUserInput(prev => ({ ...prev, careerLevel: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select career level</option>
                    {careerLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Professional Background</h3>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Experience (Optional)</label>
                  <textarea
                    value={userInput.experience}
                    onChange={(e) => setUserInput(prev => ({ ...prev, experience: e.target.value }))}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Senior Developer at TechCorp (2020-Present)&#10;Frontend Developer at StartupXYZ (2018-2020)&#10;Junior Developer at WebCorp (2016-2018)&#10;&#10;Format: Position at Company (Duration)&#10;Add more lines for longer resume"
                  />
                  <p className="text-sm text-gray-500 mt-1">Enter each position on a new line. More entries = longer resume</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skills (Optional)</label>
                  <textarea
                    value={userInput.skills}
                    onChange={(e) => setUserInput(prev => ({ ...prev, skills: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="JavaScript, React, Node.js, Python, AWS, Docker, PostgreSQL, Git, CI/CD, Kubernetes, TypeScript, GraphQL, Redis, MongoDB, Microservices, REST APIs&#10;&#10;Add more skills for comprehensive resume"
                  />
                  <p className="text-sm text-gray-500 mt-1">Separate skills with commas. More skills = more detailed resume</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education (Optional)</label>
                  <textarea
                    value={userInput.education}
                    onChange={(e) => setUserInput(prev => ({ ...prev, education: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Master of Science in Computer Science from Stanford University (2020)&#10;Bachelor of Science in Computer Science from UC Berkeley (2018)&#10;Relevant Certifications and Training&#10;&#10;Format: Degree from School (Year)"
                  />
                  <p className="text-sm text-gray-500 mt-1">One per line. Include degrees, certifications, training</p>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Additional Details</h3>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Key Achievements (Optional)</label>
                  <textarea
                    value={userInput.achievements}
                    onChange={(e) => setUserInput(prev => ({ ...prev, achievements: e.target.value }))}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Increased team productivity by 40% through process optimization&#10;Led successful product launch that generated $2M in revenue&#10;Reduced system downtime by 60% through infrastructure improvements&#10;Managed team of 15 developers across multiple projects&#10;Implemented CI/CD pipeline reducing deployment time by 75%&#10;&#10;Add more achievements for detailed resume"
                  />
                  <p className="text-sm text-gray-500 mt-1">One achievement per line. More achievements = longer, more impressive resume</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Job Description (Optional)</label>
                  <textarea
                    value={userInput.jobDescription}
                    onChange={(e) => setUserInput(prev => ({ ...prev, jobDescription: e.target.value }))}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Paste the job description you're applying for to get better AI suggestions..."
                  />
                  <p className="text-sm text-gray-500 mt-1">This helps AI tailor your resume better</p>
                </div>

                <button
                  onClick={generateResume}
                  disabled={!userInput.personalInfo.fullName || !userInput.profession || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Generating Your Outstanding Resume...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate AI Resume
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {currentStep < 3 && (
                <button
                  onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Next
                </button>
              )}
            </div>
          </div>

          {/* Generated Resume Preview */}
          <div className="w-1/2 p-6 overflow-y-auto bg-gray-50">
            {generatedResume ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Generated Resume</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={copyResumeData}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 flex items-center text-sm"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </button>
                    <button
                      onClick={useGeneratedResume}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center text-sm font-semibold"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Use This Resume
                    </button>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  {/* Header */}
                  <div className="border-b border-gray-200 pb-4 mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">
                      {generatedResume.personalInfo.fullName}
                    </h1>
                    <p className="text-lg text-gray-600 mb-3">
                      {generatedResume.personalInfo.title}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span>{generatedResume.personalInfo.email}</span>
                      {generatedResume.personalInfo.phone && <span>{generatedResume.personalInfo.phone}</span>}
                      {generatedResume.personalInfo.location && <span>{generatedResume.personalInfo.location}</span>}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">Professional Summary</h2>
                    <p className="text-gray-700 leading-relaxed">{generatedResume.personalInfo.summary}</p>
                  </div>

                  {/* Experience */}
                  {generatedResume.experience.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Experience</h2>
                      <div className="space-y-4">
                        {generatedResume.experience.map((exp: any, index: number) => (
                          <div key={index} className="border-l-2 border-gray-200 pl-4">
                            <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                            <p className="text-gray-600">{exp.company} • {exp.duration}</p>
                            <p className="text-gray-700 mt-1 leading-relaxed">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Education */}
                  {generatedResume.education.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Education</h2>
                      <div className="space-y-2">
                        {generatedResume.education.map((edu: any, index: number) => (
                          <div key={index}>
                            <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                            <p className="text-gray-600">{edu.school} • {edu.year}</p>
                            {edu.details && <p className="text-sm text-gray-500 mt-1">{edu.details}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  {generatedResume.skills.length > 0 && (
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {generatedResume.skills.map((skill: string, index: number) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <Wand2 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">AI Resume Generator</p>
                  <p>Fill in your details and let AI create a professional resume for you</p>
                  <div className="mt-4 text-sm text-gray-400">
                    <p>✨ Outstanding achievements and metrics</p>
                    <p>🎯 Industry-specific content</p>
                    <p>🚀 ATS-optimized formatting</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIResumeGenerator;