import { Star } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { testimonials } from '@/constants/uiConstants'
import type { Testimonial } from '@/types/ui'

function TestimonialCard({ user }: { user: Testimonial }) {
    return (
        <Card
            role="article"
            aria-label={`Testimonial from ${user.name}`}>
            <CardHeader
                className="flex flex-row items-center gap-1.5 space-y-0"
                aria-label={`Rating: ${user.rating} stars`}>
                {Array.from({ length: user.rating }, (_, i) => (
                    <Star
                        key={i}
                        className="size-4 text-amber-400 fill-amber-400"
                        aria-hidden="true"
                    />
                ))}
            </CardHeader>
            <CardContent
                className="min-h-[175px]"
                aria-label="Testimonial quote">
                {user.quote}
            </CardContent>
            <CardFooter className="flex-col items-start">
                <Avatar>
                    <AvatarImage
                        src={user.image}
                        alt={`Portrait of ${user.name}`}
                    />
                    <AvatarFallback aria-hidden="true">CN</AvatarFallback>
                </Avatar>
                <p
                    className="text-sm font-semibold mb-0.5 mt-4"
                    aria-label="Author name">
                    {user.name}
                </p>
                <p
                    className="text-sm"
                    aria-label="Author designation">
                    {user.designation}
                </p>
            </CardFooter>
        </Card>
    )
}

const TestimonialSection: React.FC = () => {
    return (
        <section
            id="testimonial-section"
            className="relative p-8 md:p-12 lg:p-16"
            aria-labelledby="testimonial-heading">
            <div className="max-w-7xl mx-auto w-full">
                <h2
                    id="testimonial-heading"
                    className="text-primary mb-4">
                    What our escapees says about us
                </h2>
                <p className="mb-16">
                    See how escapees from around the world experienced the real Bali — curated with
                    care, heart, and local soul.
                </p>
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className="mb-28"
                    aria-label="Testimonials carousel">
                    <CarouselContent>
                        {testimonials.map(user => (
                            <CarouselItem
                                key={user.name}
                                className="md:basis-1/2 lg:basis-1/3"
                                aria-label={`Testimonial ${testimonials.indexOf(user) + 1} of ${
                                    testimonials.length
                                }`}>
                                <TestimonialCard user={user} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious aria-label="Previous testimonial" />
                    <CarouselNext aria-label="Next testimonial" />
                </Carousel>
            </div>
        </section>
    )
}

export default TestimonialSection
