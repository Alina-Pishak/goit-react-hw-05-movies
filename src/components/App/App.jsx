import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
import HomePage from 'pages/HomePage/HomePage';
import Layout from 'Layout/Layout';
import MoviePageDetails from 'pages/MoviePageDetails/MoviePageDetails';
import MoviesPageCredits from 'pages/MoviePageDetails/MoviesPageCast/MoviesPageCast';
import MoviesPageReviews from 'pages/MoviePageDetails/MoviePageReviews/MoviesPageReviews';

const MoviesPage = lazy(() => import(''));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Suspense fallback={<div>...</div>}>
          <Route path="movie" element={MoviesPage} />
        </Suspense>
        <Route path="movie/:movieId" element={<MoviePageDetails />}>
          <Route path="credits" element={<MoviesPageCredits />} />
          <Route path="reviews" element={<MoviesPageReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
