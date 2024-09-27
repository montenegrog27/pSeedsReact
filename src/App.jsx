import React from 'react';
import Contacto from '../src/components/Contacto';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import Nosotros from '../src/components/Nosotros';
import Servicios from '../src/components/Servicios';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero/>
      <Nosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
};

export default App;
