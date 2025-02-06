'use client';
import Link from 'next/link';
import NavLinks from '../config/nav-link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="w-72 max-md:hidden h-screen bg-card border-r ">
            <div className="p-2 px-6 border-b">
                <h2 className="font-semibold text-center">
                    <span className="text-gradient text-xl">MoviesPrix</span>
                </h2>
            </div>

            <div className="flex flex-col gap-3 mt-4 p-4">
                {NavLinks.map(link => (
                    <Link
                        href={link.href}
                        key={link.name}
                        className={cn(
                            'flex py-2 px-5 rounded-full items-center gap-2 text-muted-foreground transition ',
                            'hover:bg-muted/50 ',
                            pathname.startsWith(link.href) && 'text-primary bg-muted hover:bg-muted'
                        )}
                    >
                        <link.icons className="size-4" />
                        <span>{link.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
