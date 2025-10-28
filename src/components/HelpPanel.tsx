import React, { useState } from 'react';
import { X, Search, MessageCircle, Phone, Mail, Book, Video, ChevronDown, ChevronRight, ExternalLink, Headphones } from 'lucide-react';

interface HelpPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpPanel: React.FC<HelpPanelProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'templates', name: 'Templates', icon: '📄' },
    { id: 'ai-features', name: 'AI Features', icon: '🤖' },
    { id: 'ats-optimization', name: 'ATS Optimization', icon: '🎯' },
    { id: 'billing', name: 'Billing & Plans', icon: '💳' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🔧' }
  ];

  const faqs = {
    'getting-started': [
      {
        question: 'How do I create my first resume?',
        answer: 'Click "Get Started Free" on the homepage, then choose a template and fill in your information. Our AI will help guide you through the process.'
      },
      {
        question: 'Is ResumeAI Pro really free to start?',
        answer: 'Yes! You can create and download one resume for free. Upgrade to Pro for unlimited resumes, premium templates, and AI features.'
      },
      {
        question: 'How long does it take to create a resume?',
        answer: 'With our AI assistance, most users complete their resume in 10-15 minutes. You can save and edit anytime.'
      }
    ],
    'templates': [
      {
        question: 'How many templates are available?',
        answer: 'We offer 50+ professionally designed templates. Free users get access to 3 templates, while Pro users get access to all templates.'
      },
      {
        question: 'Can I customize template colors?',
        answer: 'Yes! Pro users can choose from multiple color schemes for each template and customize fonts, spacing, and layout.'
      },
      {
        question: 'Are templates ATS-friendly?',
        answer: 'All our templates are designed to be ATS-compatible, ensuring your resume passes through applicant tracking systems.'
      }
    ],
    'ai-features': [
      {
        question: 'How does the AI content generation work?',
        answer: 'Our AI analyzes your job title, experience, and target role to generate compelling bullet points, summaries, and skill suggestions.'
      },
      {
        question: 'Can AI help with different industries?',
        answer: 'Yes! Our AI is trained on resumes from all major industries and can adapt content for tech, finance, healthcare, marketing, and more.'
      },
      {
        question: 'Is the AI-generated content unique?',
        answer: 'Absolutely! The AI creates personalized content based on your specific experience and never repeats the same content for different users.'
      }
    ],
    'ats-optimization': [
      {
        question: 'What is ATS optimization?',
        answer: 'ATS (Applicant Tracking System) optimization ensures your resume can be properly read and parsed by the software companies use to screen resumes.'
      },
      {
        question: 'How do I improve my ATS score?',
        answer: 'Use relevant keywords, standard section headings, avoid complex formatting, and include all required information. Our ATS checker provides specific recommendations.'
      },
      {
        question: 'What ATS score should I aim for?',
        answer: 'Aim for 80% or higher. Our tool shows you exactly what to improve to reach this target.'
      }
    ],
    'billing': [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and offer annual billing discounts.'
      },
      {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, you can cancel anytime. You\'ll retain Pro features until the end of your billing period.'
      },
      {
        question: 'Do you offer refunds?',
        answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, contact support for a full refund.'
      }
    ],
    'troubleshooting': [
      {
        question: 'My resume won\'t download. What should I do?',
        answer: 'Try refreshing the page and downloading again. If the issue persists, check your browser\'s pop-up settings or try a different browser.'
      },
      {
        question: 'The AI suggestions aren\'t loading.',
        answer: 'This usually resolves within a few seconds. If it continues, try refreshing the page or check your internet connection.'
      },
      {
        question: 'I lost my resume data. Can you recover it?',
        answer: 'Your data is automatically saved. Try refreshing the page or logging out and back in. Contact support if you still can\'t access your resume.'
      }
    ]
  };

  const filteredFAQs = faqs[activeCategory as keyof typeof faqs]?.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Book className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Help & Support</h2>
                <p className="opacity-90">Get answers to your questions</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex h-[calc(90vh-140px)]">
          {/* Sidebar */}
          <div className="w-80 bg-gray-50 dark:bg-slate-700 p-6 border-r border-gray-200 dark:border-slate-600">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Categories
              </h3>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Contact Options */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-600">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Contact Support
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                  <span>Live Chat</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                  <Mail className="w-5 h-5 text-green-500" />
                  <span>Email Support</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                  <Headphones className="w-5 h-5 text-purple-500" />
                  <span>24/7 Support</span>
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {categories.find(c => c.id === activeCategory)?.name} FAQ
              </h3>

              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No results found</h4>
                  <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or browse different categories.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 dark:border-slate-600 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white pr-4">
                          {faq.question}
                        </h4>
                        {expandedFAQ === index ? (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFAQ === index && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <h4 className="font-semibold text-blue-900 dark:text-blue-400 mb-4">Quick Links</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <a href="#" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
                    <Video className="w-4 h-4" />
                    <span>Video Tutorials</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
                    <Book className="w-4 h-4" />
                    <span>User Guide</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
                    <MessageCircle className="w-4 h-4" />
                    <span>Community Forum</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
                    <Phone className="w-4 h-4" />
                    <span>Contact Sales</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPanel;