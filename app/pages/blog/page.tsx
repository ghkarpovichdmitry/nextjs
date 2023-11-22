import Posts from '@/app/components/Posts/Posts';
import PostSearch from '@/app/components/PostSearch/PostSearch';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Blog page',
};

export default function Blog() {
    return (
        <>
            <h1>Blog page</h1>
            <PostSearch/>
            <Posts/>
        </>
    );
}