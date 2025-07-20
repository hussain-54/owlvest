// src/components/WalletConnect.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅

export const ConnectWallet = () => {
  const navigate = useNavigate(); // ✅

  const handleClick = () => {
    navigate('/connect-wallet'); // ✅ Redirect
  };

  return (
    <button
      onClick={handleClick}
      className="px-5 py-2 bg-[#2FFB9C] text-gray-900 rounded-md font-medium hover:bg-gray-100 transition"
    >
      Connect Wallet
    </button>
  );
};
