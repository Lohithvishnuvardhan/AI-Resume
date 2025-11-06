import React from 'react';
import { X } from 'lucide-react';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import RefundPolicy from '../pages/RefundPolicy';

interface PolicyModalProps {
  isVisible: boolean;
  onClose: () => void;
  policyType: 'privacy' | 'terms' | 'refund' | null;
}

export default function PolicyModal({ isVisible, onClose, policyType }: PolicyModalProps) {
  if (!isVisible || !policyType) return null;

  const renderPolicyContent = () => {
    switch (policyType) {
      case 'privacy':
        return <PrivacyPolicyContent />;
      case 'terms':
        return <TermsOfServiceContent />;
      case 'refund':
        return <RefundPolicyContent />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gray-800/95 border border-gray-700 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700 p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-white">
            {policyType === 'privacy' && 'Privacy Policy'}
            {policyType === 'terms' && 'Terms of Service'}
            {policyType === 'refund' && 'Refund Policy'}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-gray-300" />
          </button>
        </div>
        <div className="p-8">
          {renderPolicyContent()}
        </div>
      </div>
    </div>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="space-y-8 text-gray-300">
      <p className="text-gray-400 text-sm">Last updated: October 5, 2025</p>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">1. Information We Collect</h3>
        <p className="leading-relaxed mb-3">
          We collect information you provide directly to us when using ResumeAI Pro, including:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Personal information (name, email, phone number, location)</li>
          <li>Professional information (work experience, education, skills)</li>
          <li>Resume content and documents you upload</li>
          <li>Payment information for premium features</li>
          <li>Usage data and analytics</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h3>
        <p className="leading-relaxed mb-3">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Provide, maintain, and improve our services</li>
          <li>Generate and optimize your resume</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Analyze usage patterns to improve user experience</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">3. Data Storage and Security</h3>
        <p className="leading-relaxed mb-3">
          We implement industry-standard security measures to protect your personal information:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>256-bit SSL encryption for data transmission</li>
          <li>Secure cloud storage with regular backups</li>
          <li>Access controls and authentication measures</li>
          <li>Regular security audits and updates</li>
          <li>Encrypted database storage</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">4. Information Sharing</h3>
        <p className="leading-relaxed mb-3">
          We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>With your explicit consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and prevent fraud</li>
          <li>With service providers who assist in our operations</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">5. Your Rights and Choices</h3>
        <p className="leading-relaxed mb-3">
          You have the right to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Access and download your personal data</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your account and data</li>
          <li>Opt-out of marketing communications</li>
          <li>Export your resume data</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">6. Contact Us</h3>
        <p className="leading-relaxed mb-3">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-none space-y-2 ml-4">
          <li>Email: privacy@resumeaipro.com</li>
          <li>Address: 123 AI Street, San Francisco, CA 94105</li>
          <li>Phone: 1-800-RESUME-AI</li>
        </ul>
      </section>
    </div>
  );
}

function TermsOfServiceContent() {
  return (
    <div className="space-y-8 text-gray-300">
      <p className="text-gray-400 text-sm">Last updated: October 5, 2025</p>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h3>
        <p className="leading-relaxed">
          By accessing and using ResumeAI Pro, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">2. Use License</h3>
        <p className="leading-relaxed mb-3">
          Permission is granted to temporarily download one copy of ResumeAI Pro materials for personal, non-commercial transitory viewing only. Under this license you may not:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose</li>
          <li>Attempt to decompile or reverse engineer any software</li>
          <li>Remove any copyright or proprietary notations</li>
          <li>Transfer the materials to another person</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">3. Account Registration</h3>
        <p className="leading-relaxed mb-3">
          To use certain features of our service, you must register for an account. When you register, you agree to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Provide accurate, current, and complete information</li>
          <li>Maintain and promptly update your account information</li>
          <li>Maintain the security of your password</li>
          <li>Accept responsibility for all activities under your account</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">4. Subscription and Payment</h3>
        <p className="leading-relaxed mb-3">
          ResumeAI Pro offers both free and paid subscription plans:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Subscriptions are billed in advance on a monthly or annual basis</li>
          <li>Payment is due immediately upon subscription purchase</li>
          <li>Subscriptions automatically renew unless cancelled</li>
          <li>Refunds are available within 30 days of purchase</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">5. User Content</h3>
        <p className="leading-relaxed mb-3">
          You retain all rights to the content you create using our service. By using ResumeAI Pro, you grant us:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>A license to store and process your content</li>
          <li>Permission to use anonymized data for service improvement</li>
          <li>The right to display your content within the service</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">6. Contact Information</h3>
        <p className="leading-relaxed mb-3">
          Questions about the Terms of Service should be sent to:
        </p>
        <ul className="list-none space-y-2 ml-4">
          <li>Email: legal@resumeaipro.com</li>
          <li>Address: 123 AI Street, San Francisco, CA 94105</li>
          <li>Phone: 1-800-RESUME-AI</li>
        </ul>
      </section>
    </div>
  );
}

function RefundPolicyContent() {
  return (
    <div className="space-y-8 text-gray-300">
      <p className="text-gray-400 text-sm">Last updated: October 5, 2025</p>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">Our Commitment</h3>
        <p className="leading-relaxed">
          At ResumeAI Pro, we are committed to your satisfaction. We offer a 30-day money-back guarantee on all premium subscriptions. If you're not completely satisfied with our service, we'll refund your purchase, no questions asked.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">1. 30-Day Money-Back Guarantee</h3>
        <p className="leading-relaxed mb-3">
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
        <h3 className="text-xl font-bold text-white mb-3">2. Eligibility Requirements</h3>
        <p className="leading-relaxed mb-3">
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
        <h3 className="text-xl font-bold text-white mb-3">3. How to Request a Refund</h3>
        <p className="leading-relaxed mb-3">
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
        <h3 className="text-xl font-bold text-white mb-3">4. Processing Time</h3>
        <p className="leading-relaxed mb-3">
          Once your refund request is approved:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Refunds are processed within 5-7 business days</li>
          <li>Funds return to your original payment method</li>
          <li>Bank processing may take an additional 3-5 business days</li>
          <li>You'll receive an email confirmation once processed</li>
        </ul>
      </section>

      <section className="bg-green-900/20 border border-green-700 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-3">Our Promise</h3>
        <p className="leading-relaxed">
          We stand behind the quality of our service. If ResumeAI Pro doesn't meet your expectations within the first 30 days, we'll refund your money without hassle. Your satisfaction is our priority.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">Contact Us</h3>
        <p className="leading-relaxed mb-3">
          For refund requests or questions:
        </p>
        <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 space-y-2">
          <p className="font-semibold text-white">Email: support@resumeaipro.com</p>
          <p>Subject: Refund Request</p>
          <p>Response time: Within 24 hours</p>
        </div>
      </section>
    </div>
  );
}
