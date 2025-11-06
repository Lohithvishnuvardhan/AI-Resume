import { Shield, AlertTriangle, FileText, XCircle, CheckCircle, Scale, ArrowLeft, Lock, Gavel, Ban, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function LicenseTerms() {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: section1Ref, isVisible: section1Visible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: section2Ref, isVisible: section2Visible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: section3Ref, isVisible: section3Visible } = useScrollAnimation({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-red-400 rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Scale className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4 sm:mb-6" style={{fontFamily: 'Playfair Display, Georgia, serif', textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'}}>
            Single-Use Individual License Agreement
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
            Please read these terms carefully before using the software
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <section ref={section1Ref} className={`backdrop-blur-xl bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden transform transition-all duration-700 ${section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} will-change-transform gpu-accelerated`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  License Grant
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed">
                  Subject to the terms of this Agreement, we grant you a limited, non-exclusive, non-transferable,
                  non-sublicensable license to use the AI Resume Builder software (the "Software") for your personal,
                  individual use only.
                </p>
                <div className="backdrop-blur-sm bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 border-2 border-green-500/30 rounded-xl p-5 sm:p-6 shadow-lg">
                  <h3 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    What You Can Do:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 backdrop-blur-sm">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">One Device Only</p>
                        <p className="text-sm text-gray-300">Use the Software on one device only</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 backdrop-blur-sm">
                      <CheckCircle className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">Unlimited Creation</p>
                        <p className="text-sm text-gray-300">Create unlimited resumes for personal use</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                      <CheckCircle className="w-6 h-6 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">Download & Save</p>
                        <p className="text-sm text-gray-300">Download and save your created resumes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">Updates Included</p>
                        <p className="text-sm text-gray-300">Receive updates and improvements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section ref={section2Ref} className={`backdrop-blur-xl bg-gradient-to-br from-red-900/40 via-pink-900/40 to-red-900/40 rounded-3xl border-2 border-red-500/30 shadow-2xl overflow-hidden transform transition-all duration-700 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} will-change-transform gpu-accelerated`}>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-pink-500/10 pointer-events-none"></div>
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-red-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Ban className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  Prohibited Uses
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-200">
                <p className="font-bold text-white text-lg sm:text-xl mb-6">
                  You are STRICTLY PROHIBITED from:
                </p>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-xl p-5 sm:p-6 border-2 border-red-500/30 backdrop-blur-sm hover:border-red-500/50 transition-all">
                    <h3 className="font-bold text-white mb-3 flex items-center gap-3 text-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-white" />
                      </div>
                      Sharing or Distribution
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-200 ml-14">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Sharing your license key with any other person</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Posting or distributing the Software online</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Uploading to file-sharing or torrent platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Sharing through cloud storage or social media</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-xl p-5 sm:p-6 border-2 border-red-500/30 backdrop-blur-sm hover:border-red-500/50 transition-all">
                    <h3 className="font-bold text-white mb-3 flex items-center gap-3 text-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-white" />
                      </div>
                      Resale or Commercial Use
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-200 ml-14">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Reselling the Software or your license</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Renting or leasing the Software to others</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Using the Software in a commercial service bureau</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Offering resume creation as a paid service using this Software</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-xl p-5 sm:p-6 border-2 border-red-500/30 backdrop-blur-sm hover:border-red-500/50 transition-all">
                    <h3 className="font-bold text-white mb-3 flex items-center gap-3 text-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-white" />
                      </div>
                      Technical Violations
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-200 ml-14">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Using the license on multiple devices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Attempting to bypass device fingerprinting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Reverse engineering or decompiling the Software</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Modifying or creating derivative works</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Removing or altering any proprietary notices</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-xl p-5 sm:p-6 border-2 border-red-500/30 backdrop-blur-sm hover:border-red-500/50 transition-all">
                    <h3 className="font-bold text-white mb-3 flex items-center gap-3 text-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-white" />
                      </div>
                      Redistribution
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-200 ml-14">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Copying the Software for distribution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Creating backup copies for others</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Bundling with other software products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Making available through any network or platform</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section ref={section3Ref} className={`backdrop-blur-xl bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden transform transition-all duration-700 ${section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} will-change-transform gpu-accelerated`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Anti-Piracy Protection
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed">
                  This Software includes advanced anti-piracy and license enforcement technology that:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Device Binding</h3>
                      <p className="text-gray-300 text-sm">Your license is permanently bound to the device where it's first activated</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Usage Monitoring</h3>
                      <p className="text-gray-300 text-sm">All software access and usage is logged and monitored</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Violation Detection</h3>
                      <p className="text-gray-300 text-sm">Automatic detection and blocking of unauthorized use attempts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl border border-red-500/20 backdrop-blur-sm hover:border-red-500/40 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">IP Tracking</h3>
                      <p className="text-gray-300 text-sm">IP addresses are recorded for security and compliance purposes</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-600/30 to-orange-600/30 border-2 border-amber-500/50 rounded-xl p-5 mt-6 backdrop-blur-sm">
                  <p className="text-amber-200 text-center font-semibold">
                    <strong>⚠️ Note:</strong> Any attempt to circumvent these protection measures is a violation of this Agreement
                    and may result in legal action.
                  </p>
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
                    <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  Consequences of Violation
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-200">
                <p className="font-bold text-white text-lg sm:text-xl mb-6">
                  Violation of any term in this Agreement will result in:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-red-600/30 to-pink-600/30 border-2 border-red-500/50 rounded-xl p-5 sm:p-6 backdrop-blur-sm">
                    <h3 className="font-bold text-red-200 mb-4 text-lg flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6" />
                      Immediate Actions
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Instant and permanent license revocation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Termination of all access to the Software</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>No refund of purchase price</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Account blacklisting preventing future purchases</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-600/30 to-pink-600/30 border-2 border-red-500/50 rounded-xl p-5 sm:p-6 backdrop-blur-sm">
                    <h3 className="font-bold text-red-200 mb-4 text-lg flex items-center gap-2">
                      <Gavel className="w-6 h-6" />
                      Legal Actions
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>We reserve the right to pursue legal action</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>You may be liable for damages and legal fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Criminal prosecution for software piracy where applicable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Copyright infringement claims under applicable laws</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="backdrop-blur-xl bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-indigo-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Ownership and Intellectual Property
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed">
                  The Software is licensed, not sold. We retain all rights, title, and interest in and to the Software,
                  including all intellectual property rights. This Agreement does not grant you any rights to:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-500/20 backdrop-blur-sm">
                    <p className="text-white font-semibold">• Trademarks, service marks, or trade names</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/20 backdrop-blur-sm">
                    <p className="text-white font-semibold">• Patents or patent applications</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                    <p className="text-white font-semibold">• Copyrights and related rights</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl border border-pink-500/20 backdrop-blur-sm">
                    <p className="text-white font-semibold">• Source code or proprietary algorithms</p>
                  </div>
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
                    <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Refund Policy
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed">
                  Please review our refund policy carefully:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 backdrop-blur-sm">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">14-Day Refund Window</p>
                      <p className="text-sm text-gray-300">Refunds are available within 14 days of purchase if the license has not been activated</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl border border-red-500/20 backdrop-blur-sm">
                    <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">No Refund After Activation</p>
                      <p className="text-sm text-gray-300">Once the license is activated, no refunds will be provided</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl border border-red-500/20 backdrop-blur-sm">
                    <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">No Refund for Violations</p>
                      <p className="text-sm text-gray-300">No refunds for licenses revoked due to terms violations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="backdrop-blur-xl bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5 pointer-events-none"></div>
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Gavel className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Governing Law
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed">
                  This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction
                  in which we operate, without regard to its conflict of law provisions.
                </p>
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-2 border-blue-500/30 rounded-xl p-5 sm:p-6 backdrop-blur-sm">
                  <p className="text-white font-semibold text-center">
                    By using the Software, you acknowledge that you have read this Agreement, understand it, and agree
                    to be bound by its terms and conditions.
                  </p>
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
                  <Scale className="w-12 h-12 sm:w-16 sm:h-16 text-white relative z-10" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Agreement Acceptance</h2>
              <p className="mb-6 sm:mb-8 text-center text-lg text-blue-100 max-w-3xl mx-auto">
                By activating your license key, you acknowledge that you have read, understood, and agree to be bound
                by all terms and conditions outlined in this Single-Use Individual License Agreement.
              </p>
              <p className="text-sm sm:text-base opacity-90 text-center">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-12">
            <button
              onClick={() => {
                window.history.pushState({}, '', '/documentation');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl sm:rounded-2xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 will-change-transform border border-gray-600/20 hover:border-gray-600/40"
            >
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              Read Documentation
            </button>
            <button
              onClick={() => {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-800 text-white rounded-xl sm:rounded-2xl font-bold transition-all shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 active:scale-95 will-change-transform border border-blue-400/20 hover:border-blue-400/40"
            >
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Accept & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
