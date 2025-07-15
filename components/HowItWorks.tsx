import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import { Search, HandIcon, CalendarDays, Users } from 'lucide-react';

const howItWorksItems = [
  {
    title: 'Browse Venues',
    description: 'Check out the best suited Venues, compare photos, special offers and function packages.',
    icon: (
      <Search size={56} strokeWidth={2.2} className="mb-4 mx-auto text-blue-400" />
    ),
    link: '#',
  },
  {
    title: 'Request Quotes',
    description: 'Get custom quotes of your short-listed Venues at the click of GET FREE QUOTES button.',
    icon: (
      <HandIcon size={56} strokeWidth={2.2} className="mb-4 mx-auto text-yellow-500" />
    ),
    link: '#',
  },
  {
    title: 'Book a Venue',
    description: 'Select and Book the perfect venue in no time at all. Time is money, save both.',
    icon: (
      <CalendarDays size={56} strokeWidth={2.2} className="mb-4 mx-auto text-red-400" />
    ),
    link: '#',
  },
  {
    title: 'Event Planning',
    description: 'Plan your event effortlessly with expert guidance. Save time, stay stress-free.',
    icon: (
      <Users size={56} strokeWidth={2.2} className="mb-4 mx-auto text-cyan-500" />
    ),
    link: '#',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 mt-4">How it Works?</h2>
        <HoverEffect
          items={howItWorksItems.map(({ title, description, icon, link }) => ({
            title: (
              <>
                {icon}
                <span>{title}</span>
              </>
            ),
            description,
            link,
          }))}
          className="md:grid-cols-4"
        />
      </div>
    </section>
  );
} 