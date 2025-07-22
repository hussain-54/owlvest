import React, { useRef } from 'react';

export default function WhitepaperPage() {
  const viewerRef = useRef(null);

  // ✅ PDF served from your Vercel deployment
  const pdfUrl = "https://owlwest-white-papaer-code.vercel.app/whitepaper.pdf";

  const scrollToViewer = () => {
    if (viewerRef.current) {
      viewerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'OwlVest-Whitepaper.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

        <button
          onClick={handleDownload}
          className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          ⬇ Download PDF
        </button>
      </div>

      <div ref={viewerRef} className="w-full h-[80vh] mb-8">
        <iframe
          src={pdfUrl}
          className="w-full h-full rounded-xl border-2 border-white"
          title="OwlVest Whitepaper"
        ></iframe>
      </div>
    </div>
  );
}
