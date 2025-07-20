import React, { useState, useEffect, useRef } from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { getAddress } from 'ethers';
import { ClipboardCopy, ChevronDown } from 'lucide-react';

export default function StickyFooter() {
  const presaleEnd = new Date('2025-07-01T00:00:00Z');

  /* ──────────────────────────────
     Wallet state + helpers
  ────────────────────────────── */
  const [account, setAccount] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [showDD, setShowDD] = useState(false);
  const ddRef = useRef(null);

  const shorten = (addr) => addr?.slice(0, 6) + '...' + addr?.slice(-4);

  /* Connect */
  const connectWallet = async () => {
    if (!window?.ethereum) {
      alert('MetaMask not detected.');
      return;
    }
    try {
      setIsConnecting(true);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const addr = getAddress(accounts[0]);
      setAccount(addr);
      localStorage.setItem('owlvest_connected', addr);
    } catch (err) {
      console.error(err);
    } finally {
      setIsConnecting(false);
    }
  };

  /* Disconnect + full cleanup */
  const disconnectWallet = async () => {
    try {
      if (window?.ethereum && account) {
        /* Ask MetaMask to revoke permissions (EIP‑2255). */
        try {
          await window.ethereum.request({
            method: 'wallet_revokePermissions',
            params: [{ eth_accounts: {} }],
          });
        } catch (_) {} // ignore if not supported
      }

      localStorage.clear();
      sessionStorage.clear();
      document.cookie
        .split(';')
        .forEach((c) => {
          const [key] = c.split('=');
          document.cookie = `${key.trim()}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        });

      setAccount(null);
      setShowDD(false);
    } catch (err) {
      console.error('Failed to disconnect:', err);
    }
  };

  /* Copy */
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(account);
      alert('Address copied!');
    } catch (e) {
      console.error(e);
    }
  };

  /* Restore on load */
  useEffect(() => {
    const restore = async () => {
      if (!window?.ethereum) return;
      const cached = localStorage.getItem('owlvest_connected');
      const authorised = await window.ethereum.request({ method: 'eth_accounts' });

      if (cached && authorised.includes(cached)) {
        setAccount(cached);
      } else if (authorised.length) {
        const addr = getAddress(authorised[0]);
        setAccount(addr);
        localStorage.setItem('owlvest_connected', addr);
      }
    };
    restore();
  }, []);

  /* Listen for wallet account switches */
  useEffect(() => {
    if (!window?.ethereum) return;
    const handleAccountsChanged = (accounts) => {
      if (accounts.length) {
        const addr = getAddress(accounts[0]);
        setAccount(addr);
        localStorage.setItem('owlvest_connected', addr);
      } else {
        disconnectWallet();
      }
    };
    window.ethereum.on('accountsChanged', handleAccountsChanged);
    return () => window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
  }, [account]);

  /* Click‑outside to close dropdown */
  useEffect(() => {
    const closeOnOutside = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setShowDD(false);
    };
    document.addEventListener('mousedown', closeOnOutside);
    return () => document.removeEventListener('mousedown', closeOnOutside);
  }, []);

  /* Render: address badge / buttons */
  const AddressBadge = () => (
    <div className="relative inline-flex items-center space-x-2" ref={ddRef}>
      <span
        title={account}
        className="cursor-default font-mono text-[#00F08F] bg-[#1B0E3F] px-3 py-1 rounded-lg shadow-inner select-none"
      >
        {shorten(account)}
      </span>

      {/* Copy */}
      <button
        onClick={copyAddress}
        title="Copy address"
        className="text-gray-300 hover:text-white transition"
      >
        <ClipboardCopy size={18} className="cursor-pointer" />
      </button>

      {/* Dropdown toggle */}
      <button
        onClick={() => setShowDD(!showDD)}
        title="Wallet options"
        className="text-gray-300 hover:text-white transition"
      >
        <ChevronDown size={18} className="cursor-pointer" />
      </button>

      {/* Dropdown */}
      {showDD && (
        <div className="absolute right-0 mt-2 w-32 bg-[#1B0E3F] border border-[#2F1C55] rounded-lg shadow-lg z-50">
          <button
            onClick={disconnectWallet}
            className="w-full text-left px-4 py-2 text-sm hover:bg-[#2F1C55]"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );

  /* ──────────────────────────────
     Footer UI
  ────────────────────────────── */
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-0 w-full bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51] text-white border-t border-gray-800 z-50 shadow-[0_-2px_15px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* OwlCoin price */}
        <div className="text-sm sm:text-base text-blue-300 font-medium animate-pulse">
          <strong className="text-white">OwlCoin:</strong> $0.008
        </div>

        {/* Countdown */}
        <div className="text-sm sm:text-base text-blue-400 font-medium">
          <Countdown date={presaleEnd} />
        </div>

        {/* Wallet / Buy */}
        <div className="flex gap-2 items-center">
          <motion.div
            whileHover={{ scale: account ? 1 : 1.05 }}
            transition={{ duration: 0.2 }}
            className="glow-button"
          >
            {account ? (
              <AddressBadge />
            ) : (
              <button
                onClick={connectWallet}
                disabled={isConnecting}
                className="py-2 px-4 rounded-lg bg-[#00F08F] hover:bg-[#00e87e] text-black font-semibold transition disabled:opacity-50 shadow-lg"
              >
                {isConnecting ? 'Connecting…' : 'Connect Wallet'}
              </button>
            )}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold text-white shadow-md hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] transition"
            onClick={() =>
              document.getElementById('token-form')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
