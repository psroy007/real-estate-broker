import Link from "next/link"
import Image from "next/image"
import { Building, Home, MapPin, Phone, Mail, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PropertyCard from "@/components/property-card"
import TestimonialCard from "@/components/testimonial-card"
import { featuredProperties } from "@/lib/data"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px]">
        <Image
          src="/images/homepage.jpg"
          alt="Modern apartment building"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Property with Raju Singha Roy
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            Your trusted partner in finding the perfect home, apartment, or land for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-[#e63946] hover:bg-[#e63946]/90">
              <Link href="/properties">Browse Properties</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 border-white"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                    <Home className="h-8 w-8 text-[#e63946]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Residential Properties</h3>
                  <p className="text-muted-foreground">
                    Find apartments, houses, and villas for rent or purchase that match your requirements and budget.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                    <Building className="h-8 w-8 text-[#e63946]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Commercial Properties</h3>
                  <p className="text-muted-foreground">
                    Discover office spaces, retail shops, and commercial buildings for your business needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                    <MapPin className="h-8 w-8 text-[#e63946]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Land Acquisition</h3>
                  <p className="text-muted-foreground">
                    Purchase land for residential, commercial, or investment purposes with proper documentation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Button asChild variant="ghost" className="gap-2">
              <Link href="/properties">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/Raju.jpg" alt="Raju Singha Roy" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Raju Singha Roy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of experience in the real estate industry, I specialize in helping clients find their
                perfect property match. Whether you're looking to rent, buy, or sell, I provide personalized service to
                meet your specific needs.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My extensive network and deep knowledge of the local market allows me to offer you the best options
                available. I handle all the paperwork and negotiations, making the process smooth and hassle-free for
                you.
              </p>
              <Button asChild className="bg-[#e63946] hover:bg-[#e63946]/90">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What My Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Amit Kumar"
              position="Homeowner"
              testimonial="Raju helped me find my dream home within my budget. His knowledge of the market and negotiation skills are exceptional."
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              name="Priya Sharma"
              position="Business Owner"
              testimonial="I was looking for a commercial space for my business, and Raju made the process incredibly smooth. Highly recommended!"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              name="Rajesh Patel"
              position="Investor"
              testimonial="As a property investor, I've worked with many brokers, but Raju stands out for his honesty and commitment to finding the best deals."
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-[#e63946]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Perfect Property?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact me today to discuss your requirements and let me help you find the perfect property.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[#e63946] hover:bg-white/90">
              <Link href="/contact">Contact Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 md:px-8 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <Phone className="h-8 w-8 text-[#e63946]" />
              <div>
                <h3 className="text-lg font-semibold">Call Me</h3>
                <p className="text-gray-300">+91 98317 77920</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-8 w-8 text-[#e63946]" />
              <div>
                <h3 className="text-lg font-semibold">Email Me</h3>
                <p className="text-gray-300">purabsingharoy90@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-8 w-8 text-[#e63946]" />
              <div>
                <h3 className="text-lg font-semibold">Visit Me</h3>
                <p className="text-gray-300">B-73 Bandipur Road, Bansdroni, Kolkata 700070</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

