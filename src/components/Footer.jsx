export default function Footer() {
  return (
    <footer className="overflow-hidden rounded-t-[3rem] bg-[#bd1519] px-6 pb-6 pt-16 text-[#fff8e7] sm:rounded-t-[4rem] sm:px-10 sm:pt-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 border-b border-[#fff8e7]/25 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <a href="#home" className="font-display text-3xl uppercase leading-none sm:text-4xl">Butter &amp; Crumb</a>
            <p className="mt-5 text-sm leading-6 text-[#ffe9d4]">
              Warm pastries, thoughtful ingredients, and a little joy in every bite.
            </p>
          </div>
          <a href="#order" className="inline-flex w-fit rounded-full bg-[#fff8e7] px-7 py-3 text-xs font-bold uppercase tracking-wide text-[#a61b1b] transition hover:bg-white">
            Order now
          </a>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#fff1c9]">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#ffe9d4]">
              <li><a href="#home" className="transition hover:text-white">Home</a></li>
              <li><a href="#menu" className="transition hover:text-white">Our menu</a></li>
              <li><a href="#about" className="transition hover:text-white">About us</a></li>
              <li><a href="#promo" className="transition hover:text-white">Offers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#fff1c9]">Visit us</h3>
            <p className="mt-4 text-sm leading-6 text-[#ffe9d4]">
              12 Raya Utama Street<br />
              Bali, Indonesia<br />
              Every day, 7 AM - 9 PM
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#fff1c9]">Say hello</h3>
            <p className="mt-4 text-sm leading-6 text-[#ffe9d4]">
              +62 812 3456 7890<br />
              hello@buttercrumb.com
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#fff1c9]">Follow along</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="#instagram" className="rounded-full border border-[#fff8e7]/40 px-4 py-2 text-xs transition hover:bg-[#fff8e7] hover:text-[#a61b1b]">Instagram</a>
              <a href="#tiktok" className="rounded-full border border-[#fff8e7]/40 px-4 py-2 text-xs transition hover:bg-[#fff8e7] hover:text-[#a61b1b]">TikTok</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[#fff8e7]/25 pt-5 text-[11px] text-[#ffd9c4] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Butter &amp; Crumb. All rights reserved.</span>
          <span>Made fresh, served warm.</span>
        </div>
      </div>
    </footer>
  );
}