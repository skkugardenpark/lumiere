'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const beforeAfterImages = [
    {
      before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      after: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: '여드름 치료',
      description: '6주 치료 후',
    },
    {
      before: 'https://images.unsplash.com/photo-1570554886111-e80fcac93dd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      after: 'https://images.unsplash.com/photo-1621292999280-efcb5d3b3420?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: '색소 치료',
      description: '8주 치료 후',
    },
    {
      before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      after: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: '주름 개선',
      description: '12주 치료 후',
    },
  ]

  const facilityImages = [
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: '로비',
      description: '편안하고 모던한 대기 공간',
    },
    {
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: '진료실',
      description: '프라이빗한 상담 공간',
    },
    {
      src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: '시술실',
      description: '첨단 장비를 갖춘 시술 공간',
    },
    {
      src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: '회복실',
      description: '시술 후 편안한 휴식 공간',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length)
  }

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-lumi-charcoal mb-4">
            BEFORE & AFTER
          </h2>
          <p className="text-lg text-lumi-olive max-w-2xl mx-auto">
            실제 치료 결과와 루미에르 더마의 치료 환경을 확인해보세요
          </p>
        </motion.div>

        {/* Before & After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative bg-lumi-ivory rounded-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Before Image */}
              <div className="flex-1">
                <div className="text-center mb-4">
                  <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
                    BEFORE
                  </span>
                </div>
                <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={beforeAfterImages[currentSlide].before}
                    alt="Before treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Arrow */}
              <div className="flex lg:flex-col items-center justify-center">
                <div className="w-16 h-16 bg-lumi-olive rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* After Image */}
              <div className="flex-1">
                <div className="text-center mb-4">
                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                    AFTER
                  </span>
                </div>
                <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={beforeAfterImages[currentSlide].after}
                    alt="After treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Slide Info */}
            <div className="text-center mt-8">
              <h3 className="font-playfair text-xl font-semibold text-lumi-charcoal mb-2">
                {beforeAfterImages[currentSlide].title}
              </h3>
              <p className="text-lumi-olive">{beforeAfterImages[currentSlide].description}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="w-5 h-5 text-lumi-charcoal" />
              </button>
              
              <div className="flex space-x-2">
                {beforeAfterImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-lumi-olive' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="w-5 h-5 text-lumi-charcoal" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Facility Images */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-lumi-charcoal text-center mb-12">
            클리닉 시설
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg card-hover">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="font-playfair font-semibold mb-1">{image.title}</h4>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={facilityImages[selectedImage].src}
              alt={facilityImages[selectedImage].title}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg text-white">
              <h4 className="font-playfair text-xl font-semibold mb-2">
                {facilityImages[selectedImage].title}
              </h4>
              <p className="text-gray-200">{facilityImages[selectedImage].description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Gallery 