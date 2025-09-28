import { Button } from '@/components/ui/button'
import { BentoGrid } from '@/components/ui/bento-grid'
import { heroOverview, imageConfig } from '@/constants/uiConstants'
import { cn } from '@/lib/utils'

const HeroSection: React.FC = () => {
    return (
        <section
            id="hero-section"
            className="flex flex-col items-center gap-16 p-6 md:p-12 lg:p-16"
            aria-labelledby="hero-heading">
            <div className="relative w-full h-[400px]">
                <div className="absolute bottom-4 right-2 z-5">
                    <Button
                        variant="info"
                        className="bg-white"
                        aria-label="View all images">
                        View all images
                    </Button>
                </div>
                <BentoGrid
                    items={imageConfig}
                    className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    aria-label="Experience images gallery"
                />
            </div>
            <div className="max-w-2xl mx-auto w-full text-center space-y-8">
                <h1 id="hero-heading">Balinese Day with a Local Family</h1>
                <p aria-describedby="hero-heading">
                    Immerse yourself in the heart of Balinese culture by spending a day with a local
                    family. This authentic experience offers a unique glimpse into daily life,
                    traditions, and the warmth of Balinese hospitality.
                </p>
            </div>
            <div
                className="w-full border-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 rounded-4xl px-4 md:px-6 lg:px-8 py-4"
                role="region"
                aria-label="Experience overview">
                {heroOverview.map(overview => (
                    <div
                        key={overview.key}
                        className={cn(
                            'flex items-start gap-2 md:gap-3 p-3 md:p-4',
                            overview.className
                        )}
                        role="listitem"
                        aria-labelledby={`${overview.key}-title`}>
                        <overview.icon
                            className="size-5 md:size-6 text-secondary"
                            aria-hidden="true"
                        />
                        <div className="space-y-1 md:space-y-2">
                            <h3
                                id={`${overview.key}-title`}
                                className="text-sm md:text-base lg:text-lg xl:text-xl font-medium">
                                {overview.title}
                            </h3>
                            <p className="text-xs md:text-sm lg:text-base xl:text-lg font-medium text-primary/60">
                                {overview.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HeroSection
