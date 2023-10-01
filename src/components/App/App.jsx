import MoviesPage from 'pages/MoviesPage/MoviesPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Layout from 'Layout/Layout';
import MoviePageDetails from 'pages/MoviePageDetails/MoviePageDetails';
import MoviesPageCredits from 'pages/MoviePageDetails/MoviesPageCast/MoviesPageCast';
import MoviesPageReviews from 'pages/MoviePageDetails/MoviePageReviews/MoviesPageReviews';

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
