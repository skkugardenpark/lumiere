'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Certification = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const certificates = [
    {
      title: '허 증',
      subtitle: '서울특별시 의사면허증',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: '위 학위는 본교 의학대학원 의학과에서 수학하는 자 과정을 통과한 학위이며 의료기관 상당과 부족을 수여함.'
    },
    {
      title: '상 장',
      subtitle: '우수 의료진 표창',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: '김세영 전기 학술수여'
    },
    {
      title: '동창회원증',
      subtitle: '서울대학교 의과대학',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: '서울대학교의과대학동창회 최고원장 경영의 회원 입회원장을 증명함.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="certification" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-lumi-charcoal mb-6">
            CERTIFICATION
          </h2>
          <p className="text-xl lg:text-2xl text-lumi-olive font-medium mb-8">
                            루미에르 더마는 결과로 증명합니다.
          </p>
          <button className="text-lumi-olive font-medium text-lg hover:text-lumi-olive/80 transition-colors">
            예약 문의하기 →
          </button>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              {/* Certificate Image */}
              <div className="relative mb-6">
                <div className="bg-lumi-rose rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[3/4] bg-white rounded-lg shadow-inner overflow-hidden">
                    <div className="h-full flex flex-col items-center justify-center p-6">
                      {/* Certificate Header */}
                      <div className="w-16 h-16 bg-lumi-olive/20 rounded-full flex items-center justify-center mb-6">
                        <div className="w-8 h-8 bg-lumi-olive rounded-full"></div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-playfair text-3xl font-bold text-lumi-charcoal mb-4 text-center">
                        {cert.title}
                      </h3>
                      
                      {/* Subtitle */}
                      <p className="text-lumi-olive text-center mb-6 font-medium">
                        {cert.subtitle}
                      </p>
                      
                      {/* Profile Image Placeholder */}
                      {index === 0 && (
                        <div className="w-20 h-24 bg-lumi-olive/30 rounded-lg mb-4"></div>
                      )}
                      
                      {/* Description */}
                      <p className="text-xs text-lumi-olive text-center leading-relaxed">
                        {cert.description}
                      </p>
                      
                      {/* Decorative Elements */}
                      <div className="mt-6 flex space-x-2">
                        <div className="w-2 h-2 bg-lumi-olive/50 rounded-full"></div>
                        <div className="w-2 h-2 bg-lumi-olive/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-lumi-olive/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-lumi-ivory rounded-2xl p-8 lg:p-12">
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-lumi-charcoal mb-4">
              믿을 수 있는 전문성
            </h3>
            <p className="text-lumi-olive mb-8 max-w-2xl mx-auto">
              정확한 진단과 안전한 시술을 위해 지속적으로 연구하고 
              <br />
              검증된 치료 방법만을 사용합니다.
            </p>
            <button className="btn-primary">
              상담 예약하기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certification 