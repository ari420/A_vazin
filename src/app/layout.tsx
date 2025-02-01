import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/layout/Navbar/page'


// متادیتای سایت
export const metadata: Metadata = {
  title: {
    default: 'عنوان پیش‌فرض سایت',
    template: '%s | نام برند'
  },
  description: 'توضیحات پیش‌فرض سایت',
  keywords: ['کلید واژه', 'برچسب'],
  authors: [{ name: 'نام توسعه‌دهنده' }],
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    title: 'عنوان OG',
    description: 'توضیحات OG',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className='font-vazir'>
        <Navbar />
        {/* کامپوننت‌های مشترک مانند هدر و فوتر */}
        <main>{children}</main>
      </body>
    </html>
  )
}