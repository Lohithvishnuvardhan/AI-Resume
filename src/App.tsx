import { useState, useEffect } from 'react';
import { FileText, Mail, Download, FileDown } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import EditableResumeForm from './components/EditableResumeForm';
import LivePreview from './components/LivePreview';
import ATSChecker from './components/ATSChecker';
import HealthScorer from './components/HealthScorer';
import CoverLetterBuilder from './components/CoverLetterBuilder';
import OnboardingTour from './components/OnboardingTour';
import HelpPanel from './components/HelpPanel';
import ContactModal from './components/ContactModal';
import TrustBadges from './components/TrustBadges';
import LandingPage from './components/LandingPage';

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [resumeData, setResumeData] = useState({
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
    socialLinks: {},
    profession: ''
  });

  const [selectedTemplate, setSelectedTemplate] = useState('executive');
  const [templateColorScheme, setTemplateColorScheme] = useState(0);
  const [] = useState(false);
  const [showCoverLetterBuilder, setShowCoverLetterBuilder] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showHelpPanel, setShowHelpPanel] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [atsScore, setAtsScore] = useState(0);
  const [healthScore, setHealthScore] = useState(0);

  useEffect(() => {
    // Always show landing page on first load
    setShowLandingPage(true);
  }, []);

  const handleGetStarted = (templateId?: string) => {
    setShowLandingPage(false);

    if (templateId) {
      setSelectedTemplate(templateId);
      setTemplateColorScheme(0);
    }

    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
      setShowOnboarding(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  };

  const handleResumeUpdate = (newData: any, replaceAll = false) => {
    if (replaceAll) {
      const defaultData = {
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
        socialLinks: {},
        profession: ''
      };

      const mergedData = {
        ...defaultData,
        ...newData,
        personalInfo: {
          ...defaultData.personalInfo,
          ...(newData.personalInfo || {})
        },
        experience: newData.experience || [],
        education: newData.education || [],
        skills: newData.skills || [],
        skillsCategories: newData.skillsCategories || [],
        projects: newData.projects || [],
        certifications: newData.certifications || [],
        achievements: newData.achievements || [],
        languages: newData.languages || [],
        hobbies: newData.hobbies || [],
        references: newData.references || [],
        socialLinks: newData.socialLinks || {}
      };

      setResumeData(mergedData);
    } else {
      setResumeData(prevData => ({
        ...prevData,
        ...newData,
        personalInfo: {
          ...prevData.personalInfo,
          ...(newData.personalInfo || {})
        }
      }));
    }
  };

  const handleDownloadPDF = async () => {
    const element = document.querySelector('.resume-preview-content') as HTMLElement;
    if (!element) {
      alert('Please wait for the resume to load before downloading.');
      return;
    }

    element.classList.add('downloading');

    const opt = {
      margin: 0.5,
      filename: `${resumeData.personalInfo.fullName || 'Resume'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    try {
      await html2pdf().set({
        ...opt,
        image: { type: 'jpeg' as 'jpeg', quality: 0.98 },
        jsPDF: { ...opt.jsPDF, orientation: 'portrait' as 'portrait' }
      }).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Unable to generate PDF. Please try again.');
    } finally {
      element.classList.remove('downloading');
    }
  };

  const handleDownloadWord = () => {
    const element = document.querySelector('.resume-preview-content') as HTMLElement;
    if (!element) {
      alert('Please wait for the resume to load before downloading.');
      return;
    }

    element.classList.add('downloading');
    const clonedElement = element.cloneNode(true) as HTMLElement;
    const atsBadges = clonedElement.querySelectorAll('.ats-badge');
    atsBadges.forEach(badge => badge.remove());

    const header = `MIME-Version: 1.0\nContent-Type: multipart/related; boundary="BOUNDARY"\n\n--BOUNDARY\nContent-Type: text/html; charset="utf-8"\n\n`;
    const footer = `\n--BOUNDARY--`;

    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; font-size: 12pt; line-height: 1.6; }
    p { margin: 0 0 12pt 0; }
  </style>
</head>
<body>
  ${clonedElement.innerHTML}
</body>
</html>`;

    const blob = new Blob([header + html + footer], {
      type: 'application/msword'
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${resumeData.personalInfo.fullName || 'Resume'}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    element.classList.remove('downloading');
  };

  if (showLandingPage) {
    return (
      <>
        <LandingPage
          onGetStarted={handleGetStarted}
          onOpenHelp={() => setShowHelpPanel(true)}
          onOpenContact={() => setShowContactModal(true)}
        />
        <HelpPanel
          isOpen={showHelpPanel}
          onClose={() => setShowHelpPanel(false)}
        />
        <ContactModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 relative z-10">
        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6 gap-3">
            <button
              onClick={() => setShowLandingPage(true)}
              className="group text-blue-400 hover:text-blue-300 transition-all font-medium flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-500/10 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </button>
            <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50"></div>
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500 relative z-10" />
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                <span className="hidden sm:inline">AI Resume Builder</span>
                <span className="sm:hidden">Resume Builder</span>
              </h1>
            </div>
            <div className="hidden sm:block w-20 lg:w-32"></div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 font-light px-2">
            Create professional resumes with AI-powered assistance
          </p>
          <TrustBadges />

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 lg:mt-8 px-2">
            <button
              onClick={handleDownloadPDF}
              className="group flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-red-500/30 transform hover:scale-105 text-sm sm:text-base lg:text-base min-w-[120px] sm:min-w-[140px]"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              <span>PDF</span>
            </button>
            <button
              onClick={handleDownloadWord}
              className="group flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 text-sm sm:text-base lg:text-base min-w-[120px] sm:min-w-[140px]"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              <span>Word</span>
            </button>
            <button
              onClick={() => setShowCoverLetterBuilder(true)}
              className="group flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 text-sm sm:text-base lg:text-base min-w-[120px] sm:min-w-[160px]"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              <span className="hidden xs:inline">Cover Letter</span>
              <span className="xs:hidden">Cover</span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div>
            <EditableResumeForm
              resumeData={resumeData}
              template={selectedTemplate}
              colorScheme={templateColorScheme}
              onDataChange={handleResumeUpdate}
              onDownloadPDF={handleDownloadPDF}
              onDownloadWord={handleDownloadWord}
            />
          </div>

          <div className="lg:sticky lg:top-8 space-y-3 sm:space-y-4">
            <LivePreview
              resumeData={resumeData}
              template={selectedTemplate}
              templateColorScheme={templateColorScheme}
              atsScore={atsScore}
              healthScore={healthScore}
            />
            <ATSChecker
              resumeData={resumeData}
              score={atsScore}
              onScoreChange={setAtsScore}
              onApplyImprovements={handleResumeUpdate}
            />
            <HealthScorer
              resumeData={resumeData}
              score={healthScore}
              onScoreChange={setHealthScore}
            />
          </div>
        </div>

      </div>

      <CoverLetterBuilder
        isVisible={showCoverLetterBuilder}
        onClose={() => setShowCoverLetterBuilder(false)}
        resumeData={resumeData}
      />

      <OnboardingTour
        isOpen={showOnboarding}
        onClose={() => setShowOnboarding(false)} onGetStarted={function (): void {
          throw new Error('Function not implemented.');
        } }      />

      <HelpPanel
        isOpen={showHelpPanel}
        onClose={() => setShowHelpPanel(false)}
      />

    </div>
  );
}

export default App;
