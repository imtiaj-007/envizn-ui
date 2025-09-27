import Image from 'next/image'
import { Clock, MapPin } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { comparisonData } from '@/constants/uiConstants'
import type { Comparison } from '@/types/ui'
import { cn } from '@/lib/utils'

function ComparisonCard({ data }: { data: Comparison }) {
    return (
        <Card
            className="bg-transparent border-none shadow-none"
            role="article"
            aria-labelledby={`comparison-title-${data.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className="w-full h-80 mb-6 overflow-hidden relative rounded-lg">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover rounded-lg"
                    style={{ objectPosition: 'center' }}
                />
            </div>
            <CardContent className="space-y-2 px-0">
                <div
                    className="flex items-center gap-2 mb-4"
                    role="group"
                    aria-label="Trip details">
                    <Badge
                        className="rounded-full px-3 py-1.5 font-normal"
                        aria-label={`Location: ${data.location}`}>
                        <MapPin
                            className="size-4"
                            aria-hidden="true"
                        />
                        {data.location}
                    </Badge>
                    <Badge
                        variant="accent"
                        className="rounded-full px-3 py-1.5 font-normal"
                        aria-label={`Duration: ${data.duration}`}>
                        <Clock
                            className="size-4"
                            aria-hidden="true"
                        />
                        {data.duration}
                    </Badge>
                    <Badge
                        variant="secondary-light"
                        className="rounded-full px-3 py-1.5 font-normal"
                        aria-label={`Type: ${data.type}`}>
                        {data.type}
                    </Badge>
                </div>
                <h3
                    id={`comparison-title-${data.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-lg md:text-xl font-medium leading-tight">
                    {data.title}
                </h3>
                <h4
                    className="text-accent text-sm md:text-base"
                    aria-label="Subtitle">
                    {data.subTitle}
                </h4>
                <p
                    className="line-clamp-3 text-sm leading-relaxed"
                    aria-label="Description">
                    {data.description}
                </p>
            </CardContent>
            <CardFooter
                className="px-0 flex flex-col sm:flex-row gap-2 items-start sm:items-center"
                role="group"
                aria-label="Action buttons">
                <Button
                    variant="default"
                    className="w-full sm:w-auto min-w-[120px]"
                    aria-label={`Book ${data.title} escape`}>
                    Book Escape
                </Button>
                <Button
                    variant="link"
                    className="w-full sm:w-auto text-sm"
                    aria-label={`Read more about ${data.title}`}>
                    Read More
                </Button>
            </CardFooter>
        </Card>
    )
}

const ComparisonSection: React.FC = () => {
    return (
        <section
            id="comparison-section"
            className="relative bg-white p-8 md:p-12 lg:p-16"
            aria-labelledby="comparison-heading">
            <div className="max-w-6xl mx-auto w-full">
                <h2
                    id="comparison-heading"
                    className="text-center text-primary mb-16">
                    You may also like
                </h2>
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className="mb-28"
                    aria-label="comparison carousel"
                    role="region">
                    <CarouselContent aria-live="polite">
                        {comparisonData.map((data, idx) => (
                            <CarouselItem
                                key={data.title}
                                className={cn(
                                    'md:basis-1/2 lg:basis-1/3',
                                    idx < comparisonData.length - 1 ? 'lg:pr-8' : ''
                                )}
                                aria-label={`Slide ${idx + 1} of ${comparisonData.length}`}>
                                <ComparisonCard data={data} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious aria-label="Previous comparison" />
                    <CarouselNext aria-label="Next comparison" />
                </Carousel>
            </div>
        </section>
    )
}

export default ComparisonSection
