import React, { useRef } from 'react';

export default function WhitepaperPage() {
  const viewerRef = useRef(null);

  const scrollToViewer = () => {
    if (viewerRef.current) {
      viewerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-br from-[#090E21] via-[#2A0E4D] to-[#18092C] text-white px-4 md:px-12">
      <h1 className="text-4xl font-bold mb-6">OwlVest Whitepaper</h1>
      <p className="text-lg leading-relaxed mb-6">
        Get to know everything about OwlVest. You can either read it online or download the full whitepaper.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <button
          onClick={scrollToViewer}
          className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          📖 Read Online
        </button>

        <a
          href="/whitepaper.pdf"
          download="OwlVest-Whitepaper.pdf"
          className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition text-center"
        >
          ⬇ Download PDF
        </a>
      </div>

      <div ref={viewerRef} className="w-full h-[80vh] mb-8">
      <iframe
  src="/whitepaper.pdf"
  className="w-full h-full rounded-xl border-2 border-white"
  title="OwlVest Whitepaper"
></iframe>

      </div>
    </div>
  );
}
