import { BookOpen, Download, Key, Shield, AlertTriangle, CheckCircle, Settings, ArrowLeft, Sparkles, Zap, Rocket, FileText, Star, Users, TrendingUp, XCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Documentation() {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: section1Ref, isVisible: section1Visible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: section2Ref, isVisible: section2Visible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: section3Ref, isVisible: section3Visible } = useScrollAnimation({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        {/* Premium Navigation */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={() => {
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="group inline-flex items-center gap-2 px-4 py-2.5 text-blue-400 hover:text-blue-300 transition-all font-medium rounded-xl hover:bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 mb-6 will-change-transform gpu-accelerated"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Premium Hero Section */}
        <div ref={heroRef} className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 mb-4 sm:mb-6" style={{fontFamily: 'Playfair Display, Georgia, serif', textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'}}>
            Documentation & Setup Guide
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
            Everything you need to get started with your AI Resume Builder
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <section ref={section1Ref} className={`backdrop-blur-xl bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden transform transition-all duration-700 ${section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} will-change-transform gpu-accelerated`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Getting Started
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed">
                  Welcome to the AI Resume Builder! Follow these simple steps to create your professional resume:
                </p>
                <ol className="list-decimal list-inside space-y-4 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mt-0.5">
                      1
                    </div>
                    <div>
                      <strong className="text-white text-lg">Activate Your License:</strong>
                      <p className="text-gray-300 mt-1">Enter your unique license key in the activation section below.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mt-0.5">
                      2
                    </div>
                    <div>
                      <strong className="text-white text-lg">Upload or Create:</strong>
                      <p className="text-gray-300 mt-1">Either upload your existing resume or start from scratch.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mt-0.5">
                      3
                    </div>
                    <div>
                      <strong className="text-white text-lg">Choose a Template:</strong>
                      <p className="text-gray-300 mt-1">Select from our professionally designed templates.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mt-0.5">
                      4
                    </div>
                    <div>
                      <strong className="text-white text-lg">AI Enhancement:</strong>
                      <p className="text-gray-300 mt-1">Use our AI tools to optimize your resume for ATS systems.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mt-0.5">
                      5
                    </div>
                    <div>
                      <strong className="text-white text-lg">Download:</strong>
                      <p className="text-gray-300 mt-1">Export your resume as a professional PDF.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section ref={section2Ref} className={`backdrop-blur-xl bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden transform transition-all duration-700 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} will-change-transform gpu-accelerated`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Key className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  License Activation
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed">
                  Your license key is a unique identifier that grants you access to all features. Here's what you need to know:
                </p>
                <div className="backdrop-blur-sm bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 border-2 border-blue-500/30 rounded-xl p-5 sm:p-6 shadow-lg">
                  <h3 className="font-bold text-white mb-3 text-lg">License Format</h3>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                    <p className="font-mono text-sm sm:text-base text-cyan-400 tracking-widest">XXXX-XXXX-XXXX-XXXX</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 backdrop-blur-sm">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">One Device Only</p>
                      <p className="text-sm text-gray-300">Each license is valid for one device</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 backdrop-blur-sm">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Unlimited Creation</p>
                      <p className="text-sm text-gray-300">Create unlimited resumes and downloads</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                    <CheckCircle className="w-6 h-6 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">All Features</p>
                      <p className="text-sm text-gray-300">Access to all AI features and templates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20 backdrop-blur-sm">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Lifetime Access</p>
                      <p className="text-sm text-gray-300">Lifetime access with your purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section ref={section3Ref} className={`backdrop-blur-xl bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden transform transition-all duration-700 ${section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} will-change-transform gpu-accelerated`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  License Protection
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed">
                  Your license is protected by advanced anti-piracy measures to ensure fair use:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Device Fingerprinting</h3>
                      <p className="text-gray-300 text-sm">Your license is locked to your device upon first activation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Usage Monitoring</h3>
                      <p className="text-gray-300 text-sm">All access attempts are logged for security</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Violation Detection</h3>
                      <p className="text-gray-300 text-sm">Attempts to share or redistribute are automatically blocked</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="backdrop-blur-xl bg-gradient-to-br from-amber-900/40 via-orange-900/40 to-yellow-900/40 rounded-3xl border-2 border-amber-500/30 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10 pointer-events-none"></div>
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-amber-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  Important License Terms
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-200">
                <p className="font-bold text-white text-lg sm:text-xl mb-4">
                  This is a Single-Use, Individual License. You agree to:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl border border-red-500/30 backdrop-blur-sm">
                    <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white"><strong>NOT share</strong> your license key with others</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl border border-red-500/30 backdrop-blur-sm">
                    <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white"><strong>NOT resell</strong> or redistribute the software</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl border border-red-500/30 backdrop-blur-sm">
                    <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white"><strong>NOT upload</strong> the software to file-sharing platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl border border-red-500/30 backdrop-blur-sm">
                    <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white"><strong>NOT use</strong> the license on multiple devices simultaneously</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl border border-red-500/30 backdrop-blur-sm">
                    <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white"><strong>NOT reverse engineer</strong> or modify the software</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-600/30 to-red-700/30 border-2 border-red-500/50 rounded-xl p-5 mt-6 backdrop-blur-sm">
                  <p className="font-bold text-red-200 text-center">
                    ⚠️ Violation of these terms will result in immediate license revocation without refund.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="backdrop-blur-xl bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-emerald-500/5 pointer-events-none"></div>
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-green-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Features Overview
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <h3 className="font-bold text-white">AI-Powered Tools</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>AI Resume Generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>ATS Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>Health Score Analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>Auto-Fix Suggestions</span>
                    </li>
                  </ul>
                </div>
                <div className="p-5 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-5 h-5 text-purple-400" />
                    <h3 className="font-bold text-white">Professional Templates</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>50+ Premium Designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>ATS-Friendly Formats</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>Customizable Layouts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>Industry-Specific Options</span>
                    </li>
                  </ul>
                </div>
                <div className="p-5 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <Rocket className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-bold text-white">Easy Editing</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Live Preview</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Drag & Drop Interface</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Real-time Updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>One-Click Export</span>
                    </li>
                  </ul>
                </div>
                <div className="p-5 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-5 h-5 text-green-400" />
                    <h3 className="font-bold text-white">Additional Tools</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Cover Letter Builder</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Multiple Export Formats</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Cloud Storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Version History</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="backdrop-blur-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 rounded-3xl border border-blue-500/30 shadow-2xl overflow-hidden p-8 sm:p-10 lg:p-12 text-white relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <Users className="w-12 h-12 sm:w-16 sm:h-16 text-white relative z-10" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Need Help?</h2>
              <p className="mb-6 sm:mb-8 text-center text-lg text-blue-100">
                If you have questions about your license or need technical support, please contact us:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all">
                  <p className="text-2xl mb-2">📧</p>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-blue-100">support@airesume.com</p>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all">
                  <p className="text-2xl mb-2">🌐</p>
                  <p className="font-semibold mb-1">Website</p>
                  <p className="text-sm text-blue-100">www.airesume.com/support</p>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all">
                  <p className="text-2xl mb-2">📚</p>
                  <p className="font-semibold mb-1">FAQ</p>
                  <p className="text-sm text-blue-100">www.airesume.com/faq</p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-800 text-white text-lg sm:text-xl rounded-xl sm:rounded-2xl font-bold transition-all shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 active:scale-95 will-change-transform border border-blue-400/20 hover:border-blue-400/40"
            >
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              Get Started Now
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
