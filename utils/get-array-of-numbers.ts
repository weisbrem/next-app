export const arrayOfNumbers = (number: number) => Array.from({ length: number }, (v, i) => i + 1);

export const checkIsFullRatingStar = (rating: number, number: number) =>
  rating >= number ? '#icon-full-star' : '#icon-star';
