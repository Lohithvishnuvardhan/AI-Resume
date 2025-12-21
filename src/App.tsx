import { useState, useEffect } from 'react';
import { FileText, Mail, Download, FileDown } from 'lucide-react';
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
import ToastContainer from './components/ToastContainer';
import Confetti from './components/Confetti';
import { showToast } from './components/ToastContainer';
import { IS_PURCHASED, GUMROAD_URL } from './config';


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
    profession: '',
    rawText: ''
  });

  const [selectedTemplate, setSelectedTemplate] = useState('executive');
  const [templateColorScheme, setTemplateColorScheme] = useState(0);
  const [showCoverLetterBuilder, setShowCoverLetterBuilder] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showHelpPanel, setShowHelpPanel] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [atsScore, setAtsScore] = useState(0);
  const [healthScore, setHealthScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [exactMode, setExactMode] = useState(false);
  const [] = useState(false);


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
        profession: '',
        rawText: ''
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
    // Check if template is purchased
    if (!IS_PURCHASED) {
      window.open(GUMROAD_URL, '_blank', 'noopener,noreferrer');
      showToast('This is a demo. Purchase the template on Gumroad to unlock PDF downloads.', 'info');
      return;
    }

    // Purchased version - actual download functionality
    try {
      setIsDownloading(true);
      const previewElement = document.querySelector('.resume-preview-content') as HTMLElement;
      
      if (!previewElement) {
        showToast('Resume preview not found. Please ensure the preview is visible.', 'error');
        setIsDownloading(false);
        return;
      }

      // Dynamically import html2pdf to avoid loading it until needed
      const html2pdf = (await import('html2pdf.js')).default;

      const opt = {
        margin: 0.5,
        filename: `${resumeData.personalInfo.fullName || 'Resume'}-Resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait' as 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      await html2pdf()
        .set({
          ...opt,
          // Explicit type narrowing for type issues
          image: { type: 'jpeg' as 'jpeg', quality: 0.98 }
        })
        .from(previewElement)
        .save();

      showToast('PDF downloaded successfully!', 'success');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } catch (error) {
      console.error('Error generating PDF:', error);
      showToast('Failed to generate PDF. Please try again.', 'error');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadWord = async () => {
    // Check if template is purchased
    if (!IS_PURCHASED) {
      window.open(GUMROAD_URL, '_blank', 'noopener,noreferrer');
      showToast('This is a demo. Purchase the template on Gumroad to unlock Word downloads.', 'info');
      return;
    }

    // Purchased version - actual download functionality
    try {
      setIsDownloading(true);
      const previewElement = document.querySelector('.resume-preview-content') as HTMLElement;
      
      if (!previewElement) {
        showToast('Resume preview not found. Please ensure the preview is visible.', 'error');
        setIsDownloading(false);
        return;
      }

      // Clone the element to avoid modifying the original
      const clonedElement = previewElement.cloneNode(true) as HTMLElement;
      
      // Remove any elements that shouldn't be in the Word doc
      const elementsToRemove = clonedElement.querySelectorAll('.ats-badge, .exact-mode-toggle, button, [data-exclude-from-download]');
      elementsToRemove.forEach(el => el.remove());

      // Get the HTML content
      const htmlContent = clonedElement.innerHTML;
      
      // Create a blob with Word-compatible HTML
      const header = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; margin: 0.5in; }
    h1, h2, h3 { color: #000; }
    a { color: #2563eb; text-decoration: underline; }
  </style>
</head>
<body>`;
      const footer = `</body>
</html>`;
      
      const fullHtml = header + htmlContent + footer;
      const blob = new Blob([fullHtml], { type: 'application/msword' });
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${resumeData.personalInfo.fullName || 'Resume'}-Resume.doc`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      showToast('Word document downloaded successfully!', 'success');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } catch (error) {
      console.error('Error generating Word document:', error);
      showToast('Failed to generate Word document. Please try again.', 'error');
    } finally {
      setIsDownloading(false);
    }
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
        <ToastContainer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Premium Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 relative z-10 animate-fade-in">

        <header className="text-center mb-6 sm:mb-8 lg:mb-12 animate-slide-up">
          {/* Premium Header with Glassmorphism */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-gray-800/80 via-gray-800/60 to-gray-800/80 rounded-2xl border border-gray-700/50 p-6 sm:p-8 shadow-2xl mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6 gap-3">
              <button
                onClick={() => setShowLandingPage(true)}
                className="group text-blue-400 hover:text-blue-300 transition-all font-medium flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 text-sm sm:text-base will-change-transform gpu-accelerated"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </button>
              <div className="flex items-center gap-3 sm:gap-4 flex-1 justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400" style={{fontFamily: 'Playfair Display, Georgia, serif', textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'}}>
                    <span className="hidden sm:inline">AI Resume Builder</span>
                    <span className="sm:hidden">Resume Builder</span>
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Premium Resume Creation</p>
                </div>
              </div>
              <div className="hidden sm:block w-20 lg:w-32"></div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 font-light px-2">
              Create professional resumes with AI-powered assistance
            </p>
            <TrustBadges />

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-2">
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading && IS_PURCHASED}
              className="group flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-emerald-500/30 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base lg:text-base min-w-[200px] sm:min-w-[230px]"
            >
              <Download className={`w-4 h-4 sm:w-5 sm:h-5 ${isDownloading && IS_PURCHASED ? 'animate-spin' : 'group-hover:animate-bounce'}`} />
              <span>{isDownloading && IS_PURCHASED ? 'Generating PDF...' : IS_PURCHASED ? 'Download PDF' : 'Purchase to download PDF'}</span>
            </button>
            <button
              onClick={handleDownloadWord}
              disabled={isDownloading && IS_PURCHASED}
              className="group flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base lg:text-base min-w-[160px] sm:min-w-[180px]"
            >
              <FileDown className={`w-4 h-4 sm:w-5 sm:h-5 ${isDownloading && IS_PURCHASED ? 'animate-spin' : 'group-hover:animate-bounce'}`} />
              <span>{isDownloading && IS_PURCHASED ? 'Generating...' : IS_PURCHASED ? 'Download Word' : 'Purchase to download Word'}</span>
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
          </div>
        </header>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Form Section with Premium Glassmorphism */}
          <div className="animate-slide-in-right">
            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-500 will-change-transform gpu-accelerated">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
              <div className="relative z-10">
                <EditableResumeForm
                  resumeData={resumeData}
                  template={selectedTemplate}
                  colorScheme={templateColorScheme}
                  onDataChange={handleResumeUpdate}
                  onDownloadPDF={handleDownloadPDF}
                  onDownloadWord={handleDownloadWord}
                />
              </div>
            </div>
          </div>

          {/* Preview Section with Premium Styling */}
          <div className="lg:sticky lg:top-8 space-y-4 sm:space-y-6 animate-slide-in-right" style={{animationDelay: '0.1s'}}>
            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-500 will-change-transform gpu-accelerated">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
              <div className="relative z-10">
                <LivePreview
                  resumeData={resumeData}
                  template={selectedTemplate}
                  templateColorScheme={templateColorScheme}
                  atsScore={atsScore}
                  healthScore={healthScore}
                  exactMode={exactMode}
                  onToggleExactMode={() => setExactMode(prev => !prev)}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 will-change-transform gpu-accelerated">
                <ATSChecker
                  resumeData={resumeData}
                  score={atsScore}
                  onScoreChange={setAtsScore}
                  onApplyImprovements={handleResumeUpdate}
                />
              </div>
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 will-change-transform gpu-accelerated">
                <HealthScorer
                  resumeData={resumeData}
                  score={healthScore}
                  onScoreChange={setHealthScore}
                />
              </div>
            </div>
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
        onClose={() => setShowOnboarding(false)}
        onGetStarted={handleGetStarted}
      />

      <HelpPanel
        isOpen={showHelpPanel}
        onClose={() => setShowHelpPanel(false)}
      />

      <ToastContainer />
      <Confetti trigger={showConfetti} />

    </div>
  );
}

export default App;
