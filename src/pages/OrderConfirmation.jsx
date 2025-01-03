import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-fun-yellow/10 to-fun-purple/10 py-12">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold text-fun-purple mb-4">
            Woohoo! Order Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're so excited to send you your amazing product! 
          </p>
          
          <div className="space-y-6">
            <div className="p-6 bg-fun-purple/5 rounded-xl">
              <h3 className="text-xl font-bold text-fun-purple mb-2">
                What's Next? 🤔
              </h3>
              <p className="text-gray-600">
                Check your email for order details and tracking information!
              </p>
            </div>
            
            <Link 
              to="/contact"
              className="block w-full py-4 bg-fun-purple text-white rounded-lg text-lg font-bold hover:bg-fun-pink transition-colors"
            >
              Need Help? Contact Us! 💬
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}