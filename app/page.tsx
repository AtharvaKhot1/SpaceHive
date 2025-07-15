"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Header from '../components/Header'
import Hero from '../components/Hero'
import ActivityShowcase from '../components/ActivityShowcase'
import HowItWorks from '../components/HowItWorks'
import FeaturedSpaces from '../components/FeaturedSpaces'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer.jsx'

export default function Home() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((el, idx) => {
      if (!el) return;
      // Do not animate the footer (last section)
      if (idx === 3) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <section className="section-hero" ref={el => { sectionRefs.current[0] = el; }}>
        <Hero />
      </section>
      <section className="section-activity-showcase" ref={el => { sectionRefs.current[1] = el; }}>
        <ActivityShowcase />
      </section>
      <section className="section-how-it-works" ref={el => { sectionRefs.current[2] = el; }}>
        <HowItWorks />
      </section>
      {/* FAQ Section */}
      <section>
        <FAQ />
      </section>
      <section className="section-footer" ref={el => { sectionRefs.current[3] = el; }}>
        <Footer />
      </section>
    </main>
  )
} 