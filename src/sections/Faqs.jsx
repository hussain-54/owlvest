import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is Owlvest?',
    answer: 'Owlvest is a platform that lets investors swipe through verified startups and invest directly using our native token, $OwlCoin.'
  },
  {
    question: 'How does $OwlCoin work?',
    answer: '$OwlCoin is a utility token that unlocks whitelist access, staking rewards, governance voting, and referral bonuses.'
  },
  {
    question: 'Is this another memecoin?',
    answer: 'No. Owlvest is focused on real utility, real startups, and real value. $OwlCoin powers access—not hype.'
  },
  {
    question: 'How do I join the whitelist?',
    answer: 'You can join by connecting your wallet and entering your email or Telegram in the "Join the Movement" section.'
  },
  {
    question: 'What fees does Owlvest charge?',
    answer: 'We charge a 2–5% fee on investments. SDG-aligned or impact startups can raise for free.'
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51]s text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">❓ Frequently Asked Questions</h2>
        <p className="text-gray-300 mb-12">Got questions? We’ve got answers.</p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1A1231] p-5 rounded-lg cursor-pointer hover:bg-purple-900 transition"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index && <p className="text-gray-300 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
