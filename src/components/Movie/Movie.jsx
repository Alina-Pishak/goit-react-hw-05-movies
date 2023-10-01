import { Container, NavLink } from 'components/App/App.styled';
import { useRef } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import {
  Link,
  MovieAdditionalContainer,
  MovieAdditionalList,
  MovieAdditionalText,
  MovieContainer,
  MovieContainerInfo,
  MovieGenresList,
} from './Movie.styled';

const Movie = ({
  movie: { genres, title, overview, poster_path, vote_average },
}) => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const userScore = Math.round((Number(vote_average) * 100) / 10);
  return (
    <Container>
      <Link to={backLinkHref.current}>Go back</Link>
      <MovieContainer>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width={'200px'}
          />
        </div>
        <MovieContainerInfo>
          <h2>{title}</h2>
          <p>User score:&nbsp;{userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <MovieGenresList>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </MovieGenresList>
        </MovieContainerInfo>
      </MovieContainer>
      <MovieAdditionalContainer>
        <MovieAdditionalText>Additional information</MovieAdditionalText>
        <MovieAdditionalList>
          <li>
            <NavLink to="credits">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </MovieAdditionalList>
      </MovieAdditionalContainer>
      <Outlet />
    </Container>
  );
};

export default Movie;
