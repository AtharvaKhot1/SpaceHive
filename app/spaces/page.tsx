import Header from '../../components/Header'
import Footer from '../../components/Footer.jsx'
import SpaceCard from '../../components/SpaceCard'
import FeaturedSpaces from '../../components/FeaturedSpaces'

const allSpaces = [
  {
    id: '1',
    title: 'Modern Conference Room',
    location: 'San Francisco, CA',
    price: 150,
    rating: 4.8,
    reviewCount: 127,
    capacity: 'Up to 20 people',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    category: 'Conference Room'
  },
  {
    id: '2',
    title: 'Industrial Photo Studio',
    location: 'Los Angeles, CA',
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
    location: 'New York, NY',
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
  },
  {
    id: '7',
    title: 'Creative Co-working Space',
    location: 'Seattle, WA',
    price: 120,
    rating: 4.4,
    reviewCount: 67,
    capacity: 'Up to 30 people',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    category: 'Co-working'
  },
  {
    id: '8',
    title: 'Luxury Penthouse for Events',
    location: 'Chicago, IL',
    price: 600,
    rating: 4.9,
    reviewCount: 145,
    capacity: 'Up to 150 people',
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
    category: 'Luxury Venue'
  }
]

export default function SpacesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Add FeaturedSpaces section here */}
      <FeaturedSpaces />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Spaces
            </h1>
            <p className="text-xl text-gray-600">
              Discover {allSpaces.length} unique spaces for your next event
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="input-field">
                <option value="">All Categories</option>
                <option value="conference">Conference Room</option>
                <option value="photo">Photo Studio</option>
                <option value="wedding">Wedding Venue</option>
                <option value="film">Film Studio</option>
                <option value="meeting">Meeting Room</option>
                <option value="event">Event Space</option>
              </select>
              
              <select className="input-field">
                <option value="">All Locations</option>
                <option value="sf">San Francisco</option>
                <option value="la">Los Angeles</option>
                <option value="ny">New York</option>
                <option value="atlanta">Atlanta</option>
                <option value="austin">Austin</option>
                <option value="miami">Miami</option>
              </select>
              
              <select className="input-field">
                <option value="">Price Range</option>
                <option value="0-100">$0 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="200-500">$200 - $500</option>
                <option value="500+">$500+</option>
              </select>
              
              <button className="btn-primary">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Spaces Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allSpaces.map((space) => (
              <SpaceCard key={space.id} {...space} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Spaces
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 