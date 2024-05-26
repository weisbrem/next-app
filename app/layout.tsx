import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог гитар',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='wrapper'>
          <header className='header'>
            <div className='container header__wrapper'>
              <Link className='header__logo logo' href='/'>
                <Image className='logo__img' width='70' height='70' src='/img/svg/logo.svg' alt='Логотип' />
              </Link>
              <nav className='main-nav'>
                <ul className='main-nav__list'>
                  <li>
                    <Link className='link main-nav__link' href='/'>
                      Каталог
                    </Link>
                  </li>
                  <li>
                    <Link className='link main-nav__link' href='/'>
                      Где купить?
                    </Link>
                  </li>
                  <li>
                    <Link className='link main-nav__link' href='/'>
                      О компании
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* запретить hover */}
              <span className='header__cart-link' aria-label='Корзина'>
                <svg className='header__cart-icon' width='14' height='14' aria-hidden='true'>
                  <use xlinkHref='/img/sprite_auto.svg#icon-basket'></use>
                </svg>
                <span className='visually-hidden'>Перейти в корзину</span>
                <span className='header__cart-count'>2</span>
              </span>
            </div>
          </header>
          <main className='page-content'>
            <div className='container'>{children}</div>
          </main>
          <footer className='footer'>
            <div className='footer__container container'>
              <Link className='footer__logo logo' href='/'>
                <Image className='logo__img' width='70' height='70' src='/img/svg/logo.svg' alt='Логотип' />
              </Link>
              <div className='socials footer__socials'>
                <ul className='socials__list'>
                  <li className='socials-item'>
                    <a
                      className='socials__link'
                      href='https://www.skype.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='skype'
                    >
                      <svg className='socials__icon' width='24' height='24' aria-hidden='true'>
                        <use xlinkHref='/img/sprite_auto.svg#icon-skype'></use>
                      </svg>
                    </a>
                  </li>
                  <li className='socials-item'>
                    <a
                      className='socials__link'
                      href='https://www.vsco.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='vsco'
                    >
                      <svg className='socials__icon' width='24' height='24' aria-hidden='true'>
                        <use xlinkHref='/img/sprite_auto.svg#icon-vsco'></use>
                      </svg>
                    </a>
                  </li>
                  <li className='socials-item'>
                    <a
                      className='socials__link'
                      href='https://www.pinterest.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='pinterest'
                    >
                      <svg className='socials__icon' width='24' height='24' aria-hidden='true'>
                        <use xlinkHref='/img/sprite_auto.svg#icon-pinterest'></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <section className='footer__nav-section footer__nav-section--info'>
                <h2 className='footer__nav-title'>О нас</h2>
                <p className='footer__nav-content footer__nav-content--font-secondary'>
                  Магазин гитар, музыкальных инструментов и гитарная мастерская <br /> в Санкт-Петербурге.
                  <br />
                  <br />
                  Все инструменты проверены, отстроены <br /> и доведены до идеала!
                </p>
              </section>
              <section className='footer__nav-section footer__nav-section--links'>
                <h2 className='footer__nav-title'>Информация</h2>
                <ul className='footer__nav-list'>
                  <li className='footer__nav-list-item'>
                    <Link className='link' href='/'>
                      Где купить?
                    </Link>
                  </li>
                  <li className='footer__nav-list-item'>
                    <Link className='link' href='/'>
                      Блог
                    </Link>
                  </li>
                  <li className='footer__nav-list-item'>
                    <Link className='link' href='/'>
                      Вопрос - ответ
                    </Link>
                  </li>
                  <li className='footer__nav-list-item'>
                    <Link className='link' href='/'>
                      Возврат
                    </Link>
                  </li>
                  <li className='footer__nav-list-item'>
                    <Link className='link' href='/'>
                      Сервис-центры
                    </Link>
                  </li>
                </ul>
              </section>
              <section className='footer__nav-section footer__nav-section--contacts'>
                <h2 className='footer__nav-title'>Контакты</h2>
                <p className='footer__nav-content'>
                  г. Санкт-Петербург,
                  <br /> м. Невский проспект, <br />
                  ул. Казанская 6.
                </p>
                <div className='footer__nav-content'>
                  <svg className='footer__icon' width='8' height='8' aria-hidden='true'>
                    <use xlinkHref='/img/sprite_auto.svg#icon-phone'></use>
                  </svg>
                  <a className='link' href='tel:88125005050'>
                    {' '}
                    8-812-500-50-50
                  </a>
                </div>
                <p className='footer__nav-content'>
                  Режим работы:
                  <br />
                  <span className='footer__span'>
                    <svg className='footer__icon' width='13' height='13' aria-hidden='true'>
                      <use xlinkHref='/img/sprite_auto.svg#icon-clock'></use>
                    </svg>
                    <span> с 11:00 до 20:00</span>
                    <span>без выходных</span>
                  </span>
                </p>
              </section>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
