'use client'

import { motion } from 'framer-motion'

export default function IVTherapy() {
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
              <div className="aspect-[4/5] bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                {/* DE NOVO Branding Image Representation */}
                <div className="w-full h-full bg-gradient-to-br from-stone-800 to-stone-900 relative flex items-center justify-center">
                  <div className="text-center text-white">
                    {/* DE NOVO Logo representation */}
                    <div className="w-24 h-24 mx-auto mb-6 border-2 border-white rounded-full flex items-center justify-center">
                      <div className="text-2xl font-bold">DE</div>
                    </div>
                    <div className="text-3xl font-light tracking-wider mb-2">DE NOVO</div>
                    <div className="text-sm text-gray-300 tracking-widest">DERMATOLOGY</div>
                  </div>
                  
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
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
              RE:BALANCING
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 leading-tight">
              수액 치료
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              {/* Treatment Types */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-800 mb-4">치료 종류</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">항산화 수액</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">태반주사</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">미백 수액</span>
                  </div>
                </div>
              </div>

              <p className="text-lg">
                바쁜 일상 속 몸의 밸런스가 무너질 때<br />
                루미에르 더마를 찾아주세요.<br />
                편히 휴식하며 도움을 받으실 수 있습니다.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">피로 회복과 면역력 강화</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">편안한 환경에서 휴식과 치료</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">개인별 맞춤 수액 처방</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 