import React from 'react';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 px-6 bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51]s text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">📍 Owlvest Roadmap</h2>
        <p className="text-lg text-gray-300 mb-12">Here’s how we’re building the future of real-world startup investing.</p>

        <div className="space-y-10 text-left">
          {/* Phase 1 */}
          <div className="bg-[#1A1231] p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">🚧 Phase 1 – Foundation</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Launch MVP with swipe-based startup interface</li>
              <li>Deploy $OwlCoin on supported blockchain</li>
              <li>Whitelist campaign + presale round</li>
              <li>Community formation (Discord, X, Telegram)</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-[#1A1231] p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">🚀 Phase 2 – Expansion</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Beta rollout for verified investors & startups</li>
              <li>DAO voting system for platform decisions</li>
              <li>Token staking + rewards dashboard</li>
              <li>Start UAE & MENA expansion</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-[#1A1231] p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">🌍 Phase 3 – Global Scale</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>100,000+ global users onboarded</li>
              <li>Partner with accelerators, funds, and VCs</li>
              <li>Multi-chain support for $OwlCoin</li>
              <li>Scale to Latin America, Africa, Europe</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
