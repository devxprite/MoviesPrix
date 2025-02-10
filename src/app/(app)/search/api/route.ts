import { searchMovies } from '@/utils/movies';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams.get('query') || '';
    const res = await searchMovies({ query });

    return Response.json(res);
}
