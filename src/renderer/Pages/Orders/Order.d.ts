export interface OrderTableRowDataType {
  id: string;
  date: string;
  planType: string;
  planId: string;
  states: string;
  paymentState: string;
  amount: number;
  name: string;
  subRow: SubRow;
  addOnTotal: number;
  discount: number;
  price: number;
}

export interface SubRow {
  row1: Row1;
  row2: Row2;
}

export interface Row1 {
  client: string;
  phone: string;
  email: string;
}

export interface Row2 {
  orderId: string;
  addOns?: string[];
}
