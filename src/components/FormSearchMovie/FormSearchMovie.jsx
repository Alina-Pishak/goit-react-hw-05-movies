import { useSearchParams } from 'react-router-dom';
import {
  SearchBtn,
  SearchContainer,
  SearchForm,
  SearchInput,
} from './FormSearchMovie.styled';
import { searchMovie } from 'api/movieApi';
import { useEffect, useCallback, useRef, useState } from 'react';
import MovieList from 'components/MoviesList/MovieList';
import { Container } from 'components/App/App.styled';

const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const ref = useRef(query);

  const handlerChange = ({ target: { value } }) => {
    setValue(value);
    value ? setSearchParams({ query: value }) : setSearchParams({});
  };

  const getInputValue = e => {
    e.preventDefault();
    getMovieByQuery(query);
  };

  const getMovieByQuery = useCallback(async searchQuery => {
    try {
      const {
        data: { results },
      } = await searchMovie(searchQuery);
      setMovies(results);
    } catch (error) {}
  }, []);

  useEffect(() => {
    setValue(ref.current);
    ref.current && getMovieByQuery(ref.current);
  }, [getMovieByQuery]);

  return (
    <Container>
      <SearchForm onSubmit={getInputValue}>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search..."
            autoFocus
            required
            value={value}
            onChange={handlerChange}
          />
          <SearchBtn type="submit"></SearchBtn>
        </SearchContainer>
      </SearchForm>
      {movies &&
        (movies.length > 1 ? (
          <MovieList movies={movies} />
        ) : (
          <p>Nothing was found for your request</p>
        ))}
    </Container>
  );
};

export default Movies;
