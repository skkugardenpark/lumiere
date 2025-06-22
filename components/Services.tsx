'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const services = [
    {
      id: 'smoothness',
      title: 'SMOOTHNESS',
      subtitle: '매끄러운 피부',
      description: '여드름, 흉터는 깊이와 정도, 단계에 따라 시술 방법이 달라져야 치료 효과가 나아집니다.',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/smoothness',
    },
    {
      id: 'wellaging',
      title: 'WELL-AGING',
      subtitle: '건강한 노화',
      description: '나이가 들어가며 받아 타면, 검룩한 시술로 꾸준히 밸런스를 찾아 나아갑니다.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/well-aging',
    },
    {
      id: 'rebalancing',
      title: 'REBALANCING',
      subtitle: '균형 회복',
      description: '바쁜 일상 속 목덜 뒤엉스까리 무너진 때, 편히 휴식하며 도움을 받으실 수 있어요.',
      image: 'https://images.unsplash.com/photo-1570554886111-e80fcac93dd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/re-balancing',
    },
    {
      id: 'brightness',
      title: 'BRIGHTNESS',
      subtitle: '화사한 피부',
      description: '다양한 화이트닝 색소 치료, 새벽 잇는 피부를 경험할 수 있습니다.',
      image: 'https://images.unsplash.com/photo-1621292999280-efcb5d3b3420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/brightness',
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
    <section id="services" className="section-padding bg-lumi-ivory">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-lumi-charcoal mb-4">
            DE NOVO
          </h2>
          <p className="text-lg text-lumi-olive max-w-2xl mx-auto">
            새로운 시작, 건강한 아름다움을 위한 4가지 핵심 솔루션
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover"
            >
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <h3 className="font-playfair text-2xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </motion.div>
                </div>

                <div className="absolute inset-0 bg-lumi-olive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <Link href={service.href} className="block w-full bg-lumi-mint text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-lumi-mint/80 transition-colors text-center">
                  자세히 보기
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lumi-olive mb-6">
            개인별 맞춤 상담을 통해 최적의 치료 계획을 제안해드립니다
          </p>
          <button className="btn-primary">
            무료 상담 신청하기
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 