import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRoutes from './constants/routes';
import { useMockAPI, useMockWebSocket } from './hooks/useMock';

const queryClient = new QueryClient();
const App = () => {
  useMockAPI();
  useMockWebSocket();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
