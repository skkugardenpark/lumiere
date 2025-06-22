'use client'

import { motion } from 'framer-motion'

export default function SmoothnessInfo() {
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
            <div className="text-sm text-lumi-charcoal font-medium mb-4 tracking-wider">
              매끈한 피부
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 leading-tight">
              SMOOTHNESS
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                남들은 잘 모른다고 해도 거울을 볼 때마다 신경 쓰이는<br />
                피부의 요철들을 보다 매끄럽게 다듬어 준다면<br />
                당신의 새로운 맑음이 더 드러나 보이게 됩니다.
              </p>
              
              <p className="text-lg font-medium text-lumi-charcoal">
                루미에르 더마가 도와드릴게요.
              </p>
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
              <div className="aspect-[4/5] bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center">
                {/* Placeholder for skin care image */}
                <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-lumi-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="text-sm">매끈한 피부</p>
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