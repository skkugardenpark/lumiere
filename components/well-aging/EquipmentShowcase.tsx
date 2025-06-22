'use client'

import { motion } from 'framer-motion'

export default function EquipmentShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-stone-100 to-stone-200">
          {/* Equipment Image Container */}
          <div className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center p-8">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 0 0-18 0-20s2 0 2 0 18 0 20 0 0 2 0 2 0 18 0 20-2 0-2 0-18 0-20 0 0-2 0-2z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Equipment Device */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 flex items-center justify-center"
            >
              {/* Device representation */}
              <div className="relative">
                {/* Main device body */}
                <div className="w-64 h-80 bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl shadow-2xl relative overflow-hidden">
                  {/* Device screen */}
                  <div className="absolute top-8 left-8 right-8 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-blue-400 text-xs font-mono">WELLCOMET®</div>
                  </div>
                  
                  {/* Device controls */}
                  <div className="absolute top-32 left-8 right-8 space-y-3">
                    <div className="h-3 bg-gray-400 rounded-full"></div>
                    <div className="h-3 bg-gray-400 rounded-full w-3/4"></div>
                    <div className="h-3 bg-gray-400 rounded-full w-1/2"></div>
                  </div>
                  
                  {/* Device branding */}
                  <div className="absolute bottom-16 left-8 right-8 text-center">
                    <div className="text-gray-600 text-sm font-bold">LDM</div>
                  </div>
                  
                  {/* Wheels */}
                  <div className="absolute -bottom-4 left-4 w-8 h-8 bg-gray-400 rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-4 right-4 w-8 h-8 bg-gray-400 rounded-full shadow-lg"></div>
                </div>
              </div>
            </motion.div>

            {/* Content Overlay */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-right max-w-md">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-sm text-primary font-medium mb-2 tracking-wider">
                  WELLCOMET
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
                  노화 맞 맞춤식 피부의 근본적인 솔루션
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  LDM-MED Tri
                </h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 