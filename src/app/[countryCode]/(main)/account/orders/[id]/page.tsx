import { Metadata } from "next"
import { notFound } from "next/navigation"

import { retrieveOrder } from "@lib/data/orders"
import OrderDetailsTemplate from "@modules/order/templates/order-details-template"

export const metadata: Metadata = {
  title: "Order Details - Print Queen 3D",
  description: "View your order details.",
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function OrderDetails({
  params,
}: {
  params: { id: string; countryCode: string }
}) {
  const order = await retrieveOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return <OrderDetailsTemplate order={order} />
}
