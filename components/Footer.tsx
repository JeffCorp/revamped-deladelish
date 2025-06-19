import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/images/dark-logo.png" alt="Dela Delish" width={32} height={32} />
                <span className="flex">
                  <span className="text-[24px] font-bold text-white">dela</span>
                  <span className="text-[24px] font-light text-white">delish</span>
                </span>
              </Link>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              A culinary experience of comfort and wellness, delivered fresh to your door.
            </p>
            <div className="flex items-center space-x-3">
              <Star className="h-6 w-6 text-food-red fill-current" />
              <span className="font-extrabold text-xl">4.9/5</span>
              <span className="text-gray-400">from 10,000+ reviews</span>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Order</h3>
            <div className="space-y-4">
              <Link href="/menu/savory" className="block text-gray-400 hover:text-white transition-colors text-lg group">
                <span className="group-hover:text-food-red transition-colors">Savory Delights</span>
              </Link>
              <Link href="/menu/light" className="block text-gray-400 hover:text-white transition-colors text-lg group">
                <span className="group-hover:text-food-red transition-colors">Light & Fresh</span>
              </Link>
              <Link href="/menu/balanced" className="block text-gray-400 hover:text-white transition-colors text-lg group">
                <span className="group-hover:text-food-red transition-colors">Wholesome Balanced</span>
              </Link>
              <Link href="/menu" className="block text-food-red hover:text-food-red/80 transition-colors font-bold text-lg group">
                View Full Menu <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Support</h3>
            <div className="space-y-4">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-lg group">
                <span className="group-hover:text-food-red transition-colors">Track Your Order</span>
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-lg group">
                <span className="group-hover:text-food-red transition-colors">Help Center</span>
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-lg group">
                <span className="group-hover:text-food-red transition-colors">Contact Us</span>
              </Link>
              <div className="text-food-red font-bold text-xl">📞 1-800-DELISH</div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Download Our App</h3>
            <div className="space-y-4">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-lg group">
                <span className="group-hover:text-food-red transition-colors">📱 iPhone App</span>
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-lg group">
                <span className="group-hover:text-food-red transition-colors">🤖 Android App</span>
              </Link>
            </div>
            <div className="pt-6">
              <div className="text-lg text-gray-400">Follow us:</div>
              <div className="flex space-x-6 mt-4">
                <span className="text-3xl cursor-pointer hover:scale-110 hover:text-food-red transition-all duration-300">📘</span>
                <span className="text-3xl cursor-pointer hover:scale-110 hover:text-food-red transition-all duration-300">📷</span>
                <span className="text-3xl cursor-pointer hover:scale-110 hover:text-food-red transition-all duration-300">🐦</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-12 text-center text-gray-400 text-lg">
          <p>&copy; {new Date().getFullYear()} Dela Delish. All rights reserved. Made with ❤️ for food lovers everywhere.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;