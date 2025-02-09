"use client";

import NavLinks from '@/config/nav-link';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="md:hidden bg-card border-t">
            <div className="flex justify-around py-3">
                {NavLinks.map(link => (
                    <Link
                        href={link.href}
                        key={link.name}
                        className={cn(
                            'flex flex-col items-center text-muted-foreground font-semibold',
                            pathname.startsWith(link.href) && 'text-primary font-bold'
                        )}
                    >
                        <link.icons className="size-5" />
                        <span className="text-xs mt-1 ">{link.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}