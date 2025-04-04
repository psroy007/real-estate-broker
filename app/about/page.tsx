import Image from "next/image"
import Link from "next/link"
import { Award, Building, CheckCircle, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/images/about.jpg"
          alt="Raju Singha Roy"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Raju Singha Roy</h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            Your trusted real estate broker with over 15 years of experience
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden mt-4">
              <Image src="/images/Raju2.jpg" alt="Raju Singha Roy" fill className="object-cover object-[center top]"/>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Raju Singha Roy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of experience in the real estate industry, I have helped hundreds of clients find
                their perfect property match. My journey in real estate began in 2008, and since then, I have built a
                reputation for honesty, integrity, and exceptional service.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I specialize in residential and commercial properties, as well as land acquisition. My extensive network
                and deep knowledge of the local market allows me to offer you the best options available. I handle all
                the paperwork and negotiations, making the process smooth and hassle-free for you.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My goal is to understand your specific needs and preferences to find you a property that not only meets
                your requirements but exceeds your expectations. I believe in building long-term relationships with my
                clients based on trust and satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#e63946] hover:bg-[#e63946]/90">
                  <Link href="/contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/properties">View My Listings</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Building className="h-12 w-12 text-[#e63946] mb-4" />
                  <h3 className="text-4xl font-bold mb-2">500+</h3>
                  <p className="text-muted-foreground">Properties Sold</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-[#e63946] mb-4" />
                  <h3 className="text-4xl font-bold mb-2">1000+</h3>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Clock className="h-12 w-12 text-[#e63946] mb-4" />
                  <h3 className="text-4xl font-bold mb-2">15+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-[#e63946] mb-4" />
                  <h3 className="text-4xl font-bold mb-2">10+</h3>
                  <p className="text-muted-foreground">Industry Awards</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                <CheckCircle className="h-8 w-8 text-[#e63946]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Extensive Experience</h3>
              <p className="text-muted-foreground">
                With over 15 years in the industry, I have deep knowledge of the market trends and property values.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                <CheckCircle className="h-8 w-8 text-[#e63946]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-muted-foreground">
                I take the time to understand your specific needs and preferences to find the perfect property match.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                <CheckCircle className="h-8 w-8 text-[#e63946]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
              <p className="text-muted-foreground">
                I believe in complete transparency throughout the buying, selling, or renting process.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                <CheckCircle className="h-8 w-8 text-[#e63946]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Extensive Network</h3>
              <p className="text-muted-foreground">
                My wide network of contacts helps me find properties that may not be available in the open market.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                <CheckCircle className="h-8 w-8 text-[#e63946]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Negotiation Skills</h3>
              <p className="text-muted-foreground">
                I am skilled at negotiating the best deals for my clients, whether buying, selling, or renting.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                <CheckCircle className="h-8 w-8 text-[#e63946]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">After-Sale Support</h3>
              <p className="text-muted-foreground">
                My service doesn't end with the transaction. I provide ongoing support for all your real estate needs.
              </p>
            </div>
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
    </div>
  )
}

