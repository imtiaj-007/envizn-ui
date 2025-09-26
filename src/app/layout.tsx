import type { Metadata } from 'next'
import './globals.css'

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
            <body className={`antialiased`}>{children}</body>
        </html>
    )
}
