import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Talha',
    role: 'Founder & CEO',
    image: '/team/17567382-eaa2-48f0-88c4-88471581caae.jpeg',
    bio: 'Visionary behind OwlVest, building startup access for everyone.',
  },
  {
    name: 'Bilal Aftab',
    role: 'Co-Founder & CTO',
    image: '/team/efe51179-1575-4b2d-ba59-55231670c79f.jpeg',
    bio: 'Leads product, engineering, and smart contract development.',
  },
  {
    name: 'Saith Asfand Yar',
    role: 'Strategic Advisor & Tech Lead',
    image: '/team/70aeb262-9104-4ee2-9c6b-c531f288bcb3.jpeg',
    bio: 'Provides technical leadership and strategic direction across the product lifecycle.',
  },
  {
    name: 'Muhammad Imran',
    role: 'Chief Marketing Officer',
    image: '/team/1746765009347.jpeg',
    bio: 'Drives brand strategy, user acquisition, and digital growth campaigns.',
  },
  {
    name: 'Hussain Ahmad Durrani',
    role: 'Frontend Developer',
    image: '/team/1751732897351.png',
    bio: 'Crafts engaging user interfaces and smooth user experiences for OwlVest.',
  },
  {
    name: 'Muhammad Usama',
    role: 'Backend Developer',
    image: '/team/1747747722524.jpeg',
    bio: 'Builds scalable backend systems and ensures efficient data handling.',
  },
  {
    name: 'Mohisn Azam',
    role: 'Blockchain Developer',
    image: '/team/1734034108353.jpeg',
    bio: 'Implements secure blockchain logic and smart contract functionalities.',
  },
];

const partners = [
  { logo: '/partners/google.png', name: 'Google for Startups' },
  { logo: '/partners/athena.png', name: 'Athena VC' },
  { logo: '/partners/i2i.png', name: 'i2i Ventures' },
  { logo: '/partners/hult.png', name: 'Hult Prize' },
];

export default function TeamSection() {
  const topTeam = team.slice(0, 2);
  const restTeam = team.slice(2);

  return (
    <motion.section
      id="team"
      className="bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51] py-20 px-6 text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-pink-500 via-blue-400 to-purple-500 text-transparent bg-clip-text animate-pulse">
          Meet the Team & Backers
        </span>
      </motion.h2>

      {/* Top 2 team members */}
      <div className="flex justify-center mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl w-full">
          {topTeam.map((member, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-600 shadow-md"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-400 text-sm">{member.role}</p>
              <p className="mt-3 text-sm text-gray-300 max-w-xs">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Remaining team members */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full">
          {restTeam.map((member, idx) => (
            <motion.div
              key={idx + 2}
              className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-600 shadow-md"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-400 text-sm">{member.role}</p>
              <p className="mt-3 text-sm text-gray-300 max-w-xs">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partnerships */}
      <div className="mt-24 mb-20">
        <motion.h3
          className="text-xl sm:text-2xl font-semibold text-gray-300 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Trusted by leading ecosystem partners
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center max-w-6xl mx-auto px-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 p-6 rounded-xl flex items-center justify-center h-28 w-28 mx-auto shadow-lg hover:shadow-[0_0_25px_rgba(0,255,160,0.3)] transition duration-300"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-40 h-50 object-contain rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
