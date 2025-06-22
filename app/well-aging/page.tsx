import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WellAgingHero from '@/components/well-aging/WellAgingHero'
import WellAgingInfo from '@/components/well-aging/WellAgingInfo'
import EquipmentShowcase from '@/components/well-aging/EquipmentShowcase'
import TreatmentOptions from '@/components/well-aging/TreatmentOptions'
import WellAgingCTA from '@/components/well-aging/WellAgingCTA'

export const metadata: Metadata = {
  title: 'WELL-AGING - 루미에르 더마 | 탄력있는 피부 솔루션',
  description: '자연스러운 안티에이징과 리프팅으로 아름다운 나이듦을 만들어보세요. 피부과 전문의의 1:1 맞춤 치료',
  keywords: '안티에이징, 리프팅, 보톡스, 리쥬란, 울쎄라, 써마지, 올리지오, 인모드, 피부과, 양천구피부과',
}

export default function WellAgingPage() {
  return (
    <main className="min-h-screen">
      <Header 
        forceBlackText={true} 
        forceLogo="/lumiere.png"
        logoSize={{ width: 100, height: 27 }}
      />
      <WellAgingHero />
      <WellAgingInfo />
      <EquipmentShowcase />
      <TreatmentOptions />
      <WellAgingCTA />
      <Footer />
    </main>
  )
} 