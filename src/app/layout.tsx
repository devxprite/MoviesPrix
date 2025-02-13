import type { Metadata, Viewport } from 'next';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
    title: {
        default: 'MoviesPrix - Explore Movies',
        template: '%s | MoviesPrix',
    },
    description: 'Discover movies, explore details, and find your next favorite film with MoviesPrix.',
    keywords: ['movies', 'films', 'explore movies', 'movie database', 'movie ratings', 'movie trailers'],
    authors: [{ name: 'Prateek Singh', url: 'https://github.com/devxprite/MoviesPrix' }],
    metadataBase: new URL('https://moviesprix.vercel.app'),
    openGraph: {
        description: 'Discover movies, explore details, and find your next favorite film with MoviesPrix.',
        url: 'https://moviesprix.vercel.app',
        siteName: 'MoviesPrix',
        images: [
            {
                url: 'https://moviesprix.vercel.app/banner.png',
                width: 1200,
                height: 630,
                alt: 'MoviesPrix Banner',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        description: 'Discover movies, explore details, and find your next favorite film with MoviesPrix.',
        images: ['https://moviesprix.vercel.app/banner.png'],
    },
    manifest: '/site.webmanifest',
    robots: 'index, follow',
};

export const viewport: Viewport = {
    themeColor: 'black',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` antialiased dark`}>
                <GoogleAnalytics gaId="G-Y94T96FRD7" />
                {children}
            </body>
        </html>
    );
}
