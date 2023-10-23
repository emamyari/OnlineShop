import './App.css';
import ProductList from './components/ProductList';
import ProductInfo from './components/Products';
import Login from './components/Login';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Filter from './components/filter';
import Slider from './components/Slider';

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
        </Routes>
    </Router>
  );
}

export default App;
