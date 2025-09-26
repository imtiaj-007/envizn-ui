import { LinkItem } from '@/types/ui'

export const navConfig: LinkItem[] = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Experiences',
        href: '#',
    },
    {
        title: 'Guide',
        href: '#',
    },
    {
        title: 'Itineraries',
        href: '#',
        children: [
            {
                title: 'Introduction',
                href: '#',
                description: 'Re-usable components built using Radix UI and Tailwind CSS.',
            },
            {
                title: 'Installation',
                href: '#',
                description: 'How to install dependencies and structure your app.',
            },
            {
                title: 'Typography',
                href: '#',
                description: 'Styles for headings, paragraphs, lists...etc',
            },
        ],
    },
    {
        title: 'FAQ',
        href: '#',
    },
]

export const footerLinks: LinkItem[] = [
    {
        title: 'Privacy Policy',
        href: '#',
    },
    {
        title: 'Terms of Service',
        href: '/terms#',
    },
    {
        title: 'Cookies Settings',
        href: '#',
    },
]
