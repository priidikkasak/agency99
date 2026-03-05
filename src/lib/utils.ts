import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, currency = '€'): string {
  if (value >= 1000) {
    return `${currency}${(value / 1000).toFixed(1).replace('.0', '')}k`;
  }
  return `${currency}${value.toLocaleString()}`;
}

export function formatNumber(value: number): string {
  return value.toLocaleString('en-US');
}
