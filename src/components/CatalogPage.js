'use client'
import Cards from './Cards'
import Filters from './Filters'
import SortBy from './SortBy'
import MobileFilterDialog from './MobileFilterDialog'

export default function CatalogPage() {
  return (
    <div className="bg-white">
      <div>
        <MobileFilterDialog />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">SHOP ALL</h1>
            <SortBy />
          </div>
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <Filters />
              {/* Product grid */}
              <div className="lg:col-span-3">
                <Cards />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
