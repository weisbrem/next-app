import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import styles from './page.module.css';

export default function CartPage() {
  return (
    <>
      <h1 className='title title--bigger page-content__title'>Корзина</h1>
      <ul className='breadcrumbs page-content__breadcrumbs page-content__breadcrumbs--on-cart-page'>
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
          <span>Корзина</span>
        </li>
      </ul>
      <div className={styles['cart']}>
        <div className={styles['cart-item']}>
          <button
            className={cn(styles['cart-item__close-button'], styles['button-cross'])}
            type='button'
            aria-label='Удалить'
          >
            <span className={styles['button-cross__icon']}></span>
            <span className={styles['cart-item__close-button-interactive-area']}></span>
          </button>
          <div className={styles['cart-item__image']}>
            <Image src='/img/content/catalog-product-2.jpg' fill alt='ЭлектроГитара Честер bass' />
          </div>
          <div className={styles['cart-item__info']}>
            <p className={styles['product-info__title']}>ЭлектроГитара Честер bass</p>
            <p className={styles['product-info__info']}>Артикул: SO757575</p>
            <p className={styles['product-info__info']}>Электрогитара, 6 струнная</p>
          </div>
          <div className={styles['cart-item__price']}>17 500 ₽</div>
          <div className={cn(styles['quantity'], styles['cart-item__quantity'])}>
            <button className={styles['quantity__button']} aria-label='Уменьшить количество'>
              <svg width='8' height='8' aria-hidden='true'>
                <use xlinkHref='/img/sprite_auto.svg#icon-minus'></use>
              </svg>
            </button>
            <span className={styles['quantity__amount']}>1</span>
            <button className={styles['quantity__button']} aria-label='Увеличить количество'>
              <svg width='8' height='8' aria-hidden='true'>
                <use xlinkHref='/img/sprite_auto.svg#icon-plus'></use>
              </svg>
            </button>
          </div>
          <div className={styles['cart-item__price-total']}>17 500 ₽</div>
        </div>
        <div className={styles['cart__footer']}>
          <div className={styles['cart__total-info']}>
            <p className={styles['cart__total-item']}>
              <span className={styles['cart__total-value-name']}>К оплате:</span>
              <span className={cn(styles['cart__total-value'], styles['cart__total-value--payment'])}>49 000 ₽</span>
            </p>
            <button className={cn('button button--red button--big', styles['cart__order-button'])}>
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
