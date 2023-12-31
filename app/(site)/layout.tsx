import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link"

export const metadata: Metadata = {
  title: 'My Personal Blog',
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages(); 
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10 font-poppins">
      <header className="flex items-center justify-between">
        <Link href="/">ohis</Link>
        <div className='flex items-center gap-5 text-sm'>
          {pages.map((page) => (
            <Link key={page._id} href={`/${page.slug}`}>
            {page.title}
            </Link>
          ))}
        </div>
      </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
