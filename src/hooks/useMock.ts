import { useEffect } from 'react';
import { io } from 'socket.io-client';

import {
  mockCards,
  mockExpenses,
  mockTransactions,
  mockWeeklyActivity,
} from '../data/mockApi';

export const useMockAPI = () => {
  useEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url =
        typeof input === 'string'
          ? input
          : input instanceof URL
            ? input.href
            : input.url;
      if (url.includes('/api/transaction-history')) {
        return new Response(JSON.stringify(mockTransactions), { status: 200 });
      }
      if (url.includes('/api/cards')) {
        return new Response(JSON.stringify(mockCards), { status: 200 });
      }
      if (url.includes('/api/weekly-activity')) {
        return new Response(JSON.stringify(mockWeeklyActivity), {
          status: 200,
        });
      }
      if (url.includes('/api/expenses')) {
        return new Response(JSON.stringify(mockExpenses), { status: 200 });
      }
      return originalFetch(input, init);
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, []);
};

export const useMockWebSocket = () => {
  useEffect(() => {
    const socket = io(window.location.origin);
    socket.on('connect', () => {
      // do nothing
    });
    socket.on('transaction-update', () => {});
    socket.on('disconnect', () => {});
  }, []);
};
