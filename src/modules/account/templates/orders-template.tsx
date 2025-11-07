import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import { convertToLocale } from "@lib/util/money"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function OrdersTemplate({
  customer,
  orders,
}: {
  customer: HttpTypes.StoreCustomer
  orders: HttpTypes.StoreOrder[]
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-brand-cream to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Heading level="h1" className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow bg-clip-text text-transparent">
              Order History
            </span>
          </Heading>
          <Text className="text-gray-600">
            View and track all your orders
          </Text>
        </div>

        {/* Orders List */}
        {!orders || orders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <Heading level="h2" className="text-xl font-bold text-gray-900 mb-2">
              No Orders Yet
            </Heading>
            <Text className="text-gray-600 mb-6">
              You haven't placed any orders yet. Start shopping to see your order history here!
            </Text>
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-cyan hover:bg-brand-blue text-white font-semibold rounded-lg transition-colors"
            >
              Start Shopping
            </LocalizedClientLink>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  {/* Order Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Heading level="h3" className="text-lg font-bold text-gray-900">
                          Order #{order.display_id}
                        </Heading>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.payment_status === "captured"
                            ? "bg-green-100 text-green-700"
                            : order.payment_status === "awaiting"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                        }`}>
                          {order.payment_status === "captured" ? "Paid" : order.payment_status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.fulfillment_status === "fulfilled"
                            ? "bg-green-100 text-green-700"
                            : order.fulfillment_status === "shipped"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}>
                          {order.fulfillment_status || "Pending"}
                        </span>
                      </div>
                      <Text className="text-sm text-gray-600">
                        Placed on {new Date(order.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Text>
                    </div>
                    <div className="text-right">
                      <Text className="text-sm text-gray-600 mb-1">Order Total</Text>
                      <Text className="text-2xl font-bold text-brand-navy">
                        {convertToLocale({
                          amount: order.total,
                          currency_code: order.currency_code,
                        })}
                      </Text>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-4 mb-6">
                    {order.items?.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                          {item.thumbnail && (
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <Text className="font-semibold text-gray-900 truncate">
                            {item.title}
                          </Text>
                          {item.variant && (
                            <Text className="text-sm text-gray-600">
                              {item.variant.title}
                            </Text>
                          )}
                          <Text className="text-sm text-gray-500 mt-1">
                            Qty: {item.quantity}
                          </Text>
                        </div>
                        <div className="text-right">
                          <Text className="font-semibold text-gray-900">
                            {convertToLocale({
                              amount: item.unit_price * item.quantity,
                              currency_code: order.currency_code,
                            })}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Actions */}
                  <div className="flex flex-wrap gap-3">
                    <LocalizedClientLink
                      href={`/account/orders/${order.id}`}
                      className="px-6 py-2 bg-brand-cyan hover:bg-brand-blue text-white font-semibold rounded-lg transition-colors"
                    >
                      View Details
                    </LocalizedClientLink>
                    {order.payment_status === "captured" && (
                      <button className="px-6 py-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold rounded-lg transition-colors">
                        Track Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Back to Account */}
        <div className="mt-8 text-center">
          <LocalizedClientLink
            href="/account"
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-blue font-semibold"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Account
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}
