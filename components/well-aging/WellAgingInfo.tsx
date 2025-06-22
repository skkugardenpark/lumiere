'use client'

import { motion } from 'framer-motion'

export default function WellAgingInfo() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-[4/5] bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center">
                {/* Placeholder for well-aging image */}
                <div className="w-full h-full bg-gradient-to-br from-pink-50 to-rose-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <p className="text-sm">탄력있는 피부</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="text-sm text-primary font-medium mb-4 tracking-wider">
              탄력있는 피부
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 leading-tight">
              WELL-AGING
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                나이가 들어가며 외모가 바뀌는 것은<br />
                서글픈 일이 아니라 아름다울 수 있는 일입니다.<br />
                시간을 되돌릴 수는 없지만 조금의 노력으로<br />
                아름답고 우아하게 나를 가꿀 수 있습니다.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">자연스러운 안티에이징 솔루션</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">개인별 맞춤 리프팅 치료</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">아름다운 나이듦의 미학</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 