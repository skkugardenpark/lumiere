'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-3/4 h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        
        {/* Decorative shelf with objects */}
        <div className="absolute top-20 right-20 hidden lg:block">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-4 gap-6 items-center">
              <div className="w-8 h-8 bg-soft-brown rounded-full"></div>
              <div className="w-6 h-10 bg-text-primary rounded-full"></div>
              <div className="w-10 h-6 bg-olive rounded-lg"></div>
              <div className="w-4 h-12 bg-warm-beige rounded-full"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center mt-6">
              <div className="w-12 h-4 bg-text-accent rounded-lg"></div>
              <div className="w-8 h-8 bg-olive/50 rounded-full"></div>
              <div className="w-6 h-8 bg-soft-brown rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Side lamp */}
        <div className="absolute bottom-32 right-32 hidden lg:block">
          <div className="w-4 h-24 bg-text-primary rounded-full"></div>
          <div className="w-16 h-8 bg-text-primary rounded-full mt-2"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-text-primary mb-8 leading-none"
            >
              DE NOVO
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <p className="text-lg lg:text-xl text-text-accent font-medium">
                새로운 시작, 건강한 아름다움
              </p>
              <p className="text-2xl lg:text-3xl font-playfair text-text-primary mt-2">
                DERMATOLOGY
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-lg text-text-primary leading-relaxed mb-6">
                <strong>DE NOVO</strong>는 라틴어로 '새로운 것으로부터'라는 의미입니다.
              </p>
              <p className="text-text-accent leading-relaxed">
                엄선된 장비를 사용하는 피부과 전문의의 1:1 맞춤형 시술로
                <br />
                당신만의 새로운 아름다움을 시작하세요.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12"
            >
              <button className="btn-primary text-lg px-10 py-4">
                예약 문의하기 →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-accent rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-text-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutHero 