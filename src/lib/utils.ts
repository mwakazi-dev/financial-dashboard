import { type ClassValue, clsx } from 'clsx';
import { twMerge as tailwindMerge } from 'tailwind-merge';

export const cn = (...classes: ClassValue[]) => {
  return tailwindMerge(clsx(...classes));
};

export const getPageTitle = (path: string) => {
  switch (path) {
    case '/setting':
      return 'Setting';
    default:
      return 'Overview';
  }
};

export const formatAmount = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};
