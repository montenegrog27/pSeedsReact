import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
