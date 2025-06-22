'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Phone, MapPin, Mail, MessageCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const contactInfo = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: '진료시간',
      details: [
        '월 ~ 금: AM 10:00 - PM 07:00',
        '토 요 일: AM 11:00 - PM 08:00',
        '토 요 일: AM 10:00 - PM 02:00',
        '휴 진 시 간: PM 01:00 - PM 02:00 (평일만)',
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '연락처',
      details: ['02-1234-5678', '카카오톡 상담 가능'],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '위치',
      details: ['서울시 강남구 논현로 123', '지하철 2호선 강남역 3번 출구'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: '진료후기',
      details: ['수술, 알오필, 굵휘일'],
    },
  ]

  return (
    <section id="contact" className="section-padding bg-lumi-ivory">
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
            CONTACT
          </h2>
          <p className="text-lg text-lumi-olive max-w-2xl mx-auto">
            건강한 피부, 아름다운 변화를 위한 첫 걸음을 함께 시작해보세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-lumi-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-lumi-olive">{info.icon}</div>
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lumi-charcoal mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-lumi-olive text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>전화 상담</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>카카오톡 상담</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-xl shadow-sm overflow-hidden h-96 lg:h-full">
              {/* Placeholder for map - replace with actual map integration */}
              <div className="w-full h-full bg-gradient-to-br from-lumi-olive/20 to-lumi-beige/20 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-lumi-olive mx-auto mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-lumi-charcoal mb-2">
                    루미에르 더마
                  </h3>
                  <p className="text-lumi-olive">
                    서울시 강남구 논현로 123
                    <br />
                    지하철 2호선 강남역 3번 출구
                  </p>
                </div>
                
                {/* Map dots indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i === 7 ? 'bg-lumi-olive' : 'bg-lumi-olive/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-lumi-olive rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-playfair font-semibold text-lumi-charcoal">
                    찾아오시는 길
                  </h4>
                  <p className="text-sm text-lumi-olive">강남역 3번 출구 도보 5분</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center bg-white rounded-2xl p-8 lg:p-12 shadow-sm"
        >
          <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-lumi-charcoal mb-4">
            무료 상담 신청하기
          </h3>
          <p className="text-lumi-olive mb-8 max-w-xl mx-auto">
            전문의와의 1:1 상담을 통해 개인별 맞춤 치료 계획을 받아보세요.
            <br />
            온라인으로 간편하게 예약 가능합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary">
              온라인 예약하기
            </button>
            <button className="btn-secondary">
              전화로 예약하기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 