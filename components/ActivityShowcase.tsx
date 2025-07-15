import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const activities = [
  'Photo shoot', 'Meeting', 'Birthday party', 'Video shoot', 'Baby shower',
  'Workshop', 'Wedding reception', 'Live music', 'Party', 'Music video',
  'Bridal shower', 'Event', 'Engagement party', 'Corporate event',
  'Graduation party', 
];

export default function ActivityShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Map activities to images (for now, only 'Graduation party' has a unique image)
  const activityImages = {
    'Graduation party': '/images/hero2.jpg',
    'Meeting': '/images/hero2.jpg',
    'Birthday party': '/images/hero2.jpg',
    'Video shoot': '/images/Video shoot.jpg',
    'Photo shoot': '/images/photo shoot.jpg',
    'Baby shower': '/images/hero2.jpg',
    'Workshop': '/images/hero2.jpg',
    'Wedding reception': '/images/hero2.jpg',
    'Live music': '/images/hero2.jpg',
    'Party': '/images/hero2.jpg',
    // Add more mappings as needed
  };
  const currentActivity = activities[currentIndex];
  const currentImage = activityImages[currentActivity] || '/images/hero.jpg';

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left: Headline, description, tags, button */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="text-6xl font-bold text-gray-900 mb-3 leading-tight">A space for<br />every moment</h2>
          <p className="text-lg text-gray-700 mb-[11rem]">Book a unique space for your activity</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 max-w-2xl">
            {activities.map((activity, i) => (
              <span
                key={activity}
                className={`cursor-pointer ${i === currentIndex ? 'font-bold text-black' : 'text-gray-500 font-medium'}`}
                onClick={() => setCurrentIndex(i)}
              >
                {activity}
              </span>
            ))}
          </div>
          <button className="bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-900 transition">Browse all activities</button>
        </div>
        {/* Right: Image and vertical label */}
        <div className="flex-1 flex flex-col items-center relative min-w-[450px] max-w-[900px] w-full">
          <div className="relative w-full aspect-square">
            <Image
              src={currentImage}
              alt={currentActivity}
              fill
              className="rounded object-cover"
              style={{ objectPosition: 'center' }}
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full rotate-90 origin-bottom-right text-black text-sm font-medium tracking-wide whitespace-nowrap">
              {currentActivity}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 