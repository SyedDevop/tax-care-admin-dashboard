/* eslint-disable array-callback-return */
import { OrderTableRowDataType } from '../../Types';
import { useOrder } from '../../Context';
import { formatTimestamp } from '../../Utils';

// TODO-3: after merging newUserOrder and ExistingUserOrder delete the orderData...
// ... and create new orderData

const useOrders = () => {
  const { orderList } = useOrder();
  const orderData = async () => {
    // eslint-disable-next-line array-callback-return
    // eslint-disable-next-line consistent-return
    return Promise.all(
      orderList.map((order): OrderTableRowDataType => {
        return {
          id: order.id,
          date: formatTimestamp(order.issuedDate),
          planType: order.orderDetails.planType,
          planId: order.orderDetails.planId,
          states: order.orderStates.state,
          paymentState: order.orderStates.payment,
          amount: order.totalAmount,
          name: order.clientData.name,
          addOnTotal: order.totalAddOnAmount,
          discount: order.discountPrice,
          price: order.orderDetails.price,
          subRow: {
            row1: {
              client: order.clientType,
              phone: order.clientData.phoneNumber,
              email: order.clientData.email,
            },

            row2: {
              orderId: order.orderId,
              addOns: order.orderDetails.addOnRecord?.map(
                (value) => `${value.addOnPlanId} (${value.addOnPrice})`
              ),
            },
          },
        };
      })
    );
  };

  return { orderData };
};

export default useOrders;
