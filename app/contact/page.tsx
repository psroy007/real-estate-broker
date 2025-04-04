"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, propertyType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <Image
          src="/images/contact-header.jpg"
          alt="Contact Raju Singha Roy"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contact Me</h1>
          <p className="text-xl text-white mb-8 max-w-3xl">Get in touch to discuss your property requirements</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                    <Phone className="h-8 w-8 text-[#e63946]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Me</h3>
                  <p className="text-muted-foreground mb-2">Feel free to call me directly</p>
                  <p className="font-medium">+91 98317 77920</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                    <Mail className="h-8 w-8 text-[#e63946]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                  <p className="text-muted-foreground mb-2">Send me an email anytime</p>
                  <p className="font-medium">purabsingharoy90@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-[#e63946]/10 mb-4">
                    <MapPin className="h-8 w-8 text-[#e63946]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Visit Me</h3>
                  <p className="text-muted-foreground mb-2">Come to my office</p>
                  <p className="font-medium">B-73 Bandipur Road Bansdroni Kolkata 700070</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Raju Singha Roy Office"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <Card className="border-none shadow-lg bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center py-6">
                      <div className="p-3 rounded-full bg-green-100 mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting me. I'll get back to you shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} className="bg-[#e63946] hover:bg-[#e63946]/90">
                        Send Another Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select value={formState.propertyType} onValueChange={handleSelectChange}>
                        <SelectTrigger id="propertyType">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Apartment">Apartment</SelectItem>
                          <SelectItem value="House">House</SelectItem>
                          <SelectItem value="Villa">Villa</SelectItem>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                          <SelectItem value="Land">Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your property requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#e63946] hover:bg-[#e63946]/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

