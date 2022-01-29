/* eslint-disable array-callback-return */
import { OrderTableRowDataType, UserOrderData } from '../../Types';
// import { useOrder } from '../../Context';
import { numberToCurrency } from '../../Utils';

// TODO-3: after merging newUserOrder and ExistingUserOrder delete the orderData...
// ... and create new orderData

const useOrders = (orderList: UserOrderData[]) => {
  const orderData = orderList.map((order): OrderTableRowDataType => {
    return {
      id: order.id,
      date: order.issuedDate.toDate().toISOString(),
      planType: `${order.orderDetails.planType} (${order.orderDetails.planId})`,
      planId: order.orderDetails.planId,
      states: order.orderStates.state,
      paymentState: order.orderStates.payment,
      amount: numberToCurrency(order.totalAmount),
      name: order.clientData.name,
      addOnTotal: order.totalAddOnAmount,
      discount: order.discountPrice,
      price: numberToCurrency(order.orderDetails.price),
      subRowData: {
        client: order.clientType,
        phone: order.clientData.phoneNumber,
        email: order.clientData.email,
        orderId: order.orderId,
        addOns: order.orderDetails.addOnRecord?.map(
          (value) => `${value.addOnPlanId} (${value.addOnPrice})`
        ),
      },
    };
  });

  return { orderData };
};

export default useOrders;
