import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ClipboardCopy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAddress } from 'ethers';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [showDD, setShowDD] = useState(false);
  const ddRef = useRef(null);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'About Us', to: '/about-us' },
    { name: 'Whitepaper', to: '/whitepaper' },
  ];

  const shorten = (addr) => addr?.slice(0, 6) + '...' + addr?.slice(-4);

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

/* ---------- Disconnect & full cleanup ---------- */
const disconnectWallet = async () => {
  try {
    /** 1. MetaMask / provider *
     * There’s no official “disconnect” RPC yet, but the best
     * we can do is ask MetaMask to revoke the account
     * permission (EIP‑2255).  MetaMask will show a popup.
     * If the user confirms, `eth_accounts` will come back empty.
     */
    if (window?.ethereum && account) {
      try {
        await window.ethereum.request({
          method: 'wallet_revokePermissions',
          params: [{ eth_accounts: {} }],
        });
      } catch (_) {
        /* silently ignore if wallet doesn’t support it */
      }
    }

    /** 2. Clear all site storage we control */
    localStorage.clear();      // ⇦ wipes every LS key, not just owlvest_connected
    sessionStorage.clear();    // ⇦ clear session storage too

    /** 3. Clear JS‑accessible cookies for this origin
     *    (HttpOnly cookies can’t be touched by JS, by design)
     */
    document.cookie
      .split(';')
      .forEach((c) => {
        const [key] = c.split('=');
        document.cookie = `${key.trim()}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      });

    /** 4. Reset React state & close dropdown */
    setAccount(null);
    setShowDD(false);
  } catch (err) {
    console.error('Failed to disconnect:', err);
  }
};


  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(account);
      alert('Address copied!');
    } catch (e) {
      console.error(e);
    }
  };

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
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setShowDD(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const AddressBadge = () => (
    <div className="relative inline-flex items-center space-x-2" ref={ddRef}>
      <span
        title={account}
        className="font-mono text-[#00F08F] bg-[#1B0E3F] px-3 py-1 rounded-lg shadow-inner select-none"
      >
        {shorten(account)}
      </span>

      {/* Copy button */}
      <button
        onClick={copyAddress}
        className="text-gray-300 hover:text-white transition"
        title="Copy address"
      >
        <ClipboardCopy size={18} className="cursor-pointer" />
      </button>

      {/* Dropdown toggle */}
      <button
        onClick={() => setShowDD(!showDD)}
        className="text-gray-300 hover:text-white transition"
        title="Wallet options"
      >
        <ChevronDown size={18} className="cursor-pointer" />
      </button>

      {/* Dropdown menu */}
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

  return (
    <nav className="w-full bg-gradient-to-r from-[#1F1A31] via-[#2A1842] to-[#46166C] text-white shadow-md fixed top-8 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide text-white">
          <Link to="/">Owlvest</Link>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item, idx) =>
            item.to ? (
              <li key={idx}>
                <Link to={item.to} className="hover:text-green-400">
                  {item.name}
                </Link>
              </li>
            ) : (
              <li key={idx}>
                <a href={item.href} className="hover:text-green-400">
                  {item.name}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="hidden md:flex flex-col items-end ml-4 text-right">
          {account ? (
            <>
              <span className="text-xs text-gray-300 mb-1 -ml-4">Connected Wallet:</span>
              <AddressBadge />
            </>
          ) : (
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className="py-2 px-4 rounded-lg bg-[#00F08F] hover:bg-[#00e87e] text-black font-semibold transition disabled:opacity-50 shadow-lg"
            >
              {isConnecting ? 'Connecting…' : 'Connect Wallet'}
            </button>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#2A1842] space-y-3">
          {navItems.map((item, idx) =>
            item.to ? (
              <Link
                key={idx}
                to={item.to}
                className="block text-sm hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={idx}
                href={item.href}
                className="block text-sm hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            )
          )}

          <div className="pt-4">
            {account ? (
              <div className="text-left space-y-1">
                <span className="text-xs text-gray-300 -ml-3">Connected Wallet:</span>
                <AddressBadge />
              </div>
            ) : (
              <button
                onClick={connectWallet}
                disabled={isConnecting}
                className="w-full py-2 px-4 rounded-lg bg-[#00F08F] hover:bg-[#00e87e] text-black font-semibold transition disabled:opacity-50 shadow-lg"
              >
                {isConnecting ? 'Connecting…' : 'Connect Wallet'}
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
