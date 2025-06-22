'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const EquipmentSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-8">
          <button className="w-12 h-12 bg-cream rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
            <ChevronLeft className="w-6 h-6 text-text-primary" />
          </button>
          <button className="w-12 h-12 bg-cream rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
            <ChevronRight className="w-6 h-6 text-text-primary" />
          </button>
        </div>

        {/* Equipment Display */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* ENVIRON Logo and Text */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              {/* ENVIRON Logo */}
              <div className="text-text-primary">
                <h2 className="font-bold text-4xl lg:text-5xl tracking-wider">
                  ENVIRON
                  <span className="inline-block w-6 h-6 bg-orange-500 ml-2 transform rotate-45"></span>
                </h2>
              </div>
            </div>
            <p className="text-text-accent text-lg italic">
              beautiful skin for a lifetime
            </p>
          </div>

          {/* Equipment Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-lg mx-auto"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="ENVIRON 장비"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Equipment Details Overlay */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="text-left">
                  <div className="text-olive font-bold text-sm mb-1">ENVIRON</div>
                  <div className="text-text-primary text-xs">Professional Equipment</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Equipment Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-playfair text-2xl font-bold text-text-primary mb-4">
                첨단 피부 관리 장비
              </h3>
              <p className="text-text-primary leading-relaxed">
                ENVIRON의 최신 기술로 안전하고 효과적인 피부 치료를 제공합니다.
                <br />
                개인별 피부 상태에 맞춘 맞춤형 관리로 최적의 결과를 경험하세요.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center mt-12 space-x-3"
        >
          <div className="w-3 h-3 bg-olive rounded-full"></div>
          <div className="w-3 h-3 bg-olive/30 rounded-full"></div>
          <div className="w-3 h-3 bg-olive/30 rounded-full"></div>
          <div className="w-3 h-3 bg-olive/30 rounded-full"></div>
          <div className="w-3 h-3 bg-olive/30 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default EquipmentSection 