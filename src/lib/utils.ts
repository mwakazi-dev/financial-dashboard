import { z } from 'zod';
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

export const formSchema = z.object({
  yourName: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
    .trim(),
  userName: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
  dateOfBirth: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
    .trim(),
  presentAddress: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
    .trim(),
  permanentAddress: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
    .trim(),
  city: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
    .trim(),
  postalCode: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
    .trim(),
  country: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
    .trim(),
});
