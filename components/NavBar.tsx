import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  currentPage?: string // Optional prop to highlight current page
}

export default function Navbar({ currentPage }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-stone-100/95 backdrop-blur supports-[backdrop-filter]:bg-stone-100/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className='flex items-center space-x-3'>
            <img
              src="/sojfinalelogo.png"
              alt="Springs of Joy Logo"
              className="h-14 w-auto ml-4"
            />
            <h1 className="text-xl font-bold text-foreground">Springs of Joy</h1>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className={`transition-colors ${
              currentPage === 'home' 
                ? 'text-primary font-medium' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors ${
              currentPage === 'about' 
                ? 'text-primary font-medium' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            About Us
          </Link>
          <Link 
            href="/services" 
            className={`transition-colors ${
              currentPage === 'services' 
                ? 'text-primary font-medium' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Services
          </Link>
          <Link 
            href="/gallery" 
            className={`transition-colors ${
              currentPage === 'gallery' 
                ? 'text-primary font-medium' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Gallery
          </Link>
          <Link 
            href="/contact" 
            className={`transition-colors ${
              currentPage === 'contact' 
                ? 'text-primary font-medium' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Contact
          </Link>
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <Link href="/contact">Schedule a Tour</Link>
        </Button>
      </div>
    </header>
  )
}