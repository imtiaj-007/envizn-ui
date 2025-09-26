import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { footerLinks, navConfig } from '@/constants/uiConstants'

export default function Footer() {
    return (
        <footer className="bg-primary p-6 md:p-8 lg:p-12 xl:p-16 relative">
            <div className="absolute inset-0 bg-[url('/assets/footer-pattern.png')] bg-cover bg-center bg-no-repeat"></div>
            <div className="relative flex flex-col items-center gap-6 md:gap-8 z-10">
                <Image
                    src="/assets/logo-secondary.svg"
                    alt="website logo"
                    width={300}
                    height={50}
                    className="w-[140px] md:w-[165px] h-auto object-cover overflow-hidden"
                />
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {navConfig.map(navItem => (
                        <Link
                            key={navItem.title}
                            href={navItem.href}
                            className="text-white text-sm md:text-base">
                            {navItem.title}
                        </Link>
                    ))}
                </div>
                <Separator className="mt-6 mb-4 md:mt-8 md:mb-6" />
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                <p className="text-white text-xs md:text-sm text-center md:text-left">
                    © {new Date().getFullYear()} Bali With Flow. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {footerLinks.map(item => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="text-white text-xs md:text-sm underline">
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}
