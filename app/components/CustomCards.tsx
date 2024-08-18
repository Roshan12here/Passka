"use client";

import React, { useRef } from 'react';
import { MdLogin } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { motion, useInView } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatedCard 
          title="Register Account" 
          description="To register, visit our website, fill out your name, email, and password." 
          icon={<MdLogin className="w-8 h-8 text-[#331029]" />}
        />
        <AnimatedCard 
          title="Deposit Amount" 
          description="To deposit funds, log in to your account and navigate to the deposit section." 
          icon={<RiLuggageDepositFill className="w-8 h-8 text-[#331029]" />}
        />
        <AnimatedCard 
          title="Bitcoin Investment" 
          description="To start investing, select your desired amount and proceed with the investment options." 
          icon={<BsCurrencyBitcoin className="w-8 h-8 text-[#331029]" />}
        />
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AnimatedCard = ({ title, description, icon }: CardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#000000] via-[#331029] to-[#310413] p-8 text-white shadow-lg"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-[#1a0033] opacity-60"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6">
          {icon}
        </div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </motion.div>
  );
}
