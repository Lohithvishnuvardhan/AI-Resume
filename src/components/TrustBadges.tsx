import React, { useState, useEffect } from 'react';
import { Shield, Award, Users, TrendingUp, Star, CheckCircle, Globe, Zap } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const [currentStats, setCurrentStats] = useState({
    users: 47832,
    resumes: 156743,
    hireRate: 94
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SOC 2 Certified",
      subtitle: "Enterprise Security",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Resume Builder",
      subtitle: "2024 Award Winner",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "50K+ Users",
      subtitle: "Trusted Worldwide",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "94% Success Rate",
      subtitle: "Get Hired Faster",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const mediaLogos = [
    { name: "TechCrunch", logo: "TC" },
    { name: "Forbes", logo: "F" },
    { name: "Wired", logo: "W" },
    { name: "Fast Company", logo: "FC" },
    { name: "Inc", logo: "Inc" }
  ];

  const testimonials = [
    {
      text: "ResumeAI Pro helped me land my dream job at Google! The AI suggestions were incredibly accurate.",
      author: "Sarah Chen",
      role: "Software Engineer at Google",
      rating: 5
    },
    {
      text: "I got 3x more interview calls after using this platform. The ATS optimization really works!",
      author: "Michael Rodriguez",
      role: "Marketing Director",
      rating: 5
    },
    {
      text: "The templates are beautiful and the AI writing assistance saved me hours of work.",
      author: "Emily Johnson",
      role: "Product Manager",
      rating: 5
    }
  ];

  // Animate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStats(prev => ({
        users: prev.users + Math.floor(Math.random() * 3),
        resumes: prev.resumes + Math.floor(Math.random() * 5),
        hireRate: Math.min(99, prev.hireRate + (Math.random() > 0.8 ? 1 : 0))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Animated Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            <div className="relative z-10">
              <div className={`w-12 h-12 bg-gradient-to-r ${badge.color} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {badge.icon}
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{badge.title}</h4>
              <p className="text-sm text-gray-600">{badge.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Live Stats */}
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-3xl font-bold text-yellow-400 tabular-nums">
                {currentStats.users.toLocaleString()}+
              </span>
            </div>
            <p className="text-gray-300">Active Users</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-3xl font-bold text-green-400 tabular-nums">
                {currentStats.resumes.toLocaleString()}+
              </span>
            </div>
            <p className="text-gray-300">Resumes Created</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-3xl font-bold text-blue-400 tabular-nums">
                {currentStats.hireRate}%
              </span>
            </div>
            <p className="text-gray-300">Success Rate</p>
          </div>
        </div>
      </div>

      {/* Media Logos */}
      <div className="text-center">
        <p className="text-gray-400 mb-4">As featured in</p>
        <div className="flex items-center justify-center space-x-8 opacity-60">
          {mediaLogos.map((media, index) => (
            <div
              key={index}
              className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center font-bold text-gray-300 hover:bg-gray-600 transition-colors cursor-pointer"
            >
              {media.logo}
            </div>
          ))}
        </div>
      </div>

      {/* Rotating Testimonials */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg text-gray-200 mb-4 italic">
            "{testimonials[currentTestimonial].text}"
          </blockquote>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
              {testimonials[currentTestimonial].author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-white">{testimonials[currentTestimonial].author}</p>
              <p className="text-sm text-gray-400">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentTestimonial === index ? 'bg-blue-500 w-6' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;