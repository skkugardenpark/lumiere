'use client'

import { motion } from 'framer-motion'

export default function TreatmentOptions() {
  const treatments = [
    {
      title: "보툴리늄 톡신 주사 · 리쥬란",
      subtitle: "이런 분께 추천합니다.",
      recommendations: [
        "표정주름과 잔주름이 고민이신 분",
        "모공이 고민이신 분"
      ],
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      iconColor: "text-blue-500"
    },
    {
      title: "울쎄라 · 써마지 · 올리지오 · 인모드",
      subtitle: "이런 분께 추천합니다.",
      recommendations: [
        "피부층의 재생, 피부 아래 근막, 지방층 타이트닝이 필요하신 분",
        "자연스러운 리프팅을 원하시는 분"
      ],
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
      iconColor: "text-emerald-500"
    }
  ]

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${treatment.bgColor} rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg className={`w-8 h-8 ${treatment.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 leading-tight">
                  {treatment.title}
                </h3>
                
                {/* Subtitle */}
                <h4 className="text-lg font-medium text-gray-700 mb-6">
                  {treatment.subtitle}
                </h4>

                {/* Recommendations */}
                <div className="space-y-4">
                  {treatment.recommendations.map((recommendation, recIndex) => (
                    <div key={recIndex} className="flex items-start space-x-3 text-left">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {recommendation}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="mt-8">
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300 shadow-md">
                    자세히 보기
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 