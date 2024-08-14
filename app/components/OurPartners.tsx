"use client"

import { motion } from 'framer-motion';

export default function OurPartners() {
  return (
    <section className="bg-black py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#ffffff]">Our Partners</h2>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {[{
            src: "/passcash.png",
            alt: "Partner 1",
            name: "PassKash"
          }, {
            src: "/pas2.png",
            alt: "Partner 2",
            name: "CoinBase"
          }, {
            src: "/pas3.png",
            alt: "Partner 3",
            name: "MetaMask"
          }, {
            src: "/pas4.png",
            alt: "Partner 4",
            name: "TrustWallet"
          }, {
            src: "/22a.svg",
            alt: "Partner 5",
            name: "Ladger"
          }].map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex-shrink-0 cursor-pointer w-48 flex flex-col items-center rounded-lg p-6 shadow-md bg-gradient-to-br from-[#F54180] via-[#C20E4D] to-[#920B3A] border-2 border-transparent text-[#ffffffff]"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                width={120} // Increased width
                height={120} // Increased height
                className="mb-4"
                style={{ aspectRatio: "1/1", objectFit: "contain" }}
              />
              <h3 className="mb-2 text-lg font-semibold">{partner.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
