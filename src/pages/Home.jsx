import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-fun-purple/10 via-fun-pink/10 to-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-fun-purple to-fun-pink text-transparent bg-clip-text">
              Your Mom's Favorite Website Builder! 🚀
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              Launch your drop shipping empire for just $9/year! 
              No coding needed - just vibes! ✨
            </p>
            <Link 
              to="/create" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-fun-purple to-fun-pink text-white text-xl font-bold rounded-lg hover:scale-105 transition-transform animate-bounce-slow"
            >
              Start Building! 🏗️
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-fun-purple">
            Why Your Mom Will Love Us! 💝
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-xl hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-fun-purple mb-4">Super Affordable</h3>
              <p className="text-gray-600">
                Just $9/year! That's like, one coffee! ☕️
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-xl hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">⚡️</div>
              <h3 className="text-2xl font-bold text-fun-pink mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Launch in minutes, not days! Zoom zoom! 🏎️
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-xl hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-fun-coral mb-4">Super Secure</h3>
              <p className="text-gray-600">
                Stripe payments = happy customers! 🎉
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}