import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { ConnectWallet } from '../components/WalletConnect';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const TOTAL_PRESALE = 1_000_000_000;

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [tokensSold, setTokensSold] = useState(650_000_000);
  const [contributors, setContributors] = useState(10000);
  const progress = ((tokensSold / TOTAL_PRESALE) * 100).toFixed(0);
  const presaleEnd = new Date('2025-07-01T00:00:00Z');

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, scale: 1 });
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTokensSold(prev => Math.min(prev + Math.floor(Math.random() * 2000), TOTAL_PRESALE));
      setContributors(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51] text-center px-6 pt-8 pb-20 overflow-hidden"
    >
      {/* Hero Text */}
      {/* Hero Top Section - Two Column Layout */}
<section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-10 text-left">
  {/* Left Column: Headline & Text */}
  <div className="md:w-1/2">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#b39ddb] mb-4">
      Owlvest: <span className="text-white">Swipe. Match. Invest.</span>
    </h1>
    <p className="text-lg sm:text-xl text-gray-300 mb-4">
      Welcome to Owlvest, where we're revolutionizing startup investing!
    </p>
    <p className="text-md sm:text-lg text-gray-400">
      We're building the <strong className="text-white">Tinder for Startup Investing</strong> – powered by <strong className="text-[#00F08F]">$OwlCoin</strong>.<br />
      Discover how we make Web3 investing simple, accessible, and secure for everyone.
    </p>
  </div>

  {/* Right Column: App UI Image with Swipe + 3D Effect */}
<div className="md:w-1/2 flex justify-center">
  <motion.img
  whileHover={{ scale: 1.05, rotateY: 6, rotateX: 2 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
  src="/app_ui/swipeImage.png"
  alt="Swipe"
  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl shadow-xl"
/>


</div>

</section>


      {/* Presale Stats */}
      <div className="flex flex-col gap-6 items-center w-full max-w-2xl">
        {/* Progress Box */}
        <div className="bg-[#1B0E3F] w-full rounded-xl p-6 text-center shadow-md border border-[#2F1C55]">
          <div className="flex justify-between items-center mb-2">
  <h2 className="text-md font-bold text-white">Presale Progress</h2>
  <h2 className="text-md font-bold text-[#00F08F]">{progress}%</h2>
</div>

          <div className="w-full bg-[#322057] rounded-full h-4 overflow-hidden">
            <div
              className="h-full bg-[#00F08F] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-300">{tokensSold.toLocaleString()} OWL Sold / 1B OWL Total</p>
          
        </div>

        {/* Countdown Box */}
        <div className="bg-[#1B0E3F] w-full rounded-xl p-6 text-center shadow-md border border-[#2F1C55]">
          <h2 className="text-md font-bold mb-4 text-white">⏰ Presale Ends In:</h2>
          <div className="flex justify-center gap-4 text-black">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => (
              <div key={i} className="bg-[#00F08F] w-16 h-16 rounded-lg flex flex-col justify-center items-center font-bold text-lg">
                <Countdown
                  date={presaleEnd}
                  renderer={({ days, hours, minutes, seconds }) => {
                    const values = [days, hours, minutes, seconds];
                    return <>{values[i]}</>;
                  }}
                />
                <span className="text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Box */}
        <div className="bg-[#1B0E3F] w-full rounded-xl p-6 text-center shadow-md border border-[#2F1C55]">
          <h2 className="text-md font-bold mb-4 text-white">💰 Quick Investment Calculator</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="number"
              placeholder="Amount in USD"
              className="px-4 py-2 rounded-md bg-white text-black w-full sm:w-2/3"
            />
            <button className="bg-[#00F08F] hover:bg-[#00e87e] text-black font-semibold px-6 py-2 rounded-md w-full sm:w-auto">
              Invest
            </button>
          </div>
        </div>

        {/* Email Box */}
        <div className="bg-[#1B0E3F] w-full rounded-xl p-6 text-center shadow-md border border-[#2F1C55]">
          <h2 className="text-md font-bold mb-4 text-white">🚀 Join Presale</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-white text-black w-full sm:w-2/3"
            />
            <button className="bg-[#00F08F] hover:bg-[#00e87e] text-black font-semibold px-6 py-2 rounded-md w-full sm:w-auto">
              Join Presale
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-300">Join 10,000+ early investors already in the presale</p>
        </div>
      </div>

      {/* OwlCoin Price */}
      <motion.p
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={controls}
        transition={{ duration: 1.3, ease: 'easeOut', delay: 0.2 }}
        className="text-xl mt-10 text-[#00F08F] font-medium text-glow"
      >
        OwlCoin Fixed Price: $0.008
      </motion.p>

      {/* Wallet Connect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
        className="mt-8"
      >
        <ConnectWallet />
      </motion.div>

      {/* Buy Now */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.8 }}
        onClick={() => document.getElementById('token-form')?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-6 px-8 py-3 bg-[#00F08F] hover:bg-[#00e87e] text-black rounded-full font-semibold shadow-lg transition-all duration-300 glow-button"
      >
        Buy Now
      </motion.button>

      {/* Custom Styles */}
      <style>{`
        .text-glow {
          text-shadow: 0 0 6px rgba(0, 255, 160, 0.6), 0 0 12px rgba(0, 255, 160, 0.4);
        }
        .glow-button {
          box-shadow: 0 0 10px rgba(0, 255, 160, 0.4), 0 0 20px rgba(0, 255, 160, 0.3);
        }
        .glow-button:hover {
          box-shadow: 0 0 14px rgba(0, 255, 160, 0.6), 0 0 24px rgba(0, 255, 160, 0.5);
        }
      `}</style>
    </section>
  );
}
