import React from 'react';
import { motion } from 'framer-motion';

const comparisonData = [
  { label: 'Utility', owlvest: '✅', memecoins: '❌' },
  { label: 'Real-World Assets (RWA)', owlvest: '✅', memecoins: '❌' },
  { label: 'Revenue Backed', owlvest: '✅', memecoins: '❌' },
  { label: 'Security & Audit', owlvest: '✅', memecoins: '❌' },
  { label: 'Governance Rights', owlvest: '✅', memecoins: '❌' },
];

export default function ComparisonTable() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51] py-16 px-6 text-white text-center"
    >
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
          Owlvest vs Memecoins
        </span>
      </motion.h2>

      <div className="overflow-x-auto">
        <motion.table
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="table-auto border-collapse w-full max-w-3xl mx-auto text-sm sm:text-base shadow-[0_0_15px_rgba(173,216,230,0.15)]"
        >
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 text-left">Feature</th>
              <th className="px-4 py-2 text-green-300">Owlvest</th>
              <th className="px-4 py-2 text-gray-300">Typical Memecoin</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, idx) => (
              <motion.tr
                key={idx}
                className="bg-gray-800 border-t border-gray-700"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-4 py-3 text-left">{row.label}</td>
                <td className="px-4 py-3 font-semibold text-green-400">{row.owlvest}</td>
                <td className="px-4 py-3 text-red-400">{row.memecoins}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>

      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 20px rgba(59,130,246,0.7)',
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
        onClick={() =>
          document.getElementById('token-form')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        Start Investing Smarter
      </motion.button>
    </motion.section>
  );
}
