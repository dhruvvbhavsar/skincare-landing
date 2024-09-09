"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Heart, ShoppingCart, User } from "lucide-react";
import { playfair } from "@/lib/fonts";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      setIsSticky(window.scrollY > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-transparent backdrop-blur-md ${
        isSticky ? "fixed top-0 left-0 right-0 shadow-md" : ""
      } transition-all duration-300 ease-in-out z-10 w-full`}
    >
      <nav className="px-4 sm:px-6 lg:px-8 xl:px-40 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-xl sm:text-2xl lg:text-3xl font-bold text-black ${playfair.className}`}
            >
              MavonCa<span className="text-gray-400">re</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center text-base xl:text-xl font-bold space-x-4 xl:space-x-8">
            <Link
              href="#"
              className="text-black/50 hover:text-black relative"
            >
              Home
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-lime-600"></span>
            </Link>
            <Link
              href="#"
              className="text-black/50 hover:text-black"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-black/50 hover:text-black"
            >
              Skin care
            </Link>
            <Link
              href="#"
              className="text-black/50 hover:text-black"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-black/50 hover:text-black"
            >
              Contact us
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link href="#" className="text-black/50 hover:text-black">
              <Search className="w-5 h-5 xl:w-6 xl:h-6" />
            </Link>
            <Link href="#" className="text-black/50 hover:text-black">
              <Heart className="w-5 h-5 xl:w-6 xl:h-6" />
            </Link>
            <Link href="#" className="text-black/50 hover:text-black">
              <ShoppingCart className="w-5 h-5 xl:w-6 xl:h-6" />
            </Link>
            <Link href="#" className="text-black/50 hover:text-black">
              <User className="w-5 h-5 xl:w-6 xl:h-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="text-black/50 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-black/50 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-black/50 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Skin care
            </Link>
            <Link
              href="#"
              className="text-black/50 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-black/50 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact us
            </Link>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex justify-around">
            <Link href="#" className="text-black/50 hover:text-black">
              <Search className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-black/50 hover:text-black">
              <Heart className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-black/50 hover:text-black">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-black/50 hover:text-black">
              <User className="w-6 h-6" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}