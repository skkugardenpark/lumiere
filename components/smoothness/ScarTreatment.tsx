'use client'

import { motion } from 'framer-motion'

export default function ScarTreatment() {
  return (
    <section className="py-20 bg-lumi-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-lumi-charcoal font-medium mb-4 tracking-wider">
              SMOOTHNESS
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 leading-tight">
              흉터치료
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                깊이와 형태, 단계에 따라 시술 방법이 달라지며<br />
                조금씩 호전되는 것을 목표로 합니다.<br />
                흉터는 장기간의 치료가 필요하므로 단순한<br />
                시술자 - 환자 관계가 아닌<br />
                치료의 파트너로 함께 나아갑니다.
              </p>

              {/* Treatment Features */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumi-charcoal rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">깊이와 형태에 따른 맞춤 시술</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumi-charcoal rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">단계별 체계적인 치료 계획</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumi-charcoal rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">치료 파트너십을 통한 장기 관리</p>
                </div>
              </div>

              {/* Partnership Message */}
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border-l-4 border-lumi-charcoal">
                <p className="text-gray-700 font-medium">
                  "함께 만들어가는 치료 과정"
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  환자와 의료진이 파트너가 되어 장기간의 치료 여정을 함께합니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-[4/5] bg-gradient-to-br from-lumi-ivory to-lumi-ivory flex items-center justify-center">
                {/* Placeholder for scar treatment image */}
                <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-lumi-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-sm">흉터 치료</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 