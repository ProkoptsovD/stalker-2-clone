import { Outlet } from 'react-router-dom';

import Footer from '../../../footer';
import Header from '../../../header';

function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default SharedLayout;
