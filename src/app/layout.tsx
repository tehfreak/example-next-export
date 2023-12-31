import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto, Roboto_Condensed } from 'next/font/google'

const roboto = Roboto({
    weight: ['300', '400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const robotoCondensed = Roboto_Condensed({
    variable: '--display-font',
    weight: ['300', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${robotoCondensed.variable}`}>{children}</body>
    </html>
  )
}
