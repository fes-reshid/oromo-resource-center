import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ImageIcon } from 'lucide-react';

interface EventFlyerProps {
  src: string;
  alt: string;
  dateBadge?: string;
  className?: string;
}

// An animated, poster-like presentation of an event flyer: a gentle
// floating tilt, a soft pulsing glow, a couple of twinkling sparkles, and
// a corner date ribbon — tap/click to view the full flyer in a modal.
const EventFlyer = ({ src, alt, dateBadge, className = '' }: EventFlyerProps) => {
  return (
    <Dialog>
      <div className={`relative flex justify-center ${className}`} style={{ perspective: '1200px' }}>
        <div className="absolute w-[85%] h-[85%] rounded-full bg-accent/30 blur-3xl animate-glow-pulse" />

        <span className="absolute left-[4%] top-[18%] text-accent text-xl animate-spark-twinkle" aria-hidden>
          ✦
        </span>
        <span
          className="absolute right-[7%] top-[11%] text-accent text-xl animate-spark-twinkle"
          style={{ animationDelay: '0.8s' }}
          aria-hidden
        >
          ✧
        </span>
        <span
          className="absolute right-[1%] bottom-[24%] text-accent text-xl animate-spark-twinkle"
          style={{ animationDelay: '1.5s' }}
          aria-hidden
        >
          ✦
        </span>
        <span
          className="absolute left-[10%] bottom-[10%] text-accent text-xl animate-spark-twinkle"
          style={{ animationDelay: '2.1s' }}
          aria-hidden
        >
          ✧
        </span>

        <DialogTrigger asChild>
          <button
            type="button"
            aria-label={`View full ${alt}`}
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in md:animate-float-flyer md:[transform:rotateY(-5deg)_rotateX(2deg)] transition-transform hover:!scale-[1.02]"
          >
            {dateBadge && (
              <span className="absolute top-5 -right-11 bg-destructive text-destructive-foreground text-xs font-black tracking-wide px-12 py-2 rotate-[38deg] shadow-lg z-10">
                {dateBadge}
              </span>
            )}
            <img src={src} alt={alt} className="block w-full h-auto" />
            <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-medium px-2.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <ImageIcon className="h-3.5 w-3.5" />
              View Full Flyer
            </span>
          </button>
        </DialogTrigger>
      </div>

      <DialogContent className="max-w-2xl p-2">
        <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
      </DialogContent>
    </Dialog>
  );
};

export default EventFlyer;
