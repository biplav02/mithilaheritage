import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'blur';
  delay?: number;
}

export const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fade-up',
  delay = 0 
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const animationClasses = {
    'fade-up': 'translate-y-12 opacity-0',
    'fade-left': '-translate-x-12 opacity-0',
    'fade-right': 'translate-x-12 opacity-0',
    'scale': 'scale-95 opacity-0',
    'blur': 'blur-sm opacity-0',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        !isVisible && animationClasses[animation],
        isVisible && 'translate-y-0 translate-x-0 scale-100 opacity-100 blur-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
