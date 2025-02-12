import SearchBar from '@/components/search-bar';
import React from 'react';
import SearchResults from './result-temp';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Search',
};

const page = () => {
    return (
        <div>
            <SearchResults />
        </div>
    );
};

export default page;
