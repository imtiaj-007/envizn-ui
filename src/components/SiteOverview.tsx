import { Star } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { BookingForm } from '@/components/forms/BookingForm'
import { StickySection } from '@/components/layout/StickyWrapper'

import OfferingsSection from '@/components/OfferingsSection'
import UserExperiences from '@/components/UserExperiences'
import DiscoverSection from '@/components/DiscoverSection'
import BookAppointment from '@/components/BookAppointment'

function DashedSeparator() {
    return (
        <div className="relative w-full h-0.5 overflow-hidden">
            <div
                role="none"
                className="absolute left-0 top-0 w-[768px] md:w-[1024px] lg:w-[1440px] flex gap-2 justify-start">
                {Array.from({ length: 35 }, (_, i) => (
                    <span
                        key={i}
                        className="w-4 h-0.5 bg-border"
                        aria-hidden="true"
                    />
                ))}
            </div>
        </div>
    )
}

// Content Sections Component
const ContentSections: React.FC = () => {
    return (
        <>
            <OfferingsSection />
            <DashedSeparator />
            <UserExperiences />
            <DashedSeparator />
            <DiscoverSection />
            <DashedSeparator />
            <BookAppointment />
            <DashedSeparator />
        </>
    )
}

// Booking Card Component
const BookingCard: React.FC = () => {
    return (
        <Card className="bg-background border-t-0 border-l-0 border-r-4 border-b-4 border-secondary py-8">
            <CardHeader className="space-y-4">
                <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }, (_, i) => (
                        <Star
                            key={i}
                            className="size-6 text-amber-400 fill-amber-400"
                            aria-hidden="true"
                        />
                    ))}
                    <span className="ml-4 font-medium">4.9 (120)</span>
                </div>
                <h3>From IDR 150,000.00/ Person</h3>
                <p className="text-muted underline">Show Prices</p>
            </CardHeader>
            <CardContent>
                <BookingForm />
            </CardContent>
        </Card>
    )
}

// Main StickySection Component
const SiteOverview: React.FC = () => {
    return (
        <StickySection
            ContentSections={<ContentSections />}
            StickyItem={<BookingCard />}
            gridGap="gap-12"
            contentColSpan="lg:col-span-3"
            stickyColSpan="lg:col-span-2"
        />
    )
}

export default SiteOverview
