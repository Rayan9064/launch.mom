import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Launch.mom</h3>
            <p className="text-gray-600">
              Quick and affordable product websites for drop shippers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-gray-600 hover:text-primary-600">
                  Create Site
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@launch.mom</li>
              <li>WhatsApp: +1234567890</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Launch.mom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}