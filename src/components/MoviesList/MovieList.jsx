import MovieListItem from 'components/MovieListItem/MovieListItem';
import { MovieListStyle } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <MovieListStyle>
      {movies.map(({ id, title, name }) => (
        <MovieListItem key={id} title={title} id={id} />
      ))}
    </MovieListStyle>
  );
};

export default MovieList;
