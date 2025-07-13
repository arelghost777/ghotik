import ErrorPage from './Components/ErrorPage';
import { lazy } from 'react';
import Layout from './Components/Layout';


const Home = lazy(() => import('./Components/Home'));
const Contact = lazy(() => import('./Components/Contact'));
const Shop = lazy(() => import('./Components/Shop'));
const CartPage = lazy(() => import('./Components/CartPage'));

type AppRoute = {
  path: string;
  element: React.ReactNode;
};


const routes: AppRoute[] = [
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/shop/:name',
    element: <Layout><Shop /></Layout>,
  },
  {
    path: '/cart',
    element: <Layout><CartPage /></Layout>,
  },
  {
    path: '/contact',
    element: <Layout><Contact/></Layout>,
  },
  {
    path: '*', // Catch-all route for 404 errors
    element: <ErrorPage />,
  },
];

export default routes;