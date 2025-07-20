import React from 'react';

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51]s text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Owlvest?</h2>
        <p className="text-lg text-gray-300 mb-12">Discover what makes Owlvest the future of startup investing.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-[#1A1231] p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">🚀 Swipe to Invest</h3>
            <p className="text-sm text-gray-300">
              Just like Tinder – but for startups. Swipe through verified startup profiles and back your favorites with ease.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-[#1A1231] p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">💰 Powered by $OwlCoin</h3>
            <p className="text-sm text-gray-300">
              $OwlCoin is more than a token – it unlocks presales, staking rewards, community governance, and platform perks.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-[#1A1231] p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">🌍 From Pakistan to the World</h3>
            <p className="text-sm text-gray-300">
              Built in Pakistan. Scaling globally. Owlvest is breaking down borders in startup investing.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-[#1A1231] p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">📈 DAO-Governed Platform</h3>
            <p className="text-sm text-gray-300">
              Community-led investing through DAO voting. Shape the platform’s direction, startup vetting, and rewards.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-[#1A1231] p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">🔓 No Paywalls</h3>
            <p className="text-sm text-gray-300">
              Founders don’t pay to raise. Investors don’t need a fortune to start. We’re building accessibility – not exclusivity.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="bg-[#1A1231] p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">🛡️ Real-World Utility</h3>
            <p className="text-sm text-gray-300">
              We’re not a memecoin. We’re a platform with real use-cases, real communities, and real capital – no rugs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
