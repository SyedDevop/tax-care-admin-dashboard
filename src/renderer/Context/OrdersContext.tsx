import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  FC,
} from 'react';

import { useDb } from '../Hooks';
import { UserOrderData } from '../Types';

interface OrderContextValue {
  orderData: UserOrderData[];
}

const OrderContext = createContext<OrderContextValue>({} as OrderContextValue);

export const useOrder = () => useContext(OrderContext);

export const OrderProvider: FC = ({ children }) => {
  const { getALlDoc } = useDb();
  const [orderList, setOrderList] = useState<Array<UserOrderData>>([]);

  useEffect(() => {
    const getALlOrderList = async () => {
      console.log('called from context');
      try {
        const orderQuery = await getALlDoc('orders');
        setOrderList(
          orderQuery.docs.map((doc) => {
            return { ...doc.data(), id: doc.id } as UserOrderData;
          })
        );
      } catch (err) {
        console.error(err);
      }
    };
    getALlOrderList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = {
    orderData: orderList,
  };
  return (
    <OrderContext.Provider value={values}>{children}</OrderContext.Provider>
  );
};
