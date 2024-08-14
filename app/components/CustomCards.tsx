"use client"

import React from 'react';
import { MdLogin } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card 
          title="Register Account" 
          description="To register, visit our website, fill out your name, email, and password." 
          icon={<MdLogin className="w-6 h-6 text-[#C20E4D]" />}
        />
        <Card 
          title="Deposit Amount" 
          description="To deposit funds, log in to your account and navigate to the deposit section." 
          icon={<RiLuggageDepositFill className="w-6 h-6 text-[#C20E4D]" />}
        />
        <div className="flex justify-center">
          <Card 
            title="Deposit Amount" 
            description="To deposit funds, log in to your account and navigate to the deposit section." 
            icon={<BsCurrencyBitcoin className="w-6 h-6 text-[#C20E4D]" />}
          />
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <motion.div
      className="relative rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#F54180] via-[#C20E4D] to-[#920B3A] p-8 text-white"
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-[#1a0033] opacity-50"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#ffffff] mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
