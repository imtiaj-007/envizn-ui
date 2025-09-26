import { Button } from '@/components/ui/button'

const CTASection: React.FC = () => {
    return (
        <section
            id="cta-section"
            className="relative flex items-center w-full min-h-[540px] p-8 md:p-12 lg:p-16"
            aria-labelledby="cta-heading">
            <div
                className="absolute inset-0 opacity-70"
                style={{
                    backgroundImage: "url('/assets/images/cta-background.jpg')",
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'var(--bg-position, 50% 20%)',
                }}
                data-bg-responsive="true"
                aria-hidden="true"></div>
            <div
                className="absolute inset-0 bg-green-950/70 z-1"
                aria-hidden="true"></div>
            <div
                className="hidden lg:block absolute inset-0 z-2"
                style={{
                    backgroundImage: "url('/assets/images/cta-image.png')",
                    backgroundSize: '28% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '80% 20%',
                }}
                aria-hidden="true"></div>
            <div className="relative max-w-7xl mx-auto w-full z-5">
                <div className="max-w-xl flex flex-col items-start gap-8">
                    <h2
                        id="cta-heading"
                        className="text-white">
                        About the Host
                    </h2>
                    <p
                        className="text-white"
                        aria-describedby="cta-heading">
                        &quot;I&apos;ve spent 6+ years discovering the real Bali—what most people
                        never get to see. I created BaliwithFlow to share that magic with escapees
                        who crave meaning, depth, and effortless beauty in every detail.&quot;
                    </p>
                    <div
                        className="flex items-center gap-4"
                        role="group"
                        aria-label="Action buttons">
                        <Button
                            variant="secondary"
                            showArrow
                            aria-label="Book Escape">
                            Book Escape
                        </Button>
                        <Button
                            variant="outline"
                            aria-label="Plan personal trip">
                            Plan personal trip
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection
