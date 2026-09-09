import { Users, Heart, Globe, Compass } from 'lucide-react';
import Reveal from '@/components/Reveal';
import AnimatedStat from '@/components/AnimatedStat';
import content from '@/content/about.json';

const PILLAR_ICONS = [Heart, Globe, Compass];
const STAT_ICONS = [Users, Heart, Globe, Compass] as const;
const STAT_COLORS = ['primary', 'accent', 'primary', 'accent'] as const;

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {content.heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {content.description}
            </p>

            <div className="space-y-6 mb-8">
              {content.pillars.map((pillar, i) => {
                const Icon = PILLAR_ICONS[i % PILLAR_ICONS.length];
                const bg = i % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10';
                const iconColor = i % 2 === 0 ? 'text-primary' : 'text-accent';
                return (
                  <div key={pillar.title} className="flex gap-4">
                    <div className={`w-12 h-12 ${bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-6 w-6 ${iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{pillar.title}</h3>
                      <p className="text-muted-foreground">{pillar.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {content.stats.map((stat, i) => (
              <AnimatedStat
                key={stat.label}
                icon={STAT_ICONS[i % STAT_ICONS.length]}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                color={STAT_COLORS[i % STAT_COLORS.length]}
                delayMs={i * 100}
              />
            ))}
          </div>
        </div>

        {/* Community Focus */}
        <Reveal className="mt-20 text-center">
          <div className="bg-gradient-to-r from-secondary to-muted p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {content.servingVictoria.heading}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {content.servingVictoria.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
