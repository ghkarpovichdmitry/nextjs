import { Navigation } from '@/app/components/Navigation/Navigation';
import { type ReactElement } from 'react';

export const Header = (): ReactElement => {
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/pages/about' },
        { label: 'Blog', href: '/pages/blog' },
    ];

    return (
        <header className="header align-center">
            <Navigation navLinks={navItems}/>
        </header>
    );
};
