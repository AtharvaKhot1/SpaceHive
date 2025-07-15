'use client';
import React, { useState } from 'react';

export default function Content() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (email.trim() !== '') {
      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        if (data.success) {
          setSubmitted(true);
          setEmail('');
          setTimeout(() => setSubmitted(false), 3000);
        } else {
          setError('Something went wrong. Please try again.');
        }
      } catch {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="bg-[#111] text-white w-full flex flex-col min-h-screen pb-20 justify-between relative overflow-hidden">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row w-full px-8 pt-16 gap-12 md:gap-0">
        {/* Left: Newsletter */}
        <div className="md:w-1/2 flex flex-col justify-start">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-10">Never miss what's next</h2>
          <form className="flex items-center border-b border-gray-700 max-w-xl mb-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent outline-none text-2xl flex-1 py-2 placeholder-white font-semibold"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="ml-6 flex items-center font-mono text-base tracking-wide uppercase text-white hover:text-gray-300">
              ↳ <span className="ml-2">Submit</span>
            </button>
          </form>
          {submitted && (
            <div className="text-green-400 text-sm mb-2">Thank you for subscribing!</div>
          )}
          {error && (
            <div className="text-red-400 text-sm mb-2">{error}</div>
          )}
          <p className="text-gray-300 text-sm max-w-xl mt-2">
            By submitting your email, you’ll be the first to know about upcoming updates for Space Hive. You can unsubscribe at any time.
          </p>
        </div>
        {/* Center: Social & Pages */}
        <div className="md:w-1/3 flex flex-row justify-center gap-20 mt-12 md:mt-0">
          <div>
            <h3 className="uppercase text-gray-400 text-sm mb-3 tracking-widest">Social</h3>
            <ul className="space-y-1 font-mono text-base">
              <li>X(Twitter)</li>
              <li>Instagram</li>
              <li>Github</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-gray-400 text-sm mb-3 tracking-widest">Pages</h3>
            <ul className="space-y-1 font-mono text-base">
              <li>Home</li>
              <li>Browse Spaces</li>
              <li>List Your Space</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        {/* Right: Contact */}
        <div className="md:w-1/6 flex flex-col items-start md:items-end mt-12 md:mt-0">
          <h3 className="uppercase text-gray-400 text-sm mb-3 tracking-widest">Contact</h3>
          <span className="font-mono text-lg font-bold tracking-widest">Reach Us</span>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="flex flex-row justify-between items-end w-full px-8 pb-2 pt-16 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-6 font-mono text-base">
            <span>2025©</span>
            <span>PERMISSIONS & TERMS</span>
            <span>PRIVACY POLICY</span>
          </div>
        </div>
        <div className="hidden md:block absolute right-0 bottom-0 z-0 pointer-events-none select-none">
          <span className="text-[7vw] font-extrabold text-white/90 leading-none whitespace-nowrap pr-4" style={{letterSpacing: '-0.04em'}}>Space Hive</span>
        </div>
      </div>
    </div>
  );
}