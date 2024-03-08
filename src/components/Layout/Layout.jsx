import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={'is Loading'}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
