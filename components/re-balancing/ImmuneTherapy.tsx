'use client'

import { motion } from 'framer-motion'

export default function ImmuneTherapy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm text-primary font-medium mb-4 tracking-wider">
              RE:BALANCING
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 leading-tight">
              면역 주사 치료
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              {/* Test Types */}
              <div className="bg-stone-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-800 mb-4">검사 종류</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">알러지 혈액검사</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">위장 면역 혈액검사</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">유해균 증식 확인 수소호기검사</span>
                  </div>
                </div>
              </div>

              <p className="text-lg">
                혈액검사 이후 꼭 필요한 경우에만 권유하며,<br />
                약 3년의 장기적인 치료가 필요합니다.<br />
                알러지로부터 떠나 편안하고 새로운 하루를<br />
                맞이해 보세요.
              </p>

              {/* Treatment Process */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                  <p className="text-gray-700">정밀 혈액검사를 통한 정확한 진단</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                  <p className="text-gray-700">개인별 맞춤 면역 치료 계획 수립</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                  <p className="text-gray-700">장기적 관리를 통한 근본적 개선</p>
                </div>
              </div>

              {/* Important Notice */}
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-gray-700 font-medium">
                  "체계적인 검사 후 신중한 판단"
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  면역 치료는 반드시 필요한 경우에만 권유하며, 장기간의 치료 계획을 함께 세워나갑니다.
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
                  
                  {/* Medical pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 0c22.091 0 40 17.909 40 40S62.091 80 40 80 0 62.091 0 40 17.909 0 40 0zm0 8c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32S57.673 8 40 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 