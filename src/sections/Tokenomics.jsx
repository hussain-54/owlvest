import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { motion } from 'framer-motion';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ChartDataLabels);


ChartJS.register(ArcElement, Tooltip, Legend);

export default function Tokenomics() {
  const [totalSupply] = useState(10000000000);
  const [presaleAllocation] = useState(1000000000);
  const [displayedSupply, setDisplayedSupply] = useState(0);
  const [displayedPresale, setDisplayedPresale] = useState(0);

  useEffect(() => {
    const supplyInterval = setInterval(() => {
      setDisplayedSupply((prev) => {
        if (prev < totalSupply) return prev + 50000000;
        clearInterval(supplyInterval);
        return totalSupply;
      });
    }, 30);

    const presaleInterval = setInterval(() => {
      setDisplayedPresale((prev) => {
        if (prev < presaleAllocation) return prev + 10000000;
        clearInterval(presaleInterval);
        return presaleAllocation;
      });
    }, 30);
  }, [totalSupply, presaleAllocation]);

  const data = {
    labels: [
      'Presale - 10%',
      'Team - 15%',
      'Ecosystem - 25%',
      'Marketing - 10%',
      'Liquidity - 20%',
      'Reserve - 20%',
    ],
    datasets: [
      {
        data: [10, 15, 25, 10, 20, 20],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#FBBF24',
          '#EF4444',
          '#6366F1',
          '#6B7280',
        ],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  };

  return (
    <motion.section
      id="tokenomics"
      className="bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51] py-16 px-4 sm:px-6 text-white text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
  className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  $OwlCoin Tokenomics
</motion.h2>


      <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-6xl mx-auto">
        {/* Glowing Pie Chart */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="absolute inset-0 z-0 rounded-full blur-3xl bg-gradient-to-tr from-blue-500 via-pink-500 to-purple-500 opacity-30 animate-pulse"></div>
          <div className="relative z-10 animate-shimmer">
          <Pie
  data={data}
  options={{
    plugins: {
      datalabels: {
        color: '#fff',
        formatter: (value, ctx) => {
          let sum = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          let percentage = ((value * 100) / sum).toFixed(0) + "%";
          return percentage;
        },
        font: {
          weight: 'bold',
          size: 14,
        }
      },
      legend: {
        labels: {
          color: 'white',
          font: {
            size: 14,
          }
        }
      }
    }
  }}
/>

          </div>
        </motion.div>

        {/* Info Panel */}
        <motion.div
          className="text-left md:w-1/2"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 hover:text-blue-400 transition">
            Vesting Schedule
          </h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 text-sm">
            <li className="hover:text-white transition">🚫 <strong>0%</strong> at TGE</li>
            <li className="hover:text-white transition">⏳ <strong>2-month cliff</strong></li>
            <li className="hover:text-white transition">📈 <strong>24-month linear unlock</strong></li>
          </ul>

          <div className="mt-6 text-sm text-gray-400 space-y-1">
            <p className="hover:text-white transition"><strong>Total Supply:</strong> {displayedSupply.toLocaleString()} OwlCoins</p>
            <p className="hover:text-white transition"><strong>Presale Allocation:</strong> {displayedPresale.toLocaleString()} at $0.008</p>
          </div>

          <a
            href="/Owlvest-Token-Sheet.pdf"
            download
            className="inline-block mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-shadow shadow hover:shadow-blue-500/40"
          >
            Download Token Sheet
          </a>
        </motion.div>
      </div>
      <div className="mt-12 text-left md:mx-auto md:max-w-2xl">
  <h3 className="text-xl font-semibold mb-4 text-white hover:text-blue-400 transition">
    $OwlCoin Utility
  </h3>
  <ul className="list-disc pl-6 text-gray-300 space-y-3 text-sm">
    <li className="hover:text-white transition">🎯 <strong>Tiered access</strong> to verified startup deals</li>
    <li className="hover:text-white transition">🗳️ <strong>Voting power</strong> for governance decisions (DAO)</li>
    <li className="hover:text-white transition">💎 <strong>Staking</strong> for WL slots, rewards & allocations</li>
    <li className="hover:text-white transition">🚀 <strong>Investor upgrades</strong> & launchpad participation</li>
    <li className="hover:text-white transition">👥 <strong>Referral rewards</strong> and bonus perks</li>
    <li className="hover:text-white transition">🏅 <strong>Performance-based bonuses</strong> for mods, shillers, researchers</li>
  </ul>
</div>


      {/* CSS shimmer animation */}
      <style>{`
        .animate-shimmer {
          position: relative;
          overflow: hidden;
        }
        .animate-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
          animation: shimmer 2.5s infinite;
        }
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </motion.section>
  );
}
