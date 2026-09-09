import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

// Tailwind's scanner needs literal class strings, not interpolated ones
// (e.g. `bg-${color}/20` won't be picked up at build time), so each
// color variant is spelled out in full here.
const COLOR_CLASSES = {
  primary: {
    card: 'from-primary/5 to-primary/10 border-primary/20',
    iconBg: 'bg-primary/20',
    icon: 'text-primary',
    value: 'text-primary',
  },
  accent: {
    card: 'from-accent/5 to-accent/10 border-accent/20',
    iconBg: 'bg-accent/20',
    icon: 'text-accent',
    value: 'text-accent',
  },
} as const;

interface AnimatedStatProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  color: keyof typeof COLOR_CLASSES;
  delayMs?: number;
}

const AnimatedStat = ({ icon: Icon, value, suffix = '+', label, color, delayMs = 0 }: AnimatedStatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const classes = COLOR_CLASSES[color];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : '0ms' }}
    >
      <Card
        className={`text-center p-6 bg-gradient-to-br ${classes.card} hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
      >
        <CardContent className="p-0">
          <div className={`w-16 h-16 ${classes.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <Icon className={`h-8 w-8 ${classes.icon}`} />
          </div>
          <div className={`text-3xl font-bold ${classes.value} mb-2 tabular-nums`}>
            {count}
            {suffix}
          </div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimatedStat;
