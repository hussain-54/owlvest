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
          <h2 className="text-lg font-bold mb-6 text-white">⏰ Presale Ends In:</h2>
          <Countdown
            date={presaleEnd}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                // Render something when countdown ends
                return <span className="text-white font-bold">Presale Ended</span>;
              } else {
                // Render countdown
                return (
                  <div className="flex justify-center gap-6 text-black">
                    <div className="bg-[#00F08F] w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex flex-col justify-center items-center font-bold text-xl sm:text-2xl">
                      {days}
                      <span className="text-xs sm:text-sm font-medium">Days</span>
                    </div>
                    <div className="bg-[#00F08F] w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex flex-col justify-center items-center font-bold text-xl sm:text-2xl">
                      {hours}
                      <span className="text-xs sm:text-sm font-medium">Hours</span>
                    </div>
                    <div className="bg-[#00F08F] w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex flex-col justify-center items-center font-bold text-xl sm:text-2xl">
                      {minutes}
                      <span className="text-xs sm:text-sm font-medium">Minutes</span>
                    </div>
                    <div className="bg-[#00F08F] w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex flex-col justify-center items-center font-bold text-xl sm:text-2xl">
                      {seconds}
                      <span className="text-xs sm:text-sm font-medium">Seconds</span>
                    </div>
                  </div>
                );
              }
            }}
          />
        </div>
      </div>

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
