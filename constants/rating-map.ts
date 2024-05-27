interface RatingLabel {
  [key: number]: string;
}

export const RatingLabelMap: RatingLabel = {
  1: 'Ужасно',
  2: 'Плохо',
  3: 'Нормально',
  4: 'Хорошо',
  5: 'Отлично',
} as const;
