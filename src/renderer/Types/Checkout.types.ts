import { SelectedAddOnsType } from './Pricing.types';

export interface OrderData {
  price: number;
  planId: string;
  planType: string;
}
export interface OrderSummary extends OrderData {
  addOnRecord?: SelectedAddOnsType[];
}

// export type Name = string;
