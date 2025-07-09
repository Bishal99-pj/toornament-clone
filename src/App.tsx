import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import ProductsSection from './components/ProductsSection';
import TrustedSection from './components/TrustedSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-[url('./public/assets/toornament-hero-bg.webp')] bg-center bg-cover">
        <Header />
        <Hero />
      </div>
      <FeatureSection />
      <ProductsSection />
      <TrustedSection />
      <Footer />
    </div>
  );
}

export default App;