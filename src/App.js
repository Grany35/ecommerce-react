import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin"
import Signup from "./pages/Auth/Signup"
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import AdminHome from "./pages/Admin/Home";
import AdminOrders from "./pages/Admin/Orders";
import AdminProducts from "./pages/Admin/Products";
import AdminProductDetail from "./pages/Admin/ProductDetail";
import NewProduct from "./pages/Admin/Products/newProduct";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <div id="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/admin" element={<Admin />} />
            <Route path='/admin' element={<AdminHome />} />
            <Route path='/admin/orders' element={<AdminOrders />} />
            <Route path='/admin/products' element={<AdminProducts />} />
            <Route path="/admin/products/:productId" element={<AdminProductDetail />} />
            <Route path="/admin/products/new" element={<NewProduct />} />

          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}




export default App;
