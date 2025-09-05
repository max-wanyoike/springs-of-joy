// app/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Shield, Clock, Star, Utensils, Phone, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section (unchanged image) */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Compassionate Care in a{" "}
            <span className="text-primary">Home-Like Setting</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Springs of Joy Care Home provides dignity, comfort, and support for your loved ones in Beaverton, Oregon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+19714413058">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care tailored to each resident's unique needs and preferences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Assisted Living",
                description: "Daily living assistance with dignity and independence.",
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Medication Management",
                description: "Safe, reliable administration of medications.",
              },
              {
                icon: <Utensils className="h-8 w-8 text-primary" />,
                title: "Nutritious Meals",
                description: "Healthy, home-cooked meals served daily.",
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "24/7 Support",
                description: "Compassionate staff available around the clock.",
              },
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                title: "Housekeeping",
                description: "Laundry, cleaning, and room upkeep made simple.",
              },
              {
                icon: <Star className="h-8 w-8 text-primary" />,
                title: "Daily Activities",
                description: "Social, fun, and engaging experiences every day.",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/sojfinalelogo.png"
                  alt="Springs of Joy Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-muted-foreground mb-4">
                Providing compassionate senior care in a warm, home-like environment in Beaverton, Oregon.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                <Link href="/services" className="block text-muted-foreground hover:text-primary transition-colors">Services</Link>
                <Link href="/gallery" className="block text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-2">
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
