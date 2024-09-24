import type { Metadata } from 'next'

import '/styles/globals.css'


export const metadata: Metadata = {
  title: 'Zet - AI Zettelkasten Notebook',
  description: 'Use Zettelkasten to organize your thinking notes and use AI to assist you',
  manifest: '/pwa/manifest.json',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
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
