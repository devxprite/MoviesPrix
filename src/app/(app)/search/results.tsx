'use client';

import SearchBar from '@/components/search-bar';
import { IMovie } from '@/types/api-response';
import { useEffect, useState } from 'react';
import searchMovieAction from './action';
import axios from 'axios';

const Results = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(false);

    const handleInput = (val: string) => {
        console.log('val', val);
        setQuery(val);
    };

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        (async () => {
            setLoading(true);
            const { data } = await axios.get('/search/api', { signal, params: { query } });
            console.log(data);
            setResults(data.results);
            setLoading(false);
        })();

        return () => controller.abort();
    }, [query]);

    console.log(Results, loading, query);

    return (
        <div>
            <SearchBar onChange={setQuery} />

            <div></div>
        </div>
    );
};

export default Results;
