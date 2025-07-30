import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
    {
      name: "About Us",
      submenu: [
        { name: "Our Story", to: "/about-us" },
        { name: "Whitepaper", to: "/whitepaper" },
        { name: "Legal Policies", to: "/legal-policies" },
        { name: "Partner With Us", to: "/partner" },
      ],
    },
  ];

  return (
    <nav className="bg-[#0A0218] text-white sticky top-0 z-50 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-lg font-bold">Logo</div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <li key={idx} className="relative group">
                  <span className="cursor-pointer hover:text-green-400 flex items-center gap-1">
                    {item.name}
                    <ChevronDown size={16} />
                  </span>
                  <ul className="absolute hidden group-hover:block bg-[#1B0E3F] text-white mt-2 rounded shadow-lg z-50">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          to={sub.to}
                          className="block px-4 py-2 hover:bg-[#2F1C55] whitespace-nowrap"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : item.to ? (
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx}>
                  <span className="block text-sm font-medium text-white mt-2">
                    {item.name}
                  </span>
                  <div className="ml-4 space-y-1">
                    {item.submenu.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        to={sub.to}
                        className="block text-sm text-gray-300 hover:text-green-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : item.to ? (
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
