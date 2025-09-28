import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FloatingParticles from '@/components/floating-particles';
import { AlertTriangle, CheckCircle2, Gem, Unlock } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const MagicEye = () => (
  <div className="relative h-48 w-48">
    <div className="eye-orb-container">
      <div className="eye-orb">
        <div className="eye-iris">
          <div className="eye-pupil" />
        </div>
      </div>
    </div>
    <svg
      className="absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  </div>
);

const FeatureList = ({ features }: { features: string[] }) => (
  <ul className="space-y-3">
    {features.map((feature, index) => (
      <li key={index} className="flex items-start gap-3">
        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
        <span className="text-slate-300">{feature}</span>
      </li>
    ))}
  </ul>
);

export default function Home() {
  const freeFeatures = [
    'Easy Forcing Tricks to amaze friends.',
    'Fun Mind Reading Basics anyone can try.',
    'Cool Memory Boost Hacks for quick shows.',
    'Simple Psychological Illusions to surprise people.',
    '(Practice-friendly, no tools needed!)',
  ];

  const premiumFeatures = [
    'Advanced Forcing Systems (psychological & mechanical).',
    'Manipulation & Influence Techniques (stage-ready, ethical).',
    'Cold Reading + Embedded Commands for deeper impact.',
    'Sleight-of-Hand & Mental Prediction Systems for pro shows.',
    'Stagecraft & Audience Control to perform like a master.',
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <FloatingParticles />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="flex w-full max-w-7xl animate-fade-in flex-col items-center justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-headline animate-text-glow text-5xl font-bold tracking-wider text-white md:text-6xl lg:text-7xl">
              ✨ Welcome to Mystiq Mind ✨
            </h1>
            <p className="text-md font-light text-slate-300 md:text-lg">
              Unlock the Hidden Power of Your Mind
            </p>
          </div>

          <div className="my-8">
            <MagicEye />
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-accent/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3 text-3xl font-bold text-accent">
                  <Unlock className="h-8 w-8" />
                  Free Users Get
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <FeatureList features={freeFeatures} />
              </CardContent>
            </Card>
            <Card className="border-primary/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3 text-3xl font-bold text-primary">
                  <Gem className="h-8 w-8" />
                  Premium Users Unlock
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <FeatureList features={premiumFeatures} />
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4 text-center">
            <p className="text-lg font-semibold text-slate-200">
              👉 Free = Learn & Try | Premium = Master & Perform
            </p>
            <p className="text-md text-slate-400">
              Upgrade when you’re ready to think, perform, and influence like a
              professional mentalist.
            </p>
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
