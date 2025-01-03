import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../components/auth/AuthProvider'

export default function GitHubCallback() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { login } = useAuth()

  useEffect(() => {
    const code = searchParams.get('code')
    if (code) {
      login(code).then(() => {
        navigate('/dashboard')
      }).catch(() => {
        navigate('/login')
      })
    }
  }, [searchParams, login, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">🔄</div>
        <h1 className="text-2xl font-bold text-fun-purple mb-2">
          Logging you in...
        </h1>
        <p className="text-gray-600">Just a moment while we get things ready!</p>
      </div>
    </div>
  )
}