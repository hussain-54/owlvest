import React from 'react';
import { motion } from 'framer-motion';

const utilities = [
  {
    title: 'Startup Investing',
    description: 'Use OwlCoin to invest in vetted, high-growth startup deals.',
  },
  {
    title: 'Rewards',
    description: 'Earn staking rewards and bonuses for long-term holders.',
  },
  {
    title: 'RWAs',
    description: 'Backed by real-world assets including revenue-generating startups.',
  },
  {
    title: 'Governance',
    description: 'Vote on platform decisions and future startup listings.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function UtilityCards() {
  return (
    <motion.section
    
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51] py-16 px-6 text-white text-center"
    >
     <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-3xl font-bold mb-10 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] animate-pulse"
>
  Why OwlCoin?
</motion.h2>


      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {utilities.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition relative border border-transparent hover:border-blue-500"
          >
            <div className="absolute inset-0 rounded-lg border-2 border-blue-400 opacity-10 animate-pulse pointer-events-none" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-12 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition shadow-md hover:shadow-blue-500/50"
        onClick={() =>
          document.getElementById('tokenomics')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        View Full Tokenomics
      </motion.button>
    </motion.section>
  );
}
