import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { MoviesPage } from '../pages/movies';
import { SeriesPage } from '../pages/series';
import { DetailsPage } from '../pages/details';
import { OnFirePage } from '../pages/onFire';
import { ErrorFallback } from '../components/errorFallback';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/movie/details" element={<DetailsPage />} />
      <Route path="/movies/onfire" element={<OnFirePage />} />
      <Route path="*" element={<ErrorFallback />} />
    </Routes>
  );
}
