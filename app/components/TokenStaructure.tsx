"use client"

import { FaEthereum, FaBitcoin } from "react-icons/fa";
import { SiBinance, SiRipple, SiTether } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OurToken() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col md:flex-row bg-gradient-to-br from-[#F54180] via-[#C20E4D] to-[#920B3A] pt-6 text-white rounded-none overflow-hidden shadow-lg transition-transform duration-500 hover:shadow-2xl hover:scale-[1.05]"
    >
      <div className="p-8 md:w-1/2">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-extrabold mb-4"
        >
          Token Structure
        </motion.h2>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6"
        >
          Our token structure ensures transparency, fairness, and value. Join us
          in revolutionizing the digital economy.
        </motion.p>
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-2xl font-semibold mb-4"
        >
          We accept:
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          {[
            { Icon: FaBitcoin, name: "Bitcoin" },
            { Icon: FaEthereum, name: "Ethereum" },
            { Icon: SiTether, name: "USD Tether" },
            { Icon: SiRipple, name: "Ripple" },
            { Icon: SiBinance, name: "BNB" },
          ].map(({ Icon, name }) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={name}
              className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 transition-colors duration-300 hover:bg-white hover:text-[#F54180]"
            >
              <Icon className="w-6 h-6" />
              <span>{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="p-8 md:w-1/2 flex flex-col justify-between relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.7 }}
          className="grid grid-cols-3 gap-4 mb-3"
        >
          {["PRE-SALE", "SOFT CAP", "BONUS"].map((item) => (
            <div key={item} className="text-center relative">
              <h3 className="font-semibold mb-7">{item}</h3>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
                <div className="w-1 h-6 bg-white"></div>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "70%" } : {}}
          transition={{ delay: 1.3, duration: 1.2, ease: "easeOut" }}
          className="mb-6 relative"
        >
          <div className="h-4 bg-white/20 rounded-none overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-1000 ease-out"
            ></div>
          </div>
          <div
            className="absolute top-0 w-full h-1 bg-white/20"
            style={{ left: 0, transform: "translateY(-100%)" }}
          ></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="text-center"
        >
          <p className="text-2xl font-bold mb-2">70% target raised</p>
          <p className="text-lg">1 ETH = $1000 = 3177.38 CIC</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
