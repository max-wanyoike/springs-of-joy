import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HomeIcon,Heart, Users, Award, Clock, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/about" className="text-primary font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors">
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
            About <span className="text-primary">Springs of Joy</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our mission is providing compassionate and personalized care so every resident feels at home.
          </p>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Springs of Joy, we believe that every senior deserves to live with dignity, comfort, and joy. Our
                mission is to provide compassionate, personalized care in a warm, home-like environment where residents
                feel valued, respected, and truly at home.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We understand that choosing care for a loved one is one of life's most difficult decisions. That's why
                we're committed to creating a place where families can have peace of mind, knowing their loved ones are
                receiving the highest quality care with genuine compassion.
              </p>
              <Button asChild>
                <Link href="/contact">Learn More About Our Care</Link>
              </Button>
            </div>
            <div>
              <img
                src="/new-image-url.png"
                alt="Compassionate care at Springs of Joy"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team is dedicated to providing exceptional care with heart and professionalism.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src="/new-robert-image-url.png"
                    alt="Robert Kibui"
                    className="rounded-full w-32 h-32 mx-auto object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">Robert Kibui</CardTitle>
                <CardDescription className="text-lg">Owner & Administrator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Robert brings years of experience in senior care and a deep commitment to creating a nurturing
                  environment where residents thrive. His vision for Springs of Joy is rooted in treating every resident
                  like family.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img
                    src="/new-lucy-image-url.png"
                    alt="Lucy Wanyoike"
                    className="rounded-full w-32 h-32 mx-auto object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">Lucy Wanyoike</CardTitle>
                <CardDescription className="text-lg">Primary Care Provider</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lucy is our dedicated primary care provider with extensive experience in senior care. Her
                  compassionate approach and attention to detail ensure that each resident receives personalized care
                  tailored to their unique needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do at Springs of Joy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                title: "Compassion",
                description: "We treat every resident with kindness, empathy, and genuine care.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Dignity",
                description: "We honor each person's individuality and respect their life experiences.",
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Excellence",
                description: "We strive for the highest standards in all aspects of care and service.",
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Reliability",
                description: "Families can count on us for consistent, dependable care around the clock.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Springs of Joy Difference</h2>
          <p className="text-xl mb-8 opacity-90">Schedule a tour and meet our caring team in person.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule Your Visit</Link>
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
