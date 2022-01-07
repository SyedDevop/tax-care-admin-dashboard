export enum PaymentState {
  paid = 'complete',
  pending = 'pending',
  refunded = 'closed',
}

export enum OrderState {
  complete = 'complete',
  conformation = 'pending',
  cancelled = 'closed',
}
