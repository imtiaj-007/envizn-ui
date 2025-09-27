import HeroSection from '@/components/HeroSection'
import CTASection from '@/components/CTASection'
import TestimonialSection from '@/components/TestimonialSection'
import ComparisonSection from '@/components/ComparisonSection'
import SiteOverview from '@/components/SiteOverview'

export default function Home() {
    return (
        <>
            <HeroSection />
            <SiteOverview />
            <CTASection />
            <TestimonialSection />
            <ComparisonSection />
        </>
    )
}
