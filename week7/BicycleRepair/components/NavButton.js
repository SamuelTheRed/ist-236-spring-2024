import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

// Home screen object with properties
function NavButton(props) {
  const { width, height } = useWindowDimensions();

  return (
    // Pressable component for customizable button
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          {/* Pulls from properties to place button info */}
          <Text style={[styles.text, { fontSize: width * 0.07 }]}>
            {props.children}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

// Exports as component
export default NavButton;

// CSS
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 300,
    backgroundColor: Colors.primary500,
    width: 1000,
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    padding: 8,
    fontFamily: "primary",
    textAlign: "center",
    color: Colors.accent500,
  },
});
