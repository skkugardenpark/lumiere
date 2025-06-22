'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BrightnessInfo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="section-padding bg-lumi-ivory">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="생기있는 피부"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lumi-olive font-medium text-lg mb-4">생기있는 피부</p>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-lumi-charcoal mb-8 leading-tight">
                BRIGHTNESS
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lumi-charcoal leading-relaxed">
                기미, 흑자, 후천성 오타양모반(ABNOM),
                <br />
                늘어난 혈관이 혼재해 있는 피부
              </p>

              <p className="text-lumi-charcoal leading-relaxed">
                이렇게 다양한 원인의 색소 문제들을 짚어내어
                <br />
                생기 있는 피부로 톤업만 해도 새로운 하루를
                <br />
                경험할 수 있습니다.
              </p>
            </motion.div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="font-playfair text-xl font-semibold text-lumi-charcoal mb-6">
                BRIGHTNESS 치료 특징
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumi-olive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lumi-charcoal">개인별 색소 원인 정확한 진단</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumi-olive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lumi-charcoal">단계별 맞춤 치료 계획 수립</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumi-olive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lumi-charcoal">안전하고 효과적인 레이저 치료</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumi-olive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lumi-charcoal">사후 관리 및 재발 방지</span>
                </li>
              </ul>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <button className="btn-primary">
                BRIGHTNESS 상담 예약하기
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrightnessInfo 