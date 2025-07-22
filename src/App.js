
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Cart from './pages/Cart';

function App() {
  return (
      <section className="App">
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </div>
      </section>
  );
}

export default App;
