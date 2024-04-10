import { View } from "react-native";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { deleteOrder } from "../util/http";
import { useLayoutEffect } from "react";

function ManageOrderScreen(props) {
  const [isProcessing, setIsProcessing] = useState(
    isEditing ? (selectedOrder.status === "Open" ? false : true) : false
  );
}

function statusChangeHandler() {}

    
    const [orderCompleted, setOrderCompleted] = useState(
        selectedOrder ? isEditing ? selectedOrder.status === "Open" ? false : true : false : false
    );

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: isEditing ? "Edit Order" : "Add Order",
        });
    })

    async function deletOrderHandler() {
    setIsProcessing(true);
    try {
        await deleteOrder(editOrderId);
        ordersCtx.deleteOrder(editedOrderId);
        props.navigation.goBack();
    } catch (error) {
        setError("Could not delete order, please try again later...");
    }
    setIsProcessing(false);
    }

async function confirmHandler(orderData) {
    setIsProcessing(true);
    try {
        if (isEditing) {
            ordersCtx.updateOrder(editedOrderId, {
                ...orderData,
                status: orderCompleted ? "Completed" : "Open"
            });
            await updateOrder(editedOrderId, {

            })
        }
    }
}

if (isProcessing){
    return <LoadingOverlay />;
} else if (error && !isProcessing){
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
} else {
    return (<View style={styles.container}></View>);
}