import { Timestamp } from 'firebase/firestore';
import { OrderSummary } from './Checkout.types';

export interface ExistingUserOrder {
  id: string;
  orderId: string;
  userId: string;
  orderDetails: OrderSummary;
  discountPrice: number;
  orderStates: {
    message: string;
    color: string;
  };
  issuedDate?: Timestamp;
  tag: string;
}

export interface FormInput {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface NewUserOrder {
  id: string;
  orderId: string;
  clientData: FormInput;
  orderDetails: OrderSummary;
  discountPrice: number;
  orderStates: {
    message: string;
    color: string;
  };
  issuedDate?: Timestamp;
}

export type UserOrderData = ExistingUserOrder | NewUserOrder;
