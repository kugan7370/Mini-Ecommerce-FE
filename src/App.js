import "./App.css";
import AddProducts from "./pages/AddProduct";
import EditProducts from "./pages/EditProducts";
import Favourite from "./pages/Favourite";
import Product from "./pages/Product";
import Search from "./pages/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/addProduct" element={<AddProducts />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/editProduct/:productId" element={<EditProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
