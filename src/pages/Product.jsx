import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-gradient-to-b from-fun-yellow/10 to-fun-coral/10 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-fun-purple/5 rounded-xl p-4">
                <img
                  src="https://placehold.co/400x400"
                  alt="Product"
                  className="w-full rounded-lg hover:scale-105 transition-transform"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-fun-purple">
                Magic Coffee Maker ✨
              </h1>
              <p className="text-2xl font-bold text-fun-coral">
                $29.99
              </p>
              <p className="text-gray-600">
                The most amazing coffee maker you'll ever own! Makes your coffee taste like unicorn dreams! ☕️
              </p>
              
              <button
                className="w-full py-4 bg-fun-coral text-white rounded-lg text-lg font-bold hover:bg-fun-pink transition-colors animate-bounce-slow"
              >
                Buy Now! 🛍️
              </button>
              
              <div className="flex items-center space-x-4 text-fun-purple">
                <span>🚚 Fast Shipping</span>
                <span>⭐️ Best Quality</span>
                <span>💖 Love it or Return it</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}