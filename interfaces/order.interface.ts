import { IProduct } from '@/interfaces/product.interface';

export interface IOrder extends IProduct {
  numberOfProductsInOrder: number;
  totalPrice: number;
}

export interface IOrders {
  [orderId: string]: IOrder;
}
