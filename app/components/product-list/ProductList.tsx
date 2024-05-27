'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { productStore } from '@/stores/product.store';

import styles from './ProductList.module.css';
import { useSearchParams } from 'next/navigation';

export default function ProductList() {
  const router = useSearchParams();
  const { fetchProducts, getNumberOfTotalPages } = productStore((state) => state);
  const currentPage = router.get('page') ?? '1';

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    getNumberOfTotalPages();
  }, []);

  return (
    <div className={cn(styles['cards'], styles['catalog__cards'])}>
      <div className={styles['product-card']}>
        <img src='/img/content/catalog-product-0.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
        <div className={styles['product-card__info']}>
          <div className={cn('rate', styles['product-card__rate'])}>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-star'></use>
            </svg>
            <p className='visually-hidden'>Рейтинг: Хорошо</p>
            <p className='rate__count'>
              <span className='visually-hidden'>Всего оценок:</span>9
            </p>
          </div>
          <p className={styles['product-card__title']}>СURT Z30 Plus Acoustics</p>
          <p className={styles['product-card__price']}>
            <span className='visually-hidden'>Цена:</span>129 500 ₽
          </p>
        </div>
        <div className={styles['product-card__buttons']}>
          <Link className='button button--mini' href='#'>
            Подробнее
          </Link>
          <Link className='button button--red button--mini button--add-to-cart' href='#'>
            Купить
          </Link>
        </div>
      </div>
      <div className={styles['product-card']}>
        <img src='/img/content/catalog-product-1.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
        <div className={styles['product-card__info']}>
          <div className={cn('rate', styles['product-card__rate'])}>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-star'></use>
            </svg>
            <p className='visually-hidden'>Рейтинг: Хорошо</p>
            <p className='rate__count'>
              <span className='visually-hidden'>Всего оценок:</span>9
            </p>
          </div>
          <p className={styles['product-card__title']}>СURT Z30 Plus Acoustics</p>
          <p className={styles['product-card__price']}>
            <span className='visually-hidden'>Цена:</span>129 500 ₽
          </p>
        </div>
        <div className={styles['product-card__buttons']}>
          <Link className='button button--mini' href='#'>
            Подробнее
          </Link>
          {/* <Link className='button button--mini button--add-to-cart button--red' href='#'>
          Купить
        </Link> */}
          <Link className='button button--mini button--red-border button--in-cart' href='#'>
            В корзине
          </Link>
        </div>
      </div>
      <div className={styles['product-card']}>
        <img src='/img/content/catalog-product-2.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
        <div className={styles['product-card__info']}>
          <div className={cn('rate', styles['product-card__rate'])}>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-star'></use>
            </svg>
            <p className='visually-hidden'>Рейтинг: Хорошо</p>
            <p className='rate__count'>
              <span className='visually-hidden'>Всего оценок:</span>9
            </p>
          </div>
          <p className={styles['product-card__title']}>СURT Z30 Plus Acoustics</p>
          <p className={styles['product-card__price']}>
            <span className='visually-hidden'>Цена:</span>129 500 ₽
          </p>
        </div>
        <div className={styles['product-card__buttons']}>
          <Link className='button button--mini' href='#'>
            Подробнее
          </Link>
          <Link className='button button--red button--mini button--add-to-cart' href='#'>
            Купить
          </Link>
        </div>
      </div>
      <div className={styles['product-card']}>
        <img src='/img/content/catalog-product-3.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
        <div className={styles['product-card__info']}>
          <div className={cn('rate', styles['product-card__rate'])}>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-star'></use>
            </svg>
            <p className='visually-hidden'>Рейтинг: Хорошо</p>
            <p className='rate__count'>
              <span className='visually-hidden'>Всего оценок:</span>9
            </p>
          </div>
          <p className={styles['product-card__title']}>СURT Z30 Plus Acoustics</p>
          <p className={styles['product-card__price']}>
            <span className='visually-hidden'>Цена:</span>129 500 ₽
          </p>
        </div>
        <div className={styles['product-card__buttons']}>
          <Link className='button button--mini' href='#'>
            Подробнее
          </Link>
          <Link className='button button--red button--mini button--add-to-cart' href='#'>
            Купить
          </Link>
        </div>
      </div>
      <div className={styles['product-card']}>
        <img src='/img/content/catalog-product-4.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
        <div className={styles['product-card__info']}>
          <div className={cn('rate', styles['product-card__rate'])}>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-star'></use>
            </svg>
            <p className='visually-hidden'>Рейтинг: Хорошо</p>
            <p className='rate__count'>
              <span className='visually-hidden'>Всего оценок:</span>9
            </p>
          </div>
          <p className={styles['product-card__title']}>СURT Z30 Plus Acoustics</p>
          <p className={styles['product-card__price']}>
            <span className='visually-hidden'>Цена:</span>129 500 ₽
          </p>
        </div>
        <div className={styles['product-card__buttons']}>
          <Link className='button button--mini' href='#'>
            Подробнее
          </Link>
          <Link className='button button--red button--mini button--add-to-cart' href='#'>
            Купить
          </Link>
        </div>
      </div>
      <div className={styles['product-card']}>
        <img src='/img/content/catalog-product-5.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
        <div className={styles['product-card__info']}>
          <div className={cn('rate', styles['product-card__rate'])}>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-star'></use>
            </svg>
            <p className='visually-hidden'>Рейтинг: Хорошо</p>
            <p className='rate__count'>
              <span className='visually-hidden'>Всего оценок:</span>9
            </p>
          </div>
          <p className={styles['product-card__title']}>СURT Z30 Plus Acoustics</p>
          <p className={styles['product-card__price']}>
            <span className='visually-hidden'>Цена:</span>129 500 ₽
          </p>
        </div>
        <div className={styles['product-card__buttons']}>
          <Link className='button button--mini' href='#'>
            Подробнее
          </Link>
          <Link className='button button--red button--mini button--add-to-cart' href='#'>
            Купить
          </Link>
        </div>
      </div>
      <div className={styles['product-card']}>
        <img src='/img/content/catalog-product-6.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
        <div className={styles['product-card__info']}>
          <div className={cn('rate', styles['product-card__rate'])}>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-star'></use>
            </svg>
            <p className='visually-hidden'>Рейтинг: Хорошо</p>
            <p className='rate__count'>
              <span className='visually-hidden'>Всего оценок:</span>9
            </p>
          </div>
          <p className={styles['product-card__title']}>СURT Z30 Plus Acoustics</p>
          <p className={styles['product-card__price']}>
            <span className='visually-hidden'>Цена:</span>129 500 ₽
          </p>
        </div>
        <div className={styles['product-card__buttons']}>
          <Link className='button button--mini' href='#'>
            Подробнее
          </Link>
          <Link className='button button--red button--mini button--add-to-cart' href='#'>
            Купить
          </Link>
        </div>
      </div>
      <div className={styles['product-card']}>
        <img src='/img/content/catalog-product-7.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
        <div className={styles['product-card__info']}>
          <div className={cn('rate', styles['product-card__rate'])}>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-star'></use>
            </svg>
            <p className='visually-hidden'>Рейтинг: Хорошо</p>
            <p className='rate__count'>
              <span className='visually-hidden'>Всего оценок:</span>9
            </p>
          </div>
          <p className={styles['product-card__title']}>СURT Z30 Plus Acoustics</p>
          <p className={styles['product-card__price']}>
            <span className='visually-hidden'>Цена:</span>129 500 ₽
          </p>
        </div>
        <div className={styles['product-card__buttons']}>
          <Link className='button button--mini' href='#'>
            Подробнее
          </Link>
          <Link className='button button--red button--mini button--add-to-cart' href='#'>
            Купить
          </Link>
        </div>
      </div>
      <div className={styles['product-card']}>
        <img src='/img/content/catalog-product-8.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
        <div className={styles['product-card__info']}>
          <div className={cn('rate', styles['product-card__rate'])}>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='12' height='11' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-star'></use>
            </svg>
            <p className='visually-hidden'>Рейтинг: Хорошо</p>
            <p className='rate__count'>
              <span className='visually-hidden'>Всего оценок:</span>9
            </p>
          </div>
          <p className={styles['product-card__title']}>СURT Z30 Plus Acoustics</p>
          <p className={styles['product-card__price']}>
            <span className='visually-hidden'>Цена:</span>129 500 ₽
          </p>
        </div>
        <div className={styles['product-card__buttons']}>
          <Link className='button button--mini' href='#'>
            Подробнее
          </Link>
          <Link className='button button--red button--mini button--add-to-cart' href='#'>
            Купить
          </Link>
        </div>
      </div>
    </div>
  );
}
