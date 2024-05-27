'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import cn from 'classnames';

import { productStore } from '@/stores/product.store';
import Rating from '@/app/components/rating/Rating';

import styles from './page.module.css';

import Tabs from './components/tabs/Tabs';

export default function GuitarPage() {
  const { id } = useParams();

  const fetchOneProduct = productStore((state) => state.fetchOneProduct);
  const product = productStore((state) => state.product);

  useEffect(() => {
    fetchOneProduct(id as string);
  }, [id]);

  if (!product) {
    return null;
  }

  const { title, previewImg, price, rating, description, category, numberOfStrings, vendorCode } = product;

  return (
    <>
      <h1 className='page-content__title title title--bigger'>{title}</h1>
      <ul className='breadcrumbs page-content__breadcrumbs'>
        <li className='breadcrumbs__item'>
          <Link className='link' href='/'>
            Главная
          </Link>
        </li>
        <li className='breadcrumbs__item'>
          <Link className='link' href='/'>
            Каталог
          </Link>
        </li>
        <li className='breadcrumbs__item'>
          <Link className='link' href='#'>
            {title}
          </Link>
        </li>
      </ul>
      <div className={styles['product-container']}>
        <img className={styles['product-container__img']} src={previewImg} width='90' height='235' alt={title} />
        <div className={styles['product-container__info-wrapper']}>
          <h2 className={cn('title title--big title--uppercase', styles['product-container__title'])}>{title}</h2>
          <div className={cn('rate', styles['product-container__rating'])}>
            <Rating rating={rating} />
          </div>
          <Tabs
            category={category}
            description={description}
            numberOfStrings={numberOfStrings}
            vendorCode={vendorCode}
          />
        </div>
        <div className={styles['product-container__price-wrapper']}>
          <p className={cn(styles['product-container__price-info'], styles['product-container__price-info--title'])}>
            Цена:
          </p>
          <p className={cn(styles['product-container__price-info'], styles['product-container__price-info--value'])}>
            {price.toLocaleString('ru-RU')} ₽
          </p>
          <Link className={cn('button button--red button--big', styles['product-container__button'])} href='#'>
            Добавить в корзину
          </Link>
        </div>
      </div>
    </>
  );
}
