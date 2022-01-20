import { Timestamp } from 'firebase/firestore';
import { OrderSummary } from './Checkout.types';

export interface FormInput {
  name: string;
  email: string;
  phoneNumber: string;
}
export interface UserOrderData {
  clientData: FormInput;
  clientType: string;
  discountPrice: number;
  id: string;
  issuedDate: Timestamp;
  orderDetails: OrderSummary;
  orderId: string;
  orderStates: { payment: string; state: string };
  tag?: string;
  totalAddOnAmount: number;
  totalAmount: number;
  userId?: string;
}
