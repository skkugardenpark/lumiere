import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutHero from '@/components/about/AboutHero'
import Certification from '@/components/about/Certification'
import DoctorProfile from '@/components/about/DoctorProfile'
import Philosophy from '@/components/about/Philosophy'
import Facilities from '@/components/about/Facilities'
import AboutContact from '@/components/about/AboutContact'

export const metadata = {
  title: 'DE NOVO | LUMIÈRE DERM - 루미에르 더마',
  description: '새로운 시작, 건강한 아름다움을 위한 전문 피부과 클리닉. 과학과 감성의 완벽한 균형으로 당신만의 아름다움을 찾아드립니다.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header logoSize={{ width: 78, height: 21 }} />
      <AboutHero />
      <Certification />
      <DoctorProfile />
      <Philosophy />
      <Facilities />
      <AboutContact />
      <Footer />
    </main>
  )
} 