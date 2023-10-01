import { getTrendingMovies } from 'api/movieApi';
import { Container } from 'components/App/App.styled';
import MovieList from 'components/MoviesList/MovieList';
import { useState, useEffect } from 'react';

const TrendingMovie = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const searchTrendingMovies = async () => {
      const {
        data: { results },
      } = await getTrendingMovies();
      setMovies(results);
    };
    searchTrendingMovies();
  }, []);

  return (
    <Container>
      <h1>Trending</h1>
      {movies && <MovieList movies={movies} />}
    </Container>
  );
};

export default TrendingMovie;
