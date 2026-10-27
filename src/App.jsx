import Contacto from './components/Contacto';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import QueHacemos from './components/QueHacemos';
import Servicios from './components/Servicios';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  return (
    <div className="overflow-x-clip bg-ink">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-customYellow focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Nosotros />
        <QueHacemos />
        <Servicios />
        <CtaBanner />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
