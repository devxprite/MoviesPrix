import { Home, Library, Search, ListMusicIcon, TvIcon, Heart } from 'lucide-react';

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
        name: 'Movies',
        href: '/movies',
        icons: TvIcon,
    },
    {
        name: 'Favorites',
        href: '/favorites',
        icons: Heart,
    },
    // {
    //     name: 'Playlist',
    //     href: '/queue',
    //     icons: ListMusicIcon,
    // },
];

export default NavLinks;
