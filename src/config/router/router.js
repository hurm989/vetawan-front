import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "../../pages/auth/signin";
import Home from "../../pages/home";
import SignUp from "../../pages/auth/signup";
import Cart from "../../pages/cart";
import Collections from "../../pages/collection";
import { ViewAllDetails } from "../../pages/details";
import Dashboard from "../../pages/dashboard";

export default function AppNavigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/details/:id" element={<ViewAllDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
