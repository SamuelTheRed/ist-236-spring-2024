import { useContext, useEffect, useState } from "react";
import OrdersOutput from "../components/OrdersOutput/OrdersOutput";
import { OrdersContext } from "../store/orders-context";
import { fetchOrders } from "../util/http";

function OpenOrdersScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const ordersCtx = useContext(OrdersContext);

    useEffect(() => {
        async function getOrders(){
            setIsLoading(true);
            try {
                const orders = await fetchOrders();
                ordersCtx.setOrders(orders);
            } catch (error) {
                setError("Could not fetch orders!");
            }
            setIsLoading(false);
        }

        getOrders();
    }, []);

    const openOrders = ordersCtx.orders.filter((order) => {
        return order.status === "Open";
    });

    function errorHandler() {
        
    }

    if (isProcessing){
        return <LoadingOverlay />;
    } else if (error && !isProcessing){
        return <ErrorOverlay message={error} onConfirm={errorHandler} />
    } else {
        return <OpenOrdersScreen />
    }