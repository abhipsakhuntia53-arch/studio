import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FloatingParticles from '@/components/floating-particles';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <FloatingParticles />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="flex animate-fade-in flex-col items-center justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-headline animate-text-glow text-5xl font-bold tracking-wider text-white md:text-6xl lg:text-7xl">
              Mystiq Mind
            </h1>
            <p className="text-md font-light text-slate-300 md:text-lg">
              Unlock the Hidden Power of Your Mind
            </p>
          </div>

          <div className="my-8 animate-pulse-glow">
            <div className="orb" />
          </div>

          <Button
            asChild
            size="lg"
            className="group h-16 w-64 rounded-full bg-primary/90 text-xl font-bold text-primary-foreground shadow-[0_0_20px_theme(colors.primary)] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:shadow-[0_0_35px_theme(colors.primary)]"
          >
            <Link href="https://drive.google.com/uc?export=download&id=1QTwbATqvRxsfTK4gp1vsh00MWdSmXzwM">
              Download Now
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
