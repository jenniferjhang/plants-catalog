import {PetsOutlined, Sell, EmojiEvents, NewReleases } from '@mui/icons-material'

export const products = [
    {
      id: 1,
      title: 'Money tree',
      price: '$45',
      description: 'A symbol of good luck and prosperity, the Money Tree features lush, braided trunks and glossy, palmate leaves. It thrives in bright, indirect light and is an easy-care addition to any space.',
      href: '#',
      getImageSrc: () => require("../assets/money.jpg"),
      getImageSrc2: () => require("../assets/money2.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['White','Black'],
        size: 'S',
        perkIcon: <PetsOutlined fontSize='small'/>,
        perk: 'Pet friendly',
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
      getImageSrc2: () => require("../assets/alocasia2.jpg"),
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
      getImageSrc2: () => require("../assets/spear2.jpg"),
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
      getImageSrc2: () => require("../assets/aloe2.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['Clay'],
        size: 'M',
        perkIcon: <Sell fontSize='small'/>,
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
      getImageSrc2: () => require("../assets/peperomia2.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['Black','White'],
        size: 'M',
        perkIcon: <PetsOutlined fontSize='small'/>,
        perk: 'Pet friendly',
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
      getImageSrc2: () => require("../assets/jade2.jpg"),
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
      getImageSrc2: () => require("../assets/hoya heart2.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['Black'],
        size: 'S',
        perkIcon: <PetsOutlined fontSize='small'/>,
        perk: 'Pet friendly',
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
      getImageSrc2: () => require("../assets/golden pothos2.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['White'],
        size: 'M',
        perkIcon: <NewReleases fontSize='small'/>,
        perk: 'new',
        light: '',
      }
    },
    {
      id: 9,
      title: 'Bird of paradise',
      price: 70,
      description: "Known for its dramatic, banana-like leaves, the Bird of Paradise is a showstopper. It requires bright, indirect light and a bit more attention but rewards with stunning, tropical foliage.",
      href: '#',
      getImageSrc: () => require("../assets/bird of paradise.jpg"),
      getImageSrc2: () => require("../assets/bird of paradise2.jpg"),
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
      getImageSrc2: () => require("../assets/monstera2.jpg"),
      imageAlt: "Hands hold up a money tree plant",
      nature: {
        color: ['White'],
        size: 'L',
        perkIcon: <EmojiEvents fontSize='small'/>,
        perk: 'bestseller',
        light: '',
      }
    },


  ]