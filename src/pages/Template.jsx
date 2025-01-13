import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Template() {
  const location = useLocation()
  const navigate = useNavigate()
  const formData = location.state?.formData || {}

  const handleCreateSite = () => {
    // TODO: Handle site creation
    toast.success('Yay! Your site is being created! 🎉')
    navigate('/product/preview')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-fun-purple/10 to-fun-pink/10 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-fun-purple mb-4">
              Your Amazing Product Preview! ✨
            </h1>
            <p className="text-gray-600 text-lg">
              Here's how your product page will look! Ready to launch? 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <img 
                src={formData.imageUrl || 'https://placehold.co/600x400'} 
                alt={formData.title}
                className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform"
              />
              <div className="grid grid-cols-4 gap-4">
                {formData.imageUrls?.split(',').map((url, index) => (
                  <img 
                    key={index}
                    src={url.trim() || 'https://placehold.co/150x150'} 
                    alt={`${formData.title} ${index + 1}`}
                    className="w-full rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-fun-purple">
                {formData.title || 'Product Title'}
              </h2>
              
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-fun-pink">
                  ${formData.price || '0.00'}
                </span>
                {formData.discountPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${formData.discountPrice}
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 text-lg">
                {formData.description || 'Product description goes here'}
              </p>
              
              {formData.variants && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-fun-purple">Variants</h3>
                  <div className="flex flex-wrap gap-3">
                    {formData.variants.split(',').map((variant, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 border-2 border-fun-purple/20 rounded-lg hover:border-fun-purple transition-colors"
                      >
                        {variant.trim()}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <button 
                onClick={handleCreateSite}
                className="w-full py-4 bg-fun-purple text-white rounded-lg text-xl font-bold hover:bg-fun-pink transition-colors animate-bounce-slow"
              >
                Create My Site! 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}