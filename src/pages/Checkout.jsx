import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/confirmation')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-fun-pink/10 to-fun-cyan/10 py-12">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-fun-pink text-center mb-8">
            Almost There! 🎉
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-lg font-medium text-fun-pink">
                Your Name 👋
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border-2 border-fun-pink/20 focus:border-fun-pink focus:ring-2 focus:ring-fun-pink/20"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-lg font-medium text-fun-pink">
                Email Address 📧
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border-2 border-fun-pink/20 focus:border-fun-pink focus:ring-2 focus:ring-fun-pink/20"
                required
              />
            </div>

            <div className="p-6 bg-fun-purple/5 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Magic Coffee Maker ✨</span>
                <span className="text-lg font-bold text-fun-purple">$29.99</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-fun-pink text-white rounded-lg text-lg font-bold hover:bg-fun-purple transition-colors"
            >
              Pay Now! 💸
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}