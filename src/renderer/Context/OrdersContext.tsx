import { useState, useEffect, useContext, createContext, FC } from 'react';

import { useDb } from '../Hooks';
import { UserOrderData } from '../Types';

interface OrderContextValue {
  orderList: UserOrderData[];
}

const OrderContext = createContext<OrderContextValue>({} as OrderContextValue);

export const useOrder = () => useContext(OrderContext);

export const OrderProvider: FC = ({ children }) => {
  const { onSnapshot, getQueryReference } = useDb();
  const [orderList, setOrderList] = useState<Array<UserOrderData>>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      getQueryReference('orders'),
      (querySnapshot) => {
        querySnapshot.forEach((change) => {
          setOrderList((pre) => [
            ...pre,
            { ...change.data(), id: change.id } as UserOrderData,
          ]);
        });
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = {
    orderList,
  };
  console.trace('from OrderContext: ', orderList);
  return (
    <OrderContext.Provider value={values}>{children}</OrderContext.Provider>
  );
};
