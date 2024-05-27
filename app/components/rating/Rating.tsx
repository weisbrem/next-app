import cn from 'classnames';

import { arrayOfNumbers } from '@/utils/get-array-of-numbers';
import { RatingLabelMap } from '@/constants/rating-map';
import { checkIsFullRatingStar } from '@/utils/check-is-full-rating-star';

interface IRatingProps {
  rating: number;
}

export default function Rating({ rating }: IRatingProps) {
  const ratingStars = arrayOfNumbers(5);

  return (
    <>
      {ratingStars.map((star) => (
        <svg width='12' height='11' aria-hidden='true' key={star}>
          <use xlinkHref={`/img/sprite_auto.svg${checkIsFullRatingStar(rating, star)}`}></use>
        </svg>
      ))}

      <p className='visually-hidden'>{`Рейтинг: ${RatingLabelMap[Math.ceil(rating)]}`}</p>
    </>
  );
}
