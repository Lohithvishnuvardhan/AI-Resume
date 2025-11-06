interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
  variant?: 'text' | 'card' | 'circle' | 'rect';
}

const LoadingSkeleton = ({ className = '', lines = 3, variant = 'text' }: LoadingSkeletonProps) => {
  if (variant === 'circle') {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="rounded-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%] animate-shimmer" />
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`animate-pulse space-y-4 ${className}`}>
        <div className="h-48 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%] animate-shimmer rounded-lg" />
        <div className="space-y-2">
          <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%] animate-shimmer rounded w-3/4" />
          <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%] animate-shimmer rounded w-1/2" />
        </div>
      </div>
    );
  }

  if (variant === 'rect') {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%] animate-shimmer rounded" />
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%] animate-shimmer rounded"
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;

