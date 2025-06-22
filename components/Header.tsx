'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  forceBlackText?: boolean
  forceLogo?: string
  logoSize?: { width: number; height: number }
}

const Header = ({ 
  forceBlackText = false, 
  forceLogo,
  logoSize 
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'DE NOVO', href: '/about', isPage: true },
    { name: 'BRIGHTNESS', href: '/brightness', isPage: true },
    { name: 'SMOOTHNESS', href: '/smoothness', isPage: true },
    { name: 'WELL-AGING', href: '/well-aging', isPage: true },
    { name: 'RE-BALANCING', href: '/re-balancing', isPage: true },
  ]

  const handleNavClick = (href: string, isPage: boolean) => {
    if (isPage) {
      window.location.href = href
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => window.location.href = '/'}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <Image
              src={forceLogo || (isScrolled ? "/lumiere.png" : "/logo2.png")}
              alt="루미에르 더마 로고"
              width={logoSize?.width || 260}
              height={logoSize?.height || 70}
              priority
              className={`${logoSize ? 'h-auto' : 'h-16'} w-auto transition-all duration-300`}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.isPage)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  forceBlackText || isScrolled 
                    ? 'text-lumi-charcoal hover:text-lumi-olive' 
                    : 'text-white hover:text-lumi-olive'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lumi-olive transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('#contact', false)}
              className="btn-primary text-sm"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              forceBlackText || isScrolled 
                ? 'text-lumi-charcoal hover:text-lumi-olive' 
                : 'text-white hover:text-lumi-olive'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
        >
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.isPage)}
                  className="text-left text-lumi-charcoal hover:text-lumi-olive transition-colors duration-200 py-2"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact', false)}
                className="btn-primary text-sm w-full"
              >
                CONTACT
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header 