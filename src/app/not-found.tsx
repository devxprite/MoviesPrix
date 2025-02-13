import { Button } from '@/components/ui/button';
import { FrownIcon, Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-1 text-center flex-col h-[98dvh] items-center justify-center px-4">
            <div>
                <FrownIcon className="size-20 md:size-36 text-primary mx-auto" />
                <h2 className="mt-8 font-bold text-xl md:text-3xl">Oops! Page not found</h2>

                <p className="mt-3 md:text-lg text-muted-foreground">Sorry, we are unable to find the page you are looking for</p>

                <Link href="/">
                    <Button className="mt-6">
                        Go to Home <Home />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
