"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HomeIcon, Phone, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Left: brand */}
        <div className="flex items-center gap-2">
          <HomeIcon className="h-7 w-7 text-primary" />
          <Link href="/" className="text-lg font-semibold text-foreground">
            Springs of Joy
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-foreground hover:text-primary">Home</Link>
          <Link href="/about" className="text-foreground hover:text-primary">About Us</Link>
          <Link href="/services" className="text-foreground hover:text-primary">Services</Link>
          <Link href="/gallery" className="text-foreground hover:text-primary">Gallery</Link>
          <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <Button asChild className="hidden md:inline-flex">
          <Link href="/contact">Schedule a Tour</Link>
        </Button>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mt-6 flex flex-col gap-4">
              <Link href="/" className="text-foreground hover:text-primary">Home</Link>
              <Link href="/about" className="text-foreground hover:text-primary">About Us</Link>
              <Link href="/services" className="text-foreground hover:text-primary">Services</Link>
              <Link href="/gallery" className="text-foreground hover:text-primary">Gallery</Link>
              <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
              <Button asChild className="mt-2">
                <Link href="/contact">Schedule a Tour</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+19714413058"><Phone className="mr-2 h-4 w-4" />Call (971) 441-3058</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
