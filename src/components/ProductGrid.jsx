const products = [
  {
    id: 1,
    name: 'Arita Mug',
    price: 48,
    image:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Shino Plate',
    price: 62,
    image:
      'https://images.unsplash.com/photo-1722286031218-f5a3fdd3acb6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaGlubyUyMFBsYXRlfGVufDB8MHx8fDE3NTY4ODQ3OTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Tokoname Teapot',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1605372502814-af179a6f93e2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUb2tvbmFtZSUyMFRlYXBvdHxlbnwwfDB8fHwxNzU2ODg0Nzk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Kintsugi Bowl',
    price: 90,
    image:
      'https://images.unsplash.com/photo-1724500939741-554fcece2362?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLaW50c3VnaSUyMEJvd2x8ZW58MHwwfHx8MTc1Njg4NDc5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Stoneware Cup',
    price: 38,
    image:
      'https://images.unsplash.com/photo-1741765328171-fc52ae69b56b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdG9uZXdhcmUlMjBDdXB8ZW58MHwwfHx8MTc1Njg4NDc5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Matcha Chawan',
    price: 98,
    image:
      'https://images.unsplash.com/photo-1755685068178-4b57210ddcd4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXRjaGElMjBDaGF3YW58ZW58MHwwfHx8MTc1Njg4NDc5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

function ProductCard({ product }) {
  return (
    <a
      href="#"
      className="group block overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
      aria-label={product.name}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-stone-900/5" />
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <h3 className="font-serif text-lg text-stone-900">{product.name}</h3>
          <p className="text-sm text-stone-600">${product.price.toFixed(2)}</p>
        </div>
        <span className="inline-flex items-center rounded-full border border-stone-300 px-3 py-1 text-xs text-stone-700 transition group-hover:bg-stone-50">
          View
        </span>
      </div>
    </a>
  );
}

function ProductGrid() {
  return (
    <section id="collection" className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:pb-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-serif text-3xl text-stone-900">The Collection</h2>
          <p className="mt-1 text-stone-600">Mugs, plates, and teapots in harmonious earth tones.</p>
        </div>
        <a
          href="#"
          className="hidden rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-800 shadow-sm transition hover:border-stone-400 hover:shadow sm:inline-flex"
        >
          Shop All
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
