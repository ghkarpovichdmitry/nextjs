import {PostType} from '@/app/components/Posts/Posts';
import {ReactElement} from 'react';

async function getPost(slug: string): Promise<PostType> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
        next: { revalidate: 60 },
    });

    if (!response.ok) throw new Error('Fetching post error');

    return response.json();
}

interface PostProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params: { slug } }: PostProps) {
    const post = await getPost(slug);

    return {
        title: post.title
    };
}

export default async function Post({ params: { slug } }: PostProps): Promise<ReactElement> {
    const post: PostType = await getPost(slug);

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.id}</p>
        </>
    );
}
