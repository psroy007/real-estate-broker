import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  name: string
  position: string
  testimonial: string
  image: string
}

export default function TestimonialCard({ name, position, testimonial, image }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <QuoteIcon className="h-8 w-8 text-[#e63946]/30" />
          <p className="text-muted-foreground">{testimonial}</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-muted-foreground">{position}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

