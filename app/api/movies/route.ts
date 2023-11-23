import {NextResponse} from 'next/server';

export async function GET(req: Request) {
    const query = 'example-query';
    const API_KEY = process.env.OMDB_SECRET;
    // OMDB_SECRET=78584b3c from .env.local file
    // const movies =
    //     await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    //         .then(response => response.json());

    return NextResponse.json({ value: true });
    // return NextResponse.json(movies);
}