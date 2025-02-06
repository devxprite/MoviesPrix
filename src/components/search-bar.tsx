'use client';

import { Search } from 'lucide-react';
import { memo, useEffect, useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { useRouter } from 'next/navigation';

type Props = {
    onChange?: (e: string) => void;
};

const SearchBar = (props: Props) => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    useEffect(() => {}, [query]);

    return (
        <div className="flex gap-5 max-w-2xl mx-auto">
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
            <Select>
                <SelectTrigger className="w-40 bg-muted h-10">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default memo(SearchBar);
