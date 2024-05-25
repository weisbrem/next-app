import Link from 'next/link';
import cn from 'classnames';

import styles from './page.module.css';

interface IGuitarPageProps {
  params: {
    id: string;
  };
}

export default function GuitarPage({ params }: IGuitarPageProps) {
  return (
    <>
      <h1 className='page-content__title title title--bigger'>Товар</h1>
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
            Товар
          </Link>
        </li>
      </ul>
      <div className={styles['product-container']}>
        <img
          className={styles['product-container__img']}
          src='/img/content/catalog-product-2.jpg'
          width='90'
          height='235'
          alt='СURT Z30 Plus'
        />
        <div className={styles['product-container__info-wrapper']}>
          <h2 className={cn('title title--big title--uppercase', styles['product-container__title'])}>СURT Z30 Plus</h2>
          <div className={cn('rate', styles['product-container__rating'])}>
            <svg width='14' height='14' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='14' height='14' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='14' height='14' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='14' height='14' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-full-star'></use>
            </svg>
            <svg width='14' height='14' aria-hidden='true'>
              <use xlinkHref='/img/sprite_auto.svg#icon-star'></use>
            </svg>
            <p className='visually-hidden'>Оценка: Хорошо</p>
          </div>
          <div className={styles['tabs']}>
            <button type='button' className={cn('button button--medium', styles['tabs__button'])}>
              Характеристики
            </button>
            <button type='button' className={cn('button button--medium button--black-border', styles['tabs__button'])}>
              Описание
            </button>
            <div className={styles['tabs__content']}>
              <table className={styles['tabs__table']}>
                <tbody>
                  <tr className={styles['tabs__table-row']}>
                    <td className={styles['tabs__title']}>Артикул:</td>
                    <td className={styles['tabs__value']}>SO754565</td>
                  </tr>
                  <tr className={styles['tabs__table-row']}>
                    <td className={styles['tabs__title']}>Тип:</td>
                    <td className={styles['tabs__value']}>Электрогитара</td>
                  </tr>
                  <tr className={styles['tabs__table-row']}>
                    <td className={styles['tabs__title']}>Количество струн:</td>
                    <td className={styles['tabs__value']}>6 струнная</td>
                  </tr>
                </tbody>
              </table>
              <p className={cn(styles['tabs__product-description'], 'visually-hidden')}>
                Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых
                условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и
                надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.
              </p>
            </div>
          </div>
        </div>
        <div className={styles['product-container__price-wrapper']}>
          <p className={cn(styles['product-container__price-info'], styles['product-container__price-info--title'])}>
            Цена:
          </p>
          <p className={cn(styles['product-container__price-info'], styles['product-container__price-info--value'])}>
            52 000 ₽
          </p>
          <Link className={cn('button button--red button--big', styles['product-container__button'])} href='#'>
            Добавить в корзину
          </Link>
        </div>
      </div>
    </>
  );
}
