import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TOTAL_PRESALE = 1_000_000_000;

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [tokensSold, setTokensSold] = useState(650_000_000);
  const [contributors, setContributors] = useState(10000);
  const progress = ((tokensSold / TOTAL_PRESALE) * 100).toFixed(0);

  // Define your presale end date here:
  const presaleEnd = new Date('2025-08-12T00:00:00Z');

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
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-10 text-left">
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
        {/* Presale Coming Soon Section */}
<div className="mt-10 w-full flex flex-col items-center text-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="bg-[#1A0038] p-8 rounded-2xl shadow-lg w-full max-w-lg border border-[#2D0A51]"
  >
    <h2 className="text-3xl font-extrabold text-white mb-4">🚀 Presale Coming Soon</h2>
    <p className="text-gray-300 text-lg mb-6">
      Get ready to be part of the future with <span className="text-white font-bold">Owlvest</span>.  
      Stay tuned for updates!
    </p>
    <button className="glow-button px-6 py-3 bg-[#00F08F] text-black font-bold rounded-lg hover:bg-[#00d880] transition">
      Notify Me
    </button>
  </motion.div>
</div>

      </section>
      

      {/* Custom Glow Styles */}
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
