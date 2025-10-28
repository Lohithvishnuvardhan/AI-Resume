import React, { useState } from 'react';
import { X, Check, Crown, Zap, Star, ArrowRight } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');

  const plans = {
    free: {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      features: [
        "1 Resume Template",
        "Basic Text Editor",
        "PDF Download",
        "Basic Support"
      ],
      limitations: [
        "Limited customization",
        "No AI suggestions",
        "Basic templates only"
      ]
    },
    pro: {
      name: "Pro",
      price: { monthly: 19, yearly: 149 },
      originalYearly: 228,
      features: [
        "50+ Premium Templates",
        "AI-Powered Content Suggestions",
        "ATS Optimization",
        "Multiple Format Downloads",
        "Priority Support",
        "LinkedIn Profile Optimizer",
        "Cover Letter Builder",
        "Resume Health Scoring"
      ],
      popular: true
    },
    enterprise: {
      name: "Enterprise",
      price: { monthly: 49, yearly: 399 },
      originalYearly: 588,
      features: [
        "Everything in Pro",
        "Team Management",
        "Custom Branding",
        "API Access",
        "Advanced Analytics",
        "Dedicated Account Manager",
        "Custom Templates",
        "SSO Integration"
      ]
    }
  };

  const savings = billingCycle === 'yearly' ? 35 : 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 text-black">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Choose Your Plan</h2>
              <p className="opacity-90">Unlock the full power of AI-driven resume building</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-md font-medium transition-all relative ${
                  billingCycle === 'yearly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                {savings > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save {savings}%
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(plans).map(([planKey, plan]) => (
              <div
                key={planKey}
                className={`relative rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? 'border-yellow-400 bg-yellow-50 scale-105'
                    : selectedPlan === planKey
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => setSelectedPlan(planKey)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Crown className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price[billingCycle]}
                    </span>
                    {planKey !== 'free' && (
                      <span className="text-gray-600 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    )}
                    {billingCycle === 'yearly' && plan.originalYearly && (
                      <div className="text-sm text-gray-500 line-through">
                        ${plan.originalYearly}/year
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations?.map((limitation, index) => (
                      <li key={index} className="flex items-start text-gray-500">
                        <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-yellow-400 text-black hover:bg-yellow-500 transform hover:scale-105'
                        : selectedPlan === planKey
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {planKey === 'free' ? 'Get Started Free' : 'Start Free Trial'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Features Comparison */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-4 text-center">Why Choose Pro?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                <h5 className="font-medium text-gray-900">AI-Powered</h5>
                <p className="text-sm text-gray-600">Smart content suggestions</p>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-8 h-8 text-yellow-500 mb-2" />
                <h5 className="font-medium text-gray-900">Premium Templates</h5>
                <p className="text-sm text-gray-600">50+ professional designs</p>
              </div>
              <div className="flex flex-col items-center">
                <Crown className="w-8 h-8 text-yellow-500 mb-2" />
                <h5 className="font-medium text-gray-900">ATS Optimized</h5>
                <p className="text-sm text-gray-600">Pass recruiter systems</p>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="text-center mt-6 text-sm text-gray-600">
            <p>30-day money-back guarantee • Cancel anytime • No hidden fees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;