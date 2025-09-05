import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Music, StretchHorizontal, ShieldCheck, Footprints, Cards } from "lucide-react"
import { motion } from "framer-motion"

// Brand color
const burgundy = "#7A1F2B";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top ribbon accent */}
      <div className="w-full h-1" style={{ backgroundColor: burgundy }} />   

      {/* Mission & Values */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl" style={{ color: burgundy }}>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed">
              To support and engage each individual through therapeutic and recreational activities that
              promote physical and cognitive well‑being—always with dignity, safety, and respect.
            </CardContent>
          </Card>

          <Card className="shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl" style={{ color: burgundy }}>Our Approach</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed">
              We personalize routines to each resident’s abilities and preferences, coordinate closely with
              families and healthcare providers, and create moments of connection every day.
            </CardContent>
          </Card>

          <Card className="shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl" style={{ color: burgundy }}>What Guides Us</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="rounded-full">Safety</Badge>
              <Badge variant="secondary" className="rounded-full">Respect</Badge>
              <Badge variant="secondary" className="rounded-full">Independence</Badge>
              <Badge variant="secondary" className="rounded-full">Joy</Badge>
              <Badge variant="secondary" className="rounded-full">Consistency</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Therapeutic & Recreational Activities */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: burgundy }}>Therapeutic & Recreational Activities</h2>
          <p className="mt-2 text-gray-700 max-w-3xl">
            We support and engage individuals in a variety of activities designed to enhance strength,
            mobility, cognition, and enjoyment. All activities are adapted to each resident’s abilities
            and performed in accordance with their care plan and physician guidance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ActivityCard
            icon={<Heart className="w-6 h-6" />} title="Sit‑to‑Stand Exercises"
            desc="Guided movements to build lower‑body strength and support safe transfers and mobility."
          />
          <ActivityCard
            icon={<Music className="w-6 h-6" />} title="Seated Dance to Music"
            desc="Rhythm‑based routines that encourage movement, coordination, and joy."
          />
          <ActivityCard
            icon={<Footprints className="w-6 h-6" />} title="Supported Indoor Walks"
            desc="Supervised walking for safe activity, confidence, and cardiovascular health."
          />
          <ActivityCard
            icon={<Cards className="w-6 h-6" />} title="Card & Table Games"
            desc="Play that stimulates cognition, conversation, and social connection."
          />
          <ActivityCard
            icon={<StretchHorizontal className="w-6 h-6" />} title="Stretching (Seated or Standing)"
            desc="Gentle flexibility work to maintain range of motion and encourage relaxation."
          />
          <ActivityCard
            icon={<ShieldCheck className="w-6 h-6" />} title="Care‑Plan Aligned"
            desc="Activities follow doctor’s orders and are tailored to individual needs and goals."
          />
        </div>
      </section>

      {/* Story / Promise */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <Card className="shadow-sm rounded-2xl border" style={{ borderColor: burgundy }}>
          <CardContent className="p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              At Springs of Joy, we believe every day should include moments of comfort, accomplishment, and
              connection. From a successful stretch to a shared laugh over cards, these small wins add up to
              a life well‑lived—right at home.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl p-6 shadow-sm border" style={{ borderColor: burgundy }}>
          <div>
            <h3 className="text-2xl font-semibold" style={{ color: burgundy }}>Come see us in person</h3>
            <p className="text-gray-700 mt-1">Schedule a tour and we’ll tailor a visit to your loved one’s interests and needs.</p>
          </div>
          <Button asChild size="lg" className="rounded-2xl px-6" style={{ backgroundColor: burgundy }}>
            <Link href="/contact">Schedule a Tour</Link>
          </Button>
        </div>
      </section>

      {/* Bottom ribbon accent */}
      <div className="w-full h-1" style={{ backgroundColor: burgundy }} />
    </div>
  )
}

function ActivityCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
      <Card className="h-full rounded-2xl shadow-sm">
        <CardHeader className="flex flex-row items-center gap-3 pb-2">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: `${burgundy}15`, color: burgundy }}
          >
            {icon}
          </div>
          <CardTitle className="text-base" style={{ color: burgundy }}>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{desc}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

  )
}
