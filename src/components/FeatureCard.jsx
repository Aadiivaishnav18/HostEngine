import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      // Entry Animation: Slides up and fades in
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      
      // Hover Effects
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.2 } 
      }}
      className="group relative p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/50 shadow-xl transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative Gradient Glow on Hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="text-4xl mb-6 inline-block p-3 rounded-lg bg-slate-800 group-hover:bg-blue-600/20 group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 mt-3 leading-relaxed group-hover:text-slate-300 transition-colors">
          {description}
        </p>
      </div>
      
      {/* Subtle Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}