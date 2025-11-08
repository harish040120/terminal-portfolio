import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muthu Harish T - Portfolio Terminal',
  description: 'Software Developer Portfolio - Dark Space Terminal Theme',
  keywords: ['portfolio', 'software developer', 'terminal', 'Next.js'],
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
