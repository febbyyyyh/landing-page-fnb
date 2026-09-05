import menuThree from '../assets/menu-3.svg';

export default function PromoBanner() {
    return (
        <section id="promo" className="overflow-hidden bg-[#fff8e7] px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
            <div className="relative mx-auto flex max-w-6xl flex-col items-center overflow-hidden rounded-[2rem] bg-[#bd1519] px-8 py-12 text-center text-[#fff8e7] shadow-[0_18px_35px_rgba(120,20,20,0.18)] sm:px-14 md:flex-row md:justify-between md:py-14 md:text-left">
                <span className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#fff8e7]/20" />
                <span className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full border border-[#fff8e7]/10" />

                <div className="relative z-10 max-w-lg">
                    <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#fff1c9] md:justify-start">
                        <span className="hidden h-px w-8 bg-[#fff1c9] md:block" />
                        A little extra joy
                    </p>
                    <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] sm:text-6xl">Happy hour<br />starts at eight.</h2>
                    <p className="mt-5 max-w-md text-sm leading-6 text-[#ffe9d4]">
                        Enjoy 30% off selected pastries during the last hour of the day. Good treats, less waste.
                    </p>
                    <a href="#menu" className="mt-7 inline-flex rounded-full bg-[#fff8e7] px-7 py-3 text-xs font-bold uppercase tracking-wide text-[#a61b1b] transition hover:bg-white">
                        See today&apos;s treats
                    </a>
                </div>

                <div className="relative z-10 mt-10 flex items-center gap-5 md:mr-8 md:mt-0">
                    <div className="text-center">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#fff1c9]">Every day</p>
                        <p className="mt-1 font-display text-5xl text-[#fff1c9]">8 PM</p>
                        <p className="text-xs text-[#ffe9d4]">until closing time</p>
                    </div>
                    <img src={menuThree} alt="Chocolate chip cookie" className="h-32 w-32 rotate-12 object-contain drop-shadow-[8px_12px_4px_rgba(75,0,0,0.35)] sm:h-40 sm:w-40" />
                </div>
            </div>
        </section>
    );
}