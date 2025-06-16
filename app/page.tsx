import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChefHat, MapPin, Clock, Star, Shield, Truck, Heart, Users, Phone, CheckCircle, Gift, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-body">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-2xl font-food font-bold text-primary">Dela Delish</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/menu" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Menu
              </Link>
              <Link href="/meal-plans" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Meal Plans
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 font-medium">
                Sign in
              </Button>
              <Button className="bg-primary hover:bg-primary/90 font-medium">Sign up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream via-white to-lettuce/5 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl">🍽️</div>
          <div className="absolute top-32 right-20 text-4xl">🥗</div>
          <div className="absolute bottom-20 left-20 text-5xl">🍲</div>
          <div className="absolute bottom-32 right-10 text-3xl">🥑</div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10 relative">
              {/* Special Offer Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-tomato text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
                <Gift className="h-5 w-5" />
                <span className="font-bold">FREE DELIVERY on your first order!</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-food font-bold text-gray-900 leading-tight">
                  Craving Something
                  <span className="text-primary block">Delicious?</span>
                </h1>
                <p className="text-2xl text-secondary font-medium italic">
                  A culinary experience of comfort and wellness
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Fresh, healthy meals crafted by expert chefs and delivered to your door in 30 minutes or less.
                  <span className="text-primary font-semibold"> No cooking, no cleanup, just pure deliciousness!</span>
                </p>
              </div>

              {/* Location and Search */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="space-y-4">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-primary" />
                    <Input
                      placeholder="Enter your delivery address"
                      className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-primary rounded-xl"
                    />
                  </div>
                  <Button className="w-full h-14 bg-gradient-to-r from-primary to-tomato hover:from-primary/90 hover:to-tomato/90 text-xl font-bold rounded-xl shadow-lg">
                    <Zap className="h-6 w-6 mr-2" />
                    Find Amazing Food Near Me
                  </Button>
                </div>
                <div className="flex items-center justify-center space-x-6 mt-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-avocado" />
                    <span>30 min delivery</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4 text-secondary" />
                    <span>100% Fresh guarantee</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>No minimum order</span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full border-2 border-white flex items-center justify-center text-white font-bold"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-corn fill-current" />
                      <span className="font-bold text-lg">4.9/5</span>
                    </div>
                    <span className="text-sm text-gray-600">from 10,000+ reviews</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-avocado" />
                  <div>
                    <div className="font-bold text-lg">50k+</div>
                    <span className="text-sm text-gray-600">Happy customers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=700"
                  alt="Delicious healthy meals"
                  width={700}
                  height={600}
                  className="rounded-2xl shadow-xl"
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Kitchen</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-tomato text-white p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">30min</div>
                    <div className="text-sm">or FREE!</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-6 bg-secondary text-white p-3 rounded-full shadow-lg">
                  <ChefHat className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-secondary via-corn to-carrot py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-white">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5" />
              <span className="font-medium">FREE delivery on orders $25+</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">30-minute guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span className="font-medium">Made with love & fresh ingredients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories with Visual Appeal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-food font-bold text-gray-900 mb-4">What are you in the mood for?</h2>
            <p className="text-xl text-gray-600">Explore our delicious categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                name: "Savory Delights",
                icon: "🍖",
                href: "/menu/savory",
                color: "from-primary/10 to-tomato/10",
                count: "12 dishes",
              },
              {
                name: "Light & Fresh",
                icon: "🥗",
                href: "/menu/light",
                color: "from-lettuce/10 to-avocado/10",
                count: "8 dishes",
              },
              {
                name: "Wholesome Balanced",
                icon: "🍲",
                href: "/menu/balanced",
                color: "from-secondary/10 to-corn/10",
                count: "15 dishes",
              },
              {
                name: "Vegetarian",
                icon: "🥬",
                href: "/menu/vegetarian",
                color: "from-avocado/10 to-olive/10",
                count: "10 dishes",
              },
              {
                name: "Keto-Friendly",
                icon: "🥑",
                href: "/menu/keto",
                color: "from-avocado/20 to-lettuce/10",
                count: "6 dishes",
              },
              {
                name: "Heart-Healthy",
                icon: "❤️",
                href: "/menu/heart-healthy",
                color: "from-primary/10 to-pink-100",
                count: "9 dishes",
              },
            ].map((category, index) => (
              <Link key={index} href={category.href}>
                <Card
                  className={`hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer bg-gradient-to-br ${category.color} border-0 group`}
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="text-5xl group-hover:scale-110 transition-transform">{category.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{category.name}</p>
                      <p className="text-xs text-gray-600">{category.count}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes with Better Presentation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-food font-bold text-gray-900 mb-2">Trending Now 🔥</h2>
              <p className="text-xl text-gray-600">Most loved dishes this week</p>
            </div>
            <Link href="/menu" className="text-primary hover:underline text-lg font-medium">
              See all dishes →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Grilled Salmon Bowl",
                description: "Fresh salmon with quinoa and vegetables",
                price: "$18.99",
                originalPrice: "$22.99",
                rating: "4.8",
                reviews: "124",
                time: "25-35 min",
                image: "/placeholder.svg?height=250&width=350",
                badge: "🔥 Trending",
                discount: "15% OFF",
              },
              {
                name: "Mediterranean Chicken",
                description: "Herb-crusted chicken with roasted vegetables",
                price: "$16.99",
                rating: "4.9",
                reviews: "89",
                time: "20-30 min",
                image: "/placeholder.svg?height=250&width=350",
                badge: "👨‍🍳 Chef's Choice",
                isNew: true,
              },
              {
                name: "Vegan Buddha Bowl",
                description: "Colorful mix of fresh vegetables and grains",
                price: "$14.99",
                rating: "4.7",
                reviews: "156",
                time: "15-25 min",
                image: "/placeholder.svg?height=250&width=350",
                badge: "🌱 Plant-Based",
              },
              {
                name: "Keto Beef Stir-fry",
                description: "Low-carb beef with broccoli and peppers",
                price: "$19.99",
                rating: "4.6",
                reviews: "73",
                time: "30-40 min",
                image: "/placeholder.svg?height=250&width=350",
                badge: "💪 High Protein",
              },
            ].map((dish, index) => (
              <Link key={index} href={`/dish/${dish.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card className="hover:shadow-2xl transition-all hover:-translate-y-3 cursor-pointer bg-white overflow-hidden border-0 shadow-lg group">
                  <div className="relative">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      width={350}
                      height={250}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-white font-bold px-3 py-1">
                      {dish.badge}
                    </Badge>
                    {dish.discount && (
                      <Badge className="absolute top-3 right-3 bg-green-500 text-white font-bold px-3 py-1">
                        {dish.discount}
                      </Badge>
                    )}
                    {dish.isNew && (
                      <Badge className="absolute top-12 right-3 bg-secondary text-white font-bold px-3 py-1">
                        NEW!
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button className="bg-white text-primary hover:bg-gray-100 font-bold">Quick Add +</Button>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-gray-900 text-lg">{dish.name}</h3>
                      <div className="text-right">
                        <span className="font-bold text-primary text-xl">{dish.price}</span>
                        {dish.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">{dish.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600">{dish.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-bold">{dish.rating}</span>
                        </div>
                        <span className="text-gray-500 text-sm">({dish.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{dish.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gradient-to-br from-cream to-lettuce/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-food font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from real food lovers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                review: "Absolutely amazing! The salmon bowl was fresh and delicious. Delivery was super fast too!",
                image: "/placeholder.svg?height=60&width=60",
                verified: true,
              },
              {
                name: "Mike Chen",
                rating: 5,
                review: "Best healthy food delivery in the city. The Mediterranean chicken is my go-to meal!",
                image: "/placeholder.svg?height=60&width=60",
                verified: true,
              },
              {
                name: "Emily Rodriguez",
                rating: 5,
                review: "Love the variety and quality. Finally found a place that makes eating healthy convenient!",
                image: "/placeholder.svg?height=60&width=60",
                verified: true,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.review}"</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      {testimonial.verified && (
                        <div className="flex items-center space-x-1 text-sm text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Verified Customer</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-tomato to-carrot text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-5xl font-food font-bold">Ready to Satisfy Your Cravings?</h2>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">
              Join 50,000+ happy customers who trust Dela Delish for their daily dose of deliciousness!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-xl shadow-lg"
            >
              <Gift className="h-6 w-6 mr-2" />
              Order Now & Get FREE Delivery
            </Button>
            <div className="text-center">
              <div className="text-sm opacity-75">Use code: DELAFIRST</div>
              <div className="font-bold">Valid for first-time customers</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-8 pt-8 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>30-Minute Delivery Promise</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ChefHat className="h-8 w-8 text-primary" />
                <span className="text-2xl font-food font-bold">Dela Delish</span>
              </div>
              <p className="text-gray-400">
                A culinary experience of comfort and wellness, delivered fresh to your door.
              </p>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-bold">4.9/5</span>
                <span className="text-gray-400">from 10,000+ reviews</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Order</h3>
              <div className="space-y-2">
                <Link href="/menu/savory" className="block text-gray-400 hover:text-white transition-colors">
                  Savory Delights
                </Link>
                <Link href="/menu/light" className="block text-gray-400 hover:text-white transition-colors">
                  Light & Fresh
                </Link>
                <Link href="/menu/balanced" className="block text-gray-400 hover:text-white transition-colors">
                  Wholesome Balanced
                </Link>
                <Link href="/menu" className="block text-primary hover:text-primary/80 transition-colors font-medium">
                  View Full Menu →
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Track Your Order
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
                <div className="text-primary font-bold">📞 1-800-DELISH</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Download Our App</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  📱 iPhone App
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  🤖 Android App
                </Link>
              </div>
              <div className="pt-4">
                <div className="text-sm text-gray-400">Follow us:</div>
                <div className="flex space-x-4 mt-2">
                  <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📘</span>
                  <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📷</span>
                  <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🐦</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dela Delish. All rights reserved. Made with ❤️ for food lovers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
