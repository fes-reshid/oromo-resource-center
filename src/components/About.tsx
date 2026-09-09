import { Users, Heart, Globe, Compass } from 'lucide-react';
import Reveal from '@/components/Reveal';
import AnimatedStat from '@/components/AnimatedStat';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              About Our Center
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Oromo Resource Center is a cornerstone of the Melbourne community,
              dedicated to preserving our rich cultural heritage while supporting
              families in their spiritual and educational journey.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To strengthen our community through education, cultural preservation,
                    and spiritual guidance while maintaining our Islamic values.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A thriving Oromo community in Melbourne where children learn their
                    heritage and families find support in all aspects of life.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Values</h3>
                  <p className="text-muted-foreground">
                    Community, education, cultural pride, spiritual growth, and
                    compassionate service to all families.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <AnimatedStat icon={Users} value={200} label="Families Served" color="primary" delayMs={0} />
            <AnimatedStat icon={Heart} value={10} label="Years of Service" color="accent" delayMs={100} />
            <AnimatedStat icon={Globe} value={50} label="Weekly Students" color="primary" delayMs={200} />
            <AnimatedStat icon={Compass} value={24} suffix="/7" label="Community Support" color="accent" delayMs={300} />
          </div>
        </div>

        {/* Community Focus */}
        <Reveal className="mt-20 text-center">
          <div className="bg-gradient-to-r from-secondary to-muted p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Serving Victoria
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Victoria, we are committed to being
              accessible to all families in our community. From Footscray to Werribee,
              from Sunshine to Hoppers Crossing, we welcome everyone seeking connection,
              education, and spiritual guidance.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
