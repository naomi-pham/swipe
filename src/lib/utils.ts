import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// export function throttle(fn, delay = 300) {
//   return (args: unknown) => {
//     if (fn.id) return

//     fn.id = setTimeout(() => {
//       fn.call(this, args)
//       clearTimeout(fn.id)
//       fn.id = null
//     }, delay)
//   }
// }

// export function throttle(fn: (args: any[]) => any, wait: number) {
//   let shouldWait = false;

//   return function() {
//       if (!shouldWait) {
//           fn([arguments]);
//           shouldWait = true;
//           setTimeout(() => shouldWait = false, wait);
//       }
//   };
// }
