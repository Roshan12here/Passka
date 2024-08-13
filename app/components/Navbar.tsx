"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Component() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Features', 'Services', 'About Us', 'Pricing']

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled ? 'py-2 bg-opacity-95' : 'py-4 bg-opacity-80'
        }`}
        style={{ backgroundColor: '#000000' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PassCash
            </motion.div>
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white hover:text-gray-300 transition-colors duration-200 relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                  />
                </motion.a>
              ))}
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-[#000000] transition-colors duration-300"
                >
                  Login
                </Button>
                <Button
                  className="bg-white text-[#000000] hover:bg-gray-200 transition-colors duration-300"
                >
                  Buy Tokens
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="lg:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button variant="ghost" className="text-white" onClick={toggleMobileMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-64 bg-[#000000] z-50 p-4 shadow-lg"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              <Button
                variant="ghost"
                className="self-end text-white mb-8"
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                    onClick={toggleMobileMenu}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="mt-auto space-y-4">
                <Button
                  variant="outline"
                  className="w-full bg-white text-[#000000] transition-colors duration-300"
                >
                  Login
                </Button>
                <Button
                  className="w-full bg-white text-[#000000] hover:bg-gray-200 transition-colors duration-300"
                >
                  Buy Tokens
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}