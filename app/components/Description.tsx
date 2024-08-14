"use client"

import { motion } from 'framer-motion';
import { FaCheckCircle } from "react-icons/fa";

const MyComponent = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#000000] text-[#ffffff] py-20 px-4 md:px-10 lg:px-20"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-[#C20E4D] mb-8"
        >
          What is PassKash token ICO?
        </motion.h2>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl mb-12"
        >
          The{' '}
          <span className="text-[#C20E4D] font-bold">PassKash Token ICO</span> is
          the initial coin offering (ICO) for the{' '}
          <span className="text-[#C20E4D] font-bold">PKT Token</span>, a
          cryptocurrency developed as part of the PassKash platform. The ICO is
          a fundraising event where investors and users can purchase PKT tokens
          early, often at a discounted price, before the token is listed on
          exchanges. The funds raised through the ICO will be used to develop
          and expand the PassKash platform, which aims to provide innovative
          financial services and solutions, particularly in the Caribbean
          region.
        </motion.p>

        <motion.h2
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-[#C20E4D] mb-8"
        >
          Why is it Needed?
        </motion.h2>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl mb-12"
        >
          The PassCash token ICO is needed for several key reasons that are
          essential to the growth, development, and long-term sustainability of
          the PassCash platform. Here's why it's necessary:
        </motion.p>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <ul className="list-disc pl-8 space-y-4">
            <li className="flex items-center">
              <FaCheckCircle className="bg-[#C20E4D] text-[#fffffffff] rounded-full p-1 mr-2" />
              Token Distribution
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="bg-[#C20E4D] text-[#fffffffff] rounded-full p-1 mr-2" />
              Raising Capital for Development
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="bg-[#C20E4D] text-[#fffffffff] rounded-full p-1 mr-2" />
              Empowering Financial Inclusion
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="bg-[#C20E4D] text-[#fffffffff] rounded-full p-1 mr-2" />
              Raising Awareness and Building Community
            </li>
          </ul>
          <ul className="list-disc pl-8 space-y-4">
            <li className="flex items-center">
              <FaCheckCircle className="bg-[#C20E4D] text-[#fffffffff] rounded-full p-1 mr-2" />
              Token Utility and Ecosystem Growth
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="bg-[#C20E4D] text-[#fffffffff] rounded-full p-1 mr-2" />
              Scaling the Business
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="bg-[#C20E4D] text-[#fffffffff] rounded-full p-1 mr-2" />
              Establishing Trust and Security
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MyComponent;