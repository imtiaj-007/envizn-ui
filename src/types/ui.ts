import type { LucideIcon } from 'lucide-react'

export interface LinkItem {
    title: string
    href: string
    description?: string
    children?: LinkItem[]
}

export interface HeroOverviewItem {
    key: string
    title: string
    icon: LucideIcon
    description: string
    className?: string
    image?: string
}

export interface Testimonial {
    name: string
    designation: string
    image: string
    quote: string
    rating: number
}

export interface Comparison {
    title: string
    subTitle: string
    description: string
    image: string
    location: string
    duration: string
    type: 'Private' | 'Group' | 'Private/Group'
    rating?: number
}

export interface OfferingItem {
    key: string
    text: string
    icon: LucideIcon
    type: 'regular' | 'badge'
}
