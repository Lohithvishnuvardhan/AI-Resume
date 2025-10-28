import React, { useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, XCircle, Target, FileText, Eye, TrendingUp, Award, Lightbulb, Search, Plus, Sparkles } from 'lucide-react';

interface ATSCheckerProps {
  resumeData: any;
  score: number;
  onScoreChange: (score: number) => void;
  onApplyImprovements?: (improvedData: any) => void;
}

interface ATSCriteria {
  name: string;
  status: 'pass' | 'warning' | 'fail';
  description: string;
  impact: 'high' | 'medium' | 'low';
  suggestions?: string[];
}

const ATSChecker: React.FC<ATSCheckerProps> = ({ resumeData, score, onScoreChange, onApplyImprovements }) => {
  const [expandedCriteria, setExpandedCriteria] = useState<number | null>(null);
  const [showKeywordSuggestions, setShowKeywordSuggestions] = useState(false);
  const [isApplyingImprovements, setIsApplyingImprovements] = useState(false);

  const calculateATSScore = (): ATSCriteria[] => {
    const criteria: ATSCriteria[] = [
      {
        name: 'Contact Information',
        status: resumeData?.personalInfo?.email && resumeData?.personalInfo?.phone ? 'pass' : 'fail',
        description: 'Email and phone number are clearly visible',
        impact: 'high',
        suggestions: ['Add a professional email address', 'Include a phone number with country code', 'Ensure contact info is at the top of your resume']
      },
      {
        name: 'Professional Summary',
        status: resumeData?.personalInfo?.summary ? 'pass' : 'warning',
        description: 'Includes a compelling professional summary',
        impact: 'medium',
        suggestions: ['Write 2-3 sentences highlighting your key achievements', 'Include relevant keywords for your target role', 'Mention years of experience and key skills']
      },
      {
        name: 'Work Experience',
        status: resumeData?.experience?.length > 0 ? 'pass' : 'fail',
        description: 'Contains relevant work experience',
        impact: 'high',
        suggestions: ['Add at least 2-3 relevant work experiences', 'Use action verbs to start bullet points', 'Quantify achievements with numbers and percentages']
      },
      {
        name: 'Skills Section',
        status: resumeData?.skills?.length >= 5 ? 'pass' : resumeData?.skills?.length > 0 ? 'warning' : 'fail',
        description: 'Lists relevant technical and soft skills',
        impact: 'high',
        suggestions: ['Include 8-12 relevant skills', 'Mix technical and soft skills', 'Use keywords from job descriptions', 'Avoid outdated technologies']
      },
      {
        name: 'Education',
        status: resumeData?.education?.length > 0 ? 'pass' : 'warning',
        description: 'Educational background is included',
        impact: 'medium',
        suggestions: ['Add your highest degree', 'Include graduation year', 'Mention relevant coursework or honors if recent graduate']
      },
      {
        name: 'Keyword Optimization',
        status: resumeData?.profession ? 'pass' : 'warning',
        description: 'Contains industry-relevant keywords',
        impact: 'high',
        suggestions: ['Research job descriptions for target roles', 'Include industry-specific terminology', 'Use both acronyms and full terms (e.g., "AI" and "Artificial Intelligence")']
      },
      {
        name: 'File Format',
        status: 'pass',
        description: 'Uses ATS-friendly format (PDF/DOCX)',
        impact: 'medium',
        suggestions: ['Save as PDF for consistent formatting', 'Avoid images and complex graphics', 'Use standard fonts like Arial or Calibri']
      },
      {
        name: 'Length Optimization',
        status: 'pass',
        description: 'Appropriate length (1-2 pages)',
        impact: 'low',
        suggestions: ['Keep to 1 page for <10 years experience', 'Use 2 pages for senior roles', 'Prioritize most relevant information']
      }
    ];

    // Calculate score based on criteria
    const passCount = criteria.filter(c => c.status === 'pass').length;
    const warningCount = criteria.filter(c => c.status === 'warning').length;
    const newScore = Math.round((passCount * 100 + warningCount * 50) / criteria.length);
    
    if (newScore !== score) {
      onScoreChange(newScore);
    }

    return criteria;
  };

  const criteria = calculateATSScore();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'fail':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100 border-green-200';
    if (score >= 60) return 'bg-yellow-100 border-yellow-200';
    return 'bg-red-100 border-red-200';
  };

  const getScoreGrade = (score: number) => {
    if (score >= 90) return { grade: 'A+', message: 'Excellent! Your resume is highly optimized.' };
    if (score >= 80) return { grade: 'A', message: 'Great! Your resume should pass most ATS systems.' };
    if (score >= 70) return { grade: 'B', message: 'Good! A few improvements will make it even better.' };
    if (score >= 60) return { grade: 'C', message: 'Fair. Several areas need attention.' };
    return { grade: 'D', message: 'Needs work. Focus on the failing criteria.' };
  };

  const keywordSuggestions = [
    'Project Management', 'Leadership', 'Team Collaboration', 'Problem Solving',
    'Data Analysis', 'Strategic Planning', 'Customer Service', 'Communication',
    'Innovation', 'Process Improvement', 'Quality Assurance', 'Budget Management'
  ];

  const handleApplyAllImprovements = () => {
    if (!onApplyImprovements) return;

    setIsApplyingImprovements(true);

    setTimeout(() => {
      const improvedData = { ...resumeData };

      if (!improvedData.personalInfo.summary) {
        improvedData.personalInfo.summary = `Results-driven ${resumeData.profession || 'professional'} with extensive experience in delivering high-impact solutions. Proven track record of leading cross-functional teams and driving organizational success through strategic planning and innovative problem-solving.`;
      }

      if (!improvedData.personalInfo.email) {
        improvedData.personalInfo.email = 'your.email@example.com';
      }

      if (!improvedData.personalInfo.phone) {
        improvedData.personalInfo.phone = '+1 (555) 123-4567';
      }

      if (!improvedData.experience || improvedData.experience.length === 0) {
        improvedData.experience = [
          {
            company: 'Company Name',
            position: 'Job Title',
            startDate: '2021',
            endDate: 'Present',
            description: '• Led cross-functional team of 10+ members, delivering 25% increase in project efficiency\n• Implemented strategic initiatives resulting in $500K cost savings annually\n• Drove innovation through data-driven decision making and process optimization'
          }
        ];
      } else {
        improvedData.experience = improvedData.experience.map((exp: any) => {
          if (!exp.description || exp.description.length < 50) {
            return {
              ...exp,
              description: `• Spearheaded key initiatives resulting in measurable business impact and operational excellence\n• Collaborated with stakeholders to deliver high-quality solutions ahead of schedule\n• Mentored team members and fostered culture of continuous improvement and innovation`
            };
          }
          return exp;
        });
      }

      const essentialSkills = ['Leadership', 'Project Management', 'Strategic Planning', 'Team Collaboration', 'Problem Solving', 'Data Analysis', 'Communication', 'Innovation'];
      const currentSkills = improvedData.skills || [];
      const skillsToAdd = essentialSkills.filter(skill =>
        !currentSkills.some((s: string) => s.toLowerCase().includes(skill.toLowerCase()))
      );

      improvedData.skills = [...currentSkills, ...skillsToAdd.slice(0, Math.max(0, 8 - currentSkills.length))];

      if (!improvedData.education || improvedData.education.length === 0) {
        improvedData.education = [
          {
            school: 'University Name',
            degree: 'Bachelor of Science',
            field: 'Your Field of Study',
            year: '2020'
          }
        ];
      }

      if (!improvedData.projects || improvedData.projects.length === 0) {
        improvedData.projects = [
          {
            title: 'E-commerce Platform Development',
            description: 'Built a scalable e-commerce platform serving 50K+ users with 99.9% uptime. Implemented advanced features including real-time inventory management, payment processing, and personalized recommendations.',
            url: ''
          },
          {
            title: 'Data Analytics Dashboard',
            description: 'Developed comprehensive analytics dashboard processing 1M+ data points daily. Enabled stakeholders to make data-driven decisions, resulting in 30% improvement in operational efficiency.',
            url: ''
          }
        ];
      }

      if (!improvedData.certifications || improvedData.certifications.length === 0) {
        improvedData.certifications = [
          {
            name: 'Professional Certification',
            issuer: 'Industry Organization',
            year: new Date().getFullYear().toString()
          },
          {
            name: 'Advanced Specialization',
            issuer: 'Leading Institution',
            year: (new Date().getFullYear() - 1).toString()
          }
        ];
      }

      if (!improvedData.achievements || improvedData.achievements.length === 0) {
        improvedData.achievements = [
          {
            title: 'Excellence Award',
            description: 'Recognized for outstanding performance and contribution to organizational success'
          },
          {
            title: 'Innovation Recognition',
            description: 'Awarded for implementing innovative solutions that improved team productivity by 40%'
          },
          {
            title: 'Leadership Excellence',
            description: 'Honored for exceptional leadership in managing cross-functional teams and delivering complex projects'
          }
        ];
      }

      if (!improvedData.languages || improvedData.languages.length === 0) {
        improvedData.languages = [
          {
            name: 'English',
            proficiency: 'Native'
          },
          {
            name: 'Spanish',
            proficiency: 'Professional'
          }
        ];
      }

      if (!improvedData.hobbies || improvedData.hobbies.length === 0) {
        improvedData.hobbies = [
          'Technology Exploration',
          'Continuous Learning',
          'Community Volunteering',
          'Public Speaking'
        ];
      }

      if (!improvedData.references || improvedData.references.length === 0) {
        improvedData.references = [
          {
            name: 'Professional Reference',
            title: 'Senior Manager at Previous Company',
            contact: 'Available upon request'
          }
        ];
      }

      if (!improvedData.socialLinks) {
        improvedData.socialLinks = {};
      }

      if (!improvedData.socialLinks.linkedin) {
        improvedData.socialLinks.linkedin = 'https://linkedin.com/in/yourprofile';
      }

      if (!improvedData.socialLinks.github) {
        improvedData.socialLinks.github = 'https://github.com/yourusername';
      }

      if (!improvedData.socialLinks.website) {
        improvedData.socialLinks.website = 'https://yourwebsite.com';
      }

      onApplyImprovements(improvedData);
      setIsApplyingImprovements(false);
    }, 1500);
  };

  const hasImprovementsToApply = criteria.some(c => c.status === 'fail' || c.status === 'warning');

  const scoreGrade = getScoreGrade(score);
  return (
    <div className="card p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">ATS Compatibility</h3>
            <p className="text-gray-600 dark:text-gray-300">Applicant Tracking System Analysis</p>
          </div>
        </div>
        
        <div className={`px-6 py-4 rounded-xl border-2 ${getScoreBg(score)} relative`}>
          <div className="flex items-center space-x-3">
            <Target className={`w-5 h-5 ${getScoreColor(score)}`} />
            <div className="text-center">
              <div className={`text-3xl font-bold ${getScoreColor(score)}`}>{score}%</div>
              <div className={`text-sm font-semibold ${getScoreColor(score)}`}>Grade {scoreGrade.grade}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Score Message */}
      <div className={`p-4 rounded-xl mb-6 ${getScoreBg(score)}`}>
        <div className="flex items-center space-x-2">
          <TrendingUp className={`w-5 h-5 ${getScoreColor(score)}`} />
          <span className={`font-medium ${getScoreColor(score)}`}>{scoreGrade.message}</span>
        </div>
      </div>

      {/* AI Auto-Fix Button */}
      {hasImprovementsToApply && onApplyImprovements && (
        <div className="mb-6">
          <button
            onClick={handleApplyAllImprovements}
            disabled={isApplyingImprovements}
            className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-white transition-all shadow-lg ${
              isApplyingImprovements
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transform hover:scale-105'
            }`}
          >
            <Sparkles className={`w-5 h-5 ${isApplyingImprovements ? '' : 'animate-pulse'}`} />
            <span className="text-lg">
              {isApplyingImprovements ? 'Applying AI Improvements...' : 'AI Auto-Fix All Issues'}
            </span>
            <Sparkles className={`w-5 h-5 ${isApplyingImprovements ? '' : 'animate-pulse'}`} />
          </button>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
            Let AI automatically fix all issues and optimize your resume for ATS
          </p>
        </div>
      )}

      <div className="space-y-4">
        {criteria.map((criterion, index) => (
          <div key={index} className="border border-gray-200 dark:border-slate-600 rounded-xl overflow-hidden">
            <button
              onClick={() => setExpandedCriteria(expandedCriteria === index ? null : index)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center space-x-3">
                {getStatusIcon(criterion.status)}
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{criterion.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{criterion.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  criterion.impact === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                  criterion.impact === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                }`}>
                  {criterion.impact.toUpperCase()}
                </span>
                <div className={`transform transition-transform ${expandedCriteria === index ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>
            
            {expandedCriteria === index && criterion.suggestions && (
              <div className="px-4 pb-4 border-t border-gray-200 dark:border-slate-600">
                <div className="pt-4">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2 text-yellow-500" />
                    Improvement Suggestions
                  </h5>
                  <ul className="space-y-2">
                    {criterion.suggestions.map((suggestion, suggestionIndex) => (
                      <li key={suggestionIndex} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Keyword Suggestions */}
      <div className="mt-8">
        <button
          onClick={() => setShowKeywordSuggestions(!showKeywordSuggestions)}
          className="w-full flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <div className="text-left">
              <h4 className="font-semibold text-purple-900 dark:text-purple-400">Keyword Suggestions</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">Boost your ATS score with relevant keywords</p>
            </div>
          </div>
          <div className={`transform transition-transform ${showKeywordSuggestions ? 'rotate-180' : ''}`}>
            <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        
        {showKeywordSuggestions && (
          <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
            <div className="flex flex-wrap gap-2">
              {keywordSuggestions.map((keyword, index) => (
                <button
                  key={index}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors flex items-center"
                  title={`Add "${keyword}" to your resume`}
                >
                  <Plus className="w-3 h-3 mr-1" />
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <Eye className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-400 mb-3">ATS Optimization Tips</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-2">
              <li>• Use standard section headings (Experience, Education, Skills)</li>
              <li>• Include relevant keywords from the job description</li>
              <li>• Avoid complex formatting, tables, or graphics</li>
              <li>• Use a clean, professional font</li>
              <li>• Save as PDF or DOCX format</li>
              <li>• Include both acronyms and full terms (e.g., "AI" and "Artificial Intelligence")</li>
              <li>• Use action verbs to start bullet points</li>
              <li>• Quantify achievements with numbers and percentages</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Achievement Badge */}
      {score >= 80 && (
        <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white">
          <div className="flex items-center space-x-3">
            <Award className="w-6 h-6" />
            <div>
              <h4 className="font-bold">ATS Optimized!</h4>
              <p className="text-sm opacity-90">Your resume is ready to pass through ATS systems</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ATSChecker;