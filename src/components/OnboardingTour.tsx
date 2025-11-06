import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Play, Sparkles, Target, Crown, CheckCircle } from 'lucide-react';

interface OnboardingTourProps {
  isOpen: boolean;
  onClose: () => void;
  onGetStarted: () => void;
}

const OnboardingTour: React.FC<OnboardingTourProps> = ({ isOpen, onClose, onGetStarted }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to ResumeAI Pro!",
      description: "Create professional, ATS-optimized resumes in minutes with our AI-powered platform.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "50+ Premium Templates",
        "AI-Powered Content Generation",
        "ATS Optimization",
        "Real-time Preview"
      ]
    },
    {
      title: "Choose Your Perfect Template",
      description: "Select from our collection of professionally designed templates, each optimized for different industries and career levels.",
      image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Industry-Specific Designs",
        "Multiple Color Schemes",
        "Mobile-Responsive Layouts",
        "ATS-Friendly Formats"
      ]
    },
    {
      title: "AI-Powered Content Generation",
      description: "Our advanced AI analyzes your experience and generates compelling content that highlights your achievements and skills.",
      image: "https://images.pexels.com/photos/7688462/pexels-photo-7688462.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Smart Content Suggestions",
        "Industry-Specific Keywords",
        "Achievement-Focused Writing",
        "Personalized Recommendations"
      ]
    },
    {
      title: "ATS Optimization & Scoring",
      description: "Get real-time feedback on your resume's ATS compatibility and receive actionable suggestions for improvement.",
      image: "https://images.pexels.com/photos/7688340/pexels-photo-7688340.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Real-time ATS Scoring",
        "Keyword Optimization",
        "Format Compliance Check",
        "Improvement Suggestions"
      ]
    },
    {
      title: "Ready to Get Started?",
      description: "Join thousands of professionals who have successfully landed their dream jobs using ResumeAI Pro.",
      image: "https://images.pexels.com/photos/7688463/pexels-photo-7688463.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Free to Start",
        "No Credit Card Required",
        "Instant Access",
        "24/7 Support"
      ]
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGetStarted = () => {
    onGetStarted();
    onClose();
  };

  if (!isOpen) return null;

  const currentStepData = steps[currentStep];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Play className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Product Tour</h2>
                <p className="opacity-90">Discover the power of AI-driven resume building</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Step {currentStep + 1} of {steps.length}</span>
              <span className="text-sm opacity-90">{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-[calc(90vh-200px)]">
          {/* Left Side - Content */}
          <div className="flex-1 p-8 flex flex-col justify-center">
            <div className="max-w-lg">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {currentStepData.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {currentStepData.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {currentStepData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                {currentStep === steps.length - 1 ? (
                  <button
                    onClick={handleGetStarted}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start Building Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                ) : (
                  <button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                  >
                    Next Step
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                )}
                
                {currentStep > 0 && (
                  <button
                    onClick={prevStep}
                    className="border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-6 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Previous
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="flex-1 p-8 bg-gray-50 dark:bg-slate-700 flex items-center justify-center">
            <div className="relative">
              <img
                src={currentStepData.image}
                alt={currentStepData.title}
                className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating Elements */}
              {currentStep === 0 && (
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm animate-bounce">
                  AI Powered!
                </div>
              )}
              
              {currentStep === 1 && (
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                  50+ Templates
                </div>
              )}
              
              {currentStep === 2 && (
                <div className="absolute -top-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-bounce">
                  <Sparkles className="w-4 h-4 inline mr-1" />
                  Smart AI
                </div>
              )}
              
              {currentStep === 3 && (
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                  <Target className="w-4 h-4 inline mr-1" />
                  ATS Ready
                </div>
              )}
              
              {currentStep === 4 && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-bounce">
                  <Crown className="w-4 h-4 inline mr-1" />
                  Premium
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-slate-700 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStep === index 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-gray-300 dark:bg-slate-500 hover:bg-gray-400 dark:hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-sm font-medium"
            >
              Skip Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTour;