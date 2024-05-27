export const checkIsFullRatingStar = (rating: number, number: number) =>
  rating >= number ? '#icon-full-star' : '#icon-star';
