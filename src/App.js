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
import RPP from './components/RecentlyPurchasedPrdcts';
import MiniSlider from './components/MinilSlider';
import Nav from './components/Nav';
import MenuButton from './components/NanMenue';
import ShoppingCartPage from './components/KharidSabad';

function App() {
  const menuItems = ['Item 1', 'Item 2', 'Item 3'];
  return (
    
    <><Router>
      <Nav />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/detail' element={<ProductInfo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/header' element={<Header />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/info' element={<Info />} />
        <Route path='/rpp' element={<RPP />} />
        <Route path='/sabad' element={<ShoppingCartPage />} />
      </Routes>

    </Router><div>
        <h1>My App</h1>
        <MenuButton items={menuItems}/>
      </div></>
  );
}

export default App;
