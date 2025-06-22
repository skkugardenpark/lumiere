'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const BrightnessCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="section-padding bg-lumi-ivory">
      <div className="container-custom">
        {/* Main CTA */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Background with clinic image */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="px-8 py-16 lg:py-24">
              {/* Brand Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center mb-8"
              >
                <Image
                  src="/lumiere.png"
                  alt="루미에르 더마 로고"
                  width={180}
                  height={50}
                  className="h-12 w-auto mx-auto filter brightness-0 invert"
                />
              </motion.div>

              {/* Main Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <p className="text-white text-lg lg:text-xl mb-4">최고 장비를 사용하는</p>
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  피부과 전문의의 1:1 맞춤형 시술
                </h2>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="bg-lumi-mint text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-lumi-mint/80 transition-colors shadow-lg">
                  예약 문의하기 →
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div>
              <h3 className="font-playfair font-semibold text-lumi-charcoal mb-2">전화 상담</h3>
                              <p className="text-lumi-olive font-medium">02-1234-5678</p>
            </div>

            {/* KakaoTalk */}
            <div>
              <h3 className="font-playfair font-semibold text-lumi-charcoal mb-2">카카오톡 상담</h3>
                                <p className="text-lumi-olive font-medium">@루미에르더마</p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-playfair font-semibold text-lumi-charcoal mb-2">진료시간</h3>
              <p className="text-lumi-olive text-sm">
                평일 10:00-19:00
                <br />
                토요일 10:00-14:00
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="bg-lumi-rose/50 rounded-xl p-6">
            <p className="text-lumi-olive text-sm leading-relaxed">
                            <strong className="text-lumi-charcoal">상호명:</strong> 루미에르 더마 | 
                <strong className="text-lumi-charcoal"> 대표자:</strong> 김세영 | 
                <strong className="text-lumi-charcoal"> 사업자번호:</strong> 123-45-67890
              <br />
              <strong className="text-lumi-charcoal">TEL:</strong> 02-1234-5678 | 
              <strong className="text-lumi-charcoal"> FAX:</strong> 02-1234-5679 | 
              <strong className="text-lumi-charcoal"> EMAIL:</strong> info@lumiere-derm.co.kr
              <br />
              <strong className="text-lumi-charcoal">주소:</strong> 서울특별시 강남구 테헤란로 123, 7층
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BrightnessCTA 