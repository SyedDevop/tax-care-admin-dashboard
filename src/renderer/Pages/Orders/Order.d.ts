export interface OrderTableRowDataType {
  id: string;
  date: string | Date;
  planType: string;
  planId: string;
  states: string;
  paymentState: string;
  amount: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  subRowData: SubRow;
  addOnTotal: number;
  discount: number;
  price: string;
  moreIcon?: string;
}

// export interface SubRow {}

export interface SubRow {
  client: string;
  phone: string;
  email: string;
  orderId: string;
  addOns?: string[];
}
