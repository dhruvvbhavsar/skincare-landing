import { playfair } from "@/lib/fonts";

export default function Footer() {
    return (
      <footer className="bg-white text-gray-800 py-12 px-4 md:px-40">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Our Mission Section */}
          <div className="lg:col-span-2">
            <h2 className={`text-5xl font-bold mb-4 ${playfair.className}`}>Our Mission</h2>
            <p className="text-gray-600 text-2xl">
              A radical new beauty brand, focused on love for the self and the planet. Our team of health, beauty, and skincare experts set out together to challenge the beauty
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-xl">Categories</a></li>
              <li><a href="#" className="hover:underline text-xl">Skin Care</a></li>
              <li><a href="#" className="hover:underline text-xl">Shop All</a></li>
              <li><a href="#" className="hover:underline text-xl">Trending</a></li>
              <li><a href="#" className="hover:underline text-xl">Blogs</a></li>
            </ul>
          </div>
        
          {/* Company Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-xl">Home</a></li>
              <li><a href="#" className="hover:underline text-xl">Shop</a></li>
              <li><a href="#" className="hover:underline text-xl">About us</a></li>
              <li><a href="#" className="hover:underline text-xl">Blogs</a></li>
              <li><a href="#" className="hover:underline text-xl">My Account</a></li>
            </ul>
          </div>
        
          {/* Payment Method Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Payment</h3>
            <ul className="space-y-2 underline">
              <li className="text-xl">PayPal</li>
              <li className="text-xl">Visa</li>
              <li className="text-xl">Master Card</li>
              <li className="text-xl">American Express</li>
            </ul>
          </div>
        </div>
  
        {/* MavonCare Text */}
        <div className="mt-12 pt-8 flex justify-center">
          <h1 className={`${playfair.className} text-[40px] sm:text-[60px] md:text-[120px] lg:text-[180px] xl:text-[250px] 2xl:text-[300px] leading-none text-center`}>
            MavonCa<span className="text-gray-400">re</span>
          </h1>
        </div>
      </footer>
    );
  }
  