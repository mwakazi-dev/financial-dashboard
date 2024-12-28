import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { useMockAPI, useMockWebSocket } from './hooks/useMock';
import AppRoutes from './constants/routes';
import AuthProvider from './context/AuthContext';

const queryClient = new QueryClient();
const App = () => {
  useMockAPI();
  useMockWebSocket();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRoutes />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
