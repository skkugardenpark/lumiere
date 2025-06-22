'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const testimonials = [
    {
      name: '김○○',
      age: '28세, 직장인',
      treatment: '여드름 치료',
      rating: 5,
      content: '오랫동안 고민이었던 여드름이 6주만에 정말 많이 나아졌어요. 선생님께서 제 피부 상태를 자세히 설명해주시고, 단계별로 치료 계획을 세워주셔서 믿고 따를 수 있었어요. 무엇보다 직원분들이 너무 친절하시고 병원 분위기도 정말 좋아요.',
      date: '2024.02',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: '박○○',
      age: '35세, 주부',
      treatment: '색소 치료',
      rating: 5,
      content: '기미 때문에 스트레스받았는데, 루미에르 더마에서 치료받고 나서 정말 만족해요. 레이저 치료가 무섭다고 생각했는데, 전혀 아프지 않았고 결과도 기대 이상이에요. 지금은 화장도 연하게 하고 다녀요!',
      date: '2024.01',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: '이○○',
      age: '42세, 회사원',
      treatment: '주름 개선',
      rating: 5,
      content: '나이가 들면서 생긴 눈가 주름이 신경쓰였는데, 비수술적인 방법으로도 이렇게 개선될 수 있다는 게 놀라워요. 자연스럽게 젊어 보인다는 말을 많이 들어요. 정기적으로 관리받고 있습니다.',
      date: '2023.12',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: '최○○',
      age: '26세, 대학원생',
      treatment: '종합 케어',
      rating: 5,
      content: '여러 피부 고민이 있었는데 한 번에 종합적으로 상담받을 수 있어서 좋았어요. 무리하게 비싼 시술을 권하지 않으시고, 정말 필요한 것만 추천해주셔서 신뢰가 갔어요. 결과도 만족스럽고 가격도 합리적이에요.',
      date: '2024.03',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    }
  ]

  const stats = [
    { number: '98%', label: '만족도' },
    { number: '4.9', label: '평점 (5점 만점)' },
    { number: '2,500+', label: '후기 수' },
    { number: '95%', label: '재방문율' },
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

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-lumi-ivory">
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
            고객 후기
          </h2>
          <p className="text-lg text-lumi-olive max-w-2xl mx-auto">
            실제 고객분들의 솔직한 후기와 치료 경험을 확인해보세요
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className="text-center bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="font-playfair text-2xl lg:text-3xl font-bold text-lumi-olive mb-2">
                {stat.number}
              </div>
              <div className="text-lumi-olive text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-lumi-olive/10 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-lumi-olive" />
              </div>

              {/* Content */}
              <p className="text-lumi-charcoal leading-relaxed mb-6 text-sm lg:text-base">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-lumi-charcoal text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-lumi-olive text-xs">
                      {testimonial.age} · {testimonial.treatment}
                    </div>
                  </div>
                </div>
                <div className="text-lumi-olive text-xs">
                  {testimonial.date}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-sm"
        >
          <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-lumi-charcoal mb-4">
            당신도 변화를 경험해보세요
          </h3>
          <p className="text-lumi-olive mb-8 max-w-xl mx-auto">
            수많은 고객들이 경험한 만족스러운 결과를
            <br />
            이제 당신도 직접 확인해보세요
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary">
              무료 상담 신청하기
            </button>
            <button className="btn-secondary">
              더 많은 후기 보기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 