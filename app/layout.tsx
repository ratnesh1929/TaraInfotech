import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MundraTech - Your Technology Partner',
  description: 'Leading technology solutions provider specializing in web development, mobile apps, and digital transformation.',
  keywords: 'technology, web development, mobile apps, digital solutions, software development',
  icons: {
    icon: '/mundralogo.jpg',
    apple: '/mundralogo.jpg',
  },
  openGraph: {
    images: ['/mundralogo.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
