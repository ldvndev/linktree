import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { Admin } from '../pages/Admin';
import { SocialMedia } from '../pages/SocialMedia';
import { Private } from './Private';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
  },
  {
    element: <SignIn />,
    path: '/sign-in',
  },
  {
    element: <Private> <SocialMedia /> </Private> ,
    path: '/social-media',
  },
  {
    element: <Private> <Admin /> </Private>,
    path: '/admin',
  },
  {
    path: '*',
    element: <NotFound />
  }
])