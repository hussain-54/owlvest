import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';

const TOTAL_PRESALE = 1_000_000_000;

export default function StatsPanel() {
  const [tokensSold, setTokensSold] = useState(456_789_000);
  const [contributors, setContributors] = useState(18233);
  const progress = ((tokensSold / TOTAL_PRESALE) * 100).toFixed(2);
  const presaleEnd = new Date('2025-08-08T00:00:00Z');

  useEffect(() => {
    const interval = setInterval(() => {
      setTokensSold(prev => Math.min(prev + Math.floor(Math.random() * 2000), TOTAL_PRESALE));
      setContributors(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51]npm py-12 px-6 text-white text-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Presale Stats
      </motion.h2>

      {/* Progress Bar */}
      <motion.div
        className="w-full max-w-3xl mx-auto bg-gray-700 rounded-full h-6 overflow-hidden"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 via-lime-400 to-green-600 transition-all duration-500"
          animate={{ width: `${progress}%` }}
        />
      </motion.div>
      <p className="mt-2 text-sm text-gray-300">{progress}% of 1B OwlCoins Sold</p>

      {/* Stats Grid */}
      <motion.div
        className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xl font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {[{
          label: "Tokens Sold",
          value: tokensSold.toLocaleString(),
          color: "text-blue-400"
        }, {
          label: "Contributors",
          value: contributors.toLocaleString(),
          color: "text-yellow-400"
        }, {
          label: "Time Left",
          value: <Countdown date={presaleEnd} />,
          color: "text-red-400"
        }].map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="hover:scale-105 transition-transform duration-300"
          >
            <span className={`${item.color} block text-2xl`}>{item.value}</span>
            {item.label}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
