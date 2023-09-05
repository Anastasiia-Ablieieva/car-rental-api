import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import FavoriteCars from './pages/FavoriteCars';
import CarDetails from './components/CarDetails';
import NotFound from './pages/NotFound';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/favorites' element={<FavoriteCars />} />
        <Route path="/catalog/:carId" element={<CarDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

