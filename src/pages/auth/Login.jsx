import React from 'react'
import LoginButton from '../../components/auth/LoginButton'

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-fun-purple/10 to-fun-pink/10 py-12">
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-4xl font-bold text-fun-purple mb-6">
            Welcome Back! 👋
          </h1>
          <p className="text-gray-600 mb-8">
            Login to manage your drop shipping empire! ✨
          </p>
          
          <div className="space-y-4">
            <LoginButton isGitHubLogin={true} />
            
            <p className="text-sm text-gray-500">
              By logging in, you'll get access to:
            </p>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-fun-purple/5 rounded-lg">
                <span className="text-2xl">🚀</span>
                <p className="text-sm font-medium text-fun-purple">Quick Deploy</p>
              </div>
              <div className="p-4 bg-fun-pink/5 rounded-lg">
                <span className="text-2xl">📊</span>
                <p className="text-sm font-medium text-fun-pink">Order Tracking</p>
              </div>
              <div className="p-4 bg-fun-cyan/5 rounded-lg">
                <span className="text-2xl">💳</span>
                <p className="text-sm font-medium text-fun-cyan">Stripe Payments</p>
              </div>
              <div className="p-4 bg-fun-yellow/5 rounded-lg">
                <span className="text-2xl">📱</span>
                <p className="text-sm font-medium text-fun-yellow">Mobile Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}