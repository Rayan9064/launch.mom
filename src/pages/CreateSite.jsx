import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const STEPS = [
  { id: 'BASIC_INFO', label: 'Basic Info 📝', emoji: '1️⃣' },
  { id: 'PRICING', label: 'Pricing 💰', emoji: '2️⃣' },
  { id: 'MEDIA', label: 'Media 🖼️', emoji: '3️⃣' },
  { id: 'SHIPPING', label: 'Shipping 🚚', emoji: '4️⃣' },
  { id: 'VARIANTS', label: 'Variants 🎨', emoji: '5️⃣' },
  { id: 'TEMPLATE', label: 'Template ✨', emoji: '6️⃣' }
]

export default function CreateSite() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    sku: '',
    price: '',
    discountPrice: '',
    discountPercentage: '',
    saleStartDate: '',
    saleEndDate: '',
    imageUrl: '',
    imageUrls: '',
    weight: '',
    dimensions: '',
    shippingCost: '',
    shippingRegion: '',
    variants: '',
    status: 'Active',
    visibility: 'Public',
    tags: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const viewTemplate = () => {
    navigate('/template', { state: { formData } })
  }

  const renderBasicInfo = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Product Title 🏷️
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="Magic Coffee Maker"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Description ✍️
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          rows="4"
          placeholder="Tell us about your amazing product!"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Category 📁
        </label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="Electronics, Fashion, etc."
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          SKU 🔢
        </label>
        <input
          type="text"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="MCM-12345"
          required
        />
      </div>
    </div>
  )

  const renderPricing = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Regular Price 💰
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="29.99"
          step="0.01"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Sale Price 🏷️
        </label>
        <input
          type="number"
          name="discountPrice"
          value={formData.discountPrice}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="24.99"
          step="0.01"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-lg font-medium text-fun-purple">
            Sale Start 📅
          </label>
          <input
            type="date"
            name="saleStartDate"
            value={formData.saleStartDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          />
        </div>

        <div className="space-y-2">
          <label className="text-lg font-medium text-fun-purple">
            Sale End 📅
          </label>
          <input
            type="date"
            name="saleEndDate"
            value={formData.saleEndDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          />
        </div>
      </div>
    </div>
  )

  const renderMedia = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Main Image URL 🖼️
        </label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Gallery Images 📸
        </label>
        <textarea
          name="imageUrls"
          value={formData.imageUrls}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="Add multiple image URLs (comma separated)"
          rows="4"
        />
      </div>
    </div>
  )

  const renderShipping = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Weight 📦
        </label>
        <input
          type="text"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="0.5kg"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Dimensions 📏
        </label>
        <input
          type="text"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="20x15x10 cm"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Shipping Cost 🚚
        </label>
        <input
          type="number"
          name="shippingCost"
          value={formData.shippingCost}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="5.99"
          step="0.01"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Shipping Regions 🌎
        </label>
        <input
          type="text"
          name="shippingRegion"
          value={formData.shippingRegion}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="US, Canada, UK"
          required
        />
      </div>
    </div>
  )

  const renderVariants = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Product Variants 🎨
        </label>
        <textarea
          name="variants"
          value={formData.variants}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="Add variants (comma separated) e.g.: Red, Blue, Green"
          rows="4"
        />
      </div>

      <div className="space-y-2">
        <label className="text-lg font-medium text-fun-purple">
          Tags 🏷️
        </label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-fun-purple/20 focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20"
          placeholder="electronics, headphones, wireless"
        />
      </div>
    </div>
  )

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderBasicInfo()
      case 1:
        return renderPricing()
      case 2:
        return renderMedia()
      case 3:
        return renderShipping()
      case 4:
        return renderVariants()
      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="text-6xl">🎨</div>
            <h3 className="text-2xl font-bold text-fun-purple">
              Ready to Preview Your Site!
            </h3>
            <p className="text-gray-600">
              Click the button below to see how your product will look! ✨
            </p>
          </div>
        )
      default:
        return null
    }
  }

  const renderStepIndicators = () => (
    <div className="flex justify-between mb-8">
      {STEPS.map((step, index) => (
        <div 
          key={step.id}
          className={`flex flex-col items-center space-y-2 ${
            index === currentStep 
              ? 'text-fun-purple' 
              : index < currentStep 
                ? 'text-fun-pink' 
                : 'text-gray-400'
          }`}
        >
          <span className="text-2xl">{step.emoji}</span>
          <span className="text-sm font-medium hidden md:block">{step.label}</span>
        </div>
      ))}
    </div>
  )

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div 
        className="bg-gradient-to-r from-fun-purple to-fun-pink h-2.5 rounded-full transition-all"
        style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
      ></div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-fun-purple/10 to-fun-pink/10 py-12">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-fun-purple text-center mb-8">
            Let's Create Something Amazing! ✨
          </h1>
          
          {renderStepIndicators()}
          {renderProgressBar()}
          
          <form className="space-y-6">
            {renderStepContent()}
            
            <div className="flex justify-between space-x-4">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  ← Back to {STEPS[currentStep - 1].label}
                </button>
              )}
              
              {currentStep < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-fun-purple text-white rounded-lg hover:bg-fun-pink transition-colors ml-auto"
                >
                  Next: {STEPS[currentStep + 1].label} →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={viewTemplate}
                  className="px-6 py-3 bg-fun-purple text-white rounded-lg hover:bg-fun-pink transition-colors ml-auto animate-bounce-slow"
                >
                  Preview Template! 🎨
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}