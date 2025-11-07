import { Metadata } from "next"
import { notFound } from "next/navigation"

import { listCustomerOrders } from "@lib/data/orders"
import { listRegions } from "@lib/data/regions"
import { retrieveCustomer } from "@lib/data/customer"
import OrdersTemplate from "@modules/account/templates/orders-template"

export const metadata: Metadata = {
  title: "Order History - Print Queen 3D",
  description: "View your order history and track your purchases.",
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Orders({
  params,
}: {
  params: { countryCode: string }
}) {
  const customer = await retrieveCustomer()
  const regions = await listRegions()

  if (!customer || !regions) {
    notFound()
  }

  const orders = await listCustomerOrders()

  return <OrdersTemplate customer={customer} orders={orders} />
}
