import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative z-30 bg-[#bd1519] px-4 py-5 text-white sm:px-14 sm:py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center gap-3">
        <div className="flex items-center gap-3">
          <a href="#home" onClick={closeMenu} className="hidden rounded-full border border-white px-5 py-2 text-center text-[10px] font-medium transition hover:bg-white hover:text-[#bd1519] sm:block sm:px-8 sm:text-[11px]">
            Home
          </a>
          <a href="#menu" className="hidden rounded-full border border-white px-8 py-2 text-center text-[11px] font-medium transition hover:bg-white hover:text-[#bd1519] sm:block">
            Menu
          </a>
        </div>

        <a href="#home" onClick={closeMenu} className="text-center font-display text-base tracking-normal sm:text-xl">
          BUTTER &amp; CRUMB
        </a>

        <div className="flex items-center justify-end gap-3">
          <a href="#about" className="hidden rounded-full border border-white px-8 py-2 text-center text-[11px] font-medium transition hover:bg-white hover:text-[#bd1519] sm:block">
            About Us
          </a>
          <a href="#order" className="rounded-full bg-[#fff7dd] px-5 py-2 text-center text-[10px] font-bold text-[#bd1519] transition hover:bg-white sm:px-7 sm:text-[11px]">
            Order Now
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white sm:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1" aria-hidden="true">
              <span className="h-px w-3.5 bg-white" />
              <span className="h-px w-3.5 bg-white" />
              <span className="h-px w-3.5 bg-white" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-4 right-4 top-full rounded-b-2xl bg-[#a61b1b] p-4 shadow-[0_16px_25px_rgba(80,0,0,0.25)] sm:hidden">
          <div className="grid gap-2 text-center text-sm font-bold uppercase tracking-wide">
            <a href="#home" onClick={closeMenu} className="rounded-full px-4 py-3 transition hover:bg-[#fff8e7] hover:text-[#a61b1b]">Home</a>
            <a href="#menu" onClick={closeMenu} className="rounded-full px-4 py-3 transition hover:bg-[#fff8e7] hover:text-[#a61b1b]">Menu</a>
            <a href="#about" onClick={closeMenu} className="rounded-full px-4 py-3 transition hover:bg-[#fff8e7] hover:text-[#a61b1b]">About Us</a>
            <a href="#order" onClick={closeMenu} className="rounded-full bg-[#fff8e7] px-4 py-3 text-[#a61b1b] transition hover:bg-white">Order Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}