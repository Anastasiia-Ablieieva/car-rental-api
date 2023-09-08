import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoriteCarsPage from './pages/FavoriteCarsPage/FavoriteCarsPage';
import CarDetails from './components/CarDetails';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/favorites' element={<FavoriteCarsPage />} />
          <Route path="/catalog/:carId" element={<CarDetails />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

