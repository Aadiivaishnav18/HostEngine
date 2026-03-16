import { motion } from "framer-motion"

export default function FeatureCard({ icon, title, description }) {

  return (

    <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 rounded-xl bg-white/10 backdrop-blur border border-gray-700 shadow-lg">

      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-400 mt-2">
        {description}
      </p>

    </motion.div>

  )
}