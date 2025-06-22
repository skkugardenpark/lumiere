'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'DE NOVO', href: '/about' },
    { name: 'BRIGHTNESS', href: '/brightness' },
    { name: 'SMOOTHNESS', href: '/smoothness' },
    { name: 'WELL-AGING', href: '/well-aging' },
    { name: 'RE-BALANCING', href: '/re-balancing' },
  ]

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Youtube size={20} />, href: '#', label: 'Youtube' },
  ]



  return (
    <footer className="bg-lumi-charcoal text-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <Image
                  src="/lumiere.png"
                  alt="루미에르 더마 로고"
                  width={160}
                  height={45}
                  className="h-11 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                과학과 감성의 완벽한 균형으로
                <br />
                건강하고 아름다운 피부를 만들어드리는
                <br />
                전문 피부과 클리닉입니다.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-lumi-olive/20 rounded-full flex items-center justify-center text-lumi-olive hover:bg-lumi-olive hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-playfair text-lg font-semibold mb-6">서비스</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-lumi-olive transition-colors text-sm block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-playfair text-lg font-semibold mb-6">연락처</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-lumi-olive mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <div>02-1234-5678</div>
                    <div className="text-lumi-olive">상담 가능</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-lumi-olive mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <div>서울특별시 강남구 테헤란로 123</div>
                    <div>루미에르 빌딩 7층</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-lumi-olive mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">info@lumiere-derm.co.kr</div>
                </li>
              </ul>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-playfair text-lg font-semibold mb-6">진료시간</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex justify-between">
                  <span>월 ~ 금</span>
                  <span>10:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>토요일</span>
                  <span>10:00 - 14:00</span>
                </li>
                <li className="flex justify-between text-lumi-olive">
                  <span>점심시간</span>
                  <span>13:00 - 14:00</span>
                </li>
                <li className="text-xs text-gray-400 pt-2">
                  * 일요일, 공휴일 휴진
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-700 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                <p>루미에르 더마 | 대표원장: 김세영 | 사업자등록번호: 123-45-67890</p>
                <p className="mt-1">주소: 서울특별시 강남구 테헤란로 123, 7층</p>
              </div>
              <div className="text-sm text-gray-400">
                © 2024 LUMIÈRE DERM. All rights reserved.
              </div>
            </div>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 w-12 h-12 bg-lumi-olive rounded-full flex items-center justify-center text-white shadow-lg hover:bg-opacity-90 transition-colors z-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer 