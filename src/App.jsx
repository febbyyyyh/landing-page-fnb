import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuFilter from './components/MenuFilter';
import PromoBanner from './components/PromoBanner';
import About from './components/About';
import Order from './components/Order';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-brandCream font-sans text-slate-800">
      <Navbar />
      <Hero />
      <MenuFilter />
      <PromoBanner />
      <About />
      <Order />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;