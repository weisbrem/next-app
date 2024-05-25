'use client';

import styles from './page.module.css';
import { counterStore } from '@/stores/counter-store';
import Link from 'next/link';

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
      <div className='catalog'>
        <form className='catalog-filter'>
          <h2 className='title title--bigger catalog-filter__title'>Фильтр</h2>
          <fieldset className='catalog-filter__block'>
            <legend className='catalog-filter__block-title'>Цена, ₽</legend>
            <div className='catalog-filter__price-range'>
              <div className='form-input'>
                <label className='visually-hidden'>Минимальная цена</label>
                <input type='number' placeholder='1 000' id='priceMin' name='от' />
              </div>
              <div className='form-input'>
                <label className='visually-hidden'>Максимальная цена</label>
                <input type='number' placeholder='30 000' id='priceMax' name='до' />
              </div>
            </div>
          </fieldset>
          <fieldset className='catalog-filter__block'>
            <legend className='catalog-filter__block-title'>Тип гитар</legend>
            <div className='form-checkbox catalog-filter__block-item'>
              <input className='visually-hidden' type='checkbox' id='acoustic' name='acoustic' />
              <label htmlFor='acoustic'>Акустические гитары</label>
            </div>
            <div className='form-checkbox catalog-filter__block-item'>
              <input className='visually-hidden' type='checkbox' id='electric' name='electric' />
              <label htmlFor='electric'>Электрогитары</label>
            </div>
            <div className='form-checkbox catalog-filter__block-item'>
              <input className='visually-hidden' type='checkbox' id='ukulele' name='ukulele' />
              <label htmlFor='ukulele'>Укулеле</label>
            </div>
          </fieldset>
          <fieldset className='catalog-filter__block'>
            <legend className='catalog-filter__block-title'>Количество струн</legend>
            <div className='form-checkbox catalog-filter__block-item'>
              <input className='visually-hidden' type='checkbox' id='4-strings' name='4-strings' />
              <label htmlFor='4-strings'>4</label>
            </div>
            <div className='form-checkbox catalog-filter__block-item'>
              <input className='visually-hidden' type='checkbox' id='6-strings' name='6-strings' />
              <label htmlFor='6-strings'>6</label>
            </div>
            <div className='form-checkbox catalog-filter__block-item'>
              <input className='visually-hidden' type='checkbox' id='7-strings' name='7-strings' />
              <label htmlFor='7-strings'>7</label>
            </div>
            <div className='form-checkbox catalog-filter__block-item'>
              <input className='visually-hidden' type='checkbox' id='12-strings' name='12-strings' />
              <label htmlFor='12-strings'>12</label>
            </div>
          </fieldset>
          <button className='catalog-filter__reset-btn button button--black-border button--medium' type='reset'>
            Очистить
          </button>
        </form>
        <div className='catalog-sort'>
          <h2 className='catalog-sort__title'>Сортировать:</h2>
          <div className='catalog-sort__type'>
            <button className='catalog-sort__type-button' aria-label='по цене'>
              по цене
            </button>
            <button className='catalog-sort__type-button' aria-label='по популярности'>
              по популярности
            </button>
          </div>
          <div className='catalog-sort__order'>
            <button
              className='catalog-sort__order-button catalog-sort__order-button--up'
              aria-label='По возрастанию'
            ></button>
            <button
              className='catalog-sort__order-button catalog-sort__order-button--down'
              aria-label='По убыванию'
            ></button>
          </div>
        </div>
        <div className='cards catalog__cards'>
          <div className='product-card'>
            <img src='/img/content/catalog-product-0.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
            <div className='product-card__info'>
              <div className='rate product-card__rate'>
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
              <p className='product-card__title'>СURT Z30 Plus Acoustics</p>
              <p className='product-card__price'>
                <span className='visually-hidden'>Цена:</span>129 500 ₽
              </p>
            </div>
            <div className='product-card__buttons'>
              <Link className='button button--mini' href='#'>
                Подробнее
              </Link>
              <Link className='button button--red button--mini button--add-to-cart' href='#'>
                Купить
              </Link>
            </div>
          </div>
          <div className='product-card'>
            <img src='/img/content/catalog-product-1.jpg' width='75' height='190' alt='Честер Bass' />
            <div className='product-card__info'>
              <div className='rate product-card__rate'>
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
              <p className='product-card__title'>Честер Bass</p>
              <p className='product-card__price'>
                <span className='visually-hidden'>Цена:</span>51 100 ₽
              </p>
            </div>
            <div className='product-card__buttons'>
              <Link className='button button--mini' href='#'>
                Подробнее
              </Link>
              <Link className='button button--red-border button--mini button--in-cart' href='#'>
                В Корзине
              </Link>
            </div>
          </div>
          <div className='product-card'>
            <img src='/img/content/catalog-product-2.jpg' width='75' height='190' alt='СURT Z30 Plus' />
            <div className='product-card__info'>
              <div className='rate product-card__rate'>
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
                  <span className='visually-hidden'>Всего оценок:</span>76
                </p>
              </div>
              <p className='product-card__title'>СURT Z30 Plus</p>
              <p className='product-card__price'>
                <span className='visually-hidden'>Цена:</span>9 700 ₽
              </p>
            </div>
            <div className='product-card__buttons'>
              <Link className='button button--mini' href='#'>
                Подробнее
              </Link>
              <Link className='button button--red button--mini button--add-to-cart' href='#'>
                Купить
              </Link>
            </div>
          </div>
          <div className='product-card'>
            <img src='/img/content/catalog-product-3.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
            <div className='product-card__info'>
              <div className='rate product-card__rate'>
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
              <p className='product-card__title'>СURT Z30 Plus Acoustics</p>
              <p className='product-card__price'>
                <span className='visually-hidden'>Цена:</span>129 500 ₽
              </p>
            </div>
            <div className='product-card__buttons'>
              <Link className='button button--mini' href='#'>
                Подробнее
              </Link>
              <Link className='button button--red button--mini button--add-to-cart' href='#'>
                Купить
              </Link>
            </div>
          </div>
          <div className='product-card'>
            <img src='/img/content/catalog-product-4.jpg' width='75' height='190' alt='СURT Z30 Plus' />
            <div className='product-card__info'>
              <div className='rate product-card__rate'>
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
                  <span className='visually-hidden'>Всего оценок:</span>76
                </p>
              </div>
              <p className='product-card__title'>СURT Z30 Plus</p>
              <p className='product-card__price'>
                <span className='visually-hidden'>Цена:</span>9 700 ₽
              </p>
            </div>
            <div className='product-card__buttons'>
              <Link className='button button--mini' href='#'>
                Подробнее
              </Link>
              <Link className='button button--red button--mini button--add-to-cart' href='#'>
                Купить
              </Link>
            </div>
          </div>
          <div className='product-card'>
            <img src='/img/content/catalog-product-5.jpg' width='75' height='190' alt='Честер Bass' />
            <div className='product-card__info'>
              <div className='rate product-card__rate'>
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
              <p className='product-card__title'>Честер Bass</p>
              <p className='product-card__price'>
                <span className='visually-hidden'>Цена:</span>51 100 ₽
              </p>
            </div>
            <div className='product-card__buttons'>
              <Link className='button button--mini' href='#'>
                Подробнее
              </Link>
              <Link className='button button--red-border button--mini button--in-cart' href='#'>
                В Корзине
              </Link>
            </div>
          </div>
          <div className='product-card'>
            <img src='/img/content/catalog-product-6.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
            <div className='product-card__info'>
              <div className='rate product-card__rate'>
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
              <p className='product-card__title'>СURT Z30 Plus Acoustics</p>
              <p className='product-card__price'>
                <span className='visually-hidden'>Цена:</span>129 500 ₽
              </p>
            </div>
            <div className='product-card__buttons'>
              <Link className='button button--mini' href='#'>
                Подробнее
              </Link>
              <Link className='button button--red button--mini button--add-to-cart' href='#'>
                Купить
              </Link>
            </div>
          </div>
          <div className='product-card'>
            <img src='/img/content/catalog-product-7.jpg' width='75' height='190' alt='СURT Z30 Plus Acoustics' />
            <div className='product-card__info'>
              <div className='rate product-card__rate'>
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
              <p className='product-card__title'>СURT Z30 Plus Acoustics</p>
              <p className='product-card__price'>
                <span className='visually-hidden'>Цена:</span>129 500 ₽
              </p>
            </div>
            <div className='product-card__buttons'>
              <Link className='button button--mini' href='#'>
                Подробнее
              </Link>
              <Link className='button button--red button--mini button--add-to-cart' href='#'>
                Купить
              </Link>
            </div>
          </div>
          <div className='product-card'>
            <img src='/img/content/catalog-product-8.jpg' width='75' height='190' alt='СURT Z30 Plus' />
            <div className='product-card__info'>
              <div className='rate product-card__rate'>
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
                  <span className='visually-hidden'>Всего оценок:</span>76
                </p>
              </div>
              <p className='product-card__title'>СURT Z30 Plus</p>
              <p className='product-card__price'>
                <span className='visually-hidden'>Цена:</span>9 700 ₽
              </p>
            </div>
            <div className='product-card__buttons'>
              <Link className='button button--mini' href='#'>
                Подробнее
              </Link>
              <Link className='button button--red button--mini button--add-to-cart' href='#'>
                Купить
              </Link>
            </div>
          </div>
        </div>
        <div className='pagination page-content__pagination'>
          <ul className='pagination__list'>
            <li className='pagination__page pagination__page--active'>
              <Link className='link pagination__page-link' href='1'>
                1
              </Link>
            </li>
            <li className='pagination__page'>
              <Link className='link pagination__page-link' href='2'>
                2
              </Link>
            </li>
            <li className='pagination__page'>
              <Link className='link pagination__page-link' href='3'>
                3
              </Link>
            </li>
            <li className='pagination__page pagination__page--next' id='next'>
              <Link className='link pagination__page-link' href='2'>
                Далее
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
