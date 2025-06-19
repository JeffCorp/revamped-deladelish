import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Montserrat } from "next/font/google"
import './globals.css'

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: 'Dela Delish - Fresh & Healthy Food Delivery',
  description: 'Fresh, healthy meals crafted by expert chefs and delivered to your door in 30 minutes or less.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat bg-white min-h-screen`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
