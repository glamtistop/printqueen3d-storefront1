import { Metadata } from "next"
import { retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import CartTemplate from "@modules/cart/templates"

export const metadata: Metadata = {
  title: "Shopping Cart | Print Queen 3D",
  description: "View and manage your cart",
}

export default async function CartPage() {
  const cart = await retrieveCart()
  const customer = await retrieveCustomer()

  return <CartTemplate cart={cart} customer={customer} />
}
