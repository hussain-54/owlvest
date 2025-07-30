import React from "react";

const Partner = () => {
  return (
    <div className="bg-gradient-to-br from-[#090E21] via-[#2A0E4D] to-[#18092C] min-h-screen text-white font-sans">
      {/* Header */}
      <header className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Partner With OwlVest</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
          Join our mission to decentralise investing and unlock global opportunity. Whether you're a DEX, influencer, KOL, VC, or crypto project — we want to build with you.
        </p>
      </header>

      {/* Why Collaborate Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Collaborate With OwlVest?</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🤝",
              title: "Co-Promotion Opportunities",
              desc: "Get featured across our blog, socials, and global ambassador network.",
            },
            {
              icon: "🚀",
              title: "Priority Access",
              desc: "Early entry to exclusive presales and staking pools.",
            },
            {
              icon: "📈",
              title: "Community Exposure",
              desc: "Reach our growing user base through collaborations and Twitter Spaces.",
            },
            {
              icon: "💼",
              title: "Project Matching",
              desc: "Curated access to aligned backers, ambassadors, and project leads.",
            },
            {
              icon: "🔒",
              title: "Transparency & Commitment",
              desc: "We're community-driven and building for the long haul.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#1A1F3B] rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-white">{item.icon} {item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Collaboration Form */}
        <form
          className="mt-16 bg-[#1A1F3B] p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
          action="mailto:owlvestnow@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <h3 className="text-2xl font-semibold mb-6">Collaboration Form</h3>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company/Project Name"
              className="bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400"
              required
            />
            <input
              type="url"
              name="website"
              placeholder="Website or Portfolio Link"
              className="bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400"
            />
          </div>

          <div className="mt-4">
            <select
              name="partnership"
              className="w-full bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400"
              required
            >
              <option value="">Type of Partnership</option>
              <option value="Influencer">Influencer</option>
              <option value="DEX">DEX</option>
              <option value="VC">VC</option>
              <option value="Project Listing">Project Listing</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mt-4">
            <input
              type="text"
              name="social"
              placeholder="Telegram/X Handle"
              className="w-full bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400"
            />
          </div>

          <div className="mt-4">
            <textarea
              name="pitch"
              placeholder="Tell Us More (Your Idea or Pitch)"
              rows="4"
              className="w-full bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer CTA */}
      <footer className="text-center text-gray-300 py-12 text-lg px-4">
        <p className="mb-2 font-semibold">“Let’s Build Together.”</p>
        <p>If you're ready to shape the future of decentralised investing, drop us a message or DM us on X.</p>
      </footer>
    </div>
  );
};

export default Partner;
