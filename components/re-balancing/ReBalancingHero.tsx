'use client'

import { motion } from 'framer-motion'

export default function ReBalancingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-stone-100 via-amber-50 to-yellow-100 relative">
          {/* Soft texture overlay */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='15' cy='15' r='4'/%3E%3Ccircle cx='45' cy='30' r='5'/%3E%3Ccircle cx='75' cy='15' r='3'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3Ccircle cx='60' cy='45' r='3'/%3E%3Ccircle cx='80' cy='80' r='4'/%3E%3Ccircle cx='20' cy='85' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          {/* Gentle light effect */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20" style={{
              background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.6) 0%, transparent 70%)',
            }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h1 className="text-6xl md:text-8xl font-light text-gray-700 mb-8 tracking-wider drop-shadow-sm">
            RE:BALANCING
          </h1>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
} 