'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import cn from 'classnames';

import { productStore } from '@/stores/product.store';
import Rating from '@/app/components/rating/Rating';

import styles from './ProductList.module.css';

export default function ProductList() {
  const router = useSearchParams();

  const fetchProducts = productStore((state) => state.fetchProducts);
  const getNumberOfTotalPages = productStore((state) => state.getNumberOfTotalPages);
  const products = productStore((state) => state.products);

  const currentPage = router.get('page') ?? '1';

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    getNumberOfTotalPages();
  }, []);

  return (
    <div className={cn(styles['cards'], styles['catalog__cards'])}>
      {products.map(({ id, title, previewImg, price, rating }) => (
        <div className={styles['product-card']} key={id}>
          <img src={previewImg} width='75' height='190' alt={title} />
          <div className={styles['product-card__info']}>
            <div className={cn('rate', styles['product-card__rate'])}>
              <Rating rating={rating} />
            </div>

            <p className={styles['product-card__title']}>{title}</p>
            <p className={styles['product-card__price']}>
              <span className='visually-hidden'>Цена:</span>
              {price.toLocaleString('ru-RU')} ₽
            </p>
          </div>
          <div className={styles['product-card__buttons']}>
            <Link className='button button--mini' href={`/product/${id}`}>
              Подробнее
            </Link>
            <Link className='button button--red button--mini button--add-to-cart' href='#'>
              Купить
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
