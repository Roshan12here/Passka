"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import { User2Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'

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

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Roadmap', href: '#roadmap' },
    
  ];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const router = useRouter()

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 bg-[#000000] ease-in-out ${
          scrolled ? 'py-3 bg-opacity-95' : 'py-5 bg-opacity-80'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo.png" // Path to your logo image
                alt="PassCash Logo"
                width={160} // Adjust width as needed
                height={60} // Increased height
                className=' cursor-pointer '
              />
            </motion.div>
            <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
  <motion.a
    key={item.label}
    href={item.href}
    className="text-white hover:text-[#C20E4D] transition-colors duration-200 relative group text-lg"
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {item.label}
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
                  onClick={() => router.push('https://passkash.vip/public/login')}
                  className=" bg-[#C20E4D] text-[#ffffff] border-white px-2 py-2 mx-4 hover:bg-[#C20E4D] hover:text-[#ffffff] transition-colors duration-300"
                >
                  <User2Icon className="w-4 h-4 mr-2 text-[#ffffff]" />
                  Login
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
              {navItems.map((item, index) => (
  <motion.a
    key={item.label}
    href={item.href}
    className="text-white hover:text-[#C20E4D] transition-colors duration-200 relative group text-lg"
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {item.label}
    <motion.span
      className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"
      initial={{ width: '0%' }}
      whileHover={{ width: '100%' }}
    />
  </motion.a>
))}

              </div>
              <div className="mt-auto space-y-4">
                <Button
                  variant="outline"
                  className="w-full bg-[#C20E4D] text-[#ffffff] transition-colors duration-300"
                >
                <User2Icon className="w-4 h-4 mr-2 text-[#ffffff]" />
                  Login
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
