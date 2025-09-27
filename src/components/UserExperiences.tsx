import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { experiencesData } from '@/constants/uiConstants'
import type { Comparison } from '@/types/ui'
import { cn } from '@/lib/utils'

function ExperienceCard({ data }: { data: Pick<Comparison, 'title' | 'image'> }) {
    return (
        <Card
            className="bg-transparent border-none shadow-none"
            role="article"
            aria-labelledby={`experience-title-${data.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className="w-full h-92 mb-6 overflow-hidden relative rounded-lg">
                <Image
                    src={data?.image}
                    alt={data?.title}
                    fill
                    className="object-cover rounded-lg"
                    style={{ objectPosition: 'center' }}
                    aria-hidden="true"
                />
            </div>
            <CardContent className="space-y-2 px-0">
                <h3
                    id={`experience-title-${data.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-lg md:text-xl font-medium leading-tight">
                    {data.title}
                </h3>
            </CardContent>
        </Card>
    )
}

const UserExperiences: React.FC = () => {
    return (
        <section
            className="relative flex flex-col gap-8 w-full py-8 md:py-12 lg:py-16"
            aria-labelledby="experiences-heading">
            <h2
                id="experiences-heading"
                className="text-xl md:text-2xl lg:text-3xl text-primary">
                Experience Highlights
            </h2>
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                className="mb-20"
                aria-label="Experience highlights carousel"
                role="region">
                <CarouselContent aria-live="polite">
                    {experiencesData.map((data, idx) => (
                        <CarouselItem
                            key={data.title}
                            className={cn(
                                'md:basis-1/2',
                                idx < experiencesData.length - 1 ? 'lg:pr-8' : ''
                            )}
                            aria-label={`Slide ${idx + 1} of ${experiencesData.length}: ${
                                data.title
                            }`}
                            role="group"
                            aria-roledescription="slide">
                            <ExperienceCard data={data} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious aria-label="Previous experience" />
                <CarouselNext aria-label="Next experience" />
            </Carousel>
        </section>
    )
}

export default UserExperiences
