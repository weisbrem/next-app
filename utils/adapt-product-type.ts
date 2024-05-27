import { ProductTypeToDisplay } from '@/constants/product-type';

export const getAdaptedProductType = (type: string) => {
  switch (type) {
    case 'electric':
      return ProductTypeToDisplay.Electric;
    case 'ukulele':
      return ProductTypeToDisplay.Ukulele;
    case 'acoustic':
      return ProductTypeToDisplay.Acoustic;
    default:
      return ProductTypeToDisplay.Unknown;
  }
};
