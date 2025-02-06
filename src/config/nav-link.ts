import { Home, Library, Search, ListMusicIcon } from 'lucide-react';

const NavLinks = [
    {
        name: 'Home',
        href: '/home',
        icons: Home,
    },
    {
        name: 'Search',
        href: '/search',
        icons: Search,
    },
    {
        name: 'Albums',
        href: '/albums',
        icons: Library,
    },
    // {
    //     name: 'Favorites',
    //     href: '/favorites',
    //     icons: Heart,
    // },
    {
        name: 'Playlist',
        href: '/queue',
        icons: ListMusicIcon,
    },
];

export default NavLinks;
