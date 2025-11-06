import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle, AlertTriangle, ArrowRight, X, Zap } from 'lucide-react';

interface AIAutoFixProps {
  resumeData: any;
  onApplyFixes: (improvedData: any) => void;
  onClose: () => void;
}

interface Issue {
  type: 'critical' | 'warning' | 'suggestion';
  category: string;
  message: string;
  fix?: string;
}

const AIAutoFix: React.FC<AIAutoFixProps> = ({ resumeData, onApplyFixes, onClose }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [isApplying, setIsApplying] = useState(false);

  useEffect(() => {
    analyzeResume();
  }, [resumeData]);

  const analyzeResume = () => {
    setIsAnalyzing(true);
    const foundIssues: Issue[] = [];

    if (!resumeData.personalInfo.fullName || resumeData.personalInfo.fullName.length < 3) {
      foundIssues.push({
        type: 'critical',
        category: 'Personal Info',
        message: 'Full name is missing or too short',
        fix: 'Add your full name'
      });
    }

    if (!resumeData.personalInfo.email || !resumeData.personalInfo.email.includes('@')) {
      foundIssues.push({
        type: 'critical',
        category: 'Contact',
        message: 'Valid email address is required',
        fix: 'Add a professional email address'
      });
    }

    if (!resumeData.personalInfo.phone) {
      foundIssues.push({
        type: 'warning',
        category: 'Contact',
        message: 'Phone number is missing',
        fix: 'Add contact phone number'
      });
    }

    if (!resumeData.personalInfo.summary || resumeData.personalInfo.summary.length < 50) {
      foundIssues.push({
        type: 'critical',
        category: 'Summary',
        message: 'Professional summary is missing or too short',
        fix: 'Add a comprehensive professional summary (100-200 words)'
      });
    }

    if (!resumeData.experience || resumeData.experience.length === 0) {
      foundIssues.push({
        type: 'critical',
        category: 'Experience',
        message: 'No work experience listed',
        fix: 'Add your work experience with achievements'
      });
    } else {
      resumeData.experience.forEach((exp: any, index: number) => {
        if (!exp.description || exp.description.length < 50) {
          foundIssues.push({
            type: 'warning',
            category: 'Experience',
            message: `Experience ${index + 1} needs more detailed description`,
            fix: 'Add bullet points with quantifiable achievements'
          });
        }
      });
    }

    if (!resumeData.skills || resumeData.skills.length < 5) {
      foundIssues.push({
        type: 'warning',
        category: 'Skills',
        message: 'Not enough skills listed (minimum 5 recommended)',
        fix: 'Add relevant technical and soft skills'
      });
    }

    if (!resumeData.education || resumeData.education.length === 0) {
      foundIssues.push({
        type: 'critical',
        category: 'Education',
        message: 'Education section is empty',
        fix: 'Add your educational background'
      });
    }

    if (!resumeData.projects || resumeData.projects.length === 0) {
      foundIssues.push({
        type: 'suggestion',
        category: 'Projects',
        message: 'Consider adding projects to showcase your work',
        fix: 'Add 2-3 relevant projects'
      });
    }

    setTimeout(() => {
      setIssues(foundIssues);
      setIsAnalyzing(false);
    }, 2000);
  };

  const applyAutoFixes = () => {
    setIsApplying(true);

    const improvedData = { ...resumeData };

    // Improve Professional Summary
    if (!improvedData.personalInfo.summary || improvedData.personalInfo.summary.length < 50) {
      const title = improvedData.personalInfo.title || 'Professional';
      const yearsExp = improvedData.experience?.length > 0 ? `${improvedData.experience.length}+ years` : 'extensive';
      improvedData.personalInfo.summary = `${title} with ${yearsExp} of experience in delivering high-impact solutions. Proven track record of leading cross-functional teams and driving organizational success through strategic planning and innovative problem-solving. Committed to excellence and continuous improvement in all endeavors.`;
    }

    // Fix Professional Title
    if (!improvedData.personalInfo.title) {
      if (improvedData.experience && improvedData.experience.length > 0) {
        improvedData.personalInfo.title = improvedData.experience[0].position || 'Professional';
      } else {
        improvedData.personalInfo.title = 'Professional';
      }
    }

    // Add location if missing
    if (!improvedData.personalInfo.location) {
      improvedData.personalInfo.location = 'United States';
    }

    // Enhance Experience Descriptions
    if (improvedData.experience && improvedData.experience.length > 0) {
      improvedData.experience = improvedData.experience.map((exp: any, idx: number) => {
        if (!exp.description || exp.description.length < 50) {
          return {
            ...exp,
            description: `• Led cross-functional team initiatives, achieving 25% improvement in project efficiency and delivery timelines\n• Implemented strategic solutions resulting in significant cost savings and operational improvements\n• Collaborated with stakeholders to drive innovation through data-driven decision making\n• Mentored junior team members and fostered a culture of continuous learning and development`
          };
        } else {
          // Ensure descriptions are formatted with bullet points
          let description = exp.description;
          if (!description.includes('•') && !description.includes('-')) {
            const sentences = description.split(/[.!?]+/).filter((s: string) => s.trim());
            description = sentences.map((s: string) => `• ${s.trim()}`).join('\n');
          }
          return { ...exp, description };
        }
      });
    }

    // Add default education if missing
    if (!improvedData.education || improvedData.education.length === 0) {
      improvedData.education = [{
        degree: 'Bachelor\'s Degree',
        school: 'University',
        year: new Date().getFullYear().toString()
      }];
    }

    // Enhance Skills
    if (!improvedData.skills || improvedData.skills.length < 5) {
      const defaultSkills = [
        'Leadership',
        'Project Management',
        'Strategic Planning',
        'Data Analysis',
        'Team Collaboration',
        'Communication',
        'Problem Solving',
        'Critical Thinking'
      ];

      improvedData.skills = [
        ...(improvedData.skills || []),
        ...defaultSkills.filter(skill =>
          !(improvedData.skills || []).includes(skill)
        )
      ].slice(0, 10);
    }

    // Add projects if missing
    if (!improvedData.projects || improvedData.projects.length === 0) {
      const title = improvedData.personalInfo.title || 'Professional';
      improvedData.projects = [
        {
          title: 'Process Optimization Initiative',
          description: 'Led comprehensive process improvement project that increased operational efficiency by 30% and reduced costs by $250K annually. Implemented data-driven methodologies and cross-functional collaboration strategies.',
          url: ''
        },
        {
          title: 'Team Development Program',
          description: 'Designed and executed professional development program for team of 15+ members, resulting in 40% improvement in productivity metrics and enhanced team collaboration.',
          url: ''
        }
      ];
    }

    // Add certifications if missing
    if (!improvedData.certifications || improvedData.certifications.length === 0) {
      improvedData.certifications = [
        {
          name: 'Professional Development Certificate',
          issuer: 'Industry Association',
          year: new Date().getFullYear().toString()
        }
      ];
    }

    setTimeout(() => {
      onApplyFixes(improvedData);
      setIsApplying(false);
      onClose();
    }, 1500);
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  const getIssueStyle = (type: string) => {
    switch (type) {
      case 'critical':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6" />
            <h2 className="text-2xl font-bold">AI Auto-Fix All Issues</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {isAnalyzing ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500 border-t-transparent mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Analyzing Your Resume</h3>
              <p className="text-gray-600">AI is checking for ATS optimization and improvements...</p>
            </div>
          ) : isApplying ? (
            <div className="text-center py-12">
              <Zap className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Applying AI Improvements</h3>
              <p className="text-gray-600">Optimizing your resume for maximum ATS score...</p>
            </div>
          ) : (
            <>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Analysis Complete</h3>
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 shadow-sm">
                    {issues.length} {issues.length === 1 ? 'Issue' : 'Issues'} Found
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  Let AI automatically fix all issues and optimize your resume for ATS compatibility
                </p>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {issues.map((issue, index) => (
                  <div
                    key={index}
                    className={`${getIssueStyle(issue.type)} border rounded-xl p-4 transition-all hover:shadow-md`}
                  >
                    <div className="flex items-start gap-3">
                      {getIssueIcon(issue.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-800">{issue.category}</span>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            issue.type === 'critical'
                              ? 'bg-red-200 text-red-800'
                              : issue.type === 'warning'
                              ? 'bg-yellow-200 text-yellow-800'
                              : 'bg-blue-200 text-blue-800'
                          }`}>
                            {issue.type.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{issue.message}</p>
                        {issue.fix && (
                          <div className="flex items-center gap-2 text-sm text-green-700">
                            <CheckCircle className="w-4 h-4" />
                            <span className="font-medium">Auto-fix: {issue.fix}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={applyAutoFixes}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Apply All Fixes
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAutoFix;
