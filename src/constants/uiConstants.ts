import { Building2, Clock, Earth, MapPin, Users } from 'lucide-react'
import type { BentoImageItem } from '@/components/ui/bento-grid'
import type { HeroOverviewItem, LinkItem, Testimonial } from '@/types/ui'

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
        key: 'escapees',
        title: 'Escapees',
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

export const testimonials: Testimonial[] = [
    {
        name: 'Emily & Josh',
        designation: 'Newlyweds, NYC',
        image: '/assets/testimonials/user-1.png',
        quote: '“We wanted magic, and Flora delivered it tenfold. From a private chef dinner in the jungle to a surprise waterfall hike I’ll never forget — every detail felt like it was made for us. I didn’t worry once. It was honestly the best week of our lives.”',
        rating: 5,
    },
    {
        name: 'Lena Ray',
        designation: 'Solo Traveler, Berlin',
        image: '/assets/testimonials/user-2.png',
        quote: '“I booked a few day trips to get out of Canggu and wow… life-changing. I saw a sunrise from the top of a volcano, had lunch with a local family, and worked from a bamboo treehouse with the best WiFi I’ve had in months. Totally inspired.”',
        rating: 5,
    },
    {
        name: 'Thomas',
        designation: 'First-Time Visitor, London',
        image: '/assets/testimonials/user-3.png',
        quote: "“Flora's guide made everything so easy. It's like your well-traveled best friend whispering in your ear: 'Skip that, go here, trust me.' I downloaded it the night before my flight and felt totally ready. Worth 10x the price.”",
        rating: 5,
    },
    {
        name: 'Sarah Chen',
        designation: 'Digital Nomad, Singapore',
        image: '/assets/testimonials/user-4.png',
        quote: "“As a frequent traveler, I've never experienced such personalized service. Flora curated the perfect blend of work-friendly spaces and authentic cultural experiences. The co-working retreat was exactly what I needed to recharge while staying productive.”",
        rating: 5,
    },
    {
        name: 'Michael & Family',
        designation: 'Family Vacation, Sydney',
        image: '/assets/testimonials/user-5.png',
        quote: "“Traveling with kids can be stressful, but Flora made it effortless. The family-friendly activities were perfectly paced, and our children absolutely loved the traditional Balinese cooking class. Memories we'll cherish forever!”",
        rating: 5,
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
