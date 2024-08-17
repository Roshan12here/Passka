"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RiDiscordFill } from "react-icons/ri"
import { FaReddit, FaLinkedin, FaTelegram } from "react-icons/fa"
import { motion } from "framer-motion"


export default function Component() {
  return (
    <footer className="bg-gray-950 text-[#ffffff]">
      <div className="container max-w-7xl py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="grid gap-2">

              <Link href="https://read.passkash.vip/whitepaper" passHref>
                <div
                >
                  About
                </div>
              </Link>
              <Link href="https://www.passcash.org/" passHref>
                <div
                >
                  Services
                </div>
              </Link>
            </nav>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Need Help?</h3>
            <nav className="grid gap-2">
              <Link href="mailto:support@passkash.vip" className="text-sm underline hover:underline" prefetch={false}>
                Support
              </Link>
              <Link href="mailto:info@passkash.vip" className="text-sm underline hover:underline" prefetch={false}>
                Partner With Us
              </Link>
              <div className="flex space-x-4 mt-4">
                <Link href="https://www.reddit.com/r/PassKash/" passHref>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9, rotate: -15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaReddit className="h-6 w-6 cursor-pointer text-[#FF4500]" />
                  </motion.div>
                </Link>
                <Link href="https://t.me/pkttoken" passHref>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9, rotate: -15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaTelegram className="h-6 w-6 cursor-pointer text-[#0088cc]" />
                  </motion.div>
                </Link>
              </div>
            </nav>
          </div>
          <div className="">
            <Card className="bg-gray-900 text-white items-center justify-center flex-col ">
              <CardHeader>
                <CardTitle className="items-center">Join Our Popular ICO <br /> <span className="text-center">Community</span></CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 items-center">
                <Button className="px-16 py-4 bg-[#C20E4D] text-xl">
                  <a href="https://discord.com/invite/eFyMRNSx" className="flex items-center">
                    <RiDiscordFill className="text-[#ffffff] mr-2 h-6 w-6" />
                    Join
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center border-t pt-6 text-center text-sm text-[#ffffff]">
  <p className="mb-4 sm:mb-0">Copyright © 2024 PassKash. All rights reserved.</p>
  <div className="flex gap-6">
    <p>Terms and Conditions</p>
    <p>Privacy Policy</p>
  </div>
</div>
      </div>
    </footer>
  )
}


