import axios from "axios";

const BACKEND_URL = "https://ist236-2024-2d361-default-rtdb.firebaseio.com";

export async function storeOrder(orderData) {
  const response = await axios.post(BACKEND_URL + "/orders.json", orderData);
  const id = response.data.name;
  return id;
}

export async function fetchOrders() {
  const response = await axios.get(BACKEND_URL + "/orders.json");

  const orders = [];

  for (const key in response.data) {
    const orderObj = {
      id: key,
      total: response.data[key].total,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
      status: response.data[key].status,
    };
    orders.push(orderObj);
  }

  return orders;
}

export function updateOrders(id, orderData) {
  return axios.put(BACKEND_URL + `/orders/${id}.json`);
}

export function deleteOrder(id) {
  return axios.delete(BACKEND_URL + `orders/${id}.json`);
}
