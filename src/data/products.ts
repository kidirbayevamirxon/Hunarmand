export interface Product {
  id: number
  name: string
  price: string
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Electric Guitar",
    price: "$499",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
    description:
      "High-quality electric guitar with premium pickups and solid mahogany body. Perfect for rock and blues musicians."
  },
  {
    id: 2,
    name: "Grand Piano",
    price: "$2999",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a",
    description:
      "Professional grand piano with rich acoustic tone. Ideal for concerts and studios."
  },
  {
    id: 3,
    name: "Acoustic Guitar",
    price: "$349",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
    description:
      "Classic acoustic guitar with warm tone and spruce top. Great for beginners and professionals."
  },
  {
    id: 4,
    name: "Drum Set",
    price: "$899",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629",
    description:
      "Full 5-piece drum kit with cymbals. Powerful sound for stage and studio performances."
  },
  {
    id: 5,
    name: "Digital Piano",
    price: "$799",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0",
    description:
      "88-key digital piano with weighted keys and multiple sound presets."
  },
  {
    id: 6,
    name: "DJ Controller",
    price: "$399",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    description:
      "Professional DJ controller with RGB pads and smooth jog wheels."
  },
  {
    id: 7,
    name: "Violin",
    price: "$299",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    description:
      "Handcrafted violin with rich, expressive tone. Suitable for orchestral use."
  },
  {
    id: 8,
    name: "Saxophone",
    price: "$699",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0",
    description:
      "Alto saxophone with smooth airflow and bright brass finish."
  },
  {
    id: 9,
    name: "Studio Microphone",
    price: "$199",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439",
    description:
      "Condenser studio microphone with crystal-clear vocal recording quality."
  },
  {
    id: 10,
    name: "Bass Guitar",
    price: "$549",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    description:
      "4-string bass guitar with deep punchy tone and maple neck."
  },
  {
    id: 11,
    name: "Electronic Keyboard",
    price: "$249",
    image: "https://images.unsplash.com/photo-1485579149621-3123dd979885",
    description:
      "Portable electronic keyboard with built-in rhythms and learning mode."
  }
]