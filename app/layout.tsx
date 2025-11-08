import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invictus Pro - Elite Software Development & Automation Solutions',
  description: 'Premium software development and automation solutions for modern businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
