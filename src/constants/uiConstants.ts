import { BentoImageItem } from '@/components/ui/bento-grid'
import { HeroOverviewItem, LinkItem } from '@/types/ui'
import { Building2, Clock, Earth, MapPin, Users } from 'lucide-react'

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

export const imageConfig: BentoImageItem[] = [
    {
        src: '/assets/images/bento-image-1.png',
        className: 'row-span-1 md:row-span-1 lg:row-span-1',
        alt: 'Bento image 1',
        loading: 'eager',
    },
    {
        src: '/assets/images/bento-image-3.png',
        className: 'row-span-2 md:row-span-2 lg:row-span-2',
        alt: 'Bento image 3',
        priority: true,
    },
    {
        src: '/assets/images/bento-image-4.png',
        className: 'lg:block row-span-1 md:row-span-1 lg:row-span-1',
        alt: 'Bento image 4',
        loading: 'lazy',
    },
    {
        src: '/assets/images/bento-image-6.png',
        className: 'lg:block row-span-2 md:row-span-2 lg:row-span-2',
        alt: 'Bento image 6',
        priority: true,
    },
    {
        src: '/assets/images/bento-image-2.jpg',
        className: 'row-span-1 md:row-span-2 lg:row-span-1',
        alt: 'Bento image 2',
        loading: 'lazy',
    },
    {
        src: '/assets/images/bento-image-5.png',
        className: 'lg:block row-span-1 md:row-span-1 lg:row-span-1',
        alt: 'Bento image 5',
        loading: 'lazy',
    },
]

export const heroOverview: HeroOverviewItem[] = [
    {
        key: 'location',
        title: 'Location',
        image: '/assets/icons/location.svg',
        icon: MapPin,
        description: 'Kaleki',
        className: 'border-r-2 md:border-r-2 lg:border-r-2',
    },
    {
        key: 'duration',
        title: 'Duration',
        image: '/assets/icons/clock.svg',
        icon: Clock,
        description: 'Morning 9-12',
        className: 'border-r-0 md:border-r-2 lg:border-r-2',
    },
    {
        key: 'escapes',
        title: 'Escapes',
        image: '/assets/icons/users.svg',
        icon: Users,
        description: '8',
        className: 'border-r-2 md:border-r-0 lg:border-r-2',
    },
    {
        key: 'trip-type',
        title: 'Type of Trip',
        image: '/assets/icons/organization.svg',
        icon: Building2,
        description: 'Private',
        className: 'border-r-0 md:border-r-2 lg:border-r-2',
    },
    {
        key: 'category',
        title: 'Category',
        image: '/assets/icons/globe.svg',
        icon: Earth,
        description: 'Full day trip',
        className: 'border-r-2 md:border-r-0 lg:border-r-0',
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
