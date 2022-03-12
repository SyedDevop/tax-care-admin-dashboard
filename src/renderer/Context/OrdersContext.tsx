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
    const q = getQueryReference('orders');
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        setOrderList([]);
        querySnapshot.forEach((change) => {
          console.log(change.data());

          setOrderList((pre) => [
            ...pre,
            { ...change.data(), id: change.id } as UserOrderData,
          ]);
        });
      },
      (err) => {
        console.error(err);
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
  return (
    <OrderContext.Provider value={values}>{children}</OrderContext.Provider>
  );
};
// TODO: I have changed setOrderList to emitylist.
