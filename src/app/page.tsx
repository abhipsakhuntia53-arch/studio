import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FloatingParticles from '@/components/floating-particles';
import { AlertTriangle } from 'lucide-react';

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

          <div className="mt-12 max-w-2xl animate-fade-in rounded-lg border border-yellow-500/30 bg-yellow-900/10 p-4 text-slate-300 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
              <h3 className="text-lg font-semibold text-yellow-400">
                A Note on Large Files
              </h3>
            </div>
            <p className="mt-2 text-sm">
              When you download, Google Drive may display a message like, &quot;This file is too large for Google to scan for viruses.&quot; This is a standard warning for large files that exceed their scanning limit.
            </p>
            <p className="mt-2 text-sm">
              We provide a full guarantee from our company that the file is safe and free from any harmful content. Your security is our priority, so you can download with confidence.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
