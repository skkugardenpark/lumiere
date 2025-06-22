'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ReBalancingCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 leading-tight">
              엄선된 장비를 사용하는<br />
              <span className="text-primary">피부과 전문의의</span><br />
              1:1 맞춤형 시술
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              몸과 마음의 균형을 되찾고<br />
              건강한 일상을 위한 전문적인 치료를 받아보세요.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="tel:02-1234-5678"
                className="group bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-all duration-300 flex items-center space-x-2"
              >
                <span>예약 문의하기</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="http://pf.kakao.com/_TxfxeG"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-yellow-400 text-gray-800 px-8 py-4 rounded-full font-medium text-lg hover:bg-yellow-300 transition-all duration-300 flex items-center space-x-2"
              >
                <span>카카오톡 상담</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">전화 문의</h3>
                  <p className="text-gray-600">02-1234-5678</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">카카오톡</h3>
                  <p className="text-gray-600">@루미에르더마</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">진료시간</h3>
                <div className="text-gray-600 space-y-1">
                  <p>평일: 10:00 - 19:00</p>
                  <p>토요일: 10:00 - 14:00</p>
                  <p className="text-primary font-medium">일요일, 공휴일 휴진</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 