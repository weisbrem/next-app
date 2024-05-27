'use client';

import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { cartStore } from '@/stores/cart.store';

import styles from './page.module.css';
import { getAdaptedProductType } from '@/utils/adapt-product-type';
import { IOrder } from '@/interfaces/order.interface';

export default function CartPage() {
  const orders = cartStore((state) => state.orders);
  const deleteOrderFromCart = cartStore((state) => state.deleteOrderFromCart);
  const totalPriceInCart = cartStore((state) => state.getTotalOrdersPrice());
  const incProductsInOrder = cartStore((state) => state.incProductsInOrder);
  const decProductsInOrder = cartStore((state) => state.decProductsInOrder);
  const sendOrder = cartStore((state) => state.sendOrder);
  const totalProductsInCart = cartStore((state) => state.getTotalProductsInCart());

  const handleDecProductsInOrder = (product: IOrder) => {
    const { id, numberOfProductsInOrder } = product;

    if (numberOfProductsInOrder === 1) {
      deleteOrderFromCart(id);
      return;
    }

    decProductsInOrder(product);
  };

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

      {totalProductsInCart === 0 ? (
        <p>Ваша корзина пока пуста</p>
      ) : (
        <div className={styles['cart']}>
          {orders &&
            Object.values(orders).map((product) => {
              const {
                id,
                title,
                previewImg,
                price,
                vendorCode,
                category,
                numberOfStrings,
                totalPrice,
                numberOfProductsInOrder,
              } = product;

              return (
                <div className={styles['cart-item']} key={id}>
                  <button
                    onClick={() => deleteOrderFromCart(id)}
                    className={cn(styles['cart-item__close-button'], styles['button-cross'])}
                    type='button'
                    aria-label='Удалить'
                  >
                    <span className={styles['button-cross__icon']}></span>
                    <span className={styles['cart-item__close-button-interactive-area']}></span>
                  </button>
                  <div className={styles['cart-item__image']}>
                    <img src={previewImg} alt={title} />
                  </div>
                  <div className={styles['cart-item__info']}>
                    <p className={styles['product-info__title']}>{title}</p>
                    <p className={styles['product-info__info']}>Артикул: {vendorCode}</p>
                    <p className={styles['product-info__info']}>
                      {getAdaptedProductType(category)}, {numberOfStrings} струнная
                    </p>
                  </div>
                  <div className={styles['cart-item__price']}>{price.toLocaleString('ru-RU')} ₽</div>
                  <div className={cn(styles['quantity'], styles['cart-item__quantity'])}>
                    <button
                      onClick={() => handleDecProductsInOrder(product)}
                      className={styles['quantity__button']}
                      aria-label='Уменьшить количество'
                    >
                      <svg width='8' height='8' aria-hidden='true'>
                        <use xlinkHref='/img/sprite_auto.svg#icon-minus'></use>
                      </svg>
                    </button>
                    <span className={styles['quantity__amount']}>{numberOfProductsInOrder}</span>
                    <button
                      onClick={() => incProductsInOrder(product)}
                      className={styles['quantity__button']}
                      aria-label='Увеличить количество'
                    >
                      <svg width='8' height='8' aria-hidden='true'>
                        <use xlinkHref='/img/sprite_auto.svg#icon-plus'></use>
                      </svg>
                    </button>
                  </div>
                  <div className={styles['cart-item__price-total']}>{totalPrice.toLocaleString('ru-RU')} ₽</div>
                </div>
              );
            })}

          <div className={styles['cart__footer']}>
            <div className={styles['cart__total-info']}>
              <p className={styles['cart__total-item']}>
                <span className={styles['cart__total-value-name']}>К оплате:</span>
                <span className={cn(styles['cart__total-value'], styles['cart__total-value--payment'])}>
                  {totalPriceInCart.toLocaleString('ru-RU')} ₽
                </span>
              </p>
              <button
                onClick={sendOrder}
                className={cn('button button--red button--big', styles['cart__order-button'])}
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
