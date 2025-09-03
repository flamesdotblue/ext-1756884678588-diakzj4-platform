import { Instagram, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="border-t border-stone-200/70 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl text-stone-900">Kado Ceramics</h3>
            <p className="mt-2 max-w-sm text-sm text-stone-600">
              Small-batch Japanese ceramics celebrating simplicity, utility, and a quiet sense of beauty.
            </p>
          </div>
          <div id="about">
            <h4 className="font-medium text-stone-900">Studio</h4>
            <ul className="mt-2 space-y-1 text-sm text-stone-700">
              <li>Kyoto, Japan</li>
              <li>Open by appointment</li>
              <li>Worldwide shipping</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-stone-900">Connect</h4>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="mailto:studio@example.com"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 shadow-sm transition hover:border-stone-400"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 shadow-sm transition hover:border-stone-400"
              >
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-6 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Kado Ceramics. All rights reserved.</p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
