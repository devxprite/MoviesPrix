'use client';
import Link from 'next/link';
import NavLinks from '../config/nav-link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Github } from 'lucide-react';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="w-72 max-md:hidden flex flex-col h-screen bg-card border-r ">
            <div className="p-2 px-6 border-b">
                <h2 className="font-semibold text-center">
                    <span className="text-gradient text-xl">MoviesPrix</span>
                </h2>
            </div>

            <div className="flex flex-1 flex-col gap-3 mt-4 p-4 ">
                {NavLinks.map(link => (
                    <Link
                        href={link.href}
                        key={link.name}
                        className={cn(
                            'flex py-2 px-5 rounded-full items-center gap-2 text-muted-foreground transition ',
                            'hover:bg-muted/75 ',
                            pathname.startsWith(link.href) && 'text-primary bg-secondary hover:bg-secondary'
                        )}
                    >
                        <link.icons className="size-4" />
                        <span>{link.name}</span>
                    </Link>
                ))}

                <a href="https://github.com/devxprite/moviesprix/" target="_blank" className="mt-auto">
                    <Button variant={'secondary'} className="w-full">
                        <Github />
                        View Source
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
