import Image from "next/image"
import Link from "next/link"
import { Bath, Bed, MapPin, SquareIcon as SquareFeet } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { PropertyType } from "@/lib/types"

interface PropertyCardProps {
  property: PropertyType
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { id, title, location, price, type, status, bedrooms, bathrooms, area, image } = property

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-[4/3]">
        <Badge className={`absolute top-2 left-2 z-10 ${status === "For Sale" ? "bg-[#e63946]" : "bg-[#457b9d]"}`}>
          {status}
        </Badge>
        <Badge className="absolute top-2 right-2 z-10 bg-gray-900/80">{type}</Badge>
        <Image
          src={image || "/placeholder.svg?height=300&width=400"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
          <div className="flex items-center text-muted-foreground mt-1">
            <MapPin className="h-4 w-4 mr-1 text-[#e63946]" />
            <span className="text-sm line-clamp-1">{location}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold text-[#e63946]">₹{price.toLocaleString()}</p>
          {status === "For Rent" && <span className="text-sm text-muted-foreground">/month</span>}
        </div>

        <div className="flex justify-between border-t pt-4">
          {bedrooms !== undefined && (
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm">{bedrooms} Beds</span>
            </div>
          )}

          {bathrooms !== undefined && (
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm">{bathrooms} Baths</span>
            </div>
          )}

          {area !== undefined && (
            <div className="flex items-center">
              <SquareFeet className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm">{area} sq.ft</span>
            </div>
          )}
        </div>

        <Link
          href={`/properties/${id}`}
          className="block w-full text-center mt-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium transition-colors"
        >
          View Details
        </Link>
      </CardContent>
    </Card>
  )
}

