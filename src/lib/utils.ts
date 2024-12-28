import { z } from 'zod';
import { type ClassValue, clsx } from 'clsx';
import { twMerge as tailwindMerge } from 'tailwind-merge';

export const cn = (...classes: ClassValue[]) => {
  return tailwindMerge(clsx(...classes));
};

export const formatAmount = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
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

/**
 * Perform a binary search on a sorted array of objects to find an item with a specific id.
 * @param {any[]} arr The array of objects to search.
 * @param {string} itemId The id of the item to search for.
 * @returns {null | any} The item with the specified id, or null if not found.
 */

// Function to perform binary search which is much faster
export const binarySearchItem = (arr: any[], itemId: string) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midArr = arr[mid];

    if (midArr.id === itemId) {
      return midArr; // User found
    } else if (midArr.id < itemId) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }

  return null;
};
