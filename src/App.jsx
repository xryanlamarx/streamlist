import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import StreamList from './pages/StreamList'
import Movies from './pages/Movies'
import Cart from './pages/Cart'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <h2>StreamList</h2>

          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App