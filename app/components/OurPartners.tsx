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
            name: "PassCash"
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
          },
          {
            src: "/p1.png",
            alt: "Partner 5",
            name: "PancakeSwap"
          },
          {
            src: "/m1.png",
            alt: "Partner 5",
            name: "Mdex"
          },
          {
            src: "/m2.png",
            alt: "Partner 5",
            name: "BSCswap"
          },
          {
            src: "/m3.jpg",
            alt: "Partner 5",
            name: "AnySwap"
          },
        ].map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex-shrink-0 cursor-pointer w-48 flex flex-col items-center rounded-lg p-6 shadow-md bg-gradient-to-br from-[#F54180] via-[#C20E4D] to-[#920B3A] border-2 border-transparent text-[#ffffffff]"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={120}
                className="mb-4 filter grayscale hover:grayscale-0 hover:contrast-125 transition duration-300 ease-in-out"
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
