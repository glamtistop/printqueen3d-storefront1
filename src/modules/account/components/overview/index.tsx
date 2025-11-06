import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OverviewProps = {
  customer: HttpTypes.StoreCustomer | null
  orders: HttpTypes.StoreOrder[] | null
}

const Overview = ({ customer, orders }: OverviewProps) => {
  const profileCompletion = getProfileCompletion(customer)
  
  return (
    <div data-testid="overview-page-wrapper" className="min-h-screen bg-gradient-to-br from-white via-brand-cream to-white">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" data-testid="welcome-message">
            Welcome back, {customer?.first_name}! 👋
          </h1>
          <p className="text-xl opacity-90" data-testid="customer-email">
            {customer?.email}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Account Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Profile Completion */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-green/20 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold text-brand-navy">Profile</h3>
              <span className="text-4xl">👤</span>
            </div>
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-transparent" data-testid="customer-profile-completion">
                  {profileCompletion}%
                </span>
                <span className="text-gray-600">Complete</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>✓ Email: {customer?.email ? 'Added' : 'Missing'}</p>
              <p>✓ Name: {customer?.first_name && customer?.last_name ? 'Added' : 'Missing'}</p>
              <p>✓ Phone: {customer?.phone ? 'Added' : 'Missing'}</p>
              <p>✓ Billing: {customer?.addresses?.find(a => a.is_default_billing) ? 'Added' : 'Missing'}</p>
            </div>
          </div>

          {/* Address Count */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-cyan/20 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold text-brand-navy">Addresses</h3>
              <span className="text-4xl">📍</span>
            </div>
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent" data-testid="addresses-count">
                  {customer?.addresses?.length || 0}
                </span>
                <span className="text-gray-600">Saved</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {customer?.addresses?.length === 0 
                ? 'Add your shipping address for faster checkout' 
                : 'Manage your delivery locations'}
            </p>
          </div>

          {/* Order Count */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-pink/20 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold text-brand-navy">Orders</h3>
              <span className="text-4xl">📦</span>
            </div>
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold bg-gradient-to-r from-brand-pink to-brand-orange bg-clip-text text-transparent">
                  {orders?.length || 0}
                </span>
                <span className="text-gray-600">Total</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {orders?.length === 0 
                ? 'Start your 3D printing journey!' 
                : 'View your purchase history'}
            </p>
          </div>
        </div>

        {/* Purchase History */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="font-display text-3xl font-bold text-brand-navy mb-6 flex items-center gap-3">
            <span>📜</span>
            Purchase History
          </h2>
          
          {orders && orders.length > 0 ? (
            <div className="space-y-4" data-testid="orders-wrapper">
              {orders.slice(0, 5).map((order) => (
                <LocalizedClientLink
                  key={order.id}
                  href={`/account/orders/details/${order.id}`}
                  className="block"
                  data-testid="order-wrapper"
                >
                  <div className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-brand-cyan hover:shadow-md transition-all">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Order Number</p>
                        <p className="font-bold text-brand-navy" data-testid="order-id">
                          #{order.display_id}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Date</p>
                        <p className="font-semibold" data-testid="order-created-date">
                          {new Date(order.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Total</p>
                        <p className="font-bold text-brand-green" data-testid="order-amount">
                          {convertToLocale({
                            amount: order.total,
                            currency_code: order.currency_code,
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </LocalizedClientLink>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" data-testid="no-orders-message">
              <div className="text-8xl mb-6">🛍️</div>
              <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">
                No purchases yet
              </h3>
              <p className="text-gray-600 mb-6">
                You haven't ordered anything yet. Start exploring our custom 3D prints!
              </p>
              <LocalizedClientLink
                href="/store"
                className="inline-block bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow hover:from-brand-yellow hover:to-brand-pink text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                Browse Products →
              </LocalizedClientLink>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-brand-cyan to-brand-blue text-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-display text-2xl font-bold mb-4">Ready to Create?</h3>
            <p className="mb-6 opacity-90">
              Have a custom design in mind? Get a personalized quote for your 3D printing project.
            </p>
            <LocalizedClientLink
              href="/quote"
              className="inline-block bg-white text-brand-blue font-bold py-3 px-8 rounded-full hover:bg-brand-cream transition-colors"
            >
              Request a Quote
            </LocalizedClientLink>
          </div>

          <div className="bg-gradient-to-br from-brand-pink to-brand-orange text-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-display text-2xl font-bold mb-4">Continue Shopping</h3>
            <p className="mb-6 opacity-90">
              Discover our latest NFC stands, keychains, and custom 3D printed products.
            </p>
            <LocalizedClientLink
              href="/store"
              className="inline-block bg-white text-brand-pink font-bold py-3 px-8 rounded-full hover:bg-brand-cream transition-colors"
            >
              View All Products
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (customer: HttpTypes.StoreCustomer | null) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  const billingAddress = customer.addresses?.find(
    (addr) => addr.is_default_billing
  )

  if (billingAddress) {
    count++
  }

  return (count / 4) * 100
}

export default Overview
