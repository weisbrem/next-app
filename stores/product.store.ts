import { IProduct } from '@/interfaces/product.interface';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IProductsState {
  products: IProduct[];
  product: IProduct | null;
  fetchOneProduct: (productId: string) => Promise<void>;
  fetchProducts: (currentPage: string) => Promise<void>;
  getNumberOfTotalPages: () => Promise<void>;
  hasFetchError: boolean;
  isLoading: boolean;
  totalPages: number;
}

const PAGE_LIMIT = 12;

export const productStore = create<IProductsState>()(
  devtools(
    (set) => ({
      products: [],
      product: null,
      hasFetchError: false,
      isLoading: false,
      totalPages: 1,
      fetchProducts: async (currentPage: string) => {
        const pageEnd = Number(currentPage) * PAGE_LIMIT;
        const pageStart = pageEnd - PAGE_LIMIT;

        try {
          set({ isLoading: true }, false, 'product-loading-status');
          const res = await fetch(`https://c2de4f691eaaeb20.mokky.dev/products?page=${pageStart}&limit=${pageEnd}`);
          const { items } = await res.json();

          set({ products: items }, false, 'product-fetch');
        } catch (error) {
          if (error instanceof Error) {
            console.log(error.message);
            set({ hasFetchError: true }, false, 'product-fetch-error');
          }
        } finally {
          set({ isLoading: false }, false, 'product-loading-status');
        }
      },
      getNumberOfTotalPages: async () => {
        try {
          const res = await fetch(`https://c2de4f691eaaeb20.mokky.dev/products?page=1&limit=${PAGE_LIMIT}`);
          const { meta } = await res.json();

          set({ totalPages: meta.total_pages }, false, 'product-total-pages');
        } catch (error) {
          if (error instanceof Error) {
            console.log(error.message);
            set({ hasFetchError: true }, false, 'total-number-fetch-error');
          }
        }
      },
      fetchOneProduct: async (productId: string) => {
        try {
          set({ isLoading: true }, false, 'product-loading-status');
          const res = await fetch(`https://c2de4f691eaaeb20.mokky.dev/products/${productId}`);
          const data = await res.json();

          set({ product: data }, false, 'one-product-fetch');
        } catch (error) {
          if (error instanceof Error) {
            console.log(error.message);
            set({ hasFetchError: true }, false, 'one-product-fetch-error');
          }
        } finally {
          set({ isLoading: false }, false, 'product-loading-status');
        }
      },
    }),
    { name: 'product-store' }
  )
);
