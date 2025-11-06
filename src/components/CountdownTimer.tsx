import React, { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

interface CountdownTimerProps {
  endDate: Date;
  offerText: string;
  onExpire?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endDate, offerText, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        setIsExpired(true);
        onExpire?.();
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate, onExpire]);

  if (isExpired) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-xl shadow-lg">
      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 text-yellow-300" />
          <span className="font-semibold">{offerText}</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Ends in:</span>
        </div>
        
        <div className="flex items-center space-x-2">
          {timeLeft.days > 0 && (
            <div className="text-center">
              <div className="bg-white/20 rounded-lg px-2 py-1 min-w-[40px]">
                <span className="text-lg font-bold">{timeLeft.days}</span>
              </div>
              <div className="text-xs mt-1">Days</div>
            </div>
          )}
          
          <div className="text-center">
            <div className="bg-white/20 rounded-lg px-2 py-1 min-w-[40px]">
              <span className="text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
            </div>
            <div className="text-xs mt-1">Hours</div>
          </div>
          
          <span className="text-xl font-bold">:</span>
          
          <div className="text-center">
            <div className="bg-white/20 rounded-lg px-2 py-1 min-w-[40px]">
              <span className="text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
            </div>
            <div className="text-xs mt-1">Mins</div>
          </div>
          
          <span className="text-xl font-bold">:</span>
          
          <div className="text-center">
            <div className="bg-white/20 rounded-lg px-2 py-1 min-w-[40px]">
              <span className="text-lg font-bold animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
            <div className="text-xs mt-1">Secs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;