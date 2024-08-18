"use client";

import { motion } from 'framer-motion';
import { SmartphoneIcon, SunIcon, CreditCardIcon, BitcoinIcon, ShoppingBagIcon } from 'lucide-react';
import { MdSecurity } from 'react-icons/md';
import { FaGavel, FaHandshake } from 'react-icons/fa';

const features = [
  {
    title: 'Mobile Payment Make Easy',
    description: 'Mobile payment has revolutionized the way we transact, offering convenience and efficiency.',
    icon: SmartphoneIcon,
  },
  {
    title: 'Sustainability Initiatives',
    description: 'Partner with solar energy providers to support projects in the Caribbean, funded partially through the PassCash platform or token.',
    icon: SunIcon,
  },
  {
    title: 'Virtual Debit Cards',
    description: 'Ensure the virtual cards are accepted globally, providing users with the flexibility to shop anywhere online.',
    icon: CreditCardIcon,
  },
  {
    title: 'Cryptocurrency Integration',
    description: 'Enable users to easily convert between cryptocurrencies and fiat currencies, making crypto more accessible.',
    icon: BitcoinIcon,
  },
  {
    title: 'Merchant Solutions',
    description: 'Offer point-of-sale (POS) systems that integrate seamlessly with the PassCash platform, enabling merchants to accept both fiat and crypto payments',
    icon: ShoppingBagIcon,
  },
  {
    title: 'Security and Privacy',
    description: 'Explore decentralized identity solutions that allow users to control their personal information and enhance privacy.',
    icon: MdSecurity,
  },
  {
    title: 'Governance',
    description: 'A decentralized governance system where token holders can vote on important decisions, such as platform upgrades, new features, or partnerships',
    icon: FaGavel,
  },
  {
    title: 'Partnerships and Integrations',
    description: 'Partner with banks and other financial institutions to provide seamless integration with traditional financial services.',
    icon: FaHandshake,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Component() {
  return (
    <div id='features' className=" min-h-screen bg-gray-900 text-white p-8">
        <h1
className="text-3xl md:text-5xl text-center font-bold text-[#ffffff] mb-8"
        >
Our Features
        </h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className=" rounded-lg p-6 flex bg-gradient-to-br from-[#000000] via-[#331029] to-[#310413] flex-col items-start space-y-4 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="absolute right-0 top-0 w-32 h-32  rounded-full -mr-16 -mt-16 opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <feature.icon className="w-12 h-12 text-white" />
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-[#ffffff]">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
