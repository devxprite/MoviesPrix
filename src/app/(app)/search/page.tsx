import React from 'react';
import SearchResults from './result';
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
