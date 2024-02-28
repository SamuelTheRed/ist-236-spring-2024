import { StyleSheet, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";

function OrderReviewScreen(props) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[Colors.accent300, Colors.accent500, Colors.accent800]}
      style={styles.rootContainer}
    >
      <View
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
          {props.services.map((item) => {
            if (item.value) {
              return (
                <Text key={item.id} style={styles.subService}>
                  {item.name}
                </Text>
              );
            }
          })}
          <Text style={styles.service}>Add Ons:</Text>
          <Text style={styles.subService}>
            {props.newsletter ? "Newsletter" : ""}
          </Text>
          <Text style={styles.subService}>
            {props.rentalMembership ? "Rental Membership" : ""}
          </Text>
        </View>

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

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Return Home</NavButton>
        </View>
      </View>
    </LinearGradient>
  );
}

export default OrderReviewScreen;

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
    borderRadius: 5,
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
