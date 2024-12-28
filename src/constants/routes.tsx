import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const RootLayout = lazy(() => import('../pages/layout'));
const DashboardPage = lazy(() => import('../pages/dashboard'));
const SettingPage = lazy(() => import('../pages/settings'));
const NotFound = lazy(() => import('../pages/not-found'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'settings',
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
