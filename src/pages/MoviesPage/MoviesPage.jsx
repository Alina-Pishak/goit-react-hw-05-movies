import FormSearchMovie from 'components/FormSearchMovie/FormSearchMovie';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MoviesPage = () => {
  return (
    <>
      <FormSearchMovie />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesPage;
