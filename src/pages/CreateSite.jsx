import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function CreateSite() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    siteName: '',
    productName: '',
    price: '',
    description: '',
    imageUrl: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Yay! Your site is being created! 🎉')
    navigate('/product/preview')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-fun-purple/10 to-fun-pink/10 py-12">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-fun-purple text-center mb-8">
            Let's Create Something Amazing! ✨
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-lg font-medium text-fun-purple">
                What should we call your site? 🏠
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
                placeholder="my-awesome-product.mom"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-lg font-medium text-fun-purple">
                What are you selling? 🛍️
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
                placeholder="Magic Coffee Maker"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-lg font-medium text-fun-purple">
                How much does it cost? 💰
              </label>
              <input
                type="number"
                className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
                placeholder="29.99"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-fun-purple text-white rounded-lg text-lg font-bold hover:bg-fun-pink transition-colors animate-wiggle"
            >
              Create My Site! 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}