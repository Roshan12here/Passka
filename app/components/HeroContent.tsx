"use client"

import { motion } from 'framer-motion';
import { ArrowRight, ArrowRightCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Component() {
  const router = useRouter();

  return (
    <section className="w-full min-h-screen flex items-center justify-center text-white p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ lineHeight: 1.2 }}
        >
          Step into the Future of Finance with&nbsp;
          <motion.span
            style={{
              background: 'linear-gradient(to right, #F54180, #C20E4D, #920B3A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            PassKash Token
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 opacity-90 tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Empowering the Caribbean with innovative financial solutions through PassKashToken (PKT) on the BNB.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <motion.button
            onClick={() => router.push('https://passkash.vip/public/login')}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#C20E4D] rounded-full font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C20E4D] flex items-center gap-2 sm:gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
          <motion.button
            onClick={() => router.push('https://read.passkash.vip/whitepaper')}
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg bg-[#C20E4D] text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-[#C20E4D] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white flex items-center gap-2 sm:gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read WhitePaper
            <ArrowRightCircle className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
