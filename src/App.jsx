import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import NewsTicker from './components/NewsTicker';

import Hero from './sections/Hero';
import TokenForm from './sections/TokenForm';
import StatsPanel from './sections/StatsPanel';
import UtilityCards from './sections/UtilityCards';
import Tokenomics from './sections/Tokenomics';
import ComparisonTable from './sections/ComparisonTable';
import TeamSection from './sections/TeamSection';
import Features from './sections/Features';
import Roadmap from './sections/Roadmap';
import Faqs from './sections/Faqs';
import StickyFooter from './sections/StickyFooter';
import GlobalEnhancements from './components/GlobalEnhancements';
import SocialSidebar from './components/SocialSidebar';

import ConnectWalletPage from './pages/ConnectWalletPage';
import AboutUsPage from './pages/AboutUsPage';
import WhitepaperPage from './pages/WhitepaperPage'; // ✅ New import

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="pt-32 min-h-screen bg-gradient-to-br from-[#090E21] via-[#2A0E4D] to-[#18092C] text-white font-sans">
              <NewsTicker />
              <NavBar />
              <GlobalEnhancements />
              <Hero />
              <SocialSidebar />
              <TokenForm />
              <StatsPanel />
              <UtilityCards />
              <Tokenomics />
              <ComparisonTable />
              <TeamSection />
              <Features />
              <Roadmap />
              <Faqs />
              <StickyFooter />
            </div>
          }
        />
        <Route path="/connect-wallet" element={<ConnectWalletPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/whitepaper" element={<WhitepaperPage />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}
