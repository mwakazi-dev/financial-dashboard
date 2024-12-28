import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '../pages/layout';
import DashboardPage from '../pages/dashboard';
import SettingPage from '../pages/settings';
import NotFound from '../pages/not-found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: '/settings',
        element: <SettingPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
