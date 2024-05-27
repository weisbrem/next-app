'use client';

import { cartStore } from '@/stores/cart.store';
import styles from './HeaderCart.module.css';
import Link from 'next/link';

export default function HeaderCart() {
  const totalProductsInCart = cartStore((state) => state.getTotalProductsInCart());

  return (
    <Link href='/cart'>
      <span className={styles['header__cart-link']} aria-label='Корзина'>
        <svg className={styles['header__cart-icon']} width='14' height='14' aria-hidden='true'>
          <use xlinkHref='/img/sprite_auto.svg#icon-basket'></use>
        </svg>
        <span className='visually-hidden'>Перейти в корзину</span>
        {totalProductsInCart > 0 && <span className={styles['header__cart-count']}>{totalProductsInCart}</span>}
      </span>
    </Link>
  );
}
