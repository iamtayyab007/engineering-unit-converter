"use client";

import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Engineering Icon - Compass and Ruler */}
            <svg
              className="w-10 h-10 !text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8M12,16.5C13.57,16.5 15.64,17.11 16.53,17.84C15.29,19.38 13.7,20.55 12,21C10.3,20.55 8.71,19.38 7.47,17.84C8.37,17.11 10.43,16.5 12,16.5Z" />
            </svg>

            <div>
              <h1 className="text-xl font-bold">Engineering Unit Converter</h1>
              <p className="text-xs text-yellow-300">
                Precision calculations for every discipline
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="hover:!text-black transition-colors font-medium"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="hover:!text-black transition-colors flex items-center">
                Calculators
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1 text-sm">
                  <Link
                    href="/hvac-unit-converter"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    HVAC Tools
                  </Link>
                  <Link
                    href="/mechanical-engineering-calculators"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Mechanical Engineering
                  </Link>
                  <Link
                    href="/civil-engineering-converter"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Civil Engineering
                  </Link>
                  <Link
                    href="/electrical-unit-converter"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Electrical Engineering
                  </Link>
                  <Link
                    href="/petroleum-engineering-converter"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Petroleum Engineering
                  </Link>
                  <Link
                    href="/structural-steel-calculator"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Structural Steel
                  </Link>
                </div>
              </div>
            </div>
            <Link href="#about" className="hover:!text-black transition-colors">
              About
            </Link>
            <Link
              href="#features"
              className="hover:!text-black transition-colors"
            >
              Features
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden flex flex-col space-y-3 pb-3">
            <Link
              href="/"
              className="hover:!text-black transition-colors font-medium"
            >
              Home
            </Link>

            {/* Mobile Calculators Section */}
            <div className="py-2">
              <p className="!text-black font-medium mb-2">
                Specialized Calculators
              </p>
              <div className="pl-4 flex flex-col space-y-2">
                <Link
                  href="/hvac-unit-converter"
                  className="hover:!text-black transition-colors"
                >
                  HVAC Tools
                </Link>
                <Link
                  href="/mechanical-engineering-calculators"
                  className="hover:!text-black transition-colors"
                >
                  Mechanical Engineering
                </Link>
                <Link
                  href="/civil-engineering-converter"
                  className="hover:!text-black transition-colors"
                >
                  Civil Engineering
                </Link>
                <Link
                  href="/electrical-unit-converter"
                  className="hover:!text-black transition-colors"
                >
                  Electrical Engineering
                </Link>
                <Link
                  href="/petroleum-engineering-converter"
                  className="hover:!text-black transition-colors"
                >
                  Petroleum Engineering
                </Link>
                <Link
                  href="/structural-steel-calculator"
                  className="hover:!text-black transition-colors"
                >
                  Structural Steel
                </Link>
              </div>
            </div>

            <Link href="#about" className="hover:!text-black transition-colors">
              About
            </Link>
            <Link
              href="#features"
              className="hover:!text-black transition-colors"
            >
              Features
            </Link>
          </nav>
        )}
      </div>

      {/* Engineering-themed decorative element */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"></div>
    </header>
  );
}
