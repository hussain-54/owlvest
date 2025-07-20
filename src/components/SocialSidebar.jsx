import React from 'react';
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';

export default function SocialSidebar() {
  return (
    <div className="fixed top-1/2 right-2 -translate-y-1/2 z-50 flex flex-col gap-4">
      <a
        href="https://twitter.com/your_profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-500 p-2 rounded-full hover:scale-110 hover:shadow-lg transition"
        title="Twitter"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="https://discord.gg/your_invite"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-indigo-600 p-2 rounded-full hover:scale-110 hover:shadow-lg transition"
        title="Discord"
      >
        <FaDiscord size={20} />
      </a>
      <a
        href="https://instagram.com/your_profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-pink-500 p-2 rounded-full hover:scale-110 hover:shadow-lg transition"
        title="Instagram"
      >
        <FaInstagram size={20} />
      </a>
    </div>
  );
}
