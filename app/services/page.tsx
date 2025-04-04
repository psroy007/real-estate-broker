import Image from "next/image"
import Link from "next/link"
import { Building, CheckCircle, Home, MapPin, Search, FileText, Handshake, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <Image
          src="/images/services.jpg"
          alt="Real Estate Services"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">My Services</h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            Comprehensive real estate services to meet all your property needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What I Offer</h2>
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
                  <ul className="mt-4 space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Apartments and Flats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Independent Houses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Luxury Villas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Rental Properties</span>
                    </li>
                  </ul>
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
                  <ul className="mt-4 space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Office Spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Retail Shops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Warehouses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Industrial Spaces</span>
                    </li>
                  </ul>
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
                  <ul className="mt-4 space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Residential Plots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Commercial Plots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Agricultural Land</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                      <span>Investment Properties</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Working Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e63946] text-white text-2xl font-bold mb-4">
                  1
                </div>
                <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-[#e63946]/30"></div>
              </div>
              <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                <Search className="h-8 w-8 text-[#e63946]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Requirement Analysis</h3>
              <p className="text-muted-foreground">
                I understand your specific needs, preferences, and budget constraints.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e63946] text-white text-2xl font-bold mb-4">
                  2
                </div>
                <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-[#e63946]/30"></div>
              </div>
              <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                <Building className="h-8 w-8 text-[#e63946]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Property Search</h3>
              <p className="text-muted-foreground">
                I search for properties that match your requirements from my extensive network.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e63946] text-white text-2xl font-bold mb-4">
                  3
                </div>
                <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-[#e63946]/30"></div>
              </div>
              <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                <FileText className="h-8 w-8 text-[#e63946]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-muted-foreground">
                I handle all the paperwork and legal documentation for a smooth transaction.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e63946] text-white text-2xl font-bold mb-4">
                  4
                </div>
              </div>
              <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                <Handshake className="h-8 w-8 text-[#e63946]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Deal Closure</h3>
              <p className="text-muted-foreground">
                I ensure a smooth handover and follow-up to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#e63946]/10 shrink-0">
                    <Briefcase className="h-6 w-6 text-[#e63946]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Property Valuation</h3>
                    <p className="text-muted-foreground mb-4">
                      Get an accurate valuation of your property based on current market trends and property condition.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>Market Analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>Comparative Property Assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>Location-based Valuation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#e63946]/10 shrink-0">
                    <FileText className="h-6 w-6 text-[#e63946]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Legal Assistance</h3>
                    <p className="text-muted-foreground mb-4">
                      Get expert legal assistance for property transactions, including document verification and title
                      clearance.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>Document Verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>Title Clearance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>Legal Consultation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#e63946]/10 shrink-0">
                    <Home className="h-6 w-6 text-[#e63946]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Property Management</h3>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive property management services for landlords, including tenant screening and rent
                      collection.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>Tenant Screening</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>Rent Collection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>Property Maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#e63946]/10 shrink-0">
                    <Handshake className="h-6 w-6 text-[#e63946]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Investment Advisory</h3>
                    <p className="text-muted-foreground mb-4">
                      Expert advice on property investments to maximize returns and minimize risks.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>Investment Strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>Market Trend Analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#e63946] mt-0.5 shrink-0" />
                        <span>ROI Calculation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-[#e63946]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact me today to discuss your property requirements and let me help you find the perfect solution.
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

