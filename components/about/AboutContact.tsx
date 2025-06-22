'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Phone, MapPin, MessageCircle } from 'lucide-react'

const AboutContact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-text-primary mb-6">
            CONTACT
          </h2>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-cream rounded-2xl overflow-hidden shadow-lg">
            <div className="h-64 lg:h-96 bg-gradient-to-br from-olive/20 to-soft-brown/20 flex items-center justify-center relative">
              {/* Map Placeholder */}
              <div className="text-center">
                <MapPin className="w-16 h-16 text-olive mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-text-primary mb-2">
                  LUMIÈRE DERM
                </h3>
                <p className="text-text-accent">
                  서울특별시 강남구 테헤란로 123 루미에르 빌딩 7층
                </p>
              </div>
              
              {/* Map Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === 7 ? 'bg-olive' : 'bg-olive/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* Left Column - Contact Details */}
          <div className="space-y-8">
            {/* 진료시간 */}
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-text-primary mb-6">
                진료시간
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-text-primary">월 목 금</span>
                  <span className="text-text-accent">AM 10:00 - PM 07:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-text-primary">화 요 일</span>
                  <span className="text-text-accent">AM 11:00 - PM 08:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-text-primary">토 요 일</span>
                  <span className="text-text-accent">AM 10:00 - PM 02:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-olive/20">
                  <span className="text-olive font-medium">휴 게 시 간</span>
                  <span className="text-olive">PM 01:00 - PM 02:00 (평일만)</span>
                </div>
              </div>
            </div>

            {/* 진료휴무 */}
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-text-primary mb-6">
                진료휴무
              </h3>
              <p className="text-text-accent">수요일, 일요일, 공휴일</p>
            </div>
          </div>

          {/* Right Column - Location & Contact */}
          <div className="space-y-8">
            {/* 오시는길 */}
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-text-primary mb-6">
                오시는길
              </h3>
              <p className="text-text-accent leading-relaxed">
                서울특별시 강남구 테헤란로 123 루미에르 빌딩 7층
                <br />
                지하철 2호선 강남역 3번 출구 도보 5분
              </p>
            </div>

            {/* 예약문의 */}
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-text-primary mb-6">
                예약문의
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-olive" />
                  <span className="text-text-primary font-medium">02-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-olive" />
                  <span className="text-text-primary">카톡채널 @루미에르더마</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center bg-cream rounded-2xl p-8 lg:p-12"
        >
          <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-text-primary mb-4">
            엄선된 장비를 사용하는
            <br />
            피부과 전문의의 1:1 맞춤형 시술
          </h3>
          <p className="text-text-accent mb-8 max-w-xl mx-auto">
            정확한 진단과 개인별 맞춤 치료로
            <br />
            건강하고 아름다운 피부를 만들어드립니다
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary">
              예약 문의하기 →
            </button>
            <button className="btn-secondary">
              카카오톡 상담
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutContact 