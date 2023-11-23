'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
    label: string;
    href: string;
};
interface NavigationProps {
    navLinks: NavLink[];
};

const Navigation = ({ navLinks }: NavigationProps) => {
    const pathName = usePathname();

    return <>
        {navLinks.map((link: NavLink) => (
            <Link
                href={link.href}
                className={link.href === pathName ? 'active-navigation' : ''}
                key={link.href}>
                {link.label}
            </Link>
        ))}
    </>;
};

export { Navigation };