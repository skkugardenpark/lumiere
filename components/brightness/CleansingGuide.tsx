'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Droplets, Shield, Heart, CheckCircle } from 'lucide-react'

const CleansingGuide = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const guidelines = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: '당신의 건강한 피부 장벽을 위해'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: '정확한 진단과 치료 계획을 위해'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: '시술 효과를 끌어 올리기 위해'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Main Image */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="피부를 지키는 세안 시설"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-4">
                    피부를 지키는 세안 안내
                  </h2>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-lumi-charcoal mb-6">
                루미에르 더마에서는
              </h3>
              <p className="text-xl text-lumi-charcoal leading-relaxed mb-8">
                얼굴 진료 및 시술 전, 직접 세안해 주세요.
              </p>
            </div>

            {/* Guidelines */}
            <div className="space-y-6">
              {guidelines.map((guideline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-lumi-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-lumi-olive">{guideline.icon}</div>
                  </div>
                  <p className="text-lumi-charcoal leading-relaxed">
                    {guideline.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-lumi-ivory rounded-xl p-6"
            >
              <p className="text-lumi-olive font-medium text-center">
                노력해 주셔서 감사합니다.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Cleansing Features */}
            <div className="bg-lumi-rose rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-lumi-olive/20 rounded-full flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-lumi-olive" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-lumi-charcoal mb-1">
                    전용 세안 시설
                  </h4>
                  <p className="text-lumi-olive text-sm">청결하고 안전한 환경</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-lumi-charcoal">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumi-olive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">개별 세면대로 위생적인 세안</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumi-olive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">순한 클렌징 제품 제공</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumi-olive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">일회용 타월 사용</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumi-olive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">정기적인 시설 소독 관리</span>
                </li>
              </ul>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-lumi-olive/10">
              <h4 className="font-playfair text-lg font-semibold text-lumi-charcoal mb-4">
                세안 시 주의사항
              </h4>
              <ul className="space-y-2 text-sm text-lumi-olive">
                <li>• 미지근한 물로 부드럽게 세안해주세요</li>
                <li>• 강한 문지르기는 피해주세요</li>
                <li>• 메이크업은 완전히 제거해주세요</li>
                <li>• 세안 후 수건으로 가볍게 두드려 말려주세요</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CleansingGuide 