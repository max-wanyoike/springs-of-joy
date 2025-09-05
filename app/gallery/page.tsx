"use client"

import { Button } from "@/components/ui/button"
import { HomeIcon, Heart, Phone, Mail, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const galleryImages = [
    { src: "/living-room.jpg", alt: "Cozy living room with seating and natural light", title: "Living Room" },
    { src: "/dining-area.jpg", alt: "Dining area with table set for residents", title: "Dining Area" },
    { src: "/private-bedroom-1.jpg", alt: "Private resident bedroom with bed and window", title: "Private Bedroom" },
    { src: "/open-room.jpg", alt: "Open room", title: "Open Room" },
    { src: "/private-bedroom-2.jpg", alt: "Additional private resident bedroom with natural lighting", title: "Private Bedroom Two" },
    { src: "/accessible-bathroom-1.jpg", alt: "Accessible bathroom with roll-in shower and safety rails", title: "Accessible Bathroom" },
    { src: "/accessible-bathroom-2.jpg", alt: "Additional accessible bathroom with toilet and safety rails", title: "Accessible Bathroom Two" },
    { src: "/garden-area.jpg", alt: "Outdoor garden with trees and fenced yard", title: "Garden Area" },
    { src: "/outdoor-patio.jpg", alt: "Outdoor patio with canopy and seating", title: "Outdoor Patio" },
  ]

  const burgundy = "#7A1F2B"

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === 'Escape') {
        setSelectedImage(null)
      } else if (e.key === 'ArrowRight') {
        setSelectedImage((prev) => 
          prev === null ? 0 : (prev + 1) % galleryImages.length
        )
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage((prev) => 
          prev === null ? 0 : prev === 0 ? galleryImages.length - 1 : prev - 1
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, galleryImages.length])

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setSelectedImage((prev) => 
      prev === null ? 0 : (prev + 1) % galleryImages.length
    )
  }

  const prevImage = () => {
    setSelectedImage((prev) => 
      prev === null ? 0 : prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  return (
    <div className="min-h-screen bg-background">
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
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm opacity-90">Click to view larger</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-60 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Main image */}
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-center">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-sm text-center opacity-90">
                {selectedImage + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-2 rounded-lg backdrop-blur-sm text-sm">
            <p>Use ← → keys or click arrows to navigate</p>
            <p>Press ESC to close</p>
          </div>
        </div>
      )}

      {/* Virtual Tour CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center bg-gray-50 rounded-xl p-6 w-[800px]">
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
      <div className="w-full h-1" style={{ backgroundColor: burgundy }} />
    </div>
  )
}