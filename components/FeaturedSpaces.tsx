'use client'

import SpaceCard from './SpaceCard'

const featuredSpaces = [
  {
    id: '1',
    title: 'Modern Conference Room',
    location: 'Mumbai, India',
    price: 150,
    rating: 4.8,
    reviewCount: 127,
    capacity: 'Up to 20 people',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    category: 'Conference Room'
  },
  {
    id: '2',
    title: 'birthday Party',
    location: 'lonaval',
    price: 200,
    rating: 4.9,
    reviewCount: 89,
    capacity: 'Up to 15 people',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Photo Studio'
  },
  {
    id: '3',
    title: 'Elegant Wedding Venue',
    location: '',
    price: 500,
    rating: 4.7,
    reviewCount: 203,
    capacity: 'Up to 200 people',
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
    category: 'Wedding Venue'
  },
  {
    id: '4',
    title: 'Film Production Studio',
    location: 'Atlanta, GA',
    price: 300,
    rating: 4.6,
    reviewCount: 156,
    capacity: 'Up to 50 people',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Film Studio'
  },
  {
    id: '5',
    title: 'Cozy Meeting Space',
    location: 'Austin, TX',
    price: 75,
    rating: 4.5,
    reviewCount: 94,
    capacity: 'Up to 12 people',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    category: 'Meeting Room'
  },
  {
    id: '6',
    title: 'Rooftop Event Space',
    location: 'Miami, FL',
    price: 400,
    rating: 4.8,
    reviewCount: 178,
    capacity: 'Up to 100 people',
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
    category: 'Event Space'
  }
]

export default function FeaturedSpaces() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Spaces
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover handpicked venues that are perfect for your next event, meeting, or production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSpaces.map((space) => (
            <SpaceCard key={space.id} {...space} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Spaces
          </button>
        </div>
      </div>
    </section>
  )
} 