import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoriteCars from './pages/FavoriteCars/FavoriteCars';
import CarDetails from './components/CarDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/favorites' element={<FavoriteCars />} />
        <Route path="/catalog/:carId" element={<CarDetails />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

