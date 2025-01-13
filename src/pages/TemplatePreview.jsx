import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function TemplatePreview() {
  const { templateId } = useParams()
  const location = useLocation()
  const formData = location.state?.formData || {}

  const renderModernTemplate = () => (
    <div className="max-w-6xl mx-auto p-8">
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
          <h1 className="text-4xl font-bold text-fun-purple">
            {formData.title || 'Product Title'}
          </h1>
          
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
          
          <button className="w-full py-4 bg-fun-purple text-white rounded-lg text-xl font-bold hover:bg-fun-pink transition-colors animate-bounce-slow">
            Buy Now! 🛍️
          </button>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-fun-purple/5 rounded-xl">
              <span className="block text-2xl mb-2">🚚</span>
              <span className="text-sm font-medium text-fun-purple">
                Free Shipping
              </span>
            </div>
            <div className="p-4 bg-fun-pink/5 rounded-xl">
              <span className="block text-2xl mb-2">⭐️</span>
              <span className="text-sm font-medium text-fun-pink">
                Best Quality
              </span>
            </div>
            <div className="p-4 bg-fun-cyan/5 rounded-xl">
              <span className="block text-2xl mb-2">💝</span>
              <span className="text-sm font-medium text-fun-cyan">
                Money Back
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderClassicTemplate = () => (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-fun-purple mb-8">
        {formData.title || 'Product Title'}
      </h1>
      
      <div className="mb-12">
        <img 
          src={formData.imageUrl || 'https://placehold.co/800x400'} 
          alt={formData.title}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-3xl font-bold text-fun-pink">
              ${formData.price || '0.00'}
            </span>
            {formData.discountPrice && (
              <span className="ml-4 text-xl text-gray-500 line-through">
                ${formData.discountPrice}
              </span>
            )}
          </div>
          
          <button className="w-full py-4 bg-fun-purple text-white rounded-lg text-xl font-bold hover:bg-fun-pink transition-colors">
            Add to Cart 🛒
          </button>
          
          {formData.variants && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-fun-purple">Options</h3>
              <select className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple">
                {formData.variants.split(',').map((variant, index) => (
                  <option key={index} value={variant.trim()}>
                    {variant.trim()}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        
        <div className="space-y-6">
          <div className="prose">
            <h3 className="text-xl font-semibold text-fun-purple">Description</h3>
            <p className="text-gray-600">
              {formData.description || 'Product description goes here'}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-fun-purple">Shipping</h3>
            <p className="text-gray-600">
              Ships to: {formData.shippingRegion || 'Worldwide'}
            </p>
            <p className="text-gray-600">
              Weight: {formData.weight || 'N/A'}
            </p>
            <p className="text-gray-600">
              Dimensions: {formData.dimensions || 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-fun-purple/10 to-fun-pink/10 py-12">
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-fun-purple">
              {templateId === 'modern' ? 'Modern Template' : 'Classic Template'} Preview ✨
            </h2>
            <p className="text-gray-600">
              Here's how your product will look with this template!
            </p>
          </div>
          
          {templateId === 'modern' ? renderModernTemplate() : renderClassicTemplate()}
        </div>
      </div>
    </div>
  )
}