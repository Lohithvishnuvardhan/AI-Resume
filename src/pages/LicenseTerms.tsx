import { Shield, AlertTriangle, FileText, XCircle, CheckCircle, Scale } from 'lucide-react';

export default function LicenseTerms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Scale className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Single-Use Individual License Agreement
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Please read these terms carefully before using the software
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                License Grant
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Subject to the terms of this Agreement, we grant you a limited, non-exclusive, non-transferable,
                non-sublicensable license to use the AI Resume Builder software (the "Software") for your personal,
                individual use only.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What You Can Do:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use the Software on <strong>one device only</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Create unlimited resumes for your personal use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Download and save your created resumes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Receive updates and improvements to the Software</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Prohibited Uses
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="font-semibold text-red-900 dark:text-red-200">
                You are STRICTLY PROHIBITED from:
              </p>
              <div className="space-y-3">
                <div className="bg-white dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-700">
                  <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Sharing or Distribution
                  </h3>
                  <ul className="space-y-1 text-sm ml-7">
                    <li>• Sharing your license key with any other person</li>
                    <li>• Posting or distributing the Software online</li>
                    <li>• Uploading to file-sharing or torrent platforms</li>
                    <li>• Sharing through cloud storage or social media</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-700">
                  <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Resale or Commercial Use
                  </h3>
                  <ul className="space-y-1 text-sm ml-7">
                    <li>• Reselling the Software or your license</li>
                    <li>• Renting or leasing the Software to others</li>
                    <li>• Using the Software in a commercial service bureau</li>
                    <li>• Offering resume creation as a paid service using this Software</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-700">
                  <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Technical Violations
                  </h3>
                  <ul className="space-y-1 text-sm ml-7">
                    <li>• Using the license on multiple devices</li>
                    <li>• Attempting to bypass device fingerprinting</li>
                    <li>• Reverse engineering or decompiling the Software</li>
                    <li>• Modifying or creating derivative works</li>
                    <li>• Removing or altering any proprietary notices</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-700">
                  <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Redistribution
                  </h3>
                  <ul className="space-y-1 text-sm ml-7">
                    <li>• Copying the Software for distribution</li>
                    <li>• Creating backup copies for others</li>
                    <li>• Bundling with other software products</li>
                    <li>• Making available through any network or platform</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Anti-Piracy Protection
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                This Software includes advanced anti-piracy and license enforcement technology that:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Device Binding:</strong> Your license is permanently bound to the device where it's first activated
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Usage Monitoring:</strong> All software access and usage is logged and monitored
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Violation Detection:</strong> Automatic detection and blocking of unauthorized use attempts
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>IP Tracking:</strong> IP addresses are recorded for security and compliance purposes
                  </span>
                </li>
              </ul>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-4">
                <p className="text-amber-900 dark:text-amber-200">
                  <strong>Note:</strong> Any attempt to circumvent these protection measures is a violation of this Agreement
                  and may result in legal action.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Consequences of Violation
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Violation of any term in this Agreement will result in:
              </p>
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">Immediate Actions:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Instant and permanent license revocation</li>
                    <li>• Termination of all access to the Software</li>
                    <li>• No refund of purchase price</li>
                    <li>• Account blacklisting preventing future purchases</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">Legal Actions:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• We reserve the right to pursue legal action</li>
                    <li>• You may be liable for damages and legal fees</li>
                    <li>• Criminal prosecution for software piracy where applicable</li>
                    <li>• Copyright infringement claims under applicable laws</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ownership and Intellectual Property
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                The Software is licensed, not sold. We retain all rights, title, and interest in and to the Software,
                including all intellectual property rights. This Agreement does not grant you any rights to:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Trademarks, service marks, or trade names</li>
                <li>• Patents or patent applications</li>
                <li>• Copyrights and related rights</li>
                <li>• Source code or proprietary algorithms</li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Refund Policy
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Please review our refund policy carefully:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Refunds are available within 14 days of purchase if the license has not been activated</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Once the license is activated, no refunds will be provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>No refunds for licenses revoked due to terms violations</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Governing Law
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction
                in which we operate, without regard to its conflict of law provisions.
              </p>
              <p>
                By using the Software, you acknowledge that you have read this Agreement, understand it, and agree
                to be bound by its terms and conditions.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Agreement Acceptance</h2>
            <p className="mb-4">
              By activating your license key, you acknowledge that you have read, understood, and agree to be bound
              by all terms and conditions outlined in this Single-Use Individual License Agreement.
            </p>
            <p className="text-sm opacity-90">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                window.history.pushState({}, '', '/documentation');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Read Documentation
            </button>
            <button
              onClick={() => {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Accept & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
