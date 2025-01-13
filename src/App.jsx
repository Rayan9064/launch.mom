import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import { AuthProvider } from './components/auth/AuthProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import GitHubCallback from './pages/auth/GitHubCallback'
import CreateSite from './pages/CreateSite'
import Template from './pages/Template'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import Contact from './pages/Contact'

function App() {
  return (
    // <AuthProvider>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow"><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/github" element={<GitHubCallback />} />
        <Route path="/create" element={<CreateSite />} />
        <Route path="/template" element={<Template />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<OrderConfirmation />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      </main>
      <Footer />
    </div>
    // </AuthProvider>
  )
}

export default App