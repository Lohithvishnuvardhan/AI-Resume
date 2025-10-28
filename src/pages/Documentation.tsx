import { BookOpen, Download, Key, Shield, AlertTriangle, CheckCircle, Settings } from 'lucide-react';

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Documentation & Setup Guide
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to get started with your AI Resume Builder
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Getting Started
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Welcome to the AI Resume Builder! Follow these simple steps to create your professional resume:
              </p>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  <strong className="text-gray-900 dark:text-white">Activate Your License:</strong> Enter your unique license key in the activation section below.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Upload or Create:</strong> Either upload your existing resume or start from scratch.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Choose a Template:</strong> Select from our professionally designed templates.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">AI Enhancement:</strong> Use our AI tools to optimize your resume for ATS systems.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Download:</strong> Export your resume as a professional PDF.
                </li>
              </ol>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Key className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                License Activation
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Your license key is a unique identifier that grants you access to all features. Here's what you need to know:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">License Format</h3>
                <p className="font-mono text-sm">XXXX-XXXX-XXXX-XXXX</p>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Each license is valid for <strong>one device only</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Unlimited resume creation and downloads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Access to all AI features and templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Lifetime access with your purchase</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                License Protection
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Your license is protected by advanced anti-piracy measures to ensure fair use:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Device Fingerprinting:</strong> Your license is locked to your device upon first activation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Usage Monitoring:</strong> All access attempts are logged for security</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Violation Detection:</strong> Attempts to share or redistribute are automatically blocked</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Important License Terms
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="font-semibold text-gray-900 dark:text-white">
                This is a Single-Use, Individual License. You agree to:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✗</span>
                  <span><strong>NOT share</strong> your license key with others</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✗</span>
                  <span><strong>NOT resell</strong> or redistribute the software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✗</span>
                  <span><strong>NOT upload</strong> the software to file-sharing platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✗</span>
                  <span><strong>NOT use</strong> the license on multiple devices simultaneously</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✗</span>
                  <span><strong>NOT reverse engineer</strong> or modify the software</span>
                </li>
              </ul>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
                <p className="font-semibold text-red-900 dark:text-red-200">
                  Violation of these terms will result in immediate license revocation without refund.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Download className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Features Overview
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">AI-Powered Tools</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>• AI Resume Generation</li>
                  <li>• ATS Optimization</li>
                  <li>• Health Score Analysis</li>
                  <li>• Auto-Fix Suggestions</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Professional Templates</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>• 10+ Premium Designs</li>
                  <li>• ATS-Friendly Formats</li>
                  <li>• Customizable Layouts</li>
                  <li>• Industry-Specific Options</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Easy Editing</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Live Preview</li>
                  <li>• Drag & Drop Interface</li>
                  <li>• Real-time Updates</li>
                  <li>• One-Click Export</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Additional Tools</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Cover Letter Builder</li>
                  <li>• Multiple Export Formats</li>
                  <li>• Cloud Storage</li>
                  <li>• Version History</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="mb-4">
              If you have questions about your license or need technical support, please contact us:
            </p>
            <div className="space-y-2">
              <p>📧 Email: support@airesume.com</p>
              <p>🌐 Website: www.airesume.com/support</p>
              <p>📚 FAQ: www.airesume.com/faq</p>
            </div>
          </section>

          <div className="text-center">
            <button
              onClick={() => {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
