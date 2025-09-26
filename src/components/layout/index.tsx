import { ReactNode } from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen p-8 md:p-12 lg:p-16">{children}</main>
            <Footer />
        </>
    )
}
