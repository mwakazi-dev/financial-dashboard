import { Transaction } from '../types/transaction';

export const mockTransactions: Transaction[] = [
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

export const mockCards = [
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
export const mockWeeklyActivity = [
  { day: 'Sat', withdraw: 550, deposit: 220 },
  { day: 'Sun', withdraw: 10, deposit: 120 },
  { day: 'Mon', withdraw: 300, deposit: 250 },
  { day: 'Tue', withdraw: 450, deposit: 350 },
  { day: 'Wed', withdraw: 140, deposit: 220 },
  { day: 'Thu', withdraw: 400, deposit: 230 },
  { day: 'Fri', withdraw: 30, deposit: 320 },
];

export const mockExpenses = [
  { name: 'Bill Expense', value: 300 },
  { name: 'Entertainment', value: 400 },
  { name: 'Investment', value: 300 },
  { name: 'Others', value: 200 },
];
