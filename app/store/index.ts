import {getPostsBySearch} from '@/app/components/PostSearch/PostSearch';
import {getAllPosts, Post} from '@/app/components/Posts/Posts';
import {create} from 'zustand';

interface UsePosts {
    posts: Post[];
    isLoading: boolean;
    getPosts: Promise<void>
    getPostsBySearch: (val: string) => Promise<void>
}

export const usePosts = create<UsePosts>()((set) => ({
    posts: [],
    isLoading: false,
    getPosts: async () => {
        set({ loading: true });
        const posts = await getAllPosts();
        set({ posts, loading: false });
    },
    getPostsBySearch: async (query) => {
        set({ loading: true });
        const posts = await getPostsBySearch(query);
        set({ posts, loading: false });
    }
}));