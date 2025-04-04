"use client"

import { useState } from "react"
import { allProperties } from "@/lib/data"
import PropertyCard from "@/components/property-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [propertyType, setPropertyType] = useState<string>("")
  const [status, setStatus] = useState<string>("")
  const [priceRange, setPriceRange] = useState([0, 15000000])
  const [showFilters, setShowFilters] = useState(false)

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = propertyType === "" || property.type === propertyType
    const matchesStatus = status === "" || property.status === status
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]

    return matchesSearch && matchesType && matchesStatus && matchesPrice
  })

  const resetFilters = () => {
    setSearchTerm("")
    setPropertyType("")
    setStatus("")
    setPriceRange([0, 15000000])
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70">
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Browse Our Properties</h1>
            <p className="text-xl text-white mb-8 max-w-3xl">
              Find the perfect property that meets your needs and budget
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 md:px-8 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by location or property name"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="hidden md:flex gap-4 flex-1">
              <div className="w-1/3">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Apartment">Apartment</SelectItem>
                    <SelectItem value="House">House</SelectItem>
                    <SelectItem value="Villa">Villa</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                    <SelectItem value="Land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-1/3">
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="For Sale">For Sale</SelectItem>
                    <SelectItem value="For Rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={resetFilters} variant="outline" className="w-1/3">
                Reset Filters
              </Button>
            </div>

            {/* Mobile Filter Button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Refine your property search with these filters.</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-6 py-6">
                    <div>
                      <Label htmlFor="mobile-property-type">Property Type</Label>
                      <Select value={propertyType} onValueChange={setPropertyType}>
                        <SelectTrigger id="mobile-property-type" className="mt-2">
                          <SelectValue placeholder="Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Types</SelectItem>
                          <SelectItem value="Apartment">Apartment</SelectItem>
                          <SelectItem value="House">House</SelectItem>
                          <SelectItem value="Villa">Villa</SelectItem>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                          <SelectItem value="Land">Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mobile-status">Status</Label>
                      <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger id="mobile-status" className="mt-2">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Status</SelectItem>
                          <SelectItem value="For Sale">For Sale</SelectItem>
                          <SelectItem value="For Rent">For Rent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Price Range</Label>
                      <div className="mt-6 px-2">
                        <Slider
                          defaultValue={[0, 15000000]}
                          max={15000000}
                          step={100000}
                          value={priceRange}
                          onValueChange={setPriceRange}
                        />
                      </div>
                      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>₹{priceRange[0].toLocaleString()}</span>
                        <span>₹{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>

                    <Button onClick={resetFilters} variant="outline">
                      Reset Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Desktop Price Range */}
          <div className="hidden md:block mt-6">
            <div className="flex items-center justify-between mb-2">
              <Label>Price Range</Label>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>-</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
            <Slider
              defaultValue={[0, 15000000]}
              max={15000000}
              step={100000}
              value={priceRange}
              onValueChange={setPriceRange}
            />
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-50 flex-grow">
        <div className="container mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold">{filteredProperties.length} Properties Found</h2>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No properties found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search criteria</p>
              <Button onClick={resetFilters} variant="outline">
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

