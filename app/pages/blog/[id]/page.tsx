import {Post} from '@/app/components/Posts/Posts';
import {ReactElement} from 'react';

export async function getPost(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: { revalidate: 60 },
    });

    if (!response.ok) throw new Error('Fetching post error');

    return response.json();
}

export async function generateMetadata({ params: {id} }: Props) {
    const post = await getPost(id);

    return {
        title: post.title
    };
}

interface Props {
    params: {
        id: string
    }
}

export default async function Post({ params: {id} }: Props): Promise<ReactElement> {
    const post: Post = await getPost(id);

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.id}</p>
        </>
    );
}
