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

if (isProcessing){
    return <LoadingOverlay />;
} else if (error && !isProcessing){
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
} else {
    return <OpenOrdersScreen />
}