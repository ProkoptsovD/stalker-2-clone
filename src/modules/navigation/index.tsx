import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CLIENT_ROUTER_KEYS } from '../common/constants/app-keys.const';

import HomePage from '../home';
import DigitalPage from '../digital';
import PhysicalPage from '../physical';
import TermsOfUsePage from '../terms';
import PrivatePolicyPage from '../private-policy';
import FaqPage from '../faq';
import NotFoundPage from '../not-found';

export function MainRouter() {
  const router = createBrowserRouter([
    {
      path: CLIENT_ROUTER_KEYS.HOME,
      element: <HomePage />
    },
    {
      path: CLIENT_ROUTER_KEYS.DIGITAL,
      element: <DigitalPage />
    },
    {
      path: CLIENT_ROUTER_KEYS.PHYSICAL,
      element: <PhysicalPage />
    },
    {
      path: CLIENT_ROUTER_KEYS.TERMS_OF_USE,
      element: <TermsOfUsePage />
    },
    {
      path: CLIENT_ROUTER_KEYS.PRIVACY_POLICY,
      element: <PrivatePolicyPage />
    },
    {
      path: CLIENT_ROUTER_KEYS.FAQ,
      element: <FaqPage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default MainRouter;
