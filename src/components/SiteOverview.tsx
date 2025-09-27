import { Star } from 'lucide-react'
import { BookingForm } from '@/components/forms/BookingForm'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { StickySection } from '@/components/layout/StickyWrapper'

// Content Sections Component
const ContentSections: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Highlights section */}
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Highlights</h3>
                <ul className="space-y-2">
                    <li>• Private villa with infinity pool</li>
                    <li>• Authentic Balinese cultural experiences</li>
                    <li>• Personalized itinerary planning</li>
                    <li>• Local guide included</li>
                    <li>• Private villa with infinity pool</li>
                    <li>• Authentic Balinese cultural experiences</li>
                    <li>• Personalized itinerary planning</li>
                    <li>• Local guide included</li>
                </ul>
            </div>

            {/* Experience carousel */}
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Featured Experiences</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-medium">Temple Tours</h4>
                        <p className="text-sm text-gray-600">Sacred sites & spiritual journeys</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-medium">Culinary Workshops</h4>
                        <p className="text-sm text-gray-600">Traditional Balinese cooking</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-medium">Nature Walks</h4>
                        <p className="text-sm text-gray-600">Rice terraces & waterfalls</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-medium">Wellness Sessions</h4>
                        <p className="text-sm text-gray-600">Yoga & traditional massage</p>
                    </div>
                </div>
            </div>

            {/* Services section */}
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Included Services</h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        <span>Airport transfers</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        <span>Daily breakfast</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        <span>24/7 concierge service</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        <span>Photography sessions</span>
                    </div>
                </div>
            </div>
        </div>
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
