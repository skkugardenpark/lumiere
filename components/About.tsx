'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Users, Heart, Shield } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: '전문 의료진',
      description: '서울대학교 의학대학원 의학과 수석 졸업',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '1:1 맞춤 상담',
      description: '개인별 피부 상태를 정확히 진단하고 맞춤 치료',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '따뜻한 마음',
      description: '환자 중심의 세심하고 따뜻한 진료',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '안전한 시술',
      description: '최첨단 장비와 검증된 시술로 안전하게',
    },
  ]

  const stats = [
    { number: '10+', label: '년 경력' },
    { number: '5000+', label: '만족 고객' },
    { number: '95%', label: '재방문율' },
    { number: '24/7', label: '응급 상담' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-lumi-charcoal mb-6">
              FIND YOUR
              <br />
              ORIGINALITY
            </h2>
            <div className="space-y-6 text-lumi-charcoal">
              <p className="text-lg leading-relaxed">
                바쁜 일상 속 나에게 투자하는 시간,
                <br />
                나에게 집중하는 시간은 본연의 나를 찾아가는 과정입니다.
              </p>
              <p className="leading-relaxed">
                소중한 당신의 새로운 나, 새로운 함몰, 새로운 하루를 만나보세요.
                <br />
                루미에르 더마가 그 여정을 함께 하겠습니다.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/about'}
              className="btn-secondary mt-8"
            >
              View more →
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-lumi-olive rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-playfair font-bold text-lumi-charcoal mb-1">
                  QUALIFIED DERMATOLOGIST
                </h3>
                <p className="text-sm text-lumi-olive">김세영 대표원장</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-lumi-olive/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lumi-olive/20 transition-colors">
                <div className="text-lumi-olive">{feature.icon}</div>
              </div>
              <h3 className="font-playfair font-semibold text-lumi-charcoal mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-lumi-olive leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-olive/5 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
                className="text-center"
              >
                <div className="font-playfair text-3xl lg:text-4xl font-bold text-lumi-olive mb-2">
                  {stat.number}
                </div>
                <div className="text-lumi-olive text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 