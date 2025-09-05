"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Users, Shield, Home } from "lucide-react"
import Footer from "@/components/Footer"

// Brand color
const burgundy = "#7A1F2B"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: burgundy }}>
            Meet the Hearts Behind Springs of Joy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our story begins with a passion for providing exceptional senior care in a warm, 
            family-like environment where every resident feels valued and loved.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6" style={{ color: burgundy }}>
              Our Founder's Journey
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Springs of Joy was founded with a simple yet profound mission: to create a place where 
              seniors can age with dignity, surrounded by compassionate care and genuine love. Our founder 
              brings over 15 years of experience in senior care, having witnessed firsthand the difference 
              that personalized, heartfelt care can make in the lives of our elders.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              After years of working in larger facilities, the vision became clear - seniors deserve 
              more than just medical care. They deserve a home where their stories are heard, their 
              preferences are honored, and their golden years are filled with joy and purpose.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-2" style={{ borderColor: burgundy, color: burgundy }}>
                Licensed Care Provider
              </Badge>
              <Badge variant="outline" className="border-2" style={{ borderColor: burgundy, color: burgundy }}>
                15+ Years Experience
              </Badge>
              <Badge variant="outline" className="border-2" style={{ borderColor: burgundy, color: burgundy }}>
                Certified in Senior Care
              </Badge>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="/api/placeholder/500/600" 
                alt="Founder of Springs of Joy" 
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Team Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="/api/placeholder/500/600" 
                alt="Our Care Team" 
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: burgundy }}>
              Our Dedicated Care Team
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every member of our team is carefully selected not just for their professional 
              qualifications, but for their heart. We believe that the best care comes from 
              genuine compassion combined with expert knowledge.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our staff undergoes continuous training in the latest care techniques, safety 
              protocols, and person-centered care approaches. But most importantly, they share 
              our commitment to treating every resident like family.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 mt-1" style={{ color: burgundy }} />
                <div>
                  <h4 className="font-semibold" style={{ color: burgundy }}>Compassionate Care</h4>
                  <p className="text-gray-600">Every interaction is guided by empathy and respect</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 mt-1" style={{ color: burgundy }} />
                <div>
                  <h4 className="font-semibold" style={{ color: burgundy }}>Professional Excellence</h4>
                  <p className="text-gray-600">Licensed, trained, and committed to the highest standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 mt-1" style={{ color: burgundy }} />
                <div>
                  <h4 className="font-semibold" style={{ color: burgundy }}>Family Approach</h4>
                  <p className="text-gray-600">We work closely with families to ensure personalized care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: burgundy }}>
              Our Care Philosophy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Springs of Joy, we believe that aging is not about limitation, but about 
              adaptation and continued growth. Our approach focuses on maintaining independence 
              while providing the support needed for safety and comfort.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We create individualized care plans that honor each resident's preferences, 
              routines, and life story. From therapeutic activities to daily living assistance, 
              everything we do is designed to promote dignity, purpose, and joy.
            </p>
            
            <Card className="border-2" style={{ borderColor: burgundy }}>
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "Every day should include moments of comfort, accomplishment, and connection. 
                  These small wins add up to a life well-lived."
                </blockquote>
                <cite className="text-sm font-medium" style={{ color: burgundy }}>
                  — Springs of Joy Care Philosophy
                </cite>
              </CardContent>
            </Card>
          </div>
          <div>
            <div className="relative">
              <img 
                src="/api/placeholder/500/600" 
                alt="Residents enjoying activities" 
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: burgundy }}>
            What Guides Everything We Do
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: burgundy }}>
            <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: burgundy }} />
            <h3 className="font-bold mb-2" style={{ color: burgundy }}>Compassion</h3>
            <p className="text-gray-600 text-sm">Every action is guided by genuine care and empathy</p>
          </Card>
          
          <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: burgundy }}>
            <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: burgundy }} />
            <h3 className="font-bold mb-2" style={{ color: burgundy }}>Safety</h3>
            <p className="text-gray-600 text-sm">Creating a secure environment for peace of mind</p>
          </Card>
          
          <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: burgundy }}>
            <Users className="w-12 h-12 mx-auto mb-4" style={{ color: burgundy }} />
            <h3 className="font-bold mb-2" style={{ color: burgundy }}>Respect</h3>
            <p className="text-gray-600 text-sm">Honoring each person's dignity and life story</p>
          </Card>
          
          <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: burgundy }}>
            <Home className="w-12 h-12 mx-auto mb-4" style={{ color: burgundy }} />
            <h3 className="font-bold mb-2" style={{ color: burgundy }}>Home</h3>
            <p className="text-gray-600 text-sm">Creating a warm, family-like atmosphere</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="text-center p-8 border-2" style={{ borderColor: burgundy }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: burgundy }}>
            Ready to Meet Our Team?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We'd love to welcome you and your family to Springs of Joy. Schedule a personal tour 
            and see firsthand the warmth and care that makes our home special.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-8 text-white hover:opacity-90 transition-opacity" 
            style={{ backgroundColor: burgundy }}
          >
            <Link href="/contact">Schedule Your Visit Today</Link>
          </Button>
        </Card>
      </section>
    </div>
  )
}