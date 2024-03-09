import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Container from 'components/reuseComponents/Container/Container';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={'is Loading'}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
