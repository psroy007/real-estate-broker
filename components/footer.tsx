import Link from "next/link"
import { Building, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-6 w-6 text-[#e63946]" />
              <span className="text-xl font-bold">Raju Singha Roy</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted real estate broker for finding the perfect property that meets your needs and budget.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=100086918692058" target="_blank" className="text-gray-400 hover:text-[#e63946]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#e63946]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/this_is_purav/" target="_blank" className="text-gray-400 hover:text-[#e63946]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/in/purabsingharoy/" target="_blank" className="text-gray-400 hover:text-[#e63946]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#e63946]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-[#e63946]">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#e63946]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#e63946]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#e63946]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties?type=apartment" className="text-gray-400 hover:text-[#e63946]">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="/properties?type=house" className="text-gray-400 hover:text-[#e63946]">
                  Houses
                </Link>
              </li>
              <li>
                <Link href="/properties?type=villa" className="text-gray-400 hover:text-[#e63946]">
                  Villas
                </Link>
              </li>
              <li>
                <Link href="/properties?type=commercial" className="text-gray-400 hover:text-[#e63946]">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/properties?type=land" className="text-gray-400 hover:text-[#e63946]">
                  Land
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#e63946] mt-0.5" />
                <span className="text-gray-400">B-73 Bandipur Road, Bansdroni, Kolkata 700070</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#e63946]" />
                <span className="text-gray-400">+91 98317 77920</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#e63946]" />
                <span className="text-gray-400">purabsingharoy90@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Raju Singha Roy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

