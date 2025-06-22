'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SmoothnessProgram() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const programs = [
    {
      title: "피지관리",
      description: "예민하지 않은 피부, 근심 없이 여드름 SOS 피부 상태에 따른 스케줄링",
      details: "피지분비 특성 마스크팩에 압출, 염증조절, 진정",
      package: "9+1 패키지",
      bgColor: "bg-gradient-to-r from-amber-100 to-orange-100"
    },
    {
      title: "피부결 + 피지관리",
      description: "주변 피부의 함께 있는 경우 독립 진정관리 LDM 시술, 염증조절",
      package: "9+1 패키지",
      bgColor: "bg-gradient-to-r from-green-100 to-teal-100"
    },
    {
      title: "색소침착 + 피지관리",
      description: "색소침착을 함께 안아주는 상효 때 피부 상태에 따른 스케줄링과 압출, 염증조절, 진정 미백관리",
      package: "8+2 패키지",
      bgColor: "bg-gradient-to-r from-purple-100 to-pink-100"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programs.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length)
  }

  return (
    <section className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            필요에 따라 선택하는 <span className="text-lumi-charcoal">피지관리</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Program Slider */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <motion.div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 ${program.bgColor} p-12 md:p-16`}
                >
                  <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="inline-block bg-lumi-charcoal text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                        피지관리 프로그램
                      </div>
                      <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {program.description}
                      </p>
                      {program.details && (
                        <p className="text-gray-700 font-medium mb-8">
                          {program.details}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="bg-white rounded-lg p-6 shadow-md">
                        <div className="flex items-center justify-center space-x-4">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-xl font-semibold text-gray-800">
                            {program.package}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-lumi-charcoal' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}