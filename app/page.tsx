import Hero from "@/components/Hero"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Gift, Heart, Phone, Shield, Star, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className={`min-h-screen bg-cover bg-center font-duolingo`}>
      {/* Hero Section */}
      <Hero />

      {/* Promotional Banner */}
      <section className="bg-food-red py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-12 text-white">
            <div className="flex items-center space-x-3">
              <Truck className="h-6 w-6" />
              <span className="font-bold text-lg">FREE delivery on orders $25+</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6" />
              <span className="font-bold text-lg">30-minute guarantee</span>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="h-6 w-6" />
              <span className="font-bold text-lg">Made with love & fresh ingredients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories with Visual Appeal */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-extrabold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-food-red bg-clip-text text-transparent">
              What are you in the mood for?
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Explore our delicious categories crafted with passion and fresh ingredients
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center items-center">
            {[
              {
                name: "Savory Delights",
                icon: "🍖",
                href: "/menu/savory",
                color: "from-orange-50 to-red-50",
                count: "12 dishes",
              },
              {
                name: "Light & Fresh",
                icon: "🥗",
                href: "/menu/light",
                color: "from-green-50 to-emerald-50",
                count: "8 dishes",
              },
              {
                name: "Wholesome Balanced",
                icon: "🍲",
                href: "/menu/balanced",
                color: "from-blue-50 to-cyan-50",
                count: "15 dishes",
              },
              {
                name: "Vegetarian",
                icon: "🥬",
                href: "/menu/vegetarian",
                color: "from-emerald-50 to-green-50",
                count: "10 dishes",
              },
              {
                name: "Keto-Friendly",
                icon: "🥑",
                href: "/menu/keto",
                color: "from-purple-50 to-pink-50",
                count: "6 dishes",
              },
              {
                name: "Heart-Healthy",
                icon: "❤️",
                href: "/menu/heart-healthy",
                color: "from-rose-50 to-red-50",
                count: "9 dishes",
              },
            ].map((category, index) => (
              <Link key={index} href={category.href}>
                <Card
                  className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer bg-gradient-to-br ${category.color} border-0 group h-auto`}
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg group-hover:text-food-red transition-colors">{category.name}</p>
                      <p className="text-sm text-gray-600">{category.count}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes with Better Presentation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-20">
            <div>
              <h2 className="text-6xl font-extrabold text-gray-900 mb-4">
                Trending Now <span className="text-food-red">🔥</span>
              </h2>
              <p className="text-xl text-gray-600 font-light">Most loved dishes this week</p>
            </div>
            <Link href="/menu" className="text-food-red hover:text-food-red/80 text-xl font-bold transition-colors group">
              See all dishes <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
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
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer bg-white overflow-hidden border-0 group">
                  <div className="relative">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      width={350}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-food-red text-white font-bold px-4 py-2 shadow-lg">
                      {dish.badge}
                    </Badge>
                    {dish.discount && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold px-4 py-2 shadow-lg">
                        {dish.discount}
                      </Badge>
                    )}
                    {dish.isNew && (
                      <Badge className="absolute top-16 right-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold px-4 py-2 shadow-lg">
                        NEW!
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-white text-food-red hover:bg-gray-50 font-bold shadow-lg px-8 py-4">
                        Quick Add +
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-gray-900 text-xl group-hover:text-food-red transition-colors">{dish.name}</h3>
                      <div className="text-right">
                        <span className="font-bold text-food-red text-2xl">{dish.price}</span>
                        {dish.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">{dish.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600">{dish.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <Star className="h-5 w-5 text-food-red fill-current" />
                          <span className="font-bold text-gray-900">{dish.rating}</span>
                        </div>
                        <span className="text-gray-500 text-sm">({dish.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Clock className="h-5 w-5" />
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-extrabold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Real reviews from real food lovers who trust us for their daily meals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
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
              <Card key={index} className="bg-white shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 group">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-food-red fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-lg group-hover:text-gray-900 transition-colors">"{testimonial.review}"</p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={70}
                      height={70}
                      className="rounded-full ring-4 ring-food-red/20 group-hover:ring-food-red/40 transition-all"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      {testimonial.verified && (
                        <div className="flex items-center space-x-2 text-sm text-food-red">
                          <CheckCircle className="h-5 w-5" />
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

      {/* Special Offers Section - Orange Theme */}
      <section className="py-24 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-extrabold text-gray-900 mb-6">
              Special Offers <span className="text-orange-600">🎉</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Limited time deals and exclusive offers just for you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Family Bundle",
                description: "Feed the whole family with our special bundle deals",
                discount: "25% OFF",
                code: "FAMILY25",
                icon: "👨‍👩‍👧‍👦",
                color: "from-orange-400 to-orange-500",
              },
              {
                title: "Lunch Special",
                description: "Perfect midday meals at unbeatable prices",
                discount: "20% OFF",
                code: "LUNCH20",
                icon: "🍽️",
                color: "from-orange-500 to-red-500",
              },
              {
                title: "First Order",
                description: "New customers get an extra special welcome",
                discount: "30% OFF",
                code: "WELCOME30",
                icon: "🎁",
                color: "from-red-500 to-orange-500",
              },
            ].map((offer, index) => (
              <Card key={index} className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{offer.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-2xl mb-2 group-hover:text-orange-600 transition-colors">{offer.title}</h3>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold text-xl px-6 py-3 rounded-lg mb-4">
                      {offer.discount}
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <span className="font-mono text-orange-600 font-bold text-lg">Code: {offer.code}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-24 bg-[url('/images/cravings.jpg')] bg-cover bg-center text-white relative overflow-hidden" style={{ backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-[#111111cc]"></div>
        <div className="container mx-auto px-4 text-center space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-6xl font-extrabold">Ready to Satisfy Your Cravings?</h2>
            <p className="text-2xl text-white/95 max-w-4xl mx-auto font-light">
              Join 50,000+ happy customers who trust Dela Delish for their daily dose of deliciousness!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-food-red hover:bg-gray-50 px-16 py-8 text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
            >
              <Gift className="h-8 w-8 mr-3" />
              Order Now & Get FREE Delivery
            </Button>
            <div className="text-center">
              <div className="text-lg text-white/90">Use code: DELAFIRST</div>
              <div className="font-bold text-xl">Valid for first-time customers</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-12 pt-12 text-lg text-white/95">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6" />
              <span>30-Minute Delivery Promise</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6" />
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
