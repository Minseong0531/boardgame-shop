
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import ProductsDetail from './pages/ProductDetail';
import SearchResults from './pages/SearchResults';
import Category from './pages/Category';


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
            <Route path="/search" element={<SearchResults />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </div>
      </section>
  );
}

export default App;
