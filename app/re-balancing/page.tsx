import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReBalancingHero from '@/components/re-balancing/ReBalancingHero'
import IVTherapy from '@/components/re-balancing/IVTherapy'
import ImmuneTherapy from '@/components/re-balancing/ImmuneTherapy'
import ReBalancingCTA from '@/components/re-balancing/ReBalancingCTA'

export const metadata: Metadata = {
  title: 'RE:BALANCING - 루미에르 더마 | 면역 및 수액 치료',
  description: '바쁜 일상 속 몸의 밸런스를 회복하세요. 수액치료와 면역 주사로 건강한 균형을 찾아드립니다.',
  keywords: '수액치료, 면역치료, 항산화수액, 태반주사, 미백수액, 알러지치료, 피부과, 양천구피부과',
}

export default function ReBalancingPage() {
  return (
    <main className="min-h-screen">
      <Header 
        forceBlackText={true} 
        forceLogo="/lumiere.png"
        logoSize={{ width: 280, height: 75 }}
      />
      <ReBalancingHero />
      <IVTherapy />
      <ImmuneTherapy />
      <ReBalancingCTA />
      <Footer />
    </main>
  )
} 