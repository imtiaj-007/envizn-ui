import { Badge } from '@/components/ui/badge'
import { offeringsData } from '@/constants/uiConstants'

const OfferingsSection: React.FC = () => {
    return (
        <section
            className="relative flex flex-col gap-8 w-full py-8 md:py-12 lg:py-16"
            aria-labelledby="offerings-heading">
            <h2
                id="offerings-heading"
                className="text-xl md:text-2xl lg:text-3xl text-primary">
                Experience a Day with a Balinese Family
            </h2>
            <p>
                Slow down. Watch the light move across the rice fields. Learn how to make coconut
                oil the way it&apos;s been done for generations. This is Bali with soul — the part
                you don&apos;t find in guidebooks.
            </p>
            <p className="font-medium">
                How can I connect with locals without it feeling forced or touristy?
            </p>
            <p>
                You spend a day with Tiwi and her family. You help make offerings, walk their land,
                cook lunch together, and share stories. No performance. Just presence.
            </p>

            <h3
                id="included-heading"
                className="text-primary">
                What&apos;s included?
            </h3>
            <ul aria-labelledby="included-heading">
                {offeringsData.map(item => {
                    if (item.type === 'badge') return null
                    const IconComponent = item.icon

                    return (
                        <li key={item.key}>
                            <IconComponent
                                className="size-2.5 md:size-4 text-secondary"
                                aria-hidden="true"
                            />
                            <span>{item.text}</span>
                        </li>
                    )
                })}
            </ul>
            <div
                className="flex items-center gap-2"
                role="group"
                aria-label="Trip details">
                {offeringsData.map(item => {
                    if (item.type === 'regular') return null
                    const IconComponent = item.icon

                    return (
                        <Badge
                            key={item.key}
                            aria-label={item.text}>
                            <IconComponent
                                className="size-4"
                                aria-hidden="true"
                            />
                            {item.text}
                        </Badge>
                    )
                })}
            </div>
        </section>
    )
}

export default OfferingsSection
