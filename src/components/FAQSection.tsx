import { ReactNode } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQs {
    key: string
    value: string
    title: string
    content: ReactNode
}

const faqData: FAQs[] = [
    {
        key: 'faq-1',
        value: 'faq-1',
        title: 'Where will we meet?',
        content: (
            <div className="space-y-6">
                <iframe
                    width="600"
                    height="360"
                    loading="lazy"
                    style={{ border: 'none' }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}
    &q=Space+Needle,Seattle+WA`}
                    className="w-[40rem] h-[20rem] md:h-[22rem]"
                    title="Map showing meeting location"
                    aria-label="Interactive map showing the meeting location"></iframe>
                <p>
                    <span className="text-primary font-bold">Pickup & Drop-off Location:</span> Your
                    hotel or villa within Ubud, Canggu, Seminyak, or Sanur areas
                </p>
                <p>
                    <span className="text-primary font-bold">Pickup Time:</span> 7:30 AM –
                    We&apos;ll confirm the exact time based on your location
                </p>
                <p>
                    <span className="text-primary font-bold">Drop-off Time:</span> Around 4:30 PM
                    (depending on traffic and group pace)
                </p>
                <p>
                    <span className="text-primary font-bold">Private Transfers:</span> Clean,
                    air-conditioned vehicle with a friendly local driver
                </p>
            </div>
        ),
    },
    {
        key: 'faq-2',
        value: 'faq-2',
        title: 'Start and Ends',
        content: (
            <div className="space-y-2">
                <p>
                    <span className="text-primary font-bold">Tour Duration:</span> Full day
                    experience from approximately 7:30 AM to 4:30 PM
                </p>
                <p>
                    <span className="text-primary font-bold">Meeting Time:</span> We&apos;ll
                    coordinate pickup time based on your location within the service areas
                </p>
                <p>
                    <span className="text-primary font-bold">Return Time:</span> Typically around
                    4:30 PM, though this may vary slightly depending on traffic conditions and group
                    pace
                </p>
            </div>
        ),
    },
    {
        key: 'faq-3',
        value: 'faq-3',
        title: 'Suitability / Accessibility',
        content: (
            <div className="space-y-2">
                <p>
                    <span className="text-primary font-bold">Age Requirements:</span> Suitable for
                    all ages, though children must be accompanied by adults
                </p>
                <p>
                    <span className="text-primary font-bold">Physical Level:</span> Moderate
                    activity level with some walking involved at temple sites
                </p>
                <p>
                    <span className="text-primary font-bold">Accessibility:</span> Some locations
                    may have steps and uneven surfaces; please inform us of any mobility concerns in
                    advance
                </p>
                <p>
                    <span className="text-primary font-bold">Group Size:</span> Small group tours
                    ensure personalized attention and comfortable experience
                </p>
            </div>
        ),
    },
    {
        key: 'faq-4',
        value: 'faq-4',
        title: 'Cancellation and other policies',
        content: (
            <div className="space-y-2">
                <p>
                    <span className="text-primary font-bold">Cancellation Policy:</span> Free
                    cancellation up to 48 hours before the tour for full refund
                </p>
                <p>
                    <span className="text-primary font-bold">Weather Policy:</span> Tours operate
                    rain or shine; in case of extreme weather, we&apos;ll reschedule or refund
                </p>
                <p>
                    <span className="text-primary font-bold">Payment:</span> Secure online booking
                    with confirmation email sent immediately
                </p>
                <p>
                    <span className="text-primary font-bold">Changes:</span> Itinerary changes may
                    occur due to local conditions, with guest safety as priority
                </p>
            </div>
        ),
    },
    {
        key: 'faq-5',
        value: 'faq-5',
        title: 'What to Pack?',
        content: (
            <div className="space-y-2">
                <p>
                    <span className="text-primary font-bold">Essential Items:</span> Comfortable
                    walking shoes, sunscreen, hat, and reusable water bottle
                </p>
                <p>
                    <span className="text-primary font-bold">Temple Attire:</span> Sarong and sash
                    provided, but modest clothing (covered shoulders and knees) recommended
                </p>
                <p>
                    <span className="text-primary font-bold">Weather Prep:</span> Light rain jacket
                    during rainy season, sunglasses and extra layers for sun protection
                </p>
                <p>
                    <span className="text-primary font-bold">Personal Items:</span> Camera, small
                    backpack, and any personal medications you may need
                </p>
            </div>
        ),
    },
]

const FAQSection: React.FC = () => {
    return (
        <section
            className="relative flex flex-col gap-8 w-full py-8 md:py-12 lg:py-16"
            aria-labelledby="faq-heading"
            role="region">
            <h2
                id="faq-heading"
                className="text-xl md:text-2xl lg:text-3xl text-primary">
                Additional Information
            </h2>

            <Accordion
                type="single"
                defaultValue="faq-1"
                collapsible
                role="list"
                aria-label="Frequently asked questions">
                {faqData.map(faq => (
                    <AccordionItem
                        key={faq.key}
                        value={faq.value}
                        className="border-b-2 py-4"
                        role="listitem">
                        <AccordionTrigger
                            variant="plus-minus"
                            className="text-primary md:text-lg lg:text-xl font-bold [&_svg]:size-6"
                            aria-controls={`content-${faq.key}`}
                            aria-expanded={faq.value === 'faq-1' ? 'true' : 'false'}>
                            {faq.title}
                        </AccordionTrigger>
                        <AccordionContent
                            className="py-6"
                            id={`content-${faq.key}`}
                            role="region"
                            aria-labelledby={`trigger-${faq.key}`}>
                            {faq.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default FAQSection
