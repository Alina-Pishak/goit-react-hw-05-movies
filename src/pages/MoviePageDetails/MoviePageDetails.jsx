import { getMovieDetails } from 'api/movieApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import Movie from 'components/Movie/Movie';

const MoviePageDetails = () => {
  const { movieId } = useParams();
  const [singleMovie, setSingleMovie] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getSingleMovie = async () => {
      try {
        setLoader(true);
        const { data } = await getMovieDetails(movieId);
        setSingleMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getSingleMovie();
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
      {singleMovie && <Movie movie={singleMovie} />}
    </>
  );
};

export default MoviePageDetails;
