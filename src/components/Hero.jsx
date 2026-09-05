import pastryOne from '../assets/pastry-section-1.svg';
import pastryTwo from '../assets/pastry-section-2.svg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[620px] overflow-hidden bg-[#bd1519] px-6 pb-24 pt-12 text-white sm:min-h-[680px] sm:px-10 sm:pb-20 lg:min-h-[calc(100vh-76px)] lg:pt-20">
      <div className="pointer-events-none absolute left-1/2 top-[13%] h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-[#fff8e7]/15 sm:h-[540px] sm:w-[540px]" />

      <img src={pastryOne} alt="Golden artisan pastry" className="absolute bottom-[7%] left-[-2%] w-[52%] max-w-[440px] rotate-[-5deg] drop-shadow-[10px_17px_5px_rgba(88,0,0,0.34)] sm:bottom-[8%] sm:left-[2%] lg:bottom-[6%] lg:left-0 lg:w-[33%]" />
      <img src={pastryTwo} alt="Fresh flaky croissants" className="absolute bottom-[5%] right-[-2%] w-[58%] max-w-[500px] rotate-[8deg] drop-shadow-[-10px_16px_5px_rgba(88,0,0,0.34)] sm:right-[1%] lg:bottom-[4%] lg:right-0 lg:w-[38%]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-5 flex max-w-full items-center gap-3 rounded-full border border-[#fff1c9]/60 px-3 py-2 text-center text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-[#fff1c9] sm:px-4 sm:tracking-[0.2em]">
          <span className="text-sm" aria-hidden="true">✦</span>
          Est. 2024 · baked with care
          <span className="text-sm" aria-hidden="true">✦</span>
        </div>
        <p className="text-xs font-medium tracking-wide text-white/90 sm:text-sm">#ARTISAN BAKERY</p>
        <h1 className="mt-7 max-w-2xl font-display text-5xl uppercase leading-[0.94] tracking-normal sm:text-7xl lg:text-[78px]">
          Crisp. Flaky.<br />Pure Delight.
        </h1>
        <p className="mt-6 max-w-xl text-xs font-medium leading-5 text-white/90 sm:text-sm">
          Golden, flaky croissants served fresh out of the oven every single morning.
        </p>
        <div className="mt-7 flex items-center gap-4">
          <a href="#order" className="rounded-full bg-[#fff7dd] px-9 py-3 text-xs font-bold text-[#bd1519] transition hover:bg-white sm:px-11">
            Order Now
          </a>
          <a href="#menu" className="rounded-full border border-white px-9 py-3 text-xs font-medium text-white transition hover:bg-white hover:text-[#bd1519] sm:px-11">
            See Menu
          </a>
        </div>

      </div>
    </section>
  );
}