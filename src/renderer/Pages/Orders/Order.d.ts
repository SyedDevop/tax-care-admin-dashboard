export interface OrderTableRowDataType {
  id: string;
  date: string;
  planType: string;
  planId: string;
  states: string;
  paymentState: string;
  amount: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  subRowData: {}[];
  addOnTotal: number;
  discount: number;
  price: string;
  moreIcon?: string;
}

// export interface SubRow {}

export interface Row1 {
  client: string;
  phone: string;
  email: string;
}

export interface Row2 {
  orderId: string;
  addOns?: string[];
}
