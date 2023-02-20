import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../../footer';
import Header from '../../../header';
import LoadingScreen from '../../components/loading-screen';

function SharedLayout() {
  const [destroyLoader, setDestroyLoader] = React.useState<boolean>(false);
  const loadingScreenRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    let innerTimeoutID: number;
    const { body } = document;
    body.style.overflow = 'hidden';

    /*
     * here we need this timeout for showing loader screen
     * the reason we do not dot this in more reactish way
     * is that in porject we have heavy animation based on WebGl tech
     * so it takes about 6000ms to get initialized
     * and animation gonna work propely
     */
    const timeoutID = setTimeout(() => {
      if (loadingScreenRef.current) {
        loadingScreenRef.current.classList.add('hidden');
        body.style.overflow = 'initial';

        /*
         * once loader is hidden we want to remove it from DOM
         * this time we do it in reactish way by changing render condition in state
         */
        innerTimeoutID = setTimeout(() => setDestroyLoader(true), 0);
      }
    }, 6000);

    /*
     * and do not forget cleaning up timeouts
     * in case component will unmout faster than timeouts are done
     */
    return () => [timeoutID, innerTimeoutID].forEach(clearInterval);
  }, []);

  return (
    <>
      {!destroyLoader ? <LoadingScreen ref={loadingScreenRef} /> : null}
      <Header />
      <main>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default SharedLayout;
