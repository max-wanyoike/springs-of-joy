import Link from 'next/link'
import { Heart, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
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
              <Link 
                href="/about" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link 
                href="/gallery" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Gallery
              </Link>
              <Link 
                href="/contact" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
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
  )
}