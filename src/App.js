
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
      <section className="App">
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </section>
  );
}

export default App;
