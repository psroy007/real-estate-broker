"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Bath, Bed, Building, Check, MapPin, Phone, Share2, SquareIcon as SquareFeet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { PropertyType } from "@/lib/types"
import { allProperties } from "@/lib/data"

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState<PropertyType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching property data
    const foundProperty = allProperties.find((p) => p.id === params.id)
    setProperty(foundProperty || null)
    setIsLoading(false)
  }, [params.id])

  if (!isLoading && !property) {
    notFound()
  }

  if (isLoading || !property) {
    return (
      <div className="container mx-auto py-16 px-4 sm:px-6 min-h-screen flex items-center justify-center">
        <p>Loading property details...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Property Header */}
      <section className="py-8 px-4 sm:px-6 md:px-8 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1 text-[#e63946]" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-2xl font-bold text-[#e63946]">
                  ₹{property.price.toLocaleString()}
                  {property.status === "For Rent" && <span className="text-sm text-muted-foreground">/month</span>}
                </p>
              </div>
              <Button className="bg-[#e63946] hover:bg-[#e63946]/90">
                <Phone className="h-4 w-4 mr-2" /> Contact Agent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Images */}
      <section className="py-8 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[190px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=190&width=300" alt="Property view" fill className="object-cover" />
              </div>
              <div className="relative h-[190px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=190&width=300" alt="Property view" fill className="object-cover" />
              </div>
              <div className="relative h-[190px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=190&width=300" alt="Property view" fill className="object-cover" />
              </div>
              <div className="relative h-[190px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=190&width=300" alt="Property view" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-8 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Property Description</h2>
                      <p className="text-muted-foreground">
                        {property.description || "No description available for this property."}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                        {property.type !== "Land" && property.type !== "Commercial" && (
                          <>
                            <div className="flex items-center gap-2">
                              <Bed className="h-5 w-5 text-[#e63946]" />
                              <span>{property.bedrooms} Bedrooms</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Bath className="h-5 w-5 text-[#e63946]" />
                              <span>{property.bathrooms} Bathrooms</span>
                            </div>
                          </>
                        )}
                        <div className="flex items-center gap-2">
                          <SquareFeet className="h-5 w-5 text-[#e63946]" />
                          <span>{property.area} sq.ft</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building className="h-5 w-5 text-[#e63946]" />
                          <span>{property.type}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="features" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Property Features</h2>

                      {property.features && property.features.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {property.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-[#e63946]" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground">No features listed for this property.</p>
                      )}

                      {property.amenities && property.amenities.length > 0 && (
                        <>
                          <h2 className="text-xl font-semibold mb-4 mt-8">Amenities</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {property.amenities.map((amenity, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-[#e63946]" />
                                <span>{amenity}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="location" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Location</h2>
                      <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                        <p className="text-muted-foreground">Map view would be displayed here</p>
                      </div>
                      <p className="mt-4 text-muted-foreground">{property.location}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Raju Singha Roy"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Raju Singha Roy</h3>
                      <p className="text-sm text-muted-foreground">Real Estate Broker</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full bg-[#e63946] hover:bg-[#e63946]/90">
                      <Phone className="h-4 w-4 mr-2" /> Call: +91 98765 43210
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Share2 className="h-4 w-4 mr-2" /> Share Property
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Similar Properties</h3>
                  <div className="space-y-4">
                    {allProperties
                      .filter((p) => p.id !== property.id && p.type === property.type)
                      .slice(0, 3)
                      .map((p) => (
                        <Link href={`/properties/${p.id}`} key={p.id} className="block group">
                          <div className="flex gap-3">
                            <div className="relative h-16 w-20 rounded overflow-hidden">
                              <Image src={p.image || "/placeholder.svg"} alt={p.title} fill className="object-cover" />
                            </div>
                            <div>
                              <h4 className="font-medium line-clamp-1 group-hover:text-[#e63946] transition-colors">
                                {p.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">{p.location}</p>
                              <p className="text-sm font-semibold text-[#e63946]">₹{p.price.toLocaleString()}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 md:px-8 bg-[#e63946]">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Interested in this property?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Contact Raju Singha Roy today to schedule a viewing or to get more information.
          </p>
          <Button asChild size="lg" className="bg-white text-[#e63946] hover:bg-white/90">
            <Link href="/contact">Contact Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

