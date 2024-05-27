'use client';

import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import cn from 'classnames';

import { productStore } from '@/stores/product.store';
import Rating from '@/app/components/rating/Rating';

import styles from './ProductList.module.css';
import { cartStore } from '@/stores/cart.store';

export default function ProductList() {
  const router = useSearchParams();

  const products = productStore((state) => state.products);
  const isLoading = productStore((state) => state.isLoading);
  const fetchProducts = productStore((state) => state.fetchProducts);
  const getNumberOfTotalPages = productStore((state) => state.getNumberOfTotalPages);

  const setCurrentOrder = cartStore((state) => state.setCurrentOrder);
  const orders = cartStore((state) => state.orders);

  const currentPage = router.get('page') ?? '1';

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    getNumberOfTotalPages();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <div className={cn(styles['cards'], styles['catalog__cards'])}>
          {products.map((product) => {
            const { id, title, previewImg, price, rating } = product;

            return (
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
                  {orders && id in orders ? (
                    <Link href='/cart' className='button button--red-border button--mini button--in-cart'>
                      В Корзине
                    </Link>
                  ) : (
                    <button
                      onClick={() => setCurrentOrder(product)}
                      type='button'
                      className='button button--red button--mini button--add-to-cart'
                    >
                      Купить
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
