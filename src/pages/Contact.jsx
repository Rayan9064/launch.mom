import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-fun-cyan/10 to-fun-yellow/10 py-12">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-fun-cyan text-center mb-8">
            Let's Chat! 💬
          </h1>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-6 bg-fun-cyan/5 rounded-xl hover:scale-105 transition-transform">
              <span className="text-4xl">📱</span>
              <div>
                <h3 className="text-xl font-bold text-fun-cyan">WhatsApp</h3>
                <p className="text-gray-600">Message us anytime!</p>
                <a href="https://wa.me/1234567890" className="text-fun-cyan hover:text-fun-purple">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-fun-purple/5 rounded-xl hover:scale-105 transition-transform">
              <span className="text-4xl">📧</span>
              <div>
                <h3 className="text-xl font-bold text-fun-purple">Email</h3>
                <p className="text-gray-600">We reply super fast!</p>
                <a href="mailto:hello@launch.mom" className="text-fun-purple hover:text-fun-cyan">
                  hello@launch.mom
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-fun-pink/5 rounded-xl hover:scale-105 transition-transform">
              <span className="text-4xl">💭</span>
              <div>
                <h3 className="text-xl font-bold text-fun-pink">Quick Question?</h3>
                <p className="text-gray-600">We're here to help!</p>
                <button className="text-fun-pink hover:text-fun-purple">
                  Open Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}