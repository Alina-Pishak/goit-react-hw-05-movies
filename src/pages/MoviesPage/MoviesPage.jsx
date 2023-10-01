import FormSearchMovie from 'components/FormSearchMovie/FormSearchMovie';
import { Outlet } from 'react-router-dom';

const MoviesPage = () => {
  return (
    <>
      <FormSearchMovie />
      <Outlet />
    </>
  );
};

export default MoviesPage;
