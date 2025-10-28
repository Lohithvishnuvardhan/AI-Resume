import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Crown, Eye, Star } from 'lucide-react';
import TemplatePreviewModal from './TemplatePreviewModal';

interface Template {
  id: string;
  name: string;
  image: string;
  category: 'modern' | 'classic' | 'creative' | 'executive';
  isPremium: boolean;
  rating: number;
  downloads: string;
  preview: string;
}

interface TemplateCarouselProps {
  selectedTemplate: string;
  onTemplateSelect: (templateId: string, colorScheme?: number) => void;
  resumeData?: any;
}

const templates: Template[] = [
  {
    id: 'modern-executive',
    name: 'Modern Executive',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'modern',
    isPremium: true,
    rating: 4.9,
    downloads: '15K+',
    preview: 'Clean, professional design perfect for senior roles'
  },
  {
    id: 'creative-designer',
    name: 'Creative Designer',
    image: 'https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'creative',
    isPremium: true,
    rating: 4.8,
    downloads: '12K+',
    preview: 'Bold, artistic layout for creative professionals'
  },
  {
    id: 'tech-minimal',
    name: 'Tech Minimal',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'modern',
    isPremium: false,
    rating: 4.7,
    downloads: '25K+',
    preview: 'Minimalist design ideal for tech professionals'
  },
  {
    id: 'classic-professional',
    name: 'Classic Professional',
    image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'classic',
    isPremium: false,
    rating: 4.6,
    downloads: '30K+',
    preview: 'Traditional format suitable for all industries'
  },
  {
    id: 'executive-gold',
    name: 'Executive Gold',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'executive',
    isPremium: true,
    rating: 5.0,
    downloads: '8K+',
    preview: 'Luxury design with gold accents for executives'
  },
  {
    id: 'startup-founder',
    name: 'Startup Founder',
    image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'creative',
    isPremium: true,
    rating: 4.9,
    downloads: '10K+',
    preview: 'Dynamic layout perfect for entrepreneurs'
  }
];

const TemplateCarousel: React.FC<TemplateCarouselProps> = ({ selectedTemplate, onTemplateSelect, resumeData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(templates.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(templates.length / 3)) % Math.ceil(templates.length / 3));
  };

  const visibleTemplates = templates.slice(currentIndex * 3, (currentIndex + 1) * 3);

  const handlePreviewClick = (template: Template, e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewTemplate(template);
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
    setPreviewTemplate(null);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Premium Templates</h3>
            <p className="text-gray-300">Choose from our collection of professionally designed templates</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTemplates.map((template) => (
            <div
              key={template.id}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/10 cursor-pointer ${
                selectedTemplate === template.id ? 'ring-2 ring-yellow-400 bg-white/10' : ''
              }`}
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
              onClick={() => onTemplateSelect(template.id)}
            >
              {/* Glass morphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredTemplate === template.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm mb-3">{template.preview}</p>
                      <button 
                        onClick={(e) => handlePreviewClick(template, e)}
                        className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview Template
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold">{template.name}</h4>
                    {template.isPremium && (
                      <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        <Crown className="w-3 h-3" />
                        <span>PRO</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{template.rating}</span>
                    </div>
                    <span>{template.downloads} downloads</span>
                  </div>
                  
                  <div className="mt-3">
                    <span className="inline-block px-2 py-1 bg-white/10 text-white text-xs rounded-full capitalize">
                      {template.category}
                    </span>
                  </div>
                </div>

                {/* Selection indicator */}
                {selectedTemplate === template.id && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(templates.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-yellow-400 w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
      </div>

      <TemplatePreviewModal
        template={previewTemplate}
        isOpen={showPreview}
        onClose={handleClosePreview}
        onSelectTemplate={onTemplateSelect}
        resumeData={resumeData}
      />
    </>
  );
};

export default TemplateCarousel;