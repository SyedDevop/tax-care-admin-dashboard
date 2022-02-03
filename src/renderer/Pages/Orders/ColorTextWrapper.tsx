import { OrderState } from '../../Enum';

export const OrderStates: Record<string, OrderState> = {
  complete: OrderState.complete,
  conformation: OrderState.conformation,
  cancelled: OrderState.cancelled,
};

export const isClassName = (name: string) => {
  return OrderStates[name] || '';
};
const ColorTextWrapper = ({ value }: { value: string }) => (
  <span className={isClassName(value)}>{value}</span>
);

export default ColorTextWrapper;
