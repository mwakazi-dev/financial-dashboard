import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '../pages/layout';
import DashboardPage from '../pages/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
    ],
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
