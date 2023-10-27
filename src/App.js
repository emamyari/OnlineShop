import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductInfo from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import Header from './components/header';
import Filter from './components/filter';
import Slider from './components/Slider';
import Info from './components/PersonalInfo';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/detail' element={<ProductInfo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/header' element={<Header />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/slider' element={<Slider />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/info' element={<Info />} />
        </Routes>
    </Router>
  );
}

export default App;
