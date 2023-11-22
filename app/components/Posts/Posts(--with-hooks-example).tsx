'use client';
import Link from 'next/link';
import {usePosts} from '@/app/store/index';
import {useEffect} from 'react';
import {shallow} from 'zustand/esm/shallow';

export interface Post {
    id: number
    userId: number
    title: string
    body: string
}

export async function getAllPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } });

    if (!response.ok) throw new Error('Fetching posts error');

    return response.json();
}

export default function Posts() {
    const [isLoading, getPosts, posts] = usePosts(
        (state: usePosts) => [state.isLoading, state.getPosts, state.posts],
        shallow
    );

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        !!posts?.length
        ? <ul>
            {posts?.map((post: Post) => (
                <li key={post.id}>
                    <Link href={`/pages/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
        : <h3>There are no posts..</h3>
    );
}