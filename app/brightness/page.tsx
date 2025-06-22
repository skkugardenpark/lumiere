import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BrightnessHero from '@/components/brightness/BrightnessHero'
import ThreeStepTreatment from '@/components/brightness/ThreeStepTreatment'
import EquipmentSection from '@/components/brightness/EquipmentSection'
import BrightnessInfo from '@/components/brightness/BrightnessInfo'
import CleansingGuide from '@/components/brightness/CleansingGuide'
import BrightnessCTA from '@/components/brightness/BrightnessCTA'

export const metadata = {
  title: 'BRIGHTNESS | LUMIÈRE DERM - 루미에르 더마',
  description: '생기있는 피부를 위한 전문 색소 치료. 기미, 흑자, 오타양모반 등 다양한 색소 문제를 해결하여 밝고 화사한 피부로 만들어드립니다.',
}

export default function BrightnessPage() {
  return (
    <main className="min-h-screen">
      <Header 
        forceBlackText={true} 
        forceLogo="/lumiere.png"
        logoSize={{ width: 280, height: 75 }}
      />
      <BrightnessHero />
      <ThreeStepTreatment />
      <EquipmentSection />
      <BrightnessInfo />
      <CleansingGuide />
      <BrightnessCTA />
      <Footer />
    </main>
  )
} 