import { cn } from '@/lib/utils'
import Image from 'next/image'

export interface BentoImageItem {
    src: string
    className: string
    alt?: string
    priority?: boolean
    loading?: 'eager' | 'lazy'
    placeholder?: 'blur' | 'empty'
    blurDataURL?: string
    caption?: string
    link?: string
    target?: '_blank' | '_self'
}

interface BentoGridProps {
    items: BentoImageItem[]
    className?: string
    itemClassName?: string
    cols?: {
        sm?: number
        md?: number
        lg?: number
    }
    gap?: number
}

export const BentoGrid: React.FC<BentoGridProps> = ({ items, className = '' }) => {
    return (
        <div className={cn('grid', className, 'h-full')}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn('relative overflow-hidden', item.className || '')}>
                    {item.src && (
                        <Image
                            src={item.src}
                            alt={`Bento item ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
