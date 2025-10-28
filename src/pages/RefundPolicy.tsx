import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <FileText className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">ResumeAI Pro</span>
            </div>
            <button
              onClick={() => window.close()}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Close
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Refund Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: October 5, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
              <p className="leading-relaxed">
                At ResumeAI Pro, we are committed to your satisfaction. We offer a 30-day money-back guarantee on all premium subscriptions. If you're not completely satisfied with our service, we'll refund your purchase, no questions asked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. 30-Day Money-Back Guarantee</h2>
              <p className="leading-relaxed mb-4">
                You can request a full refund within 30 days of your initial purchase for any reason:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Applies to first-time purchases of Pro and Premium plans</li>
                <li>Full refund of the subscription amount</li>
                <li>No questions asked policy</li>
                <li>Processed within 5-7 business days</li>
                <li>Refunded to the original payment method</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility Requirements</h2>
              <p className="leading-relaxed mb-4">
                To be eligible for a refund, the following conditions must be met:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Refund request made within 30 days of purchase</li>
                <li>First-time subscription to the specific plan</li>
                <li>No previous refund requests on the account</li>
                <li>Account must not be flagged for abuse or fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How to Request a Refund</h2>
              <p className="leading-relaxed mb-4">
                To request a refund, follow these simple steps:
              </p>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li className="leading-relaxed">
                  <strong className="text-white">Contact Support:</strong> Email us at support@resumeaipro.com with "Refund Request" in the subject line
                </li>
                <li className="leading-relaxed">
                  <strong className="text-white">Provide Details:</strong> Include your account email, purchase date, and order number
                </li>
                <li className="leading-relaxed">
                  <strong className="text-white">Receive Confirmation:</strong> You'll receive a confirmation email within 24 hours
                </li>
                <li className="leading-relaxed">
                  <strong className="text-white">Refund Processing:</strong> Your refund will be processed within 5-7 business days
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Subscription Renewals</h2>
              <p className="leading-relaxed mb-4">
                For subscription renewals (after the initial purchase):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You can cancel your subscription at any time</li>
                <li>Cancellation takes effect at the end of the current billing period</li>
                <li>No refunds for partial months or unused time after renewal</li>
                <li>Access continues until the end of the paid period</li>
                <li>To avoid renewal charges, cancel at least 24 hours before renewal date</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Non-Refundable Items</h2>
              <p className="leading-relaxed mb-4">
                The following are not eligible for refunds:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Expert review services after the review has been delivered</li>
                <li>One-time purchases of additional features or add-ons (after 30 days)</li>
                <li>Subscription renewals beyond the initial purchase</li>
                <li>Services used in violation of our Terms of Service</li>
                <li>Promotional or discounted subscriptions (unless stated otherwise)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Partial Refunds</h2>
              <p className="leading-relaxed">
                In exceptional circumstances, we may offer partial refunds at our discretion. This includes situations where:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Extended service outages affected your ability to use the service</li>
                <li>Technical issues prevented access to key features</li>
                <li>Account issues caused by errors on our part</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Contact our support team to discuss partial refund options for these situations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Processing Time</h2>
              <p className="leading-relaxed mb-4">
                Once your refund request is approved:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Refunds are processed within 5-7 business days</li>
                <li>Funds return to your original payment method</li>
                <li>Bank processing may take an additional 3-5 business days</li>
                <li>You'll receive an email confirmation once processed</li>
                <li>Check your bank statement for "RESUMEAI PRO REFUND"</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Account Status After Refund</h2>
              <p className="leading-relaxed mb-4">
                After receiving a refund:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your premium features will be immediately disabled</li>
                <li>You'll retain access to the free tier features</li>
                <li>Your data and resumes remain saved in your account</li>
                <li>You can resubscribe at any time</li>
                <li>The 30-day guarantee will not apply to future purchases</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Cancellation vs Refund</h2>
              <p className="leading-relaxed mb-4">
                Understand the difference:
              </p>
              <div className="bg-gray-900/50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Cancellation</h3>
                  <p className="text-gray-300">Stops future charges, access continues until period ends, no refund for current period</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Refund</h3>
                  <p className="text-gray-300">Returns payment, immediate loss of premium access, must be requested within 30 days</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Abuse Prevention</h2>
              <p className="leading-relaxed">
                We reserve the right to deny refund requests that appear to abuse our policy, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Multiple refund requests from the same user</li>
                <li>Patterns suggesting intentional exploitation</li>
                <li>Accounts created solely to obtain refunds</li>
                <li>Excessive use of the service before requesting refund</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                For refund requests or questions about this policy:
              </p>
              <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 space-y-2">
                <p className="font-semibold text-white">Email: support@resumeaipro.com</p>
                <p>Subject: Refund Request</p>
                <p>Response time: Within 24 hours</p>
                <p className="mt-4 text-sm text-gray-400">Include your account email and order number for faster processing</p>
              </div>
            </section>

            <section className="bg-green-900/20 border border-green-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Our Promise</h2>
              <p className="leading-relaxed">
                We stand behind the quality of our service. If ResumeAI Pro doesn't meet your expectations within the first 30 days, we'll refund your money without hassle. Your satisfaction is our priority, and we're committed to making the refund process as simple and transparent as possible.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
