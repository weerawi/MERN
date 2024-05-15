import Navbar from './Components/Navbar';
import { Routes,Route} from 'react-router-dom';
 
import Footer from './Components/Footer';
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kid_banner from './Assets/banner_kids.png';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div  className='overflow-hidden '> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} /> 
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} /> 
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} /> 
          <Route path="/product" element={<Product/>} />
            <Route path="/product/:productId" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/> 
    </div>
  );
}

export default App;

