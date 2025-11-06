import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface StickyActionsProps {
  onOpenAI: () => void;
  onOpenHelp: () => void;
}

const StickyActions: React.FC<StickyActionsProps> = ({ onOpenAI, onOpenHelp }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show after scrolling down 300px
      setIsVisible(currentScrollY > 300);
      
      // Detect scroll direction
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
      isScrollingUp ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
    }`}>
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full shadow-2xl p-2 flex items-center space-x-2">
        <button
          onClick={onOpenHelp}
          className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 flex items-center group"
        >
          <Zap className="w-4 h-4 mr-2" />
          Help
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default StickyActions;