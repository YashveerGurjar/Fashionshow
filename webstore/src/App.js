import './App.css';
import Home from './Pages/Home';
import SingleProduct from './Pages/Product';
import Register from './Pages/Register';
import ProductList from './Pages/Productlist';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Protected from './Pages/Protected';
import Announcement from './Component/Announcment';
import AddProduct from './Pages/Add.product';
import NoPage from './Pages/Nopage';

function App() {
  
  return (
    <BrowserRouter>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path='/' element={<Protected Component={Home} />} />
        <Route path='/Register' element={<Register /> } />
        <Route path='/login' element={<Protected Component={Login} />} />
        <Route path='/Product/:category' element={<Protected Component={ProductList} />} />
        <Route path='/Product' element={<Protected Component={ProductList} />} />

        {/* <Route path='/Product/:category/SingleProduct/:id' element={<Protected Component={ProductList} />} /> */}
        <Route path='/Product/:category/:id' element={<Protected Component={SingleProduct} />} />
        <Route path='/Product/:id' element={<Protected Component={SingleProduct} />} />
        <Route path='/Cart' element={<Protected Component={Cart} />} />
        <Route path='/Addproduct' element={<Protected Component={AddProduct} />} />
        <Route path='/*' element={<NoPage /> } />
        


      </Routes>
    </BrowserRouter>
  );
}
export default App;
