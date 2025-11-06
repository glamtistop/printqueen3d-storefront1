"use client"

import { useState } from "react"
import { Metadata } from "next"

export default function PartnershipPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    socialMedia: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/partnership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          socialMedia: "",
          message: ""
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">Partner With Us</h1>
          <p className="text-xl text-gray-300">
            Creators, event organizers, and brands—let's build together
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-4">Let's Collaborate</h2>
            <p className="text-gray-600 mb-8">
              Pitch product ideas, event activations, or content collabs. Fill out the form below and we'll get back to you within 48 hours.
            </p>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you! Your partnership inquiry has been submitted. We'll be in touch soon!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                Something went wrong. Please try again or email us directly at Printqueen3d@gmail.com
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                  placeholder="(123) 456-7890"
                />
              </div>

              {/* Social Media */}
              <div>
                <label htmlFor="socialMedia" className="block text-sm font-medium text-gray-700 mb-2">
                  Social Media Handle
                </label>
                <input
                  type="text"
                  id="socialMedia"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                  placeholder="@yourhandle or profile link"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Your Partnership Idea *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all resize-none"
                  placeholder="Share your ideas for collaboration, partnership opportunities, product concepts, or event activations..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-cyan hover:bg-brand-neon text-brand-navy font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Prefer to reach out directly?{" "}
                <a href="mailto:Printqueen3d@gmail.com" className="text-brand-cyan hover:underline font-medium">
                  Printqueen3d@gmail.com
                </a>
                {" "}or call{" "}
                <a href="tel:800-495-6227" className="text-brand-cyan hover:underline font-medium">
                  800-495-6227
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
