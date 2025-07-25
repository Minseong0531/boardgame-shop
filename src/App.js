
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import ProductsDetail from './pages/ProductDetail';


function App() {
  return (
      <section className="App">
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/wishlist' element={<Wishlist />}/>
            <Route path='/product/:id' element={<ProductsDetail />}/>
          </Routes>
        </div>
      </section>
  );
}

export default App;
