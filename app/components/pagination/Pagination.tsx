'use client';

import { useEffect } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import styles from './Pagination.module.css';
import { productStore } from '@/stores/product.store';
import { arrayOfNumbers } from '@/utils/get-array-of-numbers';

export default function Pagination() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { totalPages } = productStore((state) => state);

  const numberOfTotalPages = arrayOfNumbers(totalPages);
  const currentPage = Number(searchParams.get('page'));

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    replace(`${pathname}?${params.toString()}`);
  }, []);

  return (
    <div className={cn(styles['pagination'], styles['page-content__pagination'])}>
      <ul className={styles['pagination__list']}>
        <li className={cn(styles['pagination__page'], styles['pagination__page--prev'])}>
          <Link
            className={cn('link', styles['pagination__page-link'], {
              [styles['pagination__page-link--disabled']]: currentPage === 1,
            })}
            href={{ query: { page: `${currentPage - 1}` } }}
          >
            Назад
          </Link>
        </li>

        {numberOfTotalPages.map((page) => (
          <li
            key={page}
            className={cn(styles['pagination__page'], {
              [styles['pagination__page--active']]: currentPage === page,
            })}
          >
            <Link className={cn('link', styles['pagination__page-link'])} href={{ query: { page: `${page}` } }}>
              {page}
            </Link>
          </li>
        ))}

        <li className={cn(styles['pagination__page'], styles['pagination__page--next'])}>
          <Link
            className={cn('link', styles['pagination__page-link'], {
              [styles['pagination__page-link--disabled']]: currentPage === 5,
            })}
            href={{ query: { page: `${currentPage + 1}` } }}
          >
            Далее
          </Link>
        </li>
      </ul>
    </div>
  );
}
