import React from 'react';
import NavBar from '../components/NavBar';

export default function AboutUsPage() {
  return (
    <>
      <NavBar />
      <div className="pt-32 min-h-screen bg-gradient-to-br from-[#090E21] via-[#2A0E4D] to-[#18092C] text-white px-4 sm:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* 🦉 About Owlvest */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#00F08F] mb-4">About Owlvest</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Owlvest is building the future of Web3 investing — a “Tinder for Startup Investing”.
              We empower users to swipe through vetted startups and invest directly using our token: <span className="text-[#00F08F] font-medium">$OwlCoin</span>.
              Accessible, secure, and gamified investing at your fingertips.
            </p>
          </section>

          {/* 🏆 Achievements */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4 border-b border-[#00F08F] inline-block">🏆 Achievements</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 text-lg">
              <li>🚀 5,000+ vetted startups onboarded</li>
              <li>👥 7,600+ active retail & institutional investors</li>
              <li>🏆 Hult Prize Winner | Google for Startups | i2i Accelerator</li>
              <li>🌍 Core team spread across Pakistan, UK, and India</li>
            </ul>
          </section>

          {/* 📸 Gallery */}
          <section>
            <h2 className="text-3xl font-semibold text-white mb-6 border-b border-[#00F08F] inline-block">📸 Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                '6ccdbb14-5d2e-4739-90ec-d82031e12405-removebg-preview.png',
                '66b4b560-8ff4-4ef1-bb44-7be20bcbb644-removebg-preview.png',
                '50513f92-6967-4971-8ffa-386bce23a4e6-removebg-preview.png',
              ].map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl shadow-lg bg-white/5 p-1 hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={`/gallery/${img}`}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
