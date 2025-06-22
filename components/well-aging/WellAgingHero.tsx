'use client'

import { motion } from 'framer-motion'

export default function WellAgingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 relative">
          {/* Water droplet texture overlay */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3Ccircle cx='35' cy='25' r='4'/%3E%3Ccircle cx='60' cy='10' r='2'/%3E%3Ccircle cx='25' cy='50' r='3'/%3E%3Ccircle cx='50' cy='35' r='2'/%3E%3Ccircle cx='65' cy='65' r='3'/%3E%3Ccircle cx='15' cy='75' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          {/* Flowing water effect */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
              transform: 'skewX(-15deg)',
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
          <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-wider drop-shadow-lg">
            WELL-AGING
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
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
} 