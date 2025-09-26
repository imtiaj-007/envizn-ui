import type { Metadata } from 'next'
import './globals.css'
import PageLayout from '@/components/layout'

export const metadata: Metadata = {
    title: 'Bailwithflow',
    description: 'Beautiful landing page for tourism website Bailwithflow',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className="light">
            <body className={`antialiased`}>
                <PageLayout>{children}</PageLayout>
            </body>
        </html>
    )
}
