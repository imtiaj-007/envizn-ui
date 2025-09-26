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
        <Card>
            <CardHeader className="flex flex-row items-center gap-1.5 space-y-0">
                {Array.from({ length: user.rating }, (_, i) => (
                    <Star
                        key={i}
                        className="size-4 text-amber-400 fill-amber-400"
                    />
                ))}
            </CardHeader>
            <CardContent className="min-h-[175px]">{user.quote}</CardContent>
            <CardFooter className="flex-col items-start">
                <Avatar>
                    <AvatarImage
                        src={user.image}
                        alt={user.name}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-sm font-semibold mb-0.5 mt-4">{user.name}</p>
                <p className="text-sm">{user.designation}</p>
            </CardFooter>
        </Card>
    )
}

const TestimonialSection: React.FC = () => {
    return (
        <section
            id="testimonial-section"
            className="relative p-8 md:p-12 lg:p-16"
            aria-labelledby="hero-heading">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-primary mb-4">What our escapees says about us</h2>
                <p className="mb-16">
                    See how escapees from around the world experienced the real Bali — curated with
                    care, heart, and local soul.
                </p>
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className="mb-28">
                    <CarouselContent>
                        {testimonials.map(user => (
                            <CarouselItem
                                key={user.name}
                                className="md:basis-1/2 lg:basis-1/3">
                                <TestimonialCard user={user} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}

export default TestimonialSection
