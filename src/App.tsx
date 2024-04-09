import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

/**lazy loading the components so that way the components will on be loaded when we actually need them to load */

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
