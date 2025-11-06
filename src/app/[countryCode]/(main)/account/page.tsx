import { Metadata } from "next"
import { redirect } from "next/navigation"

import { retrieveCustomer } from "@lib/data/customer"
import { listOrders } from "@lib/data/orders"
import Overview from "@modules/account/components/overview"

export const metadata: Metadata = {
  title: "Account",
  description: "Overview of your account activity.",
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function AccountPage(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const customer = await retrieveCustomer().catch(() => null)

  if (!customer) {
    redirect(`/${params.countryCode}/account/login`)
  }

  const orders = (await listOrders(10, 0)) || []

  return <Overview customer={customer} orders={orders} />
}
