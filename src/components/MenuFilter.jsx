import { useState } from 'react';
import bestsellerOne from '../assets/bestseller-1.svg';
import bestsellerTwo from '../assets/bestseller-2.svg';
import menuOne from '../assets/menu-1.svg';
import menuTwo from '../assets/menu-2.svg';
import menuThree from '../assets/menu-3.svg';
import pastryOne from '../assets/pastry-section-1.svg';
import pastryTwo from '../assets/pastry-section-2.svg';

const bestsellers = [
  {
    name: 'Butter Knot',
    image: bestsellerOne,
    callouts: [
      { label: 'French butter', side: 'left', position: 'top-[30%]' },
      { label: 'Crisp layers', side: 'right', position: 'bottom-[30%]' },
    ],
  },
  {
    name: 'Berry Star Tart',
    image: bestsellerTwo,
    callouts: [
      { label: 'Berry filling', side: 'left', position: 'top-[35%]' },
      { label: 'Golden crust', side: 'right', position: 'bottom-[28%]' },
    ],
  },
];

const menuItems = [
  { name: 'Almond Croissant', price: 35000, description: 'Flaky layers filled with toasted almond cream.', image: menuOne },
  { name: 'Cheesy Pastry', price: 35000, description: 'Golden baked pastry packed with rich, melty cheese.', image: menuTwo },
  { name: 'Chocolate Chip Cookie', price: 35000, description: 'A generous, soft-baked cookie with pools of chocolate.', image: menuThree },
  { name: 'Butter Croissant', price: 35000, description: 'Classic laminated pastry with a fragrant buttery finish.', image: pastryOne },
  { name: 'Berry Danish', price: 35000, description: 'A tender pastry with a bright, jammy berry filling.', image: pastryTwo },
];

const formatPrice = (price) => `Rp. ${price.toLocaleString('id-ID')}`;

function BestsellerCard({ item }) {
  return (
    <article className="group relative flex min-h-[310px] flex-col items-center justify-end overflow-visible rounded-[2rem] border border-[#e9d9bb] bg-[#fff3d8] px-6 pb-7 pt-4 text-center sm:min-h-[360px] sm:px-10 sm:pb-8">
      <span className="absolute right-4 top-4 rounded-full bg-[#bd1519] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#fff8e7]">Best seller</span>
      <span className="pointer-events-none absolute -left-8 top-14 h-24 w-24 rounded-full border border-[#bd1519]/15" />
      {item.callouts.map((callout) => (
        <div key={callout.label} className={`absolute ${callout.position} z-20 hidden items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-[#a61b1b] sm:flex ${callout.side === 'left' ? 'left-[-58px] text-right' : 'right-[-58px] text-left'}`}>
          {callout.side === 'right' && <span className="relative h-px w-8 bg-[#a61b1b] after:absolute after:-right-1 after:-top-[3px] after:h-2 after:w-2 after:rounded-full after:bg-[#a61b1b]" />}
          <span className="max-w-[72px] leading-3">{callout.label}</span>
          {callout.side === 'left' && <span className="relative h-px w-8 bg-[#a61b1b] after:absolute after:-right-1 after:-top-[3px] after:h-2 after:w-2 after:rounded-full after:bg-[#a61b1b]" />}
        </div>
      ))}
      <img src={item.image} alt={item.name} className="relative z-10 h-56 w-full object-contain drop-shadow-[8px_14px_8px_rgba(100,60,0,0.18)] sm:h-64" />
      <h3 className="relative z-10 mt-2 font-display text-xl uppercase leading-none text-[#a61b1b] sm:text-2xl">{item.name}</h3>
    </article>
  );
}

export default function MenuFilter() {
  const [menuIndex, setMenuIndex] = useState(0);
  const [basketItems, setBasketItems] = useState([]);
  const [addedMessage, setAddedMessage] = useState('');
  const [basketOpen, setBasketOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  const activeItem = menuItems[menuIndex];
  const previousItem = menuItems[(menuIndex - 1 + menuItems.length) % menuItems.length];
  const nextItem = menuItems[(menuIndex + 1) % menuItems.length];

  const changeMenu = (direction) => {
    setSlideDirection(direction > 0 ? 'next' : 'previous');
    setMenuIndex((index) => (index + direction + menuItems.length) % menuItems.length);
    setAddedMessage('');
  };

  const basketTotal = basketItems.reduce((total, item) => total + item.price, 0);

  const addToBasket = () => {
    setBasketItems((items) => [...items, activeItem]);
    setAddedMessage(`${activeItem.name} added to your basket`);
  };

  const removeFromBasket = (itemIndex) => {
    setBasketItems((items) => items.filter((_, index) => index !== itemIndex));
  };

  return (
    <section id="menu" className="overflow-hidden bg-[#fff8e7] px-6 py-16 text-[#a61b1b] sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-3 text-center text-xs font-bold uppercase tracking-[0.22em] text-[#a61b1b]">
          <span className="h-px w-10 bg-[#a61b1b] sm:w-16" />
          The crowd favourites
          <span className="h-px w-10 bg-[#a61b1b] sm:w-16" />
        </div>
        <h2 className="mt-4 text-center font-display text-4xl uppercase leading-none sm:text-5xl">Today&apos;s Bestsellers</h2>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-12">
          {bestsellers.map((item) => <BestsellerCard key={item.name} item={item} />)}
        </div>

        <div className="mt-24 sm:mt-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a61b1b]">Fresh from the oven</p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none sm:text-5xl">Our Menu&apos;s</h2>
            </div>
            <div className="relative">
              <button type="button" onClick={() => setBasketOpen((open) => !open)} aria-expanded={basketOpen} className="rounded-full border border-[#a61b1b]/25 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#a61b1b] transition hover:bg-[#a61b1b] hover:text-[#fff8e7]">
                Basket: {basketItems.length}
              </button>
              {basketOpen && (
                <div className="absolute right-0 top-12 z-30 w-64 rounded-2xl border border-[#e9d9bb] bg-[#fff8e7] p-4 text-left shadow-[0_14px_25px_rgba(120,20,20,0.18)]">
                  <div className="flex items-center justify-between border-b border-[#e9d9bb] pb-3">
                    <span className="font-display text-lg uppercase text-[#a61b1b]">Your basket</span>
                    {basketItems.length > 0 && <button type="button" onClick={() => setBasketItems([])} className="text-[10px] font-bold uppercase text-[#a61b1b] hover:text-[#7e1717]">Clear all</button>}
                  </div>
                  {basketItems.length === 0 ? (
                    <p className="py-4 text-xs text-[#7f3b2b]">Your basket is waiting for something warm.</p>
                  ) : (
                    <ul className="mt-3 space-y-2">
                      {basketItems.map((item, index) => (
                        <li key={`${item.name}-${index}`} className="flex items-center justify-between gap-3 text-xs text-[#7f3b2b]">
                          <span>{item.name}<strong className="mt-1 block text-[10px] text-[#a61b1b]">{formatPrice(item.price)}</strong></span>
                          <button type="button" onClick={() => removeFromBasket(index)} aria-label={`Remove ${item.name}`} className="font-bold text-[#a61b1b] hover:text-[#7e1717]">×</button>
                        </li>
                      ))}
                      <li className="flex items-center justify-between border-t border-[#e9d9bb] pt-3 text-xs font-bold text-[#a61b1b]">
                        <span>Total</span>
                        <span>{formatPrice(basketTotal)}</span>
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="relative mt-8 rounded-[2rem] bg-[#f1e5d2] px-4 py-8 sm:px-10 sm:py-10">
            <span className="pointer-events-none absolute left-1/2 top-[-2rem] h-32 w-32 -translate-x-1/2 rounded-full bg-[#bd1519]/10 blur-2xl" />
            <button type="button" aria-label="Previous menu item" onClick={() => changeMenu(-1)} className="absolute left-1 top-24 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff8e7] text-[#a61b1b] shadow-sm transition hover:-translate-x-1 hover:bg-[#a61b1b] hover:text-[#fff8e7] sm:left-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
            </button>

            <div className="mx-auto grid max-w-5xl items-center gap-6 sm:grid-cols-[1fr_1.3fr_1fr] sm:gap-4">
              <button type="button" onClick={() => changeMenu(-1)} className="group hidden min-w-0 text-left sm:block" aria-label={`View ${previousItem.name}`}>
                <div className="flex min-h-[500px] scale-[0.92] flex-col justify-center rounded-[1.5rem] bg-[#e9dfcf] px-3 py-4 opacity-70 transition duration-300 group-hover:-translate-x-1 group-hover:scale-[0.94] group-hover:opacity-100">
                  <img src={previousItem.image} alt={previousItem.name} className="h-36 w-full object-contain drop-shadow-[5px_8px_4px_rgba(100,60,0,0.16)]" />
                  <p className="mt-2 text-center font-display text-sm uppercase text-[#7e1717]">{previousItem.name}</p>
                  <p className="mt-1 text-center text-xs font-bold text-[#a61b1b]">{formatPrice(previousItem.price)}</p>
                </div>
              </button>

              <article key={`${activeItem.name}-${menuIndex}`} className={`group menu-active-card relative z-10 min-h-[500px] scale-[1.02] rounded-[1.75rem] bg-[#bd1519] px-5 py-5 text-[#fff8e7] shadow-[0_16px_25px_rgba(120,20,20,0.2)] transition duration-500 hover:shadow-[0_22px_35px_rgba(120,20,20,0.28)] ${slideDirection === 'next' ? 'menu-slide-next' : 'menu-slide-previous'} sm:scale-[1.04] sm:px-7 sm:py-6`}>
                <div className="flex h-48 items-center justify-center sm:h-52">
                  <img src={activeItem.image} alt={activeItem.name} className="h-full w-full object-contain drop-shadow-[8px_12px_5px_rgba(100,40,0,0.25)] transition duration-300 group-hover:scale-[1.04]" />
                </div>
                <h3 className="mt-2 font-display text-2xl uppercase leading-none sm:text-3xl">{activeItem.name}</h3>
                <p className="mt-2 font-display text-xl text-[#fff1c9]">{formatPrice(activeItem.price)}</p>
                <p className="mt-2 text-xs leading-5 text-[#fff1c9]/85">{activeItem.description}</p>

                <div className="mt-5 space-y-2 border-t border-[#fff8e7]/25 pt-4 text-xs font-bold uppercase">
                  <label className="flex items-center justify-between gap-4">
                    Size
                    <select className="rounded-full border-0 bg-[#fff8e7] px-3 py-1 text-xs font-medium text-[#7e1717] outline-none transition hover:bg-white focus:ring-2 focus:ring-[#fff8e7]/50" defaultValue="Regular">
                      <option>Regular</option>
                      <option>Large</option>
                    </select>
                  </label>
                  <label className="flex items-center justify-between gap-4">
                    Pairing
                    <select className="rounded-full border-0 bg-[#fff8e7] px-3 py-1 text-xs font-medium text-[#7e1717] outline-none transition hover:bg-white focus:ring-2 focus:ring-[#fff8e7]/50" defaultValue="No pairing">
                      <option>No pairing</option>
                      <option>Iced coffee</option>
                      <option>Hot tea</option>
                    </select>
                  </label>
                </div>
                <button type="button" onClick={addToBasket} className="mt-5 w-full rounded-full bg-[#fff8e7] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#a61b1b] transition hover:bg-white hover:shadow-[0_8px_15px_rgba(126,23,23,0.25)]">
                  Add to basket
                </button>
                {addedMessage && <p role="status" className="mt-3 text-center text-[11px] font-semibold">{addedMessage}</p>}
              </article>

              <button type="button" onClick={() => changeMenu(1)} className="group hidden min-w-0 text-right sm:block" aria-label={`View ${nextItem.name}`}>
                <div className="flex min-h-[500px] scale-[0.92] flex-col justify-center rounded-[1.5rem] bg-[#e9dfcf] px-3 py-4 opacity-70 transition duration-300 group-hover:translate-x-1 group-hover:scale-[0.94] group-hover:opacity-100">
                  <img src={nextItem.image} alt={nextItem.name} className="h-36 w-full object-contain drop-shadow-[5px_8px_4px_rgba(100,60,0,0.16)]" />
                  <p className="mt-2 text-center font-display text-sm uppercase text-[#7e1717]">{nextItem.name}</p>
                  <p className="mt-1 text-center text-xs font-bold text-[#a61b1b]">{formatPrice(nextItem.price)}</p>
                </div>
              </button>
            </div>

            <div className="mt-5 flex justify-center gap-2 sm:hidden">
              {menuItems.map((item, index) => (
                <button key={item.name} type="button" onClick={() => setMenuIndex(index)} aria-label={`View ${item.name}`} className={`h-2 rounded-full transition-all ${index === menuIndex ? 'w-6 bg-[#a61b1b]' : 'w-2 bg-[#a61b1b]/30'}`} />
              ))}
            </div>

            <button type="button" aria-label="Next menu item" onClick={() => changeMenu(1)} className="absolute right-1 top-24 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff8e7] text-[#a61b1b] shadow-sm transition hover:translate-x-1 hover:bg-[#a61b1b] hover:text-[#fff8e7] sm:right-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
