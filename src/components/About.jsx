import pastryOne from '../assets/pastry-section-1.svg';
import pastryTwo from '../assets/pastry-section-2.svg';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#bd1519] px-6 py-20 text-[#fff8e7] sm:px-10 sm:py-24 lg:px-16">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#d92d2d]/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-[-5%] h-72 w-72 rounded-full bg-[#8f1015]/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative min-h-[390px] sm:min-h-[470px]">
          <div className="absolute left-[9%] top-[5%] h-[82%] w-[78%] rounded-[48%_48%_10%_10%] border border-[#fff8e7]/30" />
          <img
            src={pastryOne}
            alt="Golden pastry made fresh at Butter and Crumb"
            className="absolute left-[-5%] top-[12%] w-[105%] max-w-[520px] -rotate-6 drop-shadow-[12px_20px_6px_rgba(75,0,0,0.35)]"
          />
          <img
            src={pastryTwo}
            alt="Fresh flaky pastries from Butter and Crumb"
            className="absolute bottom-[-2%] right-[-4%] w-[63%] max-w-[300px] rotate-6 drop-shadow-[10px_16px_5px_rgba(75,0,0,0.35)]"
          />
          <span className="absolute left-[2%] top-[14%] h-3 w-3 rounded-full bg-[#fff1c9]" />
          <span className="absolute bottom-[16%] right-[4%] h-2 w-2 rounded-full bg-[#fff1c9]" />
        </div>

        <div className="max-w-xl">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#fff1c9]">
            <span className="h-px w-10 bg-[#fff1c9]" />
            Our story
          </p>
          <h2 className="mt-6 max-w-lg font-display text-5xl uppercase leading-[0.92] sm:text-6xl">
            Made with time.<br />Shared with love.
          </h2>
          <p className="mt-8 max-w-lg text-sm leading-7 text-[#ffe9d4] sm:text-base">
            Butter &amp; Crumb began with a simple belief: the best moments start with something warm from the oven.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#ffe9d4] sm:text-base">
            We make every pastry by hand, using honest ingredients and time-honoured techniques, so every bite feels just a little more special.
          </p>
          <a href="#menu" className="mt-8 inline-flex rounded-full bg-[#fff8e7] px-7 py-3 text-xs font-bold uppercase tracking-wide text-[#a61b1b] transition hover:bg-white">
            Taste the difference
          </a>
        </div>
      </div>
    </section>
  );
}