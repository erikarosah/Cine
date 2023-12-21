import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { MoviesPage } from '../pages/movies';
import { SeriesPage } from '../pages/series';
import { DetailsPage } from '../pages/details';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/movie/details" element={<DetailsPage />} />
    </Routes>
  );
}
