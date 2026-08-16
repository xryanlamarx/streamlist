import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import StreamList from "./pages/StreamList";
import Movies from "./pages/Movies";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">StreamList</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>

        <Route
          path="/"
          element={<StreamList />}
        />

        <Route
          path="/movies"
          element={<Movies />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;