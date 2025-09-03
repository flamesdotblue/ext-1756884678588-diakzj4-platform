function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16 lg:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="inline-block rounded-full border border-stone-300/70 bg-white px-3 py-1 text-xs uppercase tracking-wide text-stone-600">
            Handmade in Japan
          </p>
          <h1 className="font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
            Quiet forms. Honest materials. Timeless tableware.
          </h1>
          <p className="max-w-xl text-stone-700">
            Thoughtfully crafted mugs, plates, and teapots made in small batches using traditional techniques and local clays. Subtle glazes, warm earth tones, and textures that invite daily use.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#collection"
              className="inline-flex items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Shop Collection
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-400"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=1200&auto=format&fit=crop"
              alt="Stoneware mugs in natural glaze"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop"
              alt="Minimal ceramic plate"
              className="aspect-[4/5] w-full translate-y-6 rounded-lg object-cover shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1487168791452-17942644e6f6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUb2tvbmFtZSUyMHN0eWxlJTIwdGVhcG90fGVufDB8MHx8fDE3NTY4ODQ3OTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
              alt="Tokoname style teapot"
              className="aspect-[4/5] w-full -translate-y-6 rounded-lg object-cover shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1692856505519-d72473103ca4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZXh0dXJlZCUyMGNlcmFtaWMlMjBib3dsfGVufDB8MHx8fDE3NTY4ODQ3OTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
              alt="Textured ceramic bowl"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-sm"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-stone-900/5" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
