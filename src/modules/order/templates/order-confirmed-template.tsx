import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import { convertToLocale } from "@lib/util/money"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"

type OrderConfirmedTemplateProps = {
  order: HttpTypes.StoreOrder
}

export default function OrderConfirmedTemplate({
  order,
}: OrderConfirmedTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-brand-cream to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <Heading level="h1" className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow bg-clip-text text-transparent">
              Order Confirmed!
            </span>
          </Heading>
          <Text className="text-lg text-gray-600 mb-2">
            Thank you for your order! We'll send you a confirmation email shortly.
          </Text>
          <Text className="text-sm text-gray-500">
            Order #{order.display_id} • Placed on{" "}
            {new Date(order.created_at).toLocaleDateString()}
          </Text>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          {/* Customer Info */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h2 className="text-xl font-bold text-brand-navy mb-4">
              Order Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Contact
                </h3>
                <p className="text-gray-600">{order.email}</p>
              </div>
              {order.shipping_address && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Shipping Address
                  </h3>
                  <p className="text-gray-600">
                    {order.shipping_address.first_name}{" "}
                    {order.shipping_address.last_name}
                    <br />
                    {order.shipping_address.address_1}
                    {order.shipping_address.address_2 && (
                      <>
                        <br />
                        {order.shipping_address.address_2}
                      </>
                    )}
                    <br />
                    {order.shipping_address.city},{" "}
                    {order.shipping_address.province}{" "}
                    {order.shipping_address.postal_code}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Order Items */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-brand-navy mb-4">
              Order Items
            </h2>
            <div className="space-y-4">
              {order.items?.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-20 h-20 flex-shrink-0">
                    <Thumbnail
                      thumbnail={item.thumbnail}
                      images={[]}
                      size="square"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {item.title}
                    </h3>
                    {item.variant && (
                      <p className="text-sm text-gray-600">
                        {item.variant.title}
                      </p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {convertToLocale({
                        amount: item.unit_price * item.quantity,
                        currency_code: order.currency_code,
                      })}
                    </p>
                    <p className="text-sm text-gray-500">
                      {convertToLocale({
                        amount: item.unit_price,
                        currency_code: order.currency_code,
                      })}{" "}
                      each
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-brand-navy mb-4">
              Order Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal (excl. taxes)</span>
                <span>
                  {convertToLocale({
                    amount: order.subtotal ?? 0,
                    currency_code: order.currency_code,
                  })}
                </span>
              </div>
              {order.discount_total > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discounts</span>
                  <span>
                    -
                    {convertToLocale({
                      amount: order.discount_total,
                      currency_code: order.currency_code,
                    })}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>
                  {order.shipping_total === 0
                    ? "FREE"
                    : convertToLocale({
                        amount: order.shipping_total ?? 0,
                        currency_code: order.currency_code,
                      })}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Taxes</span>
                <span>
                  {convertToLocale({
                    amount: order.tax_total ?? 0,
                    currency_code: order.currency_code,
                  })}
                </span>
              </div>
              <div className="flex justify-between text-xl font-bold text-brand-navy pt-3 border-t border-gray-200">
                <span>Total</span>
                <span>
                  {convertToLocale({
                    amount: order.total ?? 0,
                    currency_code: order.currency_code,
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-cyan hover:bg-brand-blue text-white font-semibold rounded-lg transition-colors"
          >
            Continue Shopping
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/account/orders"
            className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-50 text-brand-navy font-semibold rounded-lg border-2 border-brand-navy transition-colors"
          >
            View Order History
          </LocalizedClientLink>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Questions about your order? Contact us at{" "}
            <a
              href="mailto:Printqueen3d@gmail.com"
              className="text-brand-cyan hover:text-brand-blue font-semibold"
            >
              Printqueen3d@gmail.com
            </a>
          </p>
          <p className="text-xs text-gray-500">
            Please review our{" "}
            <LocalizedClientLink
              href="/refund-policy"
              className="text-brand-cyan hover:text-brand-blue"
            >
              Refund Policy
            </LocalizedClientLink>{" "}
            and{" "}
            <LocalizedClientLink
              href="/product-care"
              className="text-brand-cyan hover:text-brand-blue"
            >
              Product Care Guide
            </LocalizedClientLink>
          </p>
        </div>
      </div>
    </div>
  )
}
