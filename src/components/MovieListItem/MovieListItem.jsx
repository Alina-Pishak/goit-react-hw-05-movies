import { NavLink } from 'components/App.styled';
import { useLocation } from 'react-router-dom';

const MovieListItem = ({ title, id }) => {
  const location = useLocation();
  return (
    title && (
      <li>
        <NavLink to={`/movie/${id.toString()}`} state={{ from: location }}>
          {title}
        </NavLink>
      </li>
    )
  );
};

export default MovieListItem;
