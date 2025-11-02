import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProductByHandle } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductTemplate from "@modules/products/templates"

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ handle: string; countryCode: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const { handle } = params
  
  return {
    title: `${handle} | Print Queen 3D`,
    description: "Custom 3D printed product",
  }
}

export default async function ProductPage(props: Props) {
  const params = await props.params
  const { handle, countryCode } = params

  const region = await getRegion(countryCode)

  if (!region) {
    notFound()
  }

  const product = await getProductByHandle(handle, countryCode)

  if (!product) {
    notFound()
  }

  return <ProductTemplate product={product} region={region} countryCode={countryCode} />
}
