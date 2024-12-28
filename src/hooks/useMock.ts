import { useEffect } from 'react';
import { io } from 'socket.io-client';

import { Transaction } from '../types/transaction';

// Mock API Data
const mockTransactions: Transaction[] = [
  {
    id: '1',
    title: 'Transfer to John Doe',
    amount: 850,
    category: 'card',
    type: 'EXPENSE',
    createdAt: '25 January 2021',
  },
  {
    id: '2',
    title: 'Deposit paypal',
    amount: 2500,
    category: 'paypal',
    type: 'INCOME',
    createdAt: '20 June 2021',
  },
  {
    id: '3',
    title: 'Transfer to John Doe',
    amount: 50,
    category: 'cash',
    type: 'EXPENSE',
    createdAt: '25 August 2021',
  },
  {
    id: '4',
    title: 'Transfer to Mane',
    amount: 80,
    category: 'card',
    type: 'EXPENSE',
    createdAt: '25 August 2021',
  },
  {
    id: '5',
    title: 'Deposit card',
    amount: 50,
    category: 'card',
    type: 'INCOME',
    createdAt: '25 December 2021',
  },
];

const mockCards = [
  {
    id: '1',
    cardNumber: '9634567890123456',
    cardHolderName: 'John Doe',
    cardExpiry: '01/25',
    balance: 4000,
  },
  {
    id: '2',
    cardNumber: '1234567890123456',
    cardHolderName: 'Chris Doe',
    cardExpiry: '01/29',
    balance: 40000,
  },
];

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
