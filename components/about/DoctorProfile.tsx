'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, GraduationCap, Building2, Stethoscope } from 'lucide-react'

const DoctorProfile = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const qualifications = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      text: '서울대학교 의학대학원 의학과 수석 졸업'
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      text: '서울대학교 병원 인턴 수료'
    },
    {
      icon: <Stethoscope className="w-5 h-5" />,
      text: '서울대학교 병원 피부과 전문의'
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: '전 마포공덕 에스앤유피부과 원장'
    }
  ]

  return (
    <section className="section-padding bg-lumi-ivory">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="김세영 대표원장"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Doctor Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-lumi-olive rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-playfair font-bold text-lumi-charcoal text-sm">
                    김세영 대표원장
                  </h4>
                  <p className="text-xs text-lumi-olive">피부과 전문의</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Header */}
            <div className="mb-12">
              <p className="text-lumi-olive font-medium mb-4">김세영 대표원장</p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-lumi-charcoal mb-6 leading-tight">
                QUALIFIED
                <br />
                DERMATOLOGIST
              </h2>
            </div>

            {/* Qualifications */}
            <div className="space-y-6 mb-12">
              {qualifications.map((qualification, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-lumi-olive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="text-lumi-olive">{qualification.icon}</div>
                  </div>
                  <p className="text-lumi-charcoal leading-relaxed text-lg">
                    {qualification.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-lumi-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lumi-olive text-2xl">"</span>
                </div>
                <div>
                  <p className="text-lumi-charcoal leading-relaxed mb-4 italic">
                    "환자 한 분 한 분의 고유한 아름다움을 찾아드리는 것이 
                    저의 사명입니다. 과학적 근거에 바탕한 정확한 진단과 
                    안전한 시술로 여러분의 새로운 시작을 함께하겠습니다."
                  </p>
                  <div className="text-right">
                    <p className="text-lumi-olive font-medium">김세영 원장</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8"
            >
              <button className="btn-primary w-full lg:w-auto">
                전문의 상담 예약하기
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DoctorProfile 