import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Blog from './components/Blog';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:postId" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
