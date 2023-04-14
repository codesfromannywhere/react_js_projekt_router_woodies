
import './App.css';
import { Routes, Route } from "react-router-dom";

// pages & components
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:detail' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
