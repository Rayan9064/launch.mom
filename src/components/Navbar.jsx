import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './auth/AuthProvider'
import LoginButton from './auth/LoginButton'

export default function Navbar() {
  const { user } = useAuth()

  return (
    <nav className="bg-white shadow-lg">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-fun-purple hover:text-fun-pink transition-colors">
            launch.MOM 🚀
          </Link>
          <div className="space-x-6">
            {user ? (
              <Link 
                to="/create" 
                className="px-6 py-3 bg-gradient-to-r from-fun-purple to-fun-pink text-white font-bold rounded-lg hover:scale-105 transition-transform animate-bounce-slow"
              >
                Create Site ✨
              </Link>
            ) : (
              <LoginButton isGitHubLogin={false}/>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}