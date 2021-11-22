import './App.css';
import './styles/Navbar.css'
import './components/Navbar'
import Navbar from './components/Navbar';
import Home from './components/Home';
import PricingCart from './components/PricingCart';
import Footer from './components/Footer';
import Updated from './components/Updated'


function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="body">
        <Home />
      </div>
      <PricingCart />
      <Updated />
      <Footer />
          </div>
  );
}

export default App;
