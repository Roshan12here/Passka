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
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Services
              </Link>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Need Help?</h3>
            <nav className="grid gap-2">
              <Link href="#" className="text-sm underline hover:underline" prefetch={false}>
                Support
              </Link>
              <Link href="#" className="text-sm underline hover:underline" prefetch={false}>
                Partner With Us
              </Link>
              <div className="flex space-x-4 mt-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaReddit className="h-6 w-6 cursor-pointer text-[#FF4500]" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaLinkedin className="h-6 w-6 cursor-pointer text-[#0A66C2]" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaTelegram className="h-6 w-6 cursor-pointer text-[#0088cc]" />
                </motion.div>
              </div>
            </nav>
          </div>
          <div className="">
            <Card className="bg-gray-900 text-white items-center justify-center flex-col ">
              <CardHeader>
                <CardTitle className="items-center">Join Our Popular ICO <br /> <span className="text-center">Community</span></CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 items-center">
                <Button className="px-16 py-4 bg-[#C20E4D]  text-xl">
                    <RiDiscordFill className="text-[#ffffff] mr-2 h-6 w-6" />
                    Join </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-[#ffffff]">
          <p>Copyright © 2024 PassKash. All rights reserved..</p>
        </div>
      </div>
    </footer>
  )
}
