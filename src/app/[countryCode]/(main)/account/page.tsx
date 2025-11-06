import { Metadata } from "next"
import { notFound } from "next/navigation"

import { retrieveCustomer } from "@lib/data/customer"
import { listOrders } from "@lib/data/orders"
import Overview from "@modules/account/components/overview"

export const metadata: Metadata = {
  title: "Account",
  description: "Overview of your account activity.",
}

export default async function AccountPage() {
  const customer = await retrieveCustomer().catch(() => null)

  if (!customer) {
    notFound()
  }

  const orders = (await listOrders(10, 0)) || []

  return <Overview customer={customer} orders={orders} />
}
