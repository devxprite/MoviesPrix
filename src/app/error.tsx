'use client';

import React from 'react';
import { MonitorCogIcon } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="flex flex-1 text-center flex-col h-[98dvh] items-center justify-center px-4">
            <div>
                <MonitorCogIcon className="size-20 md:size-36 text-primary mx-auto" />
                <h2 className="mt-8 font-bold text-xl md:text-3xl">Oops! Something went wrong</h2>

                <p className="mt-3 md:text-lg text-muted-foreground">
                    Sorry, An error occurred while loading this page. Please try again later.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
