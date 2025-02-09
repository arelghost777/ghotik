import { lazy } from 'react';
import ErrorPage from './Components/ErrorPage';
import Shop from './Components/Shop';
import Layout from './Components/Layout';
import CartPage from './Components/CartPage';
import Contact from './Components/Contact';
import Home from './Components/Home';

const routes = [
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