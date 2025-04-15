import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import SpecialDeals from './components/SpecialDeals';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import OrderSection from './components/OrderSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <SpecialDeals />
      <Gallery />
      <Reviews />
      <OrderSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;