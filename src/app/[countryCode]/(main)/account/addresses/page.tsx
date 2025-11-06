import { Metadata } from "next"
import { redirect } from "next/navigation"

import { retrieveCustomer } from "@lib/data/customer"
import { getRegion } from "@lib/data/regions"
import AddressBook from "@modules/account/components/address-book"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Addresses",
  description: "View and manage your shipping addresses.",
}

export default async function AddressesPage(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const customer = await retrieveCustomer().catch(() => null)
  const region = await getRegion(params.countryCode)

  if (!customer) {
    redirect(`/${params.countryCode}/account/login`)
  }

  if (!region) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-brand-cream to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <LocalizedClientLink
            href="/account"
            className="text-brand-cyan hover:text-brand-blue font-semibold mb-4 inline-block"
          >
            ← Back to Account
          </LocalizedClientLink>
          <h1 className="font-display text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-navy bg-clip-text text-transparent">
              Manage Addresses
            </span>
          </h1>
          <p className="text-gray-600">Add and manage your shipping and billing addresses</p>
        </div>

        {/* Address Book */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-cyan/20">
          <AddressBook customer={customer} region={region} />
        </div>
      </div>
    </div>
  )
}
