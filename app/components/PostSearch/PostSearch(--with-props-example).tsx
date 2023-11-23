'use client';
import {PostType} from '@/app/components/Posts/Posts';
import {
    ChangeEvent,
    FormEventHandler,
    SyntheticEvent,
    useState
} from 'react';

interface PostSearchProps {
    onSearch: (posts: PostType[]) => void;
}

export async function getPostsBySearch(search: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);

    if (!response.ok) throw new Error('Unable to fetch posts..');

    return response.json();
}

export default function PostSearch({onSearch}: PostSearchProps) {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: SyntheticEvent) => {
        e.preventDefault();

        const posts = await getPostsBySearch(searchValue);
        onSearch(posts);
    };

    return (
        <form onSubmit={handleSubmit} className='post-search-form'>
            <input
                type='search'
                value={searchValue}
                placeholder='Search'
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value) }
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