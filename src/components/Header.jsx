function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/70 bg-stone-50/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="font-serif text-xl tracking-tight text-stone-900 sm:text-2xl">
          Kado Ceramics
        </a>
        <nav className="hidden items-center gap-8 text-sm text-stone-700 sm:flex">
          <a href="#collection" className="hover:text-stone-900">Shop</a>
          <a href="#about" className="hover:text-stone-900">About</a>
          <a href="#contact" className="hover:text-stone-900">Contact</a>
        </nav>
        <a
          href="#collection"
          className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-800 shadow-sm transition hover:border-stone-400 hover:shadow"
        >
          Shop Collection
        </a>
      </div>
    </header>
  );
}

export default Header;
