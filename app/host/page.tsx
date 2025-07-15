import Header from '../../components/Header'
import Footer from '../../components/Footer.jsx'

export default function HostPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            List Your Space
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Turn your space into income. Join thousands of hosts who are earning money by sharing their unique spaces.
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">List Your Space</h3>
                <p className="text-gray-600">Create a detailed listing with photos and descriptions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Get Bookings</h3>
                <p className="text-gray-600">Receive booking requests from verified guests</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Earn Money</h3>
                <p className="text-gray-600">Get paid securely after each successful booking</p>
              </div>
            </div>
            
            <button className="btn-primary text-lg px-8 py-4">
              Start Listing Your Space
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Host with Peerspace?
            </h2>
            <p className="text-xl text-gray-600">
              Join our community of successful space hosts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Extra Income</h3>
              <p className="text-gray-600">Average hosts earn $2,000+ per month by listing their spaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Protection</h3>
              <p className="text-gray-600">Comprehensive insurance and damage protection included</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Guests</h3>
              <p className="text-gray-600">All guests are verified and reviewed by our community</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
              <p className="text-gray-600">Manage bookings, messages, and payments all in one place</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Connect with guests from around the world</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help whenever you need it with our dedicated support team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of hosts who are already earning money with their spaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              List Your Space Now
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 