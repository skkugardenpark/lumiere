'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ThreeStepTreatment = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const treatments = [
    {
      layer: '표면층',
      title: '표면층',
      description: '듀오틱 2주 유지\n먹지로 만들어 한번에 제거\n2주째 증간층 색소 평가\n진정연고 1주일, 미백연고 처방',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.09.21 2.09.21 3 0 5.16-1 9-5.45 9-11V7l-10-5z" />
        </svg>
      ),
      equipment: '흑자, 잡티, 주근깨\nPICO 532\n6개월 간격'
    },
    {
      layer: '중간층',
      title: '중간층',
      description: '시간을 두고 서서히\n내 몸의 새로가 업허도록\n자극을 주지 않는 것이 포인트',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      equipment: '기미, 색소침착\n레이저토닝 + 멀솔관리\n10회 이상'
    },
    {
      layer: '깊은층',
      title: '깊은층',
      description: '조금씩 작게 쪼개기\n층간층 색소 성취 필수\n따라서 복은극국으\n진정연고 2주일, 세안 가능',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      equipment: '후천성양상모반오타양반\nPICO 1064\n2개월 간격'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="section-padding bg-lumi-rose">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-lumi-charcoal mb-4">
            3단계 색소치료
          </h2>
          <div className="w-16 h-1 bg-lumi-olive"></div>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-8">
          <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
            <ChevronLeft className="w-6 h-6 text-lumi-charcoal" />
          </button>
          <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
            <ChevronRight className="w-6 h-6 text-lumi-charcoal" />
          </button>
        </div>

        {/* Treatment Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                {/* Layer Title */}
                <h3 className="font-playfair text-2xl font-bold text-lumi-charcoal mb-6">
                  {treatment.title}
                </h3>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-lumi-charcoal leading-relaxed whitespace-pre-line text-sm">
                    {treatment.description}
                  </p>
                </div>

                {/* Icon Circle */}
                <div className="w-24 h-24 bg-soft-brown rounded-full flex items-center justify-center mx-auto mb-8">
                  {treatment.icon}
                </div>

                {/* Equipment Info */}
                <div className="bg-lumi-ivory rounded-xl p-6">
                  <p className="text-lumi-charcoal font-medium whitespace-pre-line text-sm leading-relaxed">
                    {treatment.equipment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center mt-12 space-x-3"
        >
          <div className="w-3 h-3 bg-lumi-olive rounded-full"></div>
          <div className="w-3 h-3 bg-lumi-olive/30 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default ThreeStepTreatment 