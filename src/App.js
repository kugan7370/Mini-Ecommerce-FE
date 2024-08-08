import "./App.css";
import AddProducts from "./pages/AddProduct";
import EditProducts from "./pages/EditProducts";
import Favourite from "./pages/Favourite";
import Product from "./pages/Product";
import Search from "./pages/Search";
import SignIn from "./pages/Signin";
import SignUP from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/addProduct"
          element={<PrivateRoute element={<AddProducts />} />}
        />
        <Route
          path="/favourite"
          element={<PrivateRoute element={<Favourite />} />}
        />
        <Route
          path="/editProduct/:productId"
          element={<PrivateRoute element={<EditProducts />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
