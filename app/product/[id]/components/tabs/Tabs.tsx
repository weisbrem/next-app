import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import cn from 'classnames';

import { getAdaptedProductType } from '@/utils/adapt-product-type';

import styles from './Tabs.module.css';

interface ITabsProps {
  vendorCode: string;
  category: string;
  numberOfStrings: number;
  description: string;
}

export default function Tabs({ vendorCode, category, numberOfStrings, description }: ITabsProps) {
  const params = useSearchParams();
  const currentTab = params.get('tab') ?? 'characteristics';

  const isCharacteristicsTab = currentTab === 'characteristics';

  return (
    <div className={styles['tabs']}>
      <Link
        href={{ query: { tab: 'characteristics' } }}
        className={cn('button button--medium', styles['tabs__button'], {
          [styles['button--black-border']]: currentTab !== 'characteristics',
        })}
      >
        Характеристики
      </Link>
      <Link
        href={{ query: { tab: 'description' } }}
        className={cn('button button--medium', styles['tabs__button'], {
          [styles['button--black-border']]: currentTab !== 'description',
        })}
      >
        Описание
      </Link>
      <div className={styles['tabs__content']}>
        {isCharacteristicsTab ? (
          <table className={styles['tabs__table']}>
            <tbody>
              <tr className={styles['tabs__table-row']}>
                <td className={styles['tabs__title']}>Артикул:</td>
                <td className={styles['tabs__value']}>{vendorCode}</td>
              </tr>
              <tr className={styles['tabs__table-row']}>
                <td className={styles['tabs__title']}>Тип:</td>
                <td className={styles['tabs__value']}>{getAdaptedProductType(category)}</td>
              </tr>
              <tr className={styles['tabs__table-row']}>
                <td className={styles['tabs__title']}>Количество струн:</td>
                <td className={styles['tabs__value']}>{numberOfStrings} струнная</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p className={styles['tabs__product-description']}>{description}</p>
        )}
      </div>
    </div>
  );
}
