import { getMovieCast } from 'api/movieApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import placeholder from 'components/img/placeholder.jpg';
import { MovieCastText, MovieListCast } from './MoviePageCast.styled';
import { ErrorMessage } from 'components/App/App.styled';

const MoviesPageCredits = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSingleMovieCast = async () => {
      try {
        setLoader(true);
        const {
          data: { cast },
        } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getSingleMovieCast();
  }, [movieId]);

  return (
    <>
      {loader && (
        <Oval
          height={80}
          width={80}
          color="#c40208"
          wrapperStyle={{
            marginTop: '200px',
            justifyContent: 'center',
          }}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#cc494d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
      {error && <p>error</p>}
      {cast &&
        (cast.length > 1 ? (
          <MovieListCast>
            {cast.map(({ id, name, profile_path }) => {
              return (
                <li key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : placeholder
                    }
                    alt={name}
                    width={'110px'}
                    height={'150px'}
                  />
                  <MovieCastText>{name}</MovieCastText>
                </li>
              );
            })}
          </MovieListCast>
        ) : (
          <ErrorMessage>We don't have cast for this movie.</ErrorMessage>
        ))}
    </>
  );
};

export default MoviesPageCredits;
