import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield  } from "lucide-react";

export default function Hero() {
  // Animation Variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-slate-950">
      
      {/* 1. Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* 2. Badge/Pill Indicator */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8"
        >
          <Zap size={14} />
          <span>New: Turbo NVMe Storage now active</span>
        </motion.div>

        {/* 3. High-Impact Typography */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.1]"
        >
          Super Fast & Secure <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            cPanel Hosting
          </span>
        </motion.h1>

        {/* 4. Refined Subtext */}
        <motion.p 
          variants={itemVariants}
          className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the power of enterprise-grade hardware paired with the simplicity 
          of the world's most popular control panel.
        </motion.p>

        {/* 5. Enhanced CTAs */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
            Get Started Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white rounded-xl font-bold transition-all backdrop-blur-sm">
            View Pricing
          </button>
        </motion.div>

        {/* 6. Trust Signals */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 text-slate-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <Shield size={16} /> 99.9% Uptime Guarantee
          </div>
          <div className="flex items-center gap-2">
            <Zap size={16} /> Free Website Migration
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}