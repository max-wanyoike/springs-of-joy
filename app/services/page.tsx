import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HomeIcon, Heart, Users, Shield, Clock, Star, Utensils, Broom } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="/services" className="text-primary font-medium">Services</Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors">Gallery</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
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
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive, personalized care services designed to support your loved one's health, happiness, and
            independence in a warm, home-like environment.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Assisted Living",
                description:
                  "Personalized assistance with daily activities while promoting independence and dignity. Our trained staff provides support with bathing, dressing, grooming, and mobility assistance as needed.",
                features: ["Personal care assistance", "Mobility support", "Independence promotion", "Dignity preservation"],
              },
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Medication Management",
                description:
                  "Professional medication administration and monitoring by our trained staff. We ensure medications are taken correctly and on time, with careful tracking and coordination with healthcare providers.",
                features: ["Medication administration", "Dosage monitoring", "Healthcare coordination", "Safety protocols"],
              },
              {
                icon: <Utensils className="h-12 w-12 text-primary" />,
                title: "Nutritious Home-Cooked Meals",
                description:
                  "Delicious, nutritious meals prepared fresh daily with love and attention to dietary needs and preferences. We accommodate special diets and cultural food preferences.",
                features: ["Fresh daily meals", "Dietary accommodations", "Cultural preferences", "Nutritional planning"],
              },
              {
                icon: <Clock className="h-12 w-12 text-primary" />,
                title: "24/7 Trained Staff",
                description:
                  "Round-the-clock care from our compassionate, trained staff members. We provide peace of mind knowing that help is always available when needed.",
                features: ["24-hour availability", "Trained caregivers", "Emergency response", "Continuous monitoring"],
              },
              {
                icon: <Broom className="h-12 w-12 text-primary" />,
                title: "Housekeeping Services",
                description:
                  "Comprehensive housekeeping support to maintain a clean, safe, and comfortable living environment. Our staff ensures residents’ surroundings are well cared for so they can enjoy peace of mind.",
                features: ["Regular cleaning of living areas and bedrooms", "Changing and laundering bed sheetse", "Washing and folding clothes", "Assistance with organizing personal spaces", "Tidying up after meals and daily activities"],
              },
              {
                icon: <Star className="h-12 w-12 text-primary" />,
                title: "Daily Activities & Companionship",
                description:
                  "Engaging activities and meaningful companionship to enrich daily life. We organize social activities, games, crafts, and provide one-on-one companionship.",
                features: ["Social activities", "Games and crafts", "One-on-one time", "Community engagement"],
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Philosophy */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Care Philosophy</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              At Springs of Joy, we believe that quality care goes beyond meeting basic needs. We focus on creating
              meaningful relationships, preserving dignity, and enhancing the quality of life for every resident.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Person-Centered Care", description: "Every care plan is tailored to the individual's unique needs, preferences, and life story." },
                { title: "Family Partnership", description: "We work closely with families to ensure continuity of care and open communication." },
                { title: "Holistic Approach", description: "We address physical, emotional, social, and spiritual well-being for complete care." },
              ].map((p, i) => (
                <Card key={i} className="text-center">
                  <CardHeader><CardTitle className="text-xl">{p.title}</CardTitle></CardHeader>
                  <CardContent><CardDescription>{p.description}</CardDescription></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Learn More About Our Services?</h2>
          <p className="text-xl mb-8 opacity-90">Schedule a tour to see our services in action and meet our caring team.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Tour</Link>
          </Button>
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
              <p className="text-muted-foreground mb-4">Providing compassionate senior care in a warm, home-like environment in Beaverton, Oregon.</p>
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
                <div className="flex items-center space-x-2 text-muted-foreground"><MapPin className="h-4 w-4" /><span>15155 SW Kilchis Ct, Beaverton, OR 97007</span></div>
                <div className="flex items-center space-x-2 text-muted-foreground"><Phone className="h-4 w-4" /><span>(971) 441-3058</span></div>
                <div className="flex items-center space-x-2 text-muted-foreground"><Mail className="h-4 w-4" /><span>springsofjoycarehome@gmail.com</span></div>
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

