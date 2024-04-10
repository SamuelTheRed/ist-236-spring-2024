export const OrdersContext = createContext({
  setOrders: (orders) => {},
});

function ordersReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return action.payload;
  }
}

function OrdersContextProvider({ children }) {
  function setOrders(orders) {
    dispatch({ type: "SET", payload: orderData });
  }
}
