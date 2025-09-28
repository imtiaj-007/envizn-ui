import Link from 'next/link'
import { offeringsData } from '@/constants/uiConstants'

const DiscoverSection: React.FC = () => {
    return (
        <section
            className="relative flex flex-col gap-8 w-full py-8 md:py-12 lg:py-16"
            aria-labelledby="discover-heading"
            role="region">
            <h2
                id="discover-heading"
                className="text-xl md:text-2xl lg:text-3xl text-primary">
                Discover Local Culture with a Balinese Family (Tiwi)
            </h2>
            <h3
                id="included-heading"
                className="sr-only">
                Included in this experience
            </h3>
            <ul
                aria-labelledby="included-heading"
                role="list">
                {offeringsData.map(item => {
                    if (item.type === 'badge') return null
                    const IconComponent = item.icon

                    return (
                        <li
                            key={item.key}
                            role="listitem">
                            <IconComponent
                                className="size-4 text-secondary"
                                aria-hidden="true"
                            />
                            <span>{item.text}</span>
                        </li>
                    )
                })}
            </ul>
            <Link
                href="#"
                className="text-muted underline"
                aria-label="Show more details about this cultural experience">
                Show Details
            </Link>
        </section>
    )
}

export default DiscoverSection
