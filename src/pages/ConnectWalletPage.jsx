import React, { useState, useEffect } from "react";
import { getAddress } from "ethers";   // v6: import the helper directly

/**
 * Owlvest ▸ Wallet Connect Page (with caching)
 * --------------------------------------------
 * • Persists last‑connected address in localStorage
 * • Auto‑restores if still authorised
 * • Syncs cache when user switches / disconnects
 * • Tailwind‑styled
 *
 * npm i ethers
 */
export default function ConnectWalletPage() {
  const [account, setAccount]     = useState(null);
  const [error, setError]         = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  /* 1️⃣  Connect & cache */
  const connectWallet = async () => {
    if (!window?.ethereum) {
      setError("MetaMask not detected. Install it to continue.");
      return;
    }
    try {
      setIsConnecting(true);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length) {
        const addr = getAddress(accounts[0]);          // checksum
        setAccount(addr);
        localStorage.setItem("owlvest_connected", addr);
        setError("");
      }
    } catch (err) {
      setError(err?.message || "Connection failed.");
    } finally {
      setIsConnecting(false);
    }
  };

  /* 2️⃣  Restore previous session (no popup) */
  useEffect(() => {
    const restore = async () => {
      if (!window?.ethereum) return;

      const cached = localStorage.getItem("owlvest_connected");
      const authorised = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (cached && authorised.includes(cached)) {
        setAccount(cached);
      } else if (authorised.length) {
        const addr = getAddress(authorised[0]);
        setAccount(addr);
        localStorage.setItem("owlvest_connected", addr);
      }
    };
    restore();
  }, []);

  /* 3️⃣  Keep cache in sync */
  useEffect(() => {
    if (!window?.ethereum) return;

    const handleAccountsChanged = (accounts) => {
      if (accounts.length) {
        const addr = getAddress(accounts[0]);
        setAccount(addr);
        localStorage.setItem("owlvest_connected", addr);
      } else {
        setAccount(null);
        localStorage.removeItem("owlvest_connected");
      }
    };

    const handleChainChanged = () => window.location.reload();

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      window.ethereum.removeListener("chainChanged", handleChainChanged);
    };
  }, []);

  /* Utility */
  const shorten = (addr) => addr?.slice(0, 6) + "..." + addr?.slice(-4);

  /* UI */
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51] text-white flex flex-col justify-center items-center px-6 py-20">
      <div className="max-w-md w-full bg-[#1B0E3F] border border-[#2F1C55] rounded-2xl shadow-lg p-8 text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#00F08F] tracking-wide glow-text">
          {account ? "Wallet Connected" : "Connect Your Wallet"}
        </h1>

        {/* Description / Connected address */}
        {account ? (
          <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
            Connected as{" "}
            <span className="font-mono text-[#00F08F]">{shorten(account)}</span>
          </p>
        ) : (
          <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
            Securely connect your crypto wallet to access Owlvest's presale,
            governance, and exclusive startup investing features.
          </p>
        )}

        {/* Error */}
        {error && <p className="mb-4 text-red-500 text-xs">{error}</p>}

        {/* Connect button */}
        {!account && (
          <button
            onClick={connectWallet}
            disabled={isConnecting}
            className="w-full py-3 px-6 rounded-lg bg-[#00F08F] hover:bg-[#00e87e] disabled:opacity-50 text-black font-semibold transition duration-300 shadow-lg glow-button"
          >
            {isConnecting ? "Connecting…" : "🚀 Connect Now"}
          </button>
        )}
      </div>

      {/* Footer */}
      <p className="mt-8 text-xs text-gray-400 text-center">
        Owlvest respects your privacy and never stores private keys.
      </p>

      {/* Custom CSS for subtle glow */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(0, 255, 160, 0.6),
            0 0 18px rgba(0, 255, 160, 0.4);
        }
        .glow-button {
          box-shadow: 0 0 8px rgba(0, 255, 160, 0.4),
            0 0 14px rgba(0, 255, 160, 0.3);
        }
        .glow-button:hover {
          box-shadow: 0 0 12px rgba(0, 255, 160, 0.6),
            0 0 18px rgba(0, 255, 160, 0.5);
        }
      `}</style>
    </div>
  );
}
