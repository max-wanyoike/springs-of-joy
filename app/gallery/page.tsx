import { Button } from "@/components/ui/button"
import { HomeIcon,Heart, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
  const galleryImages = [
  { src: "/front-of-house.jpg",        alt: "Front exterior of Springs of Joy Adult Family Home in Beaverton", title: "Front of House" },
  { src: "/living-room.jpg",           alt: "Cozy living room with seating and natural light",                 title: "Living Room" },
  { src: "/dining-area.jpg",           alt: "Dining area with table set for residents",                        title: "Dining Area" },
  { src: "/private-bedroom-1.jpg",     alt: "Private resident bedroom with bed and window",                    title: "Private Bedroom" },
  { src: "/private-bedroom-2.jpg",     alt: "Additional private resident bedroom with natural lighting",       title: "Private Bedroom Two" },
  { src: "/accessible-bathroom-1.jpg", alt: "Accessible bathroom with roll-in shower and safety rails",        title: "Accessible Bathroom" },
  { src: "/accessible-bathroom-2.jpg", alt: "Additional accessible bathroom with toilet and safety rails",     title: "Accessible Bathroom Two" },
  { src: "/garden-area.jpg",           alt: "Outdoor garden with trees and fenced yard",                       title: "Garden Area" },
  { src: "/outdoor-patio.jpg",         alt: "Outdoor patio with canopy and seating",                           title: "Outdoor Patio" },
];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-8 w-8 text-primary" />
            <Link href="/" className="text-xl font-bold text-foreground">
              Springs of Joy
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-primary font-medium">
              Gallery
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Schedule a Tour</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Take a virtual tour of Springs of Joy and see the warm, comfortable spaces where our residents call home.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* TO REPLACE: Upload your images and change the src paths in the galleryImages array above */}
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">See Springs of Joy in Person</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            While our gallery gives you a glimpse of our beautiful facility, nothing compares to experiencing the warmth
            and care of Springs of Joy in person. Schedule a tour today and meet our caring team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">Springs of Joy</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Providing compassionate senior care in a warm, home-like environment in Beaverton, Oregon.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="/gallery" className="block text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>15155 SW Kilchis Ct, Beaverton, OR 97007</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>(971) 441-3058</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>springsofjoycarehome@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Springs of Joy Adult Family Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
