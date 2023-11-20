import Link from 'next/link';
import { type ReactElement } from 'react';

export const Header = (): ReactElement => {
    return (
        <header className="header align-center">
            <Link href='/'>Home</Link>
            <Link href='/pages/about'>About</Link>
            <Link href='/pages/blog'>Blog</Link>
        </header>
    );
};
