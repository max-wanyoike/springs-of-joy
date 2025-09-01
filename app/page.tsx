import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Broom, HomeIcon, Heart, Users, Clock, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-8 w-8 text-primary flex-row" />
            <span className="text-xl font-bold text-foreground">Springs of Joy</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors">Gallery</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Schedule a Tour</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Beaverton, Oregon</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Compassionate Care in a<br />
            <span className="text-primary">Home-Like Setting</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Springs of Joy Care Home provides dignity, comfort, and support for your loved ones in Beaverton, Oregon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild><Link href="/contact">Schedule a Tour</Link></Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+19714413058"><Phone className="mr-2 h-4 w-4" />Call Us Today</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 container mx-auto">
          {/* swapped to your image in /public */}
          <img
            src="/home-pic.jpg"
            alt="Front of Springs of Joy Adult Family Home in Beaverton"
            className="rounded-lg shadow-lg mx-auto w-full max-w-5xl object-cover"
          />
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
              { icon: <Users className="h-8 w-8 text-primary" />, title: "Assisted Living", description: "Personalized daily living assistance while maintaining independence and dignity." },
              { icon: <Shield className="h-8 w-8 text-primary" />, title: "Medication Management", description: "Professional medication administration and monitoring by trained staff." },
              { icon: <Heart className="h-8 w-8 text-primary" />, title: "Nutritious Meals", description: "Home-cooked, nutritious meals prepared with love and dietary considerations." },
              { icon: <Clock className="h-8 w-8 text-primary" />, title: "24/7 Support", description: "Round-the-clock trained staff ensuring safety and peace of mind." },
              { icon: <Broom className="h-8 w-8 text-primary" />, title: "Housekeeping", description: "Clean, fresh, and comfortable living spaces every day." },
              { icon: <Star className="h-8 w-8 text-primary" />, title: "Daily Activities", description: "Engaging activities and companionship to enrich daily life." },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent><CardDescription>{service.description}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Families Say</h2>
            <p className="text-lg text-muted-foreground">Hear from the families who trust us with their loved ones.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: "Springs of Joy truly feels like home. The staff treats my mother with such kindness and respect. I couldn't ask for better care.", author: "Sarah M.", relation: "Daughter of Resident" },
              { quote: "The personalized attention and warm environment at Springs of Joy gave our family peace of mind during a difficult time.", author: "Michael R.", relation: "Son of Resident" },
              { quote: "Robert and Lucy's compassionate approach to care is evident in everything they do. My father is happy and well-cared for.", author: "Jennifer L.", relation: "Daughter of Resident" },
            ].map((t, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}</div>
                  <p className="text-muted-foreground mb-4 italic">"{t.quote}"</p>
                  <div><p className="font-semibold text-foreground">{t.author}</p><p className="text-sm text-muted-foreground">{t.relation}</p></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Visit Springs of Joy?</h2>
          <p className="text-xl mb-8 opacity-90">Schedule a tour today and see why families choose us for their loved ones.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><Link href="/contact">Schedule a Tour</Link></Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent" asChild>
              <a href="tel:+19714413058"><Phone className="mr-2 h-4 w-4" />Call Now</a>
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
