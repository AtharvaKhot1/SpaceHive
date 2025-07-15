import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is SpaceHive?',
    answer: 'SpaceHive is a platform to discover and book unique spaces for meetings, events, and productions.'
  },
  {
    question: 'How do I book a space?',
    answer: 'Browse available spaces, select your preferred venue, and follow the booking instructions on the space page.'
  },
  {
    question: 'Can I list my own space?',
    answer: 'Yes! Click on "List Your Space" in the navigation to get started as a host.'
  },
  {
    question: 'Is there a fee to use SpaceHive?',
    answer: 'Browsing is free. Fees may apply when booking or listing a space, depending on the service.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach out to our support team via the Contact Us section in the footer.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="w-full bg-[#111] py-44 text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Side */}
        <div className="mb-12 md:mb-0">
          <div className="uppercase tracking-widest text-sm text-gray-400 mb-40">Frequently Asked Questions</div>
          <h2 className="text-5xl md:text-[5vw] font-extrabold leading-[0.9] mb-8">Everything you<br />need to know</h2>
          <p className="text-lg text-white mb-8 max-w-md">
            If you have more questions, feel free to send us an email. We’ll make our best to answer you as soon as we can.
          </p>
        </div>
        {/* Right Side: Accordion */}
        <div className="space-y-9 w-full md:ml-24 mt-20 md:mt-32">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-[#18181b] border border-[#232329] rounded-xl transition-all duration-200 ${openIndex === idx ? 'shadow-lg' : ''}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-mono text-base md:text-lg tracking-wide text-gray-200 group-hover:text-white transition">↳ {faq.question}</span>
                <svg
                  className={`w-5 h-5 ml-4 transform transition-transform duration-200 ${openIndex === idx ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 text-gray-300 text-base transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{ transitionProperty: 'max-height, opacity' }}
              >
                {openIndex === idx && faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 