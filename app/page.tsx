'use client';

import Link from 'next/link';
import cn from 'classnames';

import { counterStore } from '@/stores/counter-store';

import styles from './page.module.css';

export default function Home() {
  const { counter, incrementCount, decrementCount } = counterStore((state) => state);

  return (
    <>
      <div>
        Count: {counter}
        <hr />
        <button type='button' onClick={() => void incrementCount()}>
          Increment Count
        </button>
        <button type='button' onClick={() => void decrementCount()}>
          Decrement Count
        </button>
      </div>

      <h1 className='page-content__title title title--bigger'>Каталог гитар</h1>
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
      </ul>
      <div className={styles['catalog']}>
        <form className={styles['catalog-filter']}>
          <h2 className={cn('title title--bigger', styles['catalog-filter__title'])}>Фильтр</h2>
          <fieldset className={styles['catalog-filter__block']}>
            <legend className={styles['catalog-filter__block-title']}>Цена, ₽</legend>
            <div className={styles['catalog-filter__price-range']}>
              <div className={styles['form-input']}>
                <label className='visually-hidden'>Минимальная цена</label>
                <input type='number' placeholder='1 000' id='priceMin' name='от' />
              </div>
              <div className={styles['form-input']}>
                <label className='visually-hidden'>Максимальная цена</label>
                <input type='number' placeholder='30 000' id='priceMax' name='до' />
              </div>
            </div>
          </fieldset>
          <fieldset className={styles['catalog-filter__block']}>
            <legend className={styles['catalog-filter__block-title']}>Тип гитар</legend>
            <div className={cn(styles['form-checkbox'], styles['catalog-filter__block-item'])}>
              <input className='visually-hidden' type='checkbox' id='acoustic' name='acoustic' />
              <label htmlFor='acoustic'>Акустические гитары</label>
            </div>
            <div className={cn(styles['form-checkbox'], styles['catalog-filter__block-item'])}>
              <input className='visually-hidden' type='checkbox' id='electric' name='electric' />
              <label htmlFor='electric'>Электрогитары</label>
            </div>
            <div className={cn(styles['form-checkbox'], styles['catalog-filter__block-item'])}>
              <input className='visually-hidden' type='checkbox' id='ukulele' name='ukulele' />
              <label htmlFor='ukulele'>Укулеле</label>
            </div>
          </fieldset>
          <fieldset className={styles['catalog-filter__block']}>
            <legend className={styles['catalog-filter__block-title']}>Количество струн</legend>
            <div className={cn(styles['form-checkbox'], styles['catalog-filter__block-item'])}>
              <input className='visually-hidden' type='checkbox' id='4-strings' name='4-strings' />
              <label htmlFor='4-strings'>4</label>
            </div>
            <div className={cn(styles['form-checkbox'], styles['catalog-filter__block-item'])}>
              <input className='visually-hidden' type='checkbox' id='6-strings' name='6-strings' />
              <label htmlFor='6-strings'>6</label>
            </div>
            <div className={cn(styles['form-checkbox'], styles['catalog-filter__block-item'])}>
              <input className='visually-hidden' type='checkbox' id='7-strings' name='7-strings' />
              <label htmlFor='7-strings'>7</label>
            </div>
            <div className={cn(styles['form-checkbox'], styles['catalog-filter__block-item'])}>
              <input className='visually-hidden' type='checkbox' id='12-strings' name='12-strings' />
              <label htmlFor='12-strings'>12</label>
            </div>
          </fieldset>
          <button
            className={cn('button button--black-border button--medium', styles['catalog-filter__reset-btn'])}
            type='reset'
          >
            Очистить
          </button>
        </form>
        <div className={styles['catalog-sort']}>
          <h2 className={styles['catalog-sort__title']}>Сортировать:</h2>
          <div className={styles['catalog-sort__type']}>
            <button className={styles['catalog-sort__type-button']} aria-label='по цене'>
              по цене
            </button>
            <button className={styles['catalog-sort__type-button']} aria-label='по популярности'>
              по популярности
            </button>
          </div>
          <div className={styles['catalog-sort__order']}>
            <button
              className={cn(styles['catalog-sort__order-button'], styles['catalog-sort__order-button--up'])}
              aria-label='По возрастанию'
            ></button>
            <button
              className={cn(styles['catalog-sort__order-button'], styles['catalog-sort__order-button--down'])}
              aria-label='По убыванию'
            ></button>
          </div>
        </div>
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
        <div className={cn(styles['pagination'], styles['page-content__pagination'])}>
          <ul className={styles['pagination__list']}>
            <li className={cn(styles['pagination__page'], styles['pagination__page--prev'])}>
              <Link className={cn('link', styles['pagination__page-link'])} href='1'>
                Назад
              </Link>
            </li>
            <li className={styles['pagination__page']}>
              <Link className={cn('link', styles['pagination__page-link'])} href='1'>
                1
              </Link>
            </li>
            <li className={cn(styles['pagination__page'], styles['pagination__page--active'])}>
              <Link className={cn('link', styles['pagination__page-link'])} href='2'>
                2
              </Link>
            </li>
            <li className={styles['pagination__page']}>
              <Link className={cn('link', styles['pagination__page-link'])} href='3'>
                3
              </Link>
            </li>
            <li className={cn(styles['pagination__page'], styles['pagination__page--next'])}>
              <Link className={cn('link', styles['pagination__page-link'])} href='2'>
                Далее
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
