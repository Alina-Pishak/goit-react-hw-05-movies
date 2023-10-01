import { useState, useEffect } from 'react';
import { getMovieReviews } from 'api/movieApi';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import {
  MovieItemReviews,
  MovieListReviews,
  MovieReviewsAuthor,
  MovieReviewsText,
} from './MoviePageReviews.styled';
import { ErrorMessage } from 'components/App/App.styled';

const MoviesPageReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getSingleMovieReviews = async () => {
      try {
        setLoader(true);
        const {
          data: { results },
        } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getSingleMovieReviews();
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
      {reviews && reviews.length > 1 ? (
        <MovieListReviews>
          {reviews.map(({ id, author, content }) => {
            return (
              <MovieItemReviews key={id}>
                <MovieReviewsAuthor>
                  <b>Author:</b>&nbsp;{author}
                </MovieReviewsAuthor>
                <MovieReviewsText>{content}</MovieReviewsText>
              </MovieItemReviews>
            );
          })}
        </MovieListReviews>
      ) : (
        <ErrorMessage>We don't have any reviews for this movie.</ErrorMessage>
      )}
    </>
  );
};

export default MoviesPageReviews;
