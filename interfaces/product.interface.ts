type TCategory = 'acoustic' | 'electric' | 'ukulele';
type TNumberOfStrings = 4 | 6 | 7 | 12;

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: TCategory;
  rating: number;
  numberOfStrings: TNumberOfStrings;
  vendorCode: string;
  previewImg: string;
}

export interface IProductMetaData {
  current_page: number;
  per_page: number;
  remaining_count: number;
  total_items: number;
  total_pages: number;
}
