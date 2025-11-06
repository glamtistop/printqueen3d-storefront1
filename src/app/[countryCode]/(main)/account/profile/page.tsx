import { Metadata } from "next"
import { notFound, redirect } from "next/navigation"

import { retrieveCustomer } from "@lib/data/customer"
import ProfileEmail from "@modules/account/components/profile-email"
import ProfileName from "@modules/account/components/profile-name"
import ProfilePhone from "@modules/account/components/profile-phone"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your Print Queen 3D account profile.",
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ProfilePage(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const customer = await retrieveCustomer().catch(() => null)

  if (!customer) {
    redirect(`/${params.countryCode}/account/login`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-brand-cream to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <LocalizedClientLink
            href="/account"
            className="text-brand-cyan hover:text-brand-blue font-semibold mb-4 inline-block"
          >
            ← Back to Account
          </LocalizedClientLink>
          <h1 className="font-display text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-brand-green via-brand-cyan to-brand-blue bg-clip-text text-transparent">
              Edit Profile
            </span>
          </h1>
          <p className="text-gray-600">Manage your personal information</p>
        </div>

        {/* Profile Sections */}
        <div className="space-y-6">
          {/* Name Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-green/20">
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2">
              <span>👤</span>
              Name
            </h2>
            <ProfileName customer={customer} />
          </div>

          {/* Email Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-cyan/20">
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2">
              <span>📧</span>
              Email
            </h2>
            <ProfileEmail customer={customer} />
          </div>

          {/* Phone Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-blue/20">
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2">
              <span>📱</span>
              Phone
            </h2>
            <ProfilePhone customer={customer} />
          </div>
        </div>
      </div>
    </div>
  )
}
