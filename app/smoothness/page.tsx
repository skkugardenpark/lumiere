import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothnessHero from '@/components/smoothness/SmoothnessHero'
import SmoothnessInfo from '@/components/smoothness/SmoothnessInfo'
import AcneTreatment from '@/components/smoothness/AcneTreatment'
import ScarTreatment from '@/components/smoothness/ScarTreatment'
import SmoothnessProgram from '@/components/smoothness/SmoothnessProgram'
import SmoothnessCTA from '@/components/smoothness/SmoothnessCTA'

export const metadata: Metadata = {
  title: 'SMOOTHNESS - 루미에르 더마 | 매끈한 피부 솔루션',
  description: '여드름 치료와 흉터 관리로 매끈하고 건강한 피부를 만들어보세요. 피부과 전문의의 1:1 맞춤 치료',
  keywords: '여드름치료, 흉터치료, 매끈한피부, 피부과, 양천구피부과',
}

export default function SmoothnessPage() {
  return (
    <main className="min-h-screen">
      <Header 
        forceBlackText={true} 
        forceLogo="/lumiere.png"
        logoSize={{ width: 320, height: 85 }}
      />
      <SmoothnessHero />
      <SmoothnessProgram />
      <SmoothnessInfo />
      <AcneTreatment />
      <ScarTreatment />
      <SmoothnessCTA />
      <Footer />
    </main>
  )
} 