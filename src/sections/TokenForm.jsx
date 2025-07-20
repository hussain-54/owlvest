// TokenForm.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function TokenForm() {
  const [currency, setCurrency] = useState('ETH');
  const [inputAmount, setInputAmount] = useState('');
  const [ethPrice, setEthPrice] = useState(0);
  const [owlAmount, setOwlAmount] = useState(0);
  const owlPrice = 0.008;
  const ethBalance = '0.00000';

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
      .then((res) => setEthPrice(res.data.ethereum.usd))
      .catch(() => setEthPrice(0));
  }, []);

  useEffect(() => {
    if (!inputAmount || isNaN(inputAmount)) return setOwlAmount(0);
    const usdValue = currency === 'ETH' ? parseFloat(inputAmount) * ethPrice : parseFloat(inputAmount);
    setOwlAmount(usdValue / owlPrice);
  }, [inputAmount, currency, ethPrice]);
return (
  <motion.section
    id="token-form"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative my-10 py-12 px-6 max-w-md mx-auto"
  >
    {/* Animated Border */}
    <div className="absolute -inset-1 rounded-3xl z-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow blur-md"></div>

    {/* Inner Form Container */}
    <div className="relative z-10 bg-[#0b0c1b] text-white rounded-3xl shadow-[0_0_25px_rgba(173,216,230,0.2)] border border-white/10 px-6 py-12">
      <div className="text-center text-sm text-gray-400 mb-6 border-b border-white/10 pb-4">
        1 OwlCoin = <span className="text-pink-400 font-semibold">${owlPrice.toFixed(3)}</span>
      </div>

      <div className="flex justify-center mb-6 space-x-4">
        {['ETH', 'USDT'].map((curr) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={curr}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
              currency === curr
                ? 'bg-purple-600 text-white border-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.5)]'
                : 'bg-transparent text-gray-300 border-gray-600 hover:border-purple-500'
            }`}
            onClick={() => setCurrency(curr)}
          >
            {curr}
          </motion.button>
        ))}
      </div>

      <div className="text-center text-sm text-gray-400 border-t border-b border-white/10 py-3 mb-6">
        {currency} Balance: {ethBalance}
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Pay with {currency}</label>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-[#151628] p-3 rounded-md flex items-center justify-between shadow-inner"
          >
            <input
              type="number"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              className="bg-transparent text-white outline-none w-full"
              placeholder="0"
            />
            <span className="ml-2 text-gray-400 text-xs">{currency}</span>
          </motion.div>
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">Receive OwlCoin</label>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-[#151628] p-3 rounded-md flex items-center justify-between shadow-inner"
          >
            <input
              type="text"
              value={owlAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              disabled
              className="bg-transparent text-white outline-none w-full"
              placeholder="0"
            />
            <span className="ml-2 text-pink-400 text-xs">OWL</span>
          </motion.div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold tracking-wide flex items-center justify-center gap-2 text-white uppercase shadow-lg hover:shadow-[0_0_15px_rgba(255,105,180,0.6)] transition"
      >
        🔗 Connect Wallet
      </motion.button>
    </div>
  </motion.section>
);
}