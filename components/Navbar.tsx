'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-cream shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold font-serif text-gold hover:text-dark transition-colors">
              IMAANI
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-dark hover:text-gold transition-colors font-medium">
              Home
            </Link>
            <Link href="#featured" className="text-dark hover:text-gold transition-colors font-medium">
              Featured
            </Link>
            <Link href="#about" className="text-dark hover:text-gold transition-colors font-medium">
              About
            </Link>
            <Link href="#contact" className="text-dark hover:text-gold transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-dark hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-cream bg-gold rounded-full">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}