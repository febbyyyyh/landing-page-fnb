import { useState } from 'react';
import menuOne from '../assets/menu-1.svg';
import menuTwo from '../assets/menu-2.svg';
import menuThree from '../assets/menu-3.svg';

const orderItems = [
  { name: 'Almond Croissant', price: 35000, image: menuOne },
  { name: 'Cheesy Pastry', price: 35000, image: menuTwo },
  { name: 'Chocolate Chip Cookie', price: 35000, image: menuThree },
];

const formatPrice = (price) => `Rp. ${price.toLocaleString('id-ID')}`;

export default function Order() {
  const [selectedItem, setSelectedItem] = useState(orderItems[0]);
  const [quantity, setQuantity] = useState(1);
  const [orderType, setOrderType] = useState('Pickup');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const total = selectedItem.price * quantity;

  return (
    <section id="order" className="bg-[#fff8e7] px-6 py-16 text-[#a61b1b] sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#a61b1b]">
            <span className="h-px w-10 bg-[#bd1519]" />
            Freshly made for you
          </p>
          <h2 className="mt-6 font-display text-5xl uppercase leading-[0.92] sm:text-6xl">
            Your next<br />delicious bite.
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-[#7f3b2b] sm:text-base">
            Choose a favourite, tell us how you would like it, and we will have it ready while it is still warm.
          </p>
          <div className="mt-8 flex items-center gap-4 text-xs font-bold uppercase tracking-wide text-[#a61b1b]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#bd1519] text-[#fff8e7]">01</span>
            Pick your pastry
            <span className="h-px w-8 bg-[#e7b98c]" />
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bd1519]">02</span>
            Enjoy
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#bd1519] p-6 text-[#fff8e7] shadow-[0_18px_35px_rgba(120,20,20,0.18)] sm:p-8">
          <div className="flex items-center justify-between border-b border-[#fff8e7]/20 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#fff1c9]">Order summary</p>
              <h3 className="mt-1 font-display text-3xl uppercase">Made to order</h3>
            </div>
            <span className="rounded-full bg-[#fff1c9] px-3 py-1 text-[10px] font-bold uppercase text-[#7e1717]">Fresh</span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {orderItems.map((item) => (
              <button
                type="button"
                key={item.name}
                onClick={() => {
                  setSelectedItem(item);
                  setIsSubmitted(false);
                }}
                className={`rounded-2xl border p-3 text-left transition ${selectedItem.name === item.name ? 'border-[#fff8e7] bg-[#fff8e7]/15' : 'border-[#fff8e7]/20 hover:border-[#fff8e7]/60'}`}
              >
                <img src={item.image} alt={item.name} className="h-20 w-full object-contain" />
                <span className="mt-2 block text-xs font-bold leading-4">{item.name}</span>
                <span className="mt-1 block text-xs text-[#fff1c9]">{formatPrice(item.price)}</span>
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="quantity" className="text-xs font-bold uppercase tracking-wider text-[#fff1c9]">Quantity</label>
              <div className="mt-2 flex h-11 items-center justify-between rounded-full border border-[#fff8e7]/30 px-4">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="text-xl leading-none hover:text-[#fff1c9]">-</button>
                <span id="quantity" className="text-sm font-bold">{quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="text-xl leading-none hover:text-[#fff1c9]">+</button>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#fff1c9]">Order type</span>
              <div className="mt-2 flex h-11 rounded-full border border-[#fff8e7]/30 p-1">
                {['Pickup', 'Delivery'].map((type) => (
                  <button type="button" key={type} onClick={() => { setOrderType(type); setIsSubmitted(false); }} className={`flex-1 rounded-full text-xs font-bold transition ${orderType === type ? 'bg-[#fff8e7] text-[#a61b1b]' : 'text-[#fff8e7] hover:bg-[#fff8e7]/10'}`}>
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 border-t border-[#fff8e7]/20 pt-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs text-[#fff1c9]">Total for {quantity} pastry</p>
              <p className="mt-1 font-display text-3xl text-[#fff1c9]">{formatPrice(total)}</p>
            </div>
            {isSubmitted ? (
              <button type="button" onClick={() => setIsSubmitted(false)} className="w-full rounded-full bg-[#fff1c9] px-6 py-3 text-xs font-bold uppercase tracking-wide text-[#7e1717] transition hover:bg-white sm:w-auto">
                Edit order
              </button>
            ) : (
              <button type="button" onClick={() => setIsSubmitted(true)} className="w-full rounded-full bg-[#fff8e7] px-6 py-3 text-xs font-bold uppercase tracking-wide text-[#a61b1b] transition hover:bg-white sm:w-auto">
                Continue to {orderType.toLowerCase()}
              </button>
            )}
          </div>

          {isSubmitted && (
            <div role="status" className="mt-5 rounded-2xl border border-[#fff1c9]/60 bg-[#fff1c9]/15 px-4 py-3 text-sm text-[#fff1c9]">
              Your {orderType.toLowerCase()} request for {quantity} {selectedItem.name} is ready. We&apos;ll be in touch shortly.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
