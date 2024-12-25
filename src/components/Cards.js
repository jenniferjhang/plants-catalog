const products = [
    {
      id: 1,
      title: 'Money tree',
      price: '$45',
      description: 'A symbol of good luck and prosperity, the Money Tree features lush, braided trunks and glossy, palmate leaves. It thrives in bright, indirect light and is an easy-care addition to any space.',
      href: '#',
      getImageSrc: () => require("../assets/money.jpg"),
      getImageSrc2: () => require("../assets/alocasia.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['White','Black'],
        size: 'S',
        perk: 'pet-friendly',
        light: '',
      }
    },
    {
      id: 2,
      title: 'Alocasia',
      price: '$35',
      description: 'Known for its striking, oversized leaves with dramatic veins, the Alocasia makes a bold statement in any home. Prefers bright, indirect light and consistent humidity for optimal growth.',
      href: '#',
      getImageSrc: () => require("../assets/alocasia.jpg"),
      getImageSrc2: () => require("../assets/alocasia.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['Clay'],
        size: 'M',
        perk: '',
        light: '',
      }
    },
    {
      id: 3,
      title: 'Spear plant',
      price: '$25',
      description: "The Spear Plant has narrow, arching green leaves with hints of yellow or red at the edges. It's a low-maintenance plant, perfect for both homes and offices, thriving in indirect light.",
      href: '#',
      getImageSrc: () => require("../assets/spear.jpg"),
      getImageSrc2: () => require("../assets/spear.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['Clay','White','Black'],
        size: 'M',
        perk: '',
        light: '',
      }
    },
    {
      id: 4,
      title: 'Aloe vera',
      price: '$15',
      description: "Aloe Vera is not only an attractive succulent but also offers soothing gel for skin care. This drought-tolerant plant thrives in bright light and requires minimal watering.",
      href: '#',
      getImageSrc: () => require("../assets/aloe.jpg"),
      getImageSrc2: () => require("../assets/aloe.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['Clay'],
        size: 'M',
        perk: '35% OFF',
        light: '',
      }
    },
    {
      id: 5,
      title: 'Peperomia',
      price: '$15',
      description: "Peperomia is a compact, easy-to-care-for plant with diverse textures and colors, including thick, waxy leaves. It does well in low to medium light and requires only occasional watering.",
      href: '#',
      getImageSrc: () => require("../assets/peperomia.jpg"),
      getImageSrc2: () => require("../assets/peperomia.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['Black','White'],
        size: 'M',
        perk: 'pet-friendly',
        light: '',
      }
    },
    {
      id: 6,
      title: 'Jade plant',
      price: '$25',
      description: "Known for its thick, fleshy leaves, the Jade Plant is a resilient succulent often associated with wealth and good fortune. It prefers bright light and infrequent watering.",
      href: '#',
      getImageSrc: () => require("../assets/jade.jpg"),
      getImageSrc2: () => require("../assets/jade.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['White'],
        size: 'S',
        perk: '',
        light: '',
      }
    },
    {
      id: 7,
      title: 'Hoya heart',
      price: '$15',
      description: "This cute, heart-shaped succulent is a great gift for plant lovers. It enjoys bright, indirect light and minimal watering. Perfect for small spaces and hanging planters.",
      href: '#',
      getImageSrc: () => require("../assets/hoya heart.jpg"),
      getImageSrc2: () => require("../assets/jade.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['Black'],
        size: 'S',
        perk: 'pet-friendly',
        light: '',
      }
    },
    {
      id: 8,
      title: 'Golden pothos',
      price: '$35',
      description: "The Golden Pothos is a fast-growing, low-maintenance vine with trailing leaves marked by golden-yellow variegation. Ideal for beginners, it thrives in low to bright, indirect light.",
      href: '#',
      getImageSrc: () => require("../assets/golden pothos.jpg"),
      getImageSrc2: () => require("../assets/jade.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['White'],
        size: 'M',
        perk: 'new',
        light: '',
      }
    },
    {
      id: 9,
      title: 'Bird of paradise',
      price: '$70',
      description: "Known for its dramatic, banana-like leaves, the Bird of Paradise is a showstopper. It requires bright, indirect light and a bit more attention but rewards with stunning, tropical foliage.",
      href: '#',
      getImageSrc: () => require("../assets/bird of paradise.jpg"),
      getImageSrc2: () => require("../assets/jade.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['White', 'Clay'],
        size: 'L',
        perk: '',
        light: '',
      }
    },
    {
      id: 10,
      title: 'Monstera',
      price: '$60',
      description: "Monstera is famous for its large, glossy, split leaves that bring a bold, tropical vibe to any space. It thrives in bright, indirect light and can grow rapidly with proper care.",
      href: '#',
      getImageSrc: () => require("../assets/monstera.jpg"),
      getImageSrc2: () => require("../assets/jade.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['White'],
        size: 'L',
        perk: 'bestseller',
        light: '',
      }
    },


  ]

  export default function Cards() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.getImageSrc()} //this needs ()!
                  className="aspect-square w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <img
                  alt={product.imageAlt}
                  src={product.getImageSrc2()}
                  className="aspect-square w-full rounded-lg object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 lg:aspect-auto lg:h-80"
                />
                <a href="#" className="absolute top-2 left-2 rounded-full bg-stone-100 px-3 py-1.5 text-sm font-semibold shadow-sm">{product.nature.perk}</a>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    <p className="mt-1 text-sm text-gray-500">{product.nature.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }