"use client"

import { motion } from 'framer-motion';
import { ArrowRight, ArrowRightCircle } from 'lucide-react';

export default function Component() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#000000] text-white p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto text-center">
      <motion.h1 
  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" 
  initial={{ opacity: 0, rotateX: -90 }} 
  animate={{ opacity: 1, rotateX: 0 }} 
  transition={{ duration: 0.8, ease: "easeOut" }} 
>
  Welcome to  

  <span 
    style={{
      background: 'linear-gradient(to right, #F54180, #C20E4D, #920B3A)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
       PassKash
  </span>
</motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Embrace innovation and explore the possibilities of tomorrow, today.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.button 
            className="px-6 py-3 bg-white text-[#000000] rounded-full font-semibold text-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
          <motion.button 
            className="px-6 py-3 border-2 border-white rounded-full font-semibold text-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-[#000000] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <ArrowRightCircle className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}