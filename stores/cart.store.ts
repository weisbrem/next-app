import { IOrder, IOrders } from '@/interfaces/order.interface';
import { IProduct } from '@/interfaces/product.interface';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ICartState {
  orders: IOrders | null;
  currentOrder: IOrder | null;
  setCurrentOrder: (order: IProduct) => void;
  sendOrder: () => Promise<void>;
  decProductsInOrder: (order: IOrder) => void;
  incProductsInOrder: (order: IOrder) => void;
  deleteOrderFromCart: (id: number) => void;
  hasFetchError: boolean;
  isLoading: boolean;
  getTotalProductsInCart: () => number;
  getTotalOrdersPrice: () => number;
}

const MIN_NUMBER_OF_PRODUCT_TO_BUY = 1;

export const cartStore = create<ICartState>()(
  devtools(
    (set, get) => ({
      orders: null,
      currentOrder: null,
      hasFetchError: false,
      isLoading: false,
      sendOrder: async () => {
        try {
          set({ isLoading: true }, false, 'cart-loading-status');

          await fetch('https://c2de4f691eaaeb20.mokky.dev/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(get().orders),
          });

          set({ orders: null }, false, 'cart-send-success');
        } catch (error) {
          if (error instanceof Error) {
            console.log(error.message);
            set({ hasFetchError: true }, false, 'cart-send-error');
          }
        } finally {
          set({ isLoading: false }, false, 'cart-loading-status');
        }
      },
      decProductsInOrder: (order: IOrder) => {
        const index = order.id;
        const orders = get().orders;

        if (!orders) {
          return;
        }

        set(
          {
            orders: {
              ...orders,
              [index]: {
                ...orders[index],
                numberOfProductsInOrder: orders[index].numberOfProductsInOrder - 1,
                totalPrice: orders[index].totalPrice - order.price,
              },
            },
          },
          false,
          'cart-dec-products-in-order'
        );
      },
      incProductsInOrder: (order: IOrder) => {
        const index = order.id;
        const orders = get().orders;

        if (!orders) {
          return;
        }

        set(
          {
            orders: {
              ...orders,
              [index]: {
                ...orders[index],
                numberOfProductsInOrder: orders[index].numberOfProductsInOrder + 1,
                totalPrice: orders[index].totalPrice + order.price,
              },
            },
          },
          false,
          'cart-inc-products-in-order'
        );
      },
      setCurrentOrder: (order: IProduct) => {
        const id = order.id;
        const orders = get().orders;
        set(
          {
            orders: {
              ...orders,
              [id]: {
                ...order,
                numberOfProductsInOrder: MIN_NUMBER_OF_PRODUCT_TO_BUY,
                totalPrice: order.price,
              },
            },
          },
          false,
          'cart-set-current-order'
        );
      },
      deleteOrderFromCart: (id: number) => {
        const orders = get().orders;

        if (!orders) {
          return;
        }

        set(
          (state) => {
            const newOrders = { ...state.orders };
            delete newOrders[id];
            return { orders: newOrders };
          },
          false,
          'cart-delete-order-from-cart'
        );
      },
      getTotalProductsInCart: () => {
        const orders = get().orders;

        if (!orders) {
          return 0;
        }

        return Object.values(orders).reduce((acc, product) => {
          return (acc += product.numberOfProductsInOrder);
        }, 0);
      },
      getTotalOrdersPrice: () => {
        const orders = get().orders;

        if (!orders) {
          return 0;
        }

        return Object.values(orders).reduce((acc, product) => {
          return (acc += product.totalPrice);
        }, 0);
      },
    }),
    { name: 'cart-store' }
  )
);
