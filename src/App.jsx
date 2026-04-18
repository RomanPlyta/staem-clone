import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import StorePage from './pages/Store';
import LibraryPage from './pages/Library';
import ProfilePage from './pages/Profile';
import WishlistPage from './pages/Wishlist';
import CartPage from './pages/Cart';

import './App.scss'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> 
        
        <main>
          <Routes>
            <Route path="/" element={<StorePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
