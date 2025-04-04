export interface PropertyType {
  id: string
  title: string
  description?: string
  location: string
  price: number
  type: "Apartment" | "House" | "Villa" | "Commercial" | "Land"
  status: "For Sale" | "For Rent"
  bedrooms?: number
  bathrooms?: number
  area?: number
  image: string
  features?: string[]
  amenities?: string[]
}

export interface TestimonialType {
  id: string
  name: string
  position: string
  testimonial: string
  image: string
}

