import './App.css';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Consulting from './components/Consulting';
import Services   from './components/Services';
import Products   from './components/Products';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

function App() {
  return (
    <div className="nimai-app">
      <Navbar />
      <main>
        <Hero />
        <Consulting />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
