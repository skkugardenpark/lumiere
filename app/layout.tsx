import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'LUMIÈRE DERM | 루미에르 더마 - 전문 피부과 클리닉',
  description: '과학과 감성의 균형으로 건강하고 아름다운 피부를 만들어드립니다. 여드름, 미백, 탄력, 안티에이징 전문 피부과 클리닉',
  keywords: '피부과, 루미에르더마, 여드름치료, 미백, 탄력, 안티에이징, 피부관리, 레이저치료',
  authors: [{ name: 'LUMIÈRE DERM' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'LUMIÈRE DERM | 루미에르 더마',
    description: '과학과 감성의 균형으로 건강하고 아름다운 피부를 만들어드립니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'LUMIÈRE DERM',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUMIÈRE DERM | 루미에르 더마',
    description: '과학과 감성의 균형으로 건강하고 아름다운 피부를 만들어드립니다.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-noto antialiased">
        {children}
      </body>
    </html>
  )
} 