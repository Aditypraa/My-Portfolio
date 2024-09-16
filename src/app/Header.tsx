'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navbarItems = [
  { name: 'Home', href: '/' },
  { name: 'Project', href: '/project' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center sticky top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navbarItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`${pathname === item.href ? 'nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''} nav-item`}
          >
            {item.name}
          </Link>
        ))}

        {/* <a
          href="#"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a> */}
      </nav>
    </div>
  );
};
