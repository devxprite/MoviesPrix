import { Loader2Icon } from 'lucide-react';

const Loader = () => {
    return (
        <div className="flex flex-1 text-center flex-col h-[calc(100dvh-6rem)] items-center justify-center  gap-2 md:gap-4">
            <Loader2Icon className="text-primary size-10 md:size-14 animate-spin" />

            <p className="text-gradient text-lg md:text-xl font-semibold tracking-wider uppercase ">Loading</p>
        </div>
    );
};

export default Loader;
