# LUMIÈRE DERM (루미에르 더마) 

감성적이고 고급스러운 피부과 전문 클리닉 웹사이트

![Next.js](https://img.shields.io/badge/Next.js-13.4.19-black)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.5-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.12.16-ff69b4)

## 🌟 프로젝트 소개

루미에르 더마는 **과학과 감성의 완벽한 균형**을 추구하는 프리미엄 피부과 클리닉의 웹사이트입니다. 
미니멀하면서도 따뜻한 디자인과 전문성을 겸비한 의료 서비스를 온라인에서 경험할 수 있도록 제작되었습니다.

### ✨ 주요 특징

- **감성적 디자인**: 크림 화이트 배경과 올리브 포인트 컬러로 따뜻하고 고급스러운 분위기
- **전문성 강조**: 의료진 소개, 치료 전후 사진, 고객 후기를 통한 신뢰성 구축
- **인터랙티브 애니메이션**: Framer Motion을 활용한 부드럽고 자연스러운 사용자 경험
- **완벽한 반응형**: 모바일부터 데스크톱까지 모든 디바이스에서 최적화된 경험
- **SEO 최적화**: Next.js App Router 기반의 뛰어난 검색 엔진 최적화

## 🛠 기술 스택

### Frontend
- **Next.js 13.4.19** - App Router 기반 React 프레임워크
- **React 18.2.0** - 컴포넌트 기반 UI 라이브러리
- **TypeScript 5.1.6** - 정적 타입 체크
- **Tailwind CSS 3.3.5** - 유틸리티 우선 CSS 프레임워크
- **Framer Motion 10.12.16** - 애니메이션 라이브러리

### UI/UX
- **Lucide React** - 아이콘 라이브러리
- **Google Fonts** - Noto Sans KR, Playfair Display
- **Responsive Design** - 모바일 우선 반응형 디자인

## 🎨 디자인 시스템

### 색상 팔레트
```css
Primary Background: #F8F5F2 (Cream White)
Text Primary: #3D3D3D (Dark Gray)
Text Accent: #B6ADA6 (Light Brown)
Point Color: #A3B18A (Olive Green)
Warm Beige: #E8E3DE
Soft Brown: #C9B99B
```

### 타이포그래피
- **본문**: Noto Sans KR (300, 400, 500, 600, 700)
- **헤딩**: Playfair Display (400, 500, 600, 700)

## 📱 페이지 구성

### 1. Hero Section
- 전체 화면 배경 이미지
- 브랜드 슬로건과 CTA 버튼
- 스크롤 인디케이터

### 2. Services (DE NOVO)
- 4가지 핵심 서비스 소개
- SMOOTHNESS, WELL-AGING, REBALANCING, BRIGHTNESS
- 호버 효과와 상세 정보 모달

### 3. About (FIND YOUR ORIGINALITY)
- 브랜드 철학과 전문성 강조
- 의료진 자격사항 및 특징
- 통계 정보 시각화

### 4. Gallery (BEFORE & AFTER)
- 치료 전후 비교 슬라이더
- 클리닉 시설 사진 갤러리
- 이미지 모달 뷰어

### 5. Testimonials
- 실제 고객 후기 카드
- 평점 및 만족도 통계
- 고객별 치료 정보

### 6. Contact
- 진료 시간 및 연락처 정보
- 지도 (플레이스홀더)
- 상담 예약 CTA

### 7. Footer
- 브랜드 정보 및 SNS 링크
- 퀵 메뉴 및 연락처
- 사업자 정보

## 🚀 설치 및 실행

### 필수 요구사항
- Node.js 16.0 이상
- npm 또는 yarn

### 설치 방법

```bash
# 저장소 클론
git clone <repository-url>

# 프로젝트 디렉토리로 이동
cd dermatology

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 🎯 주요 기능

### 인터랙티브 애니메이션
- 스크롤 기반 섹션 등장 애니메이션
- 호버 효과 및 버튼 상호작용
- 부드러운 페이지 스크롤

### 반응형 디자인
- 모바일: 320px ~ 768px
- 태블릿: 769px ~ 1024px  
- 데스크톱: 1025px 이상

### SEO 최적화
- 메타데이터 최적화
- OpenGraph 태그
- 시맨틱 HTML 구조

## 📂 프로젝트 구조

```
dermatology/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🔧 커스터마이징

### 색상 변경
`tailwind.config.js`에서 커스텀 색상을 수정할 수 있습니다:

```javascript
colors: {
  'cream': '#F8F5F2',
  'text-primary': '#3D3D3D',
  'text-accent': '#B6ADA6',
  'olive': '#A3B18A',
  // 색상 추가 또는 변경
}
```

### 내용 수정
각 컴포넌트 파일에서 텍스트, 이미지 URL, 연락처 정보 등을 수정할 수 있습니다.

## 📄 라이선스

이 프로젝트는 개인 사용 목적으로 제작되었습니다.

## 📞 문의

프로젝트 관련 문의사항이 있으시면 언제든 연락주세요.

---

**LUMIÈRE DERM** - 과학과 감성의 완벽한 균형 