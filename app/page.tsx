import ProductList from '@/app/components/product-list/ProductList';

import Pagination from './components/pagination/Pagination';

export default function Home() {
  return (
    <>
      <h1 className='page-content__title title title--bigger'>Каталог гитар</h1>

      <ProductList />

      <Pagination />
    </>
  );
}
