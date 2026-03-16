import { motion } from "framer-motion"

export default function Hero() {

  return (

    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <motion.h1
      initial={{y:-50,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:1}}
      className="text-6xl font-bold">

        Super Fast & Secure cPanel Hosting

      </motion.h1>

      <p className="mt-6 text-lg text-gray-400 max-w-2xl">

        Launch your website with lightning-fast hosting and powerful control panel.

      </p>

      <div className="mt-8 flex gap-6">

        <button className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:scale-105 transition">
          Get Started
        </button>

        <button className="px-6 py-3 border rounded-lg hover:scale-105 transition">
          View Pricing
        </button>

      </div>

    </section>

  )
}