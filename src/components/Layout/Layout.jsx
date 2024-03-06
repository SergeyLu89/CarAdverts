import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
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
      <Footer />
    </>
  );
};

export default Layout;
