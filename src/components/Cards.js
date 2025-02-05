import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

  export default function Cards() {
    const { filteredData, classNames } = useContext(MyContext);

    return (
      <div className="bg-[#FCF2E6]">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredData.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.getImageSrc()} //this needs ()!
                  className="aspect-square w-full rounded-lg object-cover hover:transition-all group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <img
                  alt={product.imageAlt}
                  src={product.getImageSrc2()}
                  className="aspect-square w-full rounded-lg object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 lg:aspect-auto lg:h-80"
                />
                <a
                  href="#"
                  className={classNames(
                    product.nature.perk ? 'absolute flex top-2 left-2 rounded-full bg-[#FCF2E6] px-3 py-1.5 text-sm font-semibold text-zinc-900 shadow-sm'
                    : 'hidden',
                  )}
                >
                  <span className='mr-1'>{product.nature.perkIcon}</span>{product.nature.perk}
                </a>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text text-gray-700 font-medium">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    <p className="mt-1 text-sm text-gray-500">{product.nature.color}</p>
                    {/* <div
                      className={classNames(
                        product.nature.color ? 'h-7 w-7 bg-white rounded-full border-2 border-zinc-500' : 'hidden',
                      )}
                    >
                    </div> */}
                  </div>
                  <p className="font-bold text-gray-900">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }