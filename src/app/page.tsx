import { Github, Rocket } from 'lucide-react';
// import { AnimatedGridPattern } from '../components/ui/animated-grid-pattern';
// import { AnimatedGradientText } from '../components/ui/animated-gradient-text';
import { cn } from '../lib/utils';
import Link from 'next/link';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';

const LandingPage = () => {
    return (
        <div className="min-h-dvh text-center flex items-center justify-center p-4 relative">
            <AnimatedGridPattern
                width={35}
                height={35}
                maxOpacity={0.2}
                className={'[mask-image:linear-gradient(to_top,#fff9,transparent)]'}
            />
            <div className="max-w-5xl z-20 md:-translate-y-6">
                {/* <div className="flex items-center justify-center p-3 mx-auto rounded-md gradient w-fit mb-6">
                    <Music4 className="size-10" />
                </div> */}

                <div className="z-10 flex items-center justify-center mb-8">
                    <AnimatedGradientText>
                        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300 " />{' '}
                        <span
                            className={cn(`inline animate-gradient gradient bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`)}
                        >
                            Introducing VibeTune
                        </span>
                    </AnimatedGradientText>
                </div>
                <h1 className="text-3xl md:text-7xl font-bold mb-4">
                    <span className="text-gradient">Moviesprix</span>
                </h1>

                <p className="text-muted-foreground max-w-2xl text-base md:text-2xl">
                    VibeTune is the ultimate music player app that lets you stream and discover new music with ease.
                </p>

                <div className="flex gap-x-6 gap-y-4 flex-col md:flex-row max-w-lg mx-auto mt-20">
                    <Link
                        href={'/home'}
                        className="text-sm md:text-base gradient inline-block text-white py-2.5 px-10 rounded-full font-semibold w-full"
                    >
                        <Rocket className="size-5 inline mr-2" /> Get Started!
                    </Link>

                    <Link
                        href={'/home'}
                        className="text-sm md:text-base bg-muted inline-block text-white py-2.5 px-10 rounded-full font-semibold w-full text-foreground/75 border border-muted-foreground/25"
                    >
                        <Github className="size-5 inline mr-2" /> View On Github
                    </Link>
                </div>
            </div>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs md:text-sm font-semibold text-muted-foreground w-full text-center">
                Made by{' '}
                <a href="https://github.com/devxprite/" target="_blank" className="underline">
                    @devxprite
                </a>
            </p>
        </div>
    );
};

export default LandingPage;
