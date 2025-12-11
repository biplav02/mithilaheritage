import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
  color: string;
}

const StatItem = ({ end, suffix = '', label, delay = 0, color }: StatItemProps) => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useCountUp(end, 2000, 0, isVisible);

  return (
    <div
      ref={ref}
      className={cn(
        'text-center group transition-all duration-700 ease-out',
        !isVisible && 'translate-y-8 opacity-0',
        isVisible && 'translate-y-0 opacity-100'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative">
        <div className={cn(
          'absolute inset-0 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity',
          color
        )} />
        <p className={cn(
          'font-display text-5xl sm:text-6xl lg:text-7xl font-bold relative',
          color.replace('bg-', 'text-')
        )}>
          {count}{suffix}
        </p>
      </div>
      <p className="text-muted-foreground mt-2 text-sm sm:text-base font-medium tracking-wide">
        {label}
      </p>
    </div>
  );
};

export const StatsCounter = () => {
  const stats = [
    { end: 5000, suffix: '+', label: 'Years of Heritage', color: 'bg-mithila-sindoor text-mithila-sindoor' },
    { end: 6, suffix: '+', label: 'UN Exhibitions', color: 'bg-mithila-peacock text-mithila-peacock' },
    { end: 100, suffix: '+', label: 'Artists Supported', color: 'bg-mithila-leaf text-mithila-leaf' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-mithila-cream to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-mithila-haldi/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-mithila-pink/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
