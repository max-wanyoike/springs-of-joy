import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HomeIcon, Heart, Users, Shield, Clock, Star, Utensils, Sparkles, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const burgundy = "#7A1F2B"
  return (
    <div className="min-h-screen bg-background">
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
                icon: <Sparkles className="h-12 w-12 text-primary" />,
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
      <div className="w-full h-1" style={{ backgroundColor: burgundy }} />
    </div>
  )
}

