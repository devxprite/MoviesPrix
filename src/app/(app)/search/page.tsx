import SearchBar from '@/components/search-bar';
import React from 'react';
import ResultTemp from './result-temp';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Search Movies',
};

const page = () => {
    return (
        <div>
            {/* <h2 className="text-primary font-semibold text-2xl text-center mb-10 mt-6">Search Page</h2> */}

            <ResultTemp />
        </div>
    );
};

export default page;
