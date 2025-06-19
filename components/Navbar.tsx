import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-[#11111178] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/dark-logo.png" alt="Dela Delish" width={32} height={32} />
            <span className="flex">
              <span className="text-[24px] font-bold text-white">dela</span>
              <span className="text-[24px] font-light text-white">delish</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/menu" className="text-gray-200 hover:text-food-red transition-colors font-light">
              Menu
            </Link>
            <Link href="/meal-plans" className="text-gray-200 hover:text-food-red transition-colors font-bold">
              Meal Plans
            </Link>
            <Link href="/about" className="text-gray-200 hover:text-food-red transition-colors font-light">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-200 font-light !rounded-none">
              Sign in
            </Button>
            <Button className="bg-food-red hover:bg-food-red/90 font-bold !rounded-none">Sign up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;