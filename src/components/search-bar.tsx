'use client';

import { Search } from 'lucide-react';
import { memo, useEffect, useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { useRouter } from 'next/navigation';

type Props = {
    onChange?: (e: string) => void;
};

const SearchBar = (props: Props) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (props.onChange) props.onChange(query);
    }, [query]);

    return (
        <div className="flex gap-5 max-w-3xl mx-auto w-full">
            <form className="flex items-center flex-1 w-full gap-3 py-2 px-3 bg-muted rounded-lg  mx-auto border focus-within:border-primary group transition-all">
                <Search className="text-muted-foreground group-focus-within:text-primary size-5" />
                <input
                    className="font-normal flex-1 bg-transparent outline-none"
                    placeholder="What do you want to listen?"
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </form>
        </div>
    );
};

export default SearchBar;
