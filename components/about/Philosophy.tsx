'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Philosophy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-lumi-charcoal mb-8 leading-tight">
                FIND YOUR
                <br />
                ORIGINALITY
              </h2>
            </div>

            <div className="space-y-6 text-lumi-charcoal">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg leading-relaxed"
              >
                바쁜 일상 속 나에게 투자하는 시간,
                <br />
                나에게 집중하는 시간은 본연의 나를 찾아가는 과정입니다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="leading-relaxed"
              >
                소중한 당신의 새로운 나, 새로운 맑음, 새로운 하루를 만나보세요.
                <br />
                루미에르 더마가 그 여정을 함께 하겠습니다.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                                  className="bg-lumi-ivory rounded-xl p-6"
              >
                <p className="text-lumi-olive font-medium text-lg">
                  <strong>DE NOVO</strong>는 라틴어로 '새로운 것으로부터'라는 의미입니다.
                </p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <button className="btn-secondary text-lg">
                View more →
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="LUMIÈRE DERM 인테리어"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Decorative elements in the image */}
              <div className="absolute top-6 left-6 flex items-center space-x-4">
                <div className="w-3 h-8 bg-white/80 rounded-full"></div>
                <div className="w-16 h-3 bg-white/60 rounded-full"></div>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-lumi-olive rounded-full"></div>
                  <div className="space-y-1">
                    <div className="w-12 h-2 bg-lumi-charcoal rounded-full"></div>
                    <div className="w-8 h-1 bg-lumi-olive rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-xs"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-lumi-olive/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lumi-olive text-lg">"</span>
                </div>
                <div>
                  <p className="text-sm text-lumi-charcoal leading-relaxed">
                    당신만의 고유한 아름다움을 
                    <br />
                    함께 찾아가겠습니다
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy 