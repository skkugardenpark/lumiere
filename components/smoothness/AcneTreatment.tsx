'use client'

import { motion } from 'framer-motion'

export default function AcneTreatment() {
  return (
    <section className="py-20 bg-white">
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
                {/* Placeholder for acne treatment image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm">여드름 치료</p>
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
              SMOOTHNESS
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 leading-tight">
              여드름 치료
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div className="space-y-4">
                <p className="text-lg font-medium text-gray-800">
                  여드름은 치료 방법이 다 같을까요?<br />
                  모든 여드름에는 각질 정리가 꼭 필요할까요?
                </p>
                
                <p className="text-lg">
                  피부과 전문의가 정확한 진단을 하면<br />
                  피지 관리와 치료는 의외로 심플합니다.<br />
                  피부염이 동반되어 있거나 잘못된<br />
                  자가관리로 피부장벽이 무너진 경우에는<br />
                  특수 케어가 필요합니다.
                </p>
              </div>

              {/* Treatment Points */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">정확한 피부 진단을 통한 맞춤 치료</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">피부장벽 강화를 통한 근본적 개선</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">염증 조절과 피지 관리의 균형</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 