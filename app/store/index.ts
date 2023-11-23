import {getPostsBySearch} from '@/app/components/PostSearch/PostSearch';
import {getAllPosts, PostType} from '@/app/components/Posts/Posts';
import {create} from 'zustand';

interface UsePosts {
    posts: PostType[];
    isLoading: boolean;
    getPosts: () => Promise<void>
    getPostsBySearch: (val: string) => Promise<void>
}

export const usePosts = create<UsePosts>()((set) => ({
    posts: [],
    isLoading: false,
    getPosts: async () => {
        set({ isLoading: true });
        const posts = await getAllPosts();
        set({ posts, isLoading: false });
    },
    getPostsBySearch: async (query) => {
        set({ isLoading: true });
        const posts = await getPostsBySearch(query);
        set({ posts, isLoading: false });
    }
}));