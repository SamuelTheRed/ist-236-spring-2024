import { StyleSheet, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";

// Order Review screen object with properties
function OrderReviewScreen(props) {
  const insets = useSafeAreaInsets();

  return (
    // React component for linear gradient on order review screen
    <LinearGradient
      colors={[Colors.accent300, Colors.accent500, Colors.accent800]}
      style={styles.rootContainer}
    >
      <View
        // Safe Area Insets
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        {/* Custom title component */}
        <View style={styles.titleContainer}>
          <Title>Order Summary</Title>
        </View>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Your order has been placed with your order details below
          </Text>
        </View>

        <View style={styles.servicesContianer}>
          <Text style={styles.service}>Repair Time:</Text>
          <Text style={styles.subService}>{props.repairTime}</Text>
          <Text style={styles.service}>Services:</Text>
          {/* Mapped services info component */}
          {props.services.map((item) => {
            if (item.value) {
              return (
                <Text key={item.id} style={styles.subService}>
                  {item.name}
                </Text>
              );
            }
          })}
          {/* Addon choices */}
          <Text style={styles.service}>Add Ons:</Text>
          <Text style={styles.subService}>
            {props.newsletter ? "Newsletter" : ""}
          </Text>
          <Text style={styles.subService}>
            {props.rentalMembership ? "Rental Membership" : ""}
          </Text>
        </View>

        {/* Totals */}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Subtotal: ${props.price.toFixed(2)}{" "}
          </Text>
          <Text style={styles.subTitle}>
            Sales Tax: ${(props.price * 0.06).toFixed(2)}{" "}
          </Text>
          <Text style={styles.subTitle}>
            Total: ${(props.price + props.price * 0.06).toFixed(2)}
          </Text>
        </View>

        {/* Returns screen to home */}
        <View style={styles.buttonContainer}>
          {/* Custom Nav Button Component  */}
          <NavButton onPress={props.onNext}>Return Home</NavButton>
        </View>
      </View>
    </LinearGradient>
  );
}

// Exports as component
export default OrderReviewScreen;

// CSS
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Colors.primary500,
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500,
  },
  servicesContianer: {
    flex: 3,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Colors.primary500,
    paddingTop: 50,
    paddingHorizontal: 10
  },
  service: {
    fontSize: 20,
    color: Colors.primary500,
  },
  subService: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
