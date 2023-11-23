'use client';
import Posts from '@/app/components/Posts/Posts';
import PostSearch from '@/app/components/PostSearch/PostSearch';
import {Metadata} from 'next';
import {useEffect, useState} from 'react';

export const metadata: Metadata = {
    title: 'Blog page',
};

export interface Post {
    id: number
    userId: number
    title: string
    body: string
}

export async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } });

    if (!response.ok) throw new Error('Fetching posts error');

    return response.json();
}

export default function Blog() {
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getPosts()
            .then(posts => { setPosts(posts);})
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <h1>Blog page</h1>
            { isLoading
                ? <h3>Loading...</h3>
                : <>
                    {/*<PostSearch onSearch={setPosts}/> <!-- tied with PostSearch with-props-example).tsx --> */}
                    <PostSearch/>
                    {/*<Posts posts={posts}/> <!-- tied with PostSearch with-props-example).tsx -->*/}
                    <Posts/>
                  </>
            }
        </>
    );
}