'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Facilities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const facilityImages = [
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: '대기실',
      description: '편안하고 모던한 대기 공간'
    },
    {
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: '상담실',
      description: '프라이빗한 1:1 상담 공간'
    },
    {
      src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: '시술실',
      description: '첨단 장비를 갖춘 시술 공간'
    },
    {
      src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: '회복실',
      description: '시술 후 편안한 휴식 공간'
    },
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
    <section className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            클리닉 시설
          </h2>
          <p className="text-lg text-text-accent max-w-2xl mx-auto">
            편안하고 안전한 환경에서 최고의 치료를 받으실 수 있도록 
            <br />
            세심하게 설계된 공간을 제공합니다
          </p>
        </motion.div>

        {/* Main Large Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="LUMIÈRE DERM 메인 공간"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-white mb-2">
                LUMIÈRE DERM
              </h3>
              <p className="text-white/90">
                자연 채광이 들어오는 따뜻하고 편안한 메인 공간
              </p>
            </div>
          </div>
        </motion.div>

        {/* Facility Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facilityImages.map((facility, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg card-hover">
                <img
                  src={facility.src}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-playfair font-semibold mb-1">{facility.title}</h4>
                  <p className="text-sm text-gray-200">{facility.description}</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-olive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-text-primary font-medium">자세히 보기</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-olive rounded-full"></div>
            </div>
            <h3 className="font-playfair font-semibold text-text-primary mb-2">
              첨단 장비
            </h3>
            <p className="text-text-accent text-sm">
              최신 의료 장비를 통한 정확한 진단과 안전한 치료
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-olive rounded-full"></div>
            </div>
            <h3 className="font-playfair font-semibold text-text-primary mb-2">
              멸균 시설
            </h3>
            <p className="text-text-accent text-sm">
              철저한 소독과 멸균으로 안전하고 청결한 환경 유지
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-olive rounded-full"></div>
            </div>
            <h3 className="font-playfair font-semibold text-text-primary mb-2">
              프라이빗 공간
            </h3>
            <p className="text-text-accent text-sm">
              개인정보 보호와 편안함을 위한 독립적인 치료 공간
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Facilities 