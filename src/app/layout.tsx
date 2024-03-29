import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from 'react-hot-toast'
import localFont from 'next/font/local'


const myFont = localFont({
  src: '/../app/fonts/Trap_V1.1/Trap-Medium.otf',
  variable: "--Trap-Medium",
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Francis Jones fullstack developer',
  description: 'Online portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.variable}>
      <body className='font-TrapMedium'>
        {children}
        <SpeedInsights />
        <Toaster position="top-right"/>
        </body>
    </html>
  )
}
