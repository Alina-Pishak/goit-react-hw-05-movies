import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MoviePageDetails = lazy(() =>
  import('../pages/MoviePageDetails/MoviePageDetails')
);
const MoviesPageCredits = lazy(() =>
  import('../pages/MoviePageDetails/MoviesPageCast/MoviesPageCast')
);
const MoviesPageReviews = lazy(() =>
  import('../pages//MoviePageDetails/MoviePageReviews/MoviesPageReviews')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movie" element={<MoviesPage />} />
        <Route path="movie/:movieId" element={<MoviePageDetails />}>
          <Route path="credits" element={<MoviesPageCredits />} />
          <Route path="reviews" element={<MoviesPageReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
