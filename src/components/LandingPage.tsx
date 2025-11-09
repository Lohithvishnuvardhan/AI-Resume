import { useState } from 'react';
import { FileText, CheckCircle, Upload, Zap, Shield, ChevronDown, ChevronUp, Star, Award, Lock, Eye, Download, Users, TrendingUp, Linkedin, Briefcase, Github, Globe, ArrowRight, Sparkles, Crown, Rocket, CheckCircle2, Quote } from 'lucide-react';
import PolicyModal from './PolicyModal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface LandingPageProps {
  onGetStarted: (templateId?: string) => void;
  onOpenHelp?: () => void;
  onOpenContact?: () => void;
}

export default function LandingPage({ onGetStarted, onOpenHelp, onOpenContact }: LandingPageProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [previewSample, setPreviewSample] = useState<number | null>(null);
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadSample = () => {
    // Create a sample resume content
    const sampleHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; color: #333; }
          h1 { color: #2563eb; font-size: 28px; margin-bottom: 5px; }
          h2 { color: #2563eb; font-size: 20px; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 25px; }
          h3 { font-size: 16px; margin-bottom: 5px; }
          .contact { color: #666; font-size: 14px; margin-bottom: 20px; }
          .section { margin-bottom: 20px; }
          .job-title { font-weight: bold; color: #333; }
          .company { color: #666; font-style: italic; }
          .date { color: #888; font-size: 14px; }
          ul { margin: 10px 0; padding-left: 20px; }
          li { margin: 5px 0; }
        </style>
      </head>
      <body>
        <h1>John Doe</h1>
        <div class="contact">john.doe@email.com | (555) 123-4567 | New York, NY | linkedin.com/in/johndoe</div>

        <h2>Professional Summary</h2>
        <p>Results-driven software engineer with 5+ years of experience building scalable web applications. Expertise in React, Node.js, and cloud technologies. Proven track record of delivering high-quality solutions and leading cross-functional teams.</p>

        <h2>Experience</h2>
        <div class="section">
          <div class="job-title">Senior Software Engineer</div>
          <div class="company">Tech Solutions Inc. | <span class="date">Jan 2021 - Present</span></div>
          <ul>
            <li>Led development of customer-facing web application serving 100K+ users</li>
            <li>Improved application performance by 40% through code optimization</li>
            <li>Mentored junior developers and conducted code reviews</li>
            <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
          </ul>
        </div>

        <div class="section">
          <div class="job-title">Software Engineer</div>
          <div class="company">Digital Innovations LLC | <span class="date">Jun 2019 - Dec 2020</span></div>
          <ul>
            <li>Developed and maintained RESTful APIs using Node.js and Express</li>
            <li>Built responsive user interfaces with React and Material-UI</li>
            <li>Collaborated with product team to define technical requirements</li>
            <li>Reduced bug count by 30% through comprehensive testing</li>
          </ul>
        </div>

        <h2>Education</h2>
        <div class="section">
          <div class="job-title">Bachelor of Science in Computer Science</div>
          <div class="company">University of Technology | <span class="date">2015 - 2019</span></div>
          <p>GPA: 3.8/4.0 | Dean's List: All Semesters</p>
        </div>

        <h2>Skills</h2>
        <ul>
          <li><strong>Languages:</strong> JavaScript, TypeScript, Python, Java</li>
          <li><strong>Frontend:</strong> React, Vue.js, HTML5, CSS3, Tailwind CSS</li>
          <li><strong>Backend:</strong> Node.js, Express, Django, REST APIs</li>
          <li><strong>Database:</strong> PostgreSQL, MongoDB, Redis</li>
          <li><strong>Tools:</strong> Git, Docker, AWS, CI/CD, Agile/Scrum</li>
        </ul>

        <h2>Projects</h2>
        <div class="section">
          <h3>E-commerce Platform</h3>
          <p>Built full-stack e-commerce solution with React and Node.js, integrated Stripe payment processing, and implemented real-time inventory management.</p>
        </div>

        <div class="section">
          <h3>Task Management App</h3>
          <p>Developed collaborative task management application with real-time updates using WebSockets, serving 1000+ active users.</p>
        </div>
      </body>
      </html>
    `;

    // Create blob and download
    const blob = new Blob([sampleHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sample_Resume_Professional.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Background Video (fixed, full-page) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ opacity: 0.25 }}
        >
          <source src="/resumevideo(hero section).mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient for readability across the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/70"></div>
      </div>

      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden sm:block absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden sm:block absolute top-1/2 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="hidden sm:block absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-0 sm:backdrop-blur-xl border-b border-gray-800/50 z-50 shadow-md sm:shadow-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Use uploaded logo image from public/ and show gold "Resume Ai Pro" text */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/40 blur-xl rounded-lg animate-pulse"></div>
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                  <img src="/logo.png" alt="Resume Ai Pro" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Logo text: use a single gold-colored label beside the uploaded logo */}
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: '#D4AF37', textShadow: '0 2px 6px rgba(0,0,0,0.45)', letterSpacing: '-0.02em' }}>
                  Resume Ai Pro
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <button
                onClick={() => {
                  window.history.pushState({}, '', '/documentation');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm lg:text-base"
              >
                Documentation
              </button>
              <button
                onClick={() => {
                  window.history.pushState({}, '', '/license-terms');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm lg:text-base"
              >
                License
              </button>
              <button onClick={() => scrollToSection('samples')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm lg:text-base">
                Samples
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm lg:text-base">
                Pricing
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm lg:text-base">
                FAQ
              </button>
              <button onClick={() => onOpenContact?.()} className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm lg:text-base">
                Contact
              </button>
              <button
                onClick={() => onGetStarted()}
                className="px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-sm lg:text-base"
              >
                Create Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden py-3 sm:py-4 border-t border-gray-800">
              <div className="flex flex-col gap-3 sm:gap-4">
                <button onClick={() => { scrollToSection('samples'); setShowMobileMenu(false); }} className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left">
                  Samples
                </button>
                <button onClick={() => { scrollToSection('faq'); setShowMobileMenu(false); }} className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left">
                  FAQ
                </button>
                <button onClick={() => { onOpenContact?.(); setShowMobileMenu(false); }} className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left">
                  Contact
                </button>
                <button
                  onClick={() => { onGetStarted(); setShowMobileMenu(false); }}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-center"
                >
                  Create Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-3 sm:px-4 lg:px-6 relative overflow-hidden" style={{ contentVisibility: 'auto', containIntrinsicSize: '600px' }}>
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ opacity: 0.25 }}
          >
            <source src="/resumevideo(hero section).mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/60"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-blue-400">1M+ Professionals Trust Us</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up px-2 drop-shadow-2xl" style={{fontFamily: 'Playfair Display, Georgia, serif', textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)'}}>
            Create Your Perfect Resume
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-2 animate-gradient" style={{textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'}}>
              In Minutes, Not Hours
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-light px-4 drop-shadow-lg" style={{textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'}}>
            AI-powered resume builder with professional templates, ATS optimization, and expert guidance to help you land your dream job.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 px-3">
            <button
              onClick={() => onGetStarted()}
              className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-base sm:text-lg lg:text-xl rounded-xl sm:rounded-2xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Create Resume Now
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              onClick={() => scrollToSection('samples')}
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 border-blue-500/50 bg-blue-500/10 backdrop-blur-sm text-blue-400 text-base sm:text-lg lg:text-xl rounded-xl sm:rounded-2xl font-bold hover:bg-blue-500/20 hover:border-blue-400 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              View Sample Resume
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-8 text-xs sm:text-sm text-gray-100 px-2 drop-shadow-md">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">ATS Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">1M+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gray-900/30 backdrop-blur-0 sm:backdrop-blur-sm relative z-10" style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' }}>
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 mb-3 sm:mb-4 px-2" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
              How It Works
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">Three simple steps to your perfect resume</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="group text-center p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-800/30 hover:border-blue-600/50 backdrop-blur-sm transform hover:-translate-y-2 will-change-transform gpu-accelerated">
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">1</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Upload or Start Fresh</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Upload your existing resume or start from scratch with our guided templates.
              </p>
              <button
                onClick={() => onGetStarted()}
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto text-sm sm:text-base"
              >
                Try This Step →
              </button>
            </div>

            <div className="group text-center p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 bg-gradient-to-br from-cyan-900/40 to-teal-900/40 border border-cyan-800/30 hover:border-cyan-600/50 backdrop-blur-sm transform hover:-translate-y-2 will-change-transform gpu-accelerated">
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-cyan-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">2</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">AI Optimizes Content</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Our AI analyzes and enhances your resume for maximum impact and ATS compatibility.
              </p>
              <button
                onClick={() => onGetStarted()}
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors flex items-center gap-2 mx-auto text-sm sm:text-base"
              >
                Try This Step →
              </button>
            </div>

            <div className="group text-center p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 bg-gradient-to-br from-teal-900/40 to-green-900/40 border border-teal-800/30 hover:border-teal-600/50 backdrop-blur-sm transform hover:-translate-y-2 will-change-transform gpu-accelerated">
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-teal-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-600 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">3</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Download & Apply</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Download your professional resume in PDF or Word format and start applying!
              </p>
              <button
                onClick={() => onGetStarted()}
                className="text-teal-400 font-semibold hover:text-teal-300 transition-colors flex items-center gap-2 mx-auto text-sm sm:text-base"
              >
                Try This Step →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Samples Section */}
      <section id="samples" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-800/50 to-slate-800/50 backdrop-blur-0 sm:backdrop-blur-sm relative z-10" style={{ contentVisibility: 'auto', containIntrinsicSize: '900px' }}>
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-block mb-4">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs sm:text-sm font-semibold backdrop-blur-sm">
                Premium Templates
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 mb-4 sm:mb-6 px-2" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
              See What You'll Get
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light px-4">
              Professional, ATS-friendly resumes designed by experts to get you noticed
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {[
              { 
                title: 'Modern Professional', 
                color: 'from-blue-500 to-blue-600', 
                description: 'Clean and modern design perfect for tech professionals',
                mockup: {
                  name: 'Sarah Johnson',
                  title: 'Senior Software Engineer',
                  email: 'sarah.j@email.com',
                  phone: '(555) 123-4567',
                  location: 'San Francisco, CA',
                  summary: 'Results-driven engineer with 7+ years building scalable web applications. Expertise in React, Node.js, and cloud technologies.',
                  experience: 'Tech Solutions Inc. | Senior Software Engineer | 2021 - Present',
                  skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
                }
              },
              { 
                title: 'Executive Style', 
                color: 'from-slate-700 to-slate-800', 
                description: 'Professional layout ideal for senior positions',
                mockup: {
                  name: 'Michael Anderson',
                  title: 'Chief Financial Officer',
                  email: 'm.anderson@exec.com',
                  phone: '+1 (555) 234-5678',
                  location: 'New York, NY',
                  summary: 'Distinguished finance executive with 15+ years of strategic leadership. Proven expertise in financial planning, M&A, and corporate governance.',
                  experience: 'Global Enterprise Solutions | CFO | 2020 - Present',
                  skills: ['Financial Strategy', 'M&A', 'Risk Management', 'Team Leadership']
                }
              },
              { 
                title: 'Creative Design', 
                color: 'from-cyan-500 to-teal-600', 
                description: 'Eye-catching design for creative roles',
                mockup: {
                  name: 'Emma Chen',
                  title: 'Creative Director & UX Designer',
                  email: 'emma.chen@design.com',
                  phone: '(555) 345-6789',
                  location: 'Los Angeles, CA',
                  summary: 'Award-winning creative professional specializing in user-centered design and brand storytelling. Passionate about crafting beautiful experiences.',
                  experience: 'Pixel Perfect Studios | Creative Director | 2021 - Present',
                  skills: ['UX Design', 'Branding', 'Figma', 'Prototyping']
                }
              }
            ].map((sample, idx) => (
              <div
                key={idx}
                className="group bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2 duration-500 cursor-pointer"
                onClick={() => setPreviewSample(idx)}
              >
                {/* Premium Resume Mockup */}
                <div className={`h-80 bg-gradient-to-br ${sample.color} p-4 sm:p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  {/* Resume Content Mockup */}
                  <div className="relative bg-white rounded-lg shadow-2xl p-4 sm:p-5 h-full overflow-hidden">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className={`border-b-2 ${idx === 0 ? 'border-blue-600' : idx === 1 ? 'border-slate-600' : 'border-teal-600'} pb-2`}>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">{sample.mockup.name}</h4>
                        <p className={`text-sm font-semibold ${idx === 0 ? 'text-blue-600' : idx === 1 ? 'text-slate-600' : 'text-teal-600'}`}>{sample.mockup.title}</p>
                        <p className="text-xs text-gray-600 mt-1">{sample.mockup.email} • {sample.mockup.phone}</p>
                      </div>
                      
                      {/* Summary */}
                      <div>
                        <p className="text-xs text-gray-700 leading-relaxed">{sample.mockup.summary}</p>
                      </div>
                      
                      {/* Experience */}
                      <div>
                        <p className="text-xs font-semibold text-gray-900">Experience</p>
                        <p className="text-xs text-gray-600">{sample.mockup.experience}</p>
                      </div>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-1">
                        {sample.mockup.skills.slice(0, 4).map((skill, i) => (
                          <span key={i} className={`text-xs px-2 py-0.5 rounded ${idx === 0 ? 'bg-blue-100 text-blue-700' : idx === 1 ? 'bg-slate-100 text-slate-700' : 'bg-teal-100 text-teal-700'}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-semibold text-lg">Preview Full Template</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-900/80">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{sample.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{sample.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <span className="text-xs text-gray-500 font-semibold">9.7/10</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleDownloadSample}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Sample Resume (Free)
            </button>
          </div>
        </div>
      </section>

      {/* Feature Demos - Before/After Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5"></div>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold backdrop-blur-sm">
                Transform Your Resume
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-300 mb-4 sm:mb-6 px-2" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
              See The Transformation
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Watch how our AI transforms basic resumes into professional, ATS-optimized documents that get results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Before */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 sm:p-8 border border-red-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white">Before</h3>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-red-300 mb-4 shadow-lg">
                  {/* Actual Resume Content - Before */}
                  <div className="space-y-4 text-gray-800">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">John Smith</h4>
                      <p className="text-sm text-gray-600">johnsmith@gmail.com | 555-1234</p>
                      <p className="text-sm text-gray-600">New York</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Experience</h5>
                      <p className="text-sm text-gray-700">Software Developer at Tech Company</p>
                      <p className="text-xs text-gray-600">- Worked on projects</p>
                      <p className="text-xs text-gray-600">- Used programming languages</p>
                      <p className="text-xs text-gray-600">- Helped with tasks</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Education</h5>
                      <p className="text-sm text-gray-700">University Name</p>
                      <p className="text-xs text-gray-600">Degree</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Skills</h5>
                      <p className="text-xs text-gray-600">Java, Python, HTML, CSS</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">No ATS Optimization</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">Poor Formatting</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">Weak Keywords</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 sm:p-8 border border-green-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white">After</h3>
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-blue-500 mb-4 shadow-2xl">
                  {/* Actual Resume Content - After */}
                  <div className="space-y-4 text-gray-800">
                    <div className="border-b-2 border-blue-600 pb-3">
                      <h4 className="text-2xl font-bold text-gray-900">John Smith</h4>
                      <p className="text-sm font-semibold text-blue-600">Senior Software Engineer</p>
                      <p className="text-xs text-gray-600">john.smith@email.com | (555) 123-4567 | New York, NY | linkedin.com/in/johnsmith</p>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600">
                      <h5 className="font-semibold text-gray-900 mb-1">Professional Summary</h5>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Results-driven Senior Software Engineer with 7+ years of experience developing scalable web applications. 
                        Expert in Java, Python, and cloud technologies. Successfully led development of applications serving 100K+ users, 
                        improving performance by 40% through code optimization.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-1 h-5 bg-blue-600 rounded"></div>
                        Professional Experience
                      </h5>
                      <div className="mb-3">
                        <p className="text-sm font-bold text-gray-900">Senior Software Engineer</p>
                        <p className="text-xs font-semibold text-blue-600">Tech Solutions Inc. | Jan 2021 - Present</p>
                        <ul className="text-xs text-gray-700 mt-1 space-y-1 ml-4">
                          <li>• Led development of customer-facing web application serving 100K+ enterprise users</li>
                          <li>• Improved application performance by 40% through code optimization and refactoring</li>
                          <li>• Mentored 5 junior developers and conducted code reviews</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-1 h-5 bg-blue-600 rounded"></div>
                        Education
                      </h5>
                      <p className="text-sm font-semibold text-gray-900">Bachelor of Science in Computer Science</p>
                      <p className="text-xs text-gray-600">State University | 2015 - 2019 | GPA: 3.8/4.0</p>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-1 h-5 bg-blue-600 rounded"></div>
                        Technical Skills
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {['Java', 'Python', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'].map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">ATS Optimized</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Professional Design</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Keyword Rich</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => onGetStarted()}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Transform Your Resume Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Screenshots/Mockups Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900/50 to-gray-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold backdrop-blur-sm">
                Platform Preview
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 mb-4 sm:mb-6 px-2" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
              Powerful Builder Interface
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Experience our intuitive drag-and-drop interface with real-time preview
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                title: 'AI Resume Builder',
                description: 'Smart AI-powered suggestions as you type',
                icon: Zap,
                color: 'from-blue-600 to-cyan-600',
                features: ['Live Preview', 'AI Suggestions', 'ATS Scoring']
              },
              {
                title: 'Template Library',
                description: '50+ professionally designed templates',
                icon: FileText,
                color: 'from-purple-600 to-pink-600',
                features: ['Customizable', 'Industry-Specific', 'Mobile-Friendly']
              },
              {
                title: 'Real-Time Preview',
                description: 'See changes instantly as you edit',
                icon: Eye,
                color: 'from-cyan-600 to-teal-600',
                features: ['Instant Updates', 'Multi-Format', 'Export Ready']
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 sm:p-8 border border-gray-700/50 backdrop-blur-sm h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-xl`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold backdrop-blur-sm">
                Choose Your Plan
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-200 mb-4 sm:mb-6 px-2" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Start free, upgrade when you're ready. All plans include our core features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Free Plan */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 sm:p-8 border border-gray-700/50 backdrop-blur-sm h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$0</span>
                    <span className="text-gray-400">/forever</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Perfect for getting started</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {['1 Resume Template', 'Basic AI Suggestions', 'PDF Download', 'Community Support', 'ATS Basic Check'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onGetStarted()}
                  className="w-full py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Pro Plan - Featured */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-900/90 to-cyan-900/90 rounded-2xl p-6 sm:p-8 border-2 border-blue-500/50 backdrop-blur-sm h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
                <div className="mb-6 mt-2">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    Pro
                    <Crown className="w-5 h-5 text-yellow-400" />
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$9</span>
                    <span className="text-gray-300">/month</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">For professionals who want more</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {['50+ Premium Templates', 'Advanced AI Optimization', 'Unlimited Downloads', 'Priority Support', 'ATS Advanced Scoring', 'Cover Letter Builder', 'Multiple Formats (PDF/Word)', 'Resume Analytics'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-white font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onGetStarted()}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-bold transition-all shadow-xl transform hover:scale-105"
                >
                  Start Pro Trial
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 sm:p-8 border border-purple-500/30 backdrop-blur-sm h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    Premium
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$29</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">For career changers & executives</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {['Everything in Pro', '1-on-1 Expert Review', 'LinkedIn Profile Optimization', 'Interview Preparation', 'Career Coaching Session', 'Unlimited Revisions', 'Custom Branding', 'Job Application Tracker', '24/7 Priority Support'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onGetStarted()}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-bold transition-all shadow-xl transform hover:scale-105"
                >
                  Start Premium
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">All plans include 30-day money-back guarantee</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Secure Payment
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Cancel Anytime
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Money Back Guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Social Proof Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900/50 to-gray-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold backdrop-blur-sm">
                Success Stories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-teal-200 mb-4 sm:mb-6 px-2" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
              Trusted by 1M+ Professionals
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              See how ResumeAI Pro has helped thousands land their dream jobs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                name: 'Sarah Chen',
                role: 'Software Engineer at Google',
                image: '👩‍💻',
                rating: 5,
                text: 'I got 3 job offers within 2 weeks of using my new resume. The ATS optimization feature is incredible!',
                company: 'Google'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Marketing Director',
                image: '👨‍💼',
                rating: 5,
                text: 'The AI suggestions helped me highlight achievements I didn\'t even think were important. Game changer!',
                company: 'Microsoft'
              },
              {
                name: 'Emily Johnson',
                role: 'Product Manager',
                image: '👩‍💼',
                rating: 5,
                text: 'From application to offer in 10 days. The premium templates made me stand out from hundreds of applicants.',
                company: 'Amazon'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 sm:p-8 border border-gray-700/50 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-500/50 mb-4" />
                  <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-blue-400 text-xs font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { number: '1M+', label: 'Active Users', icon: Users },
              { number: '95%', label: 'ATS Pass Rate', icon: TrendingUp },
              { number: '50+', label: 'Templates', icon: FileText },
              { number: '9.7/10', label: 'User Rating', icon: Star }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-semibold backdrop-blur-sm">
                Integrations
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200 mb-4 sm:mb-6 px-2" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
              Works With Your Workflow
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Seamlessly integrate with your favorite platforms and job portals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
            {[
              { name: 'LinkedIn', icon: Linkedin, color: 'from-blue-600 to-blue-700' },
              { name: 'Indeed', icon: Briefcase, color: 'from-blue-500 to-indigo-600' },
              { name: 'GitHub', icon: Github, color: 'from-gray-700 to-gray-900' },
              { name: 'Glassdoor', icon: Briefcase, color: 'from-green-600 to-emerald-700' },
              { name: 'Monster', icon: Globe, color: 'from-orange-600 to-red-600' },
              { name: 'ZipRecruiter', icon: Briefcase, color: 'from-purple-600 to-pink-600' }
            ].map((integration, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${integration.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${integration.color} rounded-lg mb-3`}>
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold text-sm">{integration.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">More integrations coming soon</p>
            <button
              onClick={() => onOpenContact?.()}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              Request Integration
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-800/60 to-slate-800/60 backdrop-blur-sm" style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' }}>
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-200 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Everything you need to know about ResumeAI Pro
          </p>

          <div className="space-y-4">
            {[
              {
                question: "Is this resume ATS friendly?",
                answer: "Absolutely! All our templates are specifically designed to pass Applicant Tracking Systems (ATS). We use proper formatting, standard fonts, and optimized structure to ensure your resume gets through ATS filters and reaches human recruiters."
              },
              {
                question: "Do I get editable files?",
                answer: "Yes! You can download your resume in both PDF (for applications) and Word format (for easy editing). You'll have full access to edit and customize your resume anytime, even after downloading."
              },
              {
                question: "How fast do I get my resume?",
                answer: "Instantly! Our AI-powered platform generates your professional resume in minutes. You can start creating right away and download your finished resume immediately after completion."
              },
              {
                question: "Can I request revisions?",
                answer: "With our Pro and Premium plans, you can make unlimited edits to your resume. Our AI will continuously provide suggestions to improve your content. Premium users also get a 1-on-1 expert review for personalized feedback."
              },
              {
                question: "Is there a refund policy?",
                answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with your resume for any reason, contact us within 30 days of purchase for a full refund. No questions asked."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-700 rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {expandedFAQ === idx ? (
                    <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <button
              onClick={() => onOpenContact?.()}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white text-base sm:text-lg rounded-lg sm:rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Need Help? Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900/50 to-gray-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold backdrop-blur-sm">
                Resources & Guides
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
              Expert Career Resources
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Learn from our expert guides and stay ahead in your career journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'How to Write an ATS-Friendly Resume',
                description: 'Complete guide to optimizing your resume for applicant tracking systems',
                category: 'Resume Tips',
                readTime: '5 min read',
                icon: FileText,
                color: 'from-blue-600 to-cyan-600'
              },
              {
                title: 'Top 10 Resume Mistakes to Avoid',
                description: 'Common pitfalls that can hurt your job application and how to fix them',
                category: 'Career Advice',
                readTime: '7 min read',
                icon: TrendingUp,
                color: 'from-purple-600 to-pink-600'
              },
              {
                title: 'LinkedIn Profile Optimization Guide',
                description: 'Maximize your LinkedIn presence with our comprehensive optimization tips',
                category: 'Social Media',
                readTime: '6 min read',
                icon: Linkedin,
                color: 'from-cyan-600 to-teal-600'
              }
            ].map((article, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${article.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 sm:p-8 border border-gray-700/50 backdrop-blur-sm h-full hover:border-blue-500/50 transition-all">
                  <div className={`w-12 h-12 bg-gradient-to-br ${article.color} rounded-lg flex items-center justify-center mb-4`}>
                    <article.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/30">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <button className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group-hover:gap-3">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                window.history.pushState({}, '', '/documentation');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-2"
            >
              View All Resources
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black/80 backdrop-blur-sm text-white py-10 sm:py-12 lg:py-16" style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' }}>
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-200 mb-3 sm:mb-4 px-2">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Join 1M+ professionals who built their careers with ResumeAI Pro
            </p>
            <button
              onClick={() => onGetStarted?.()}
              className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-base sm:text-lg lg:text-xl rounded-lg sm:rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center gap-2"
            >
              <span className="hidden sm:inline">Start Building Your Resume Now</span>
              <span className="sm:hidden">Create Resume Now</span>
              <span>→</span>
            </button>
          </div>

          {/* Trust Icons */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 pt-12 border-t border-gray-800">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Secure Payments</h3>
              <p className="text-gray-400 text-sm">256-bit SSL encryption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Privacy Protected</h3>
              <p className="text-gray-400 text-sm">Your data is safe with us</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Money-Back Guarantee</h3>
              <p className="text-gray-400 text-sm">30-day full refund policy</p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12 pt-8 sm:pt-12 border-t border-gray-800">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* Use uploaded footer logo image and gold text */}
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/40 blur-xl rounded-lg"></div>
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <img src="/logo.png" alt="Resume Ai Pro" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold" style={{ color: '#D4AF37', textShadow: '0 2px 6px rgba(0,0,0,0.45)', letterSpacing: '-0.02em' }}>
                    Resume Ai Pro
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Professional AI-powered resume builder trusted by millions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollToSection('samples')} className="hover:text-white transition-colors">Templates</button></li>
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => onOpenContact?.()} className="hover:text-white transition-colors">Contact</button></li>
                <li><button onClick={() => onOpenHelp?.()} className="hover:text-white transition-colors">Help Center</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => { setPolicyType('privacy'); setShowPolicyModal(true); }} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => { setPolicyType('terms'); setShowPolicyModal(true); }} className="hover:text-white transition-colors">Terms of Service</button></li>
                <li><button onClick={() => { setPolicyType('refund'); setShowPolicyModal(true); }} className="hover:text-white transition-colors">Refund Policy</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 ResumeAI Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-3 shadow-lg sm:shadow-2xl z-50 border-t border-blue-500/50 backdrop-blur-0 sm:backdrop-blur-sm">
        <button
          onClick={() => onGetStarted?.()}
          className="w-full py-3 bg-white text-blue-600 rounded-lg font-bold text-base hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
        >
          <Zap className="w-5 h-5" />
          Create Resume Now
        </button>
      </div>

      {/* Sample Preview Modal */}
      {previewSample !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-0 sm:p-4" onClick={() => setPreviewSample(null)}>
          <div className="bg-white rounded-none sm:rounded-2xl shadow-2xl max-w-4xl w-full h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className={`sticky top-0 p-4 sm:p-6 text-white flex items-center justify-between z-10 ${
              previewSample === 0 ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
              previewSample === 1 ? 'bg-gradient-to-r from-slate-800 to-gray-900' :
              'bg-gradient-to-r from-teal-600 to-cyan-600'
            }`}>
              <div>
                <h3 className="text-lg sm:text-2xl font-bold mb-1">
                  {['Modern Professional', 'Executive Style', 'Creative Design'][previewSample]}
                </h3>
                <p className="text-white/90 text-sm sm:text-base">Sample Resume Template</p>
              </div>
              <button
                onClick={() => setPreviewSample(null)}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
              >
                <span className="text-xl sm:text-2xl">×</span>
              </button>
            </div>

            <div className="p-4 sm:p-8 pb-20 sm:pb-8">
              {previewSample === 0 && (
                <div className="bg-white rounded-lg p-4 sm:p-10 shadow-lg border-l-4 sm:border-l-8 border-blue-600">
                  <div className="max-w-3xl mx-auto">
                    <div className="border-b-2 sm:border-b-4 border-blue-600 pb-4 sm:pb-6 mb-4 sm:mb-6">
                      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">Sarah Johnson</h1>
                      <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-3">Senior Product Manager</p>
                      <div className="text-gray-600 flex flex-wrap gap-4 text-sm">
                        <span>sarah.johnson@email.com</span>
                        <span>•</span>
                        <span>(555) 987-6543</span>
                        <span>•</span>
                        <span>San Francisco, CA</span>
                        <span>•</span>
                        <span>linkedin.com/in/sarahjohnson</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <p className="text-gray-800 leading-relaxed">
                          Dynamic product manager with 7+ years of experience driving product strategy and delivering innovative solutions. Proven track record of launching successful products that increased revenue by 150%. Expert in agile methodologies, user research, and cross-functional team leadership.
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <div className="w-2 h-8 bg-blue-600 rounded"></div>
                        EXPERIENCE
                      </h2>

                      <div className="mb-5 pl-4 border-l-2 border-blue-200">
                        <h3 className="text-xl font-bold text-gray-900">Senior Product Manager</h3>
                        <div className="text-blue-600 font-semibold text-sm mb-2">Tech Innovations Inc. | 2021 - Present</div>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Led product development for SaaS platform serving 50K+ enterprise users</li>
                          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Increased user engagement by 85% through data-driven feature optimization</li>
                          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Managed cross-functional team of 15+ engineers, designers, and marketers</li>
                          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Successfully launched 3 major product releases ahead of schedule</li>
                        </ul>
                      </div>

                      <div className="mb-5 pl-4 border-l-2 border-blue-200">
                        <h3 className="text-xl font-bold text-gray-900">Product Manager</h3>
                        <div className="text-blue-600 font-semibold text-sm mb-2">Digital Solutions Co. | 2019 - 2021</div>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Defined product roadmap based on market research and customer feedback</li>
                          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Increased conversion rates by 60% through A/B testing and optimization</li>
                          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Collaborated with stakeholders to align product vision with business goals</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <div className="w-2 h-8 bg-blue-600 rounded"></div>
                        EDUCATION
                      </h2>
                      <div className="pl-4">
                        <h3 className="text-xl font-bold text-gray-900">MBA in Business Administration</h3>
                        <div className="text-blue-600 font-semibold text-sm">Stanford University | 2017 - 2019</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <div className="w-2 h-8 bg-blue-600 rounded"></div>
                        SKILLS
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {['Product Strategy', 'Agile/Scrum', 'User Research', 'A/B Testing', 'SQL', 'Analytics', 'Jira', 'Roadmapping'].map((skill) => (
                          <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {previewSample === 1 && (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 sm:p-10 shadow-2xl">
                  <div className="max-w-3xl mx-auto bg-white p-4 sm:p-8 shadow-xl">
                    <div className="text-center border-b-2 border-gray-800 pb-4 sm:pb-6 mb-6 sm:mb-8">
                      <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 mb-2">Michael Anderson</h1>
                      <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-2">Chief Financial Officer</p>
                      <div className="text-gray-600 text-sm">
                        <p>michael.anderson@executive.com | +1 (555) 234-5678</p>
                        <p>New York, NY 10022 | linkedin.com/in/michael-anderson-cfo</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-400 pb-2">Executive Summary</h2>
                      <p className="text-gray-700 leading-relaxed text-justify">
                        Distinguished finance executive with 15+ years of strategic leadership experience. Proven expertise in financial planning, M&A, risk management, and corporate governance. Successfully led financial operations for Fortune 500 companies, driving profitability improvements exceeding $50M annually. Adept at building high-performance teams and fostering stakeholder relationships.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wider border-b border-gray-400 pb-2">Professional Experience</h2>

                      <div className="mb-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Chief Financial Officer</h3>
                            <p className="text-gray-700 italic">Global Enterprise Solutions Inc.</p>
                          </div>
                          <div className="text-right text-sm text-gray-600">
                            <p>2020 - Present</p>
                            <p>New York, NY</p>
                          </div>
                        </div>
                        <ul className="list-none space-y-2 text-gray-700 ml-4">
                          <li className="before:content-['▪'] before:mr-2 before:font-bold">Direct financial strategy for $2B revenue organization with 3,000+ employees</li>
                          <li className="before:content-['▪'] before:mr-2 before:font-bold">Led successful IPO raising $500M in capital markets</li>
                          <li className="before:content-['▪'] before:mr-2 before:font-bold">Reduced operational costs by $30M through strategic process optimization</li>
                          <li className="before:content-['▪'] before:mr-2 before:font-bold">Oversaw 5 strategic acquisitions totaling $150M</li>
                        </ul>
                      </div>

                      <div className="mb-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Vice President of Finance</h3>
                            <p className="text-gray-700 italic">Corporate Financial Services Ltd.</p>
                          </div>
                          <div className="text-right text-sm text-gray-600">
                            <p>2015 - 2020</p>
                            <p>Boston, MA</p>
                          </div>
                        </div>
                        <ul className="list-none space-y-2 text-gray-700 ml-4">
                          <li className="before:content-['▪'] before:mr-2 before:font-bold">Managed financial planning, reporting, and analysis for $800M division</li>
                          <li className="before:content-['▪'] before:mr-2 before:font-bold">Implemented ERP system improving reporting efficiency by 40%</li>
                          <li className="before:content-['▪'] before:mr-2 before:font-bold">Led team of 25 finance professionals across multiple departments</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-400 pb-2">Education & Certifications</h2>
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-bold text-gray-900">Master of Business Administration (MBA), Finance</h3>
                          <p className="text-gray-700">Harvard Business School | 2010</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">Certified Public Accountant (CPA)</h3>
                          <p className="text-gray-700">State of New York | 2008</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-400 pb-2">Core Competencies</h2>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
                        <p>• Financial Strategy & Planning</p>
                        <p>• Mergers & Acquisitions</p>
                        <p>• Corporate Governance</p>
                        <p>• Risk Management</p>
                        <p>• Investor Relations</p>
                        <p>• Team Leadership</p>
                        <p>• Budget Management</p>
                        <p>• Financial Reporting</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {previewSample === 2 && (
                <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-2xl p-4 sm:p-10 shadow-2xl">
                  <div className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="sm:col-span-2">
                        <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-3">Emma Chen</h1>
                        <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Creative Director & UX Designer</p>
                        <p className="text-gray-700 leading-relaxed">
                          Award-winning creative professional specializing in user-centered design and brand storytelling. Passionate about crafting beautiful, intuitive experiences that delight users and drive business results.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-6 text-white shadow-xl">
                        <h3 className="font-bold text-sm mb-3 uppercase tracking-wider">Contact</h3>
                        <div className="space-y-2 text-sm">
                          <p>emma.chen@design.com</p>
                          <p>(555) 345-6789</p>
                          <p>Los Angeles, CA</p>
                          <p>emmachen.design</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                      <div className="sm:col-span-2 space-y-6">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full"></div>
                            <h2 className="text-2xl font-black text-gray-900 uppercase">Experience</h2>
                          </div>

                          <div className="space-y-5">
                            <div className="relative pl-6 border-l-4 border-teal-600">
                              <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-600 rounded-full"></div>
                              <h3 className="text-xl font-bold text-gray-900">Creative Director</h3>
                              <p className="text-teal-600 font-semibold mb-2">Pixel Perfect Studios | 2021 - Present</p>
                              <ul className="space-y-1 text-gray-700 text-sm">
                                <li>→ Lead creative team of 12 designers and developers</li>
                                <li>→ Designed brand identities for 30+ high-profile clients</li>
                                <li>→ Won 5 industry awards including Webby and AWWWARDS</li>
                                <li>→ Increased client satisfaction scores to 98%</li>
                              </ul>
                            </div>

                            <div className="relative pl-6 border-l-4 border-cyan-600">
                              <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-600 rounded-full"></div>
                              <h3 className="text-xl font-bold text-gray-900">Senior UX Designer</h3>
                              <p className="text-cyan-600 font-semibold mb-2">Digital Dreams Agency | 2018 - 2021</p>
                              <ul className="space-y-1 text-gray-700 text-sm">
                                <li>→ Redesigned e-commerce platform, boosting conversions 120%</li>
                                <li>→ Conducted user research with 500+ participants</li>
                                <li>→ Created design system used across 15 products</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full"></div>
                            <h2 className="text-2xl font-black text-gray-900 uppercase">Featured Projects</h2>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-teal-600">
                              <h3 className="font-bold text-gray-900 mb-1">HealthTech Mobile App</h3>
                              <p className="text-sm text-gray-700">Led end-to-end design for wellness app with 100K+ downloads</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-cyan-600">
                              <h3 className="font-bold text-gray-900 mb-1">E-commerce Redesign</h3>
                              <p className="text-sm text-gray-700">Complete UX overhaul resulting in 85% increase in user engagement</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-4 rounded-t-2xl">
                            <h2 className="text-lg font-black uppercase">Skills</h2>
                          </div>
                          <div className="bg-white p-4 rounded-b-2xl shadow-lg space-y-3">
                            <div>
                              <p className="text-sm font-bold text-gray-900 mb-1">Design Tools</p>
                              <div className="flex flex-wrap gap-1">
                                {['Figma', 'Adobe XD', 'Sketch'].map(skill => (
                                  <span key={skill} className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">{skill}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-900 mb-1">Expertise</p>
                              <div className="flex flex-wrap gap-1">
                                {['UX Design', 'Branding', 'Prototyping'].map(skill => (
                                  <span key={skill} className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">{skill}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-4 rounded-t-2xl">
                            <h2 className="text-lg font-black uppercase">Education</h2>
                          </div>
                          <div className="bg-white p-4 rounded-b-2xl shadow-lg">
                            <h3 className="font-bold text-gray-900 text-sm">BFA Graphic Design</h3>
                            <p className="text-xs text-gray-700">Art Center College</p>
                            <p className="text-xs text-teal-600 font-semibold">2014 - 2018</p>
                          </div>
                        </div>

                        <div>
                          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-4 rounded-t-2xl">
                            <h2 className="text-lg font-black uppercase">Awards</h2>
                          </div>
                          <div className="bg-white p-4 rounded-b-2xl shadow-lg text-sm space-y-2">
                            <p className="text-gray-900"><span className="text-teal-600 font-bold">🏆</span> Webby Award 2023</p>
                            <p className="text-gray-900"><span className="text-cyan-600 font-bold">🏆</span> AWWWARDS 2022</p>
                            <p className="text-gray-900"><span className="text-teal-600 font-bold">🏆</span> CSS Design Award</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={handleDownloadSample}
                  className={`px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base ${
                    previewSample === 0 ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' :
                    previewSample === 1 ? 'bg-gradient-to-r from-slate-700 to-gray-900 hover:from-slate-800 hover:to-black' :
                    'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700'
                  }`}
                >
                  <Download className="w-5 h-5" />
                  Download Sample
                </button>
                <button
                  onClick={() => {
                    const templateId = previewSample === 0 ? 'modern-executive' : previewSample === 1 ? 'executive-gold' : 'creative-designer';
                    onGetStarted(templateId);
                  }}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Create Your Own
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <PolicyModal
        isVisible={showPolicyModal}
        onClose={() => { setShowPolicyModal(false); setPolicyType(null); }}
        policyType={policyType}
      />
    </div>
  );
}