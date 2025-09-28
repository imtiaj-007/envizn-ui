import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Sticky Wrapper Component
interface StickyWrapperProps {
    children: React.ReactNode
    className?: string
}

export const StickyWrapper: React.FC<StickyWrapperProps> = ({ children, className = '' }) => {
    return (
        <div
            className={cn(
                'relative w-full min-h-screen bg-(--background-secondary) p-6 md:p-12 lg:p-16',
                className
            )}>
            <div className="max-w-7xl mx-auto">{children}</div>
        </div>
    )
}

// Sticky Component
interface StickyProps {
    children: React.ReactNode
    className?: string
    topOffset?: string
}

export const Sticky: React.FC<StickyProps> = ({
    children,
    className = '',
    topOffset = 'top-30',
}) => {
    return <div className={cn('lg:sticky self-start', className, topOffset)}>{children}</div>
}

interface StickySectionProps {
    ContentSections: ReactNode
    StickyItem: ReactNode
    gridGap?: string
    contentColSpan?: string
    stickyColSpan?: string
    className?: string
}

// Main StickySection Component
export const StickySection: React.FC<StickySectionProps> = ({
    ContentSections,
    StickyItem,
    gridGap = 'gap-12',
    contentColSpan = 'lg:col-span-3',
    stickyColSpan = 'lg:col-span-2',
    className = '',
}) => {
    return (
        <StickyWrapper className={className}>
            <div className={cn('grid grid-cols-1 lg:grid-cols-5', gridGap)}>
                <div className={contentColSpan}>{ContentSections}</div>

                <Sticky className={stickyColSpan}>{StickyItem}</Sticky>
            </div>
        </StickyWrapper>
    )
}
