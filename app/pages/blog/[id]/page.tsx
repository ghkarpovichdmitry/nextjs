import {getPost} from '@/app/shared/services/requests';
import {ReactElement} from 'react';

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
    const post = await getPost(id);

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.id}</p>
        </>
    );
}
