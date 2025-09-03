import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-stone-800 bg-stone-50 selection:bg-amber-200 selection:text-stone-900">
      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            'radial-gradient(30rem 30rem at -10% -10%, rgba(120,113,108,0.08), transparent), radial-gradient(25rem 25rem at 110% -20%, rgba(120,113,108,0.06), transparent), radial-gradient(20rem 20rem at 120% 120%, rgba(120,113,108,0.05), transparent)',
        }}
      >
        <Header />
        <main>
          <Hero />
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
