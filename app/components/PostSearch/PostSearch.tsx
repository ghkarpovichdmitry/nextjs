'use client';
// import {usePosts} from '@/app/store/index';
import {
    FormEventHandler,
    SyntheticEvent,
    useState
} from 'react';
import useSWR from 'swr';
// import {shallow} from 'zustand/esm/shallow';

export async function getPostsBySearch(search: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);
    // const response = await fetch(`/api/posts?q=${search}`);

    if (!response.ok) throw new Error('Unable to fetch posts..');

    return response.json();
}

export default function PostSearch() {
    const [searchValue, setSearchValue] = useState('');
    // const getPostsBySearch = usePosts(state => state.getPostsBySearch, shallow); // with Zustand store Example
    const { mutate } = useSWR('posts');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: SyntheticEvent) => {
        e.preventDefault();
        const posts = await getPostsBySearch(searchValue);
        await mutate(posts);
    };

    return (
        <form onSubmit={handleSubmit} className='post-search-form'>
            <input
                type='search'
                value={searchValue}
                placeholder='Search'
                onChange={(e: SyntheticEvent) => {
                    setSearchValue(e.target.value);
                }}
                className='post-search-form__input'
            />
            <button
                type='submit'
                className='post-search-form__button'
            >
                Search
            </button>
        </form>
    );
}