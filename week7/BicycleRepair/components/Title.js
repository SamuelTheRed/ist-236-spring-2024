import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

// Title object with properties
function Title(props) {
  const { width, height } = useWindowDimensions();

  return (
    // Pulls from properties to place title string
    <Text style={[styles.title, { fontSize: width * 0.13 }]}>
      {props.children}
    </Text>
  );
}

// Exports as component
export default Title;

// CSS
const styles = StyleSheet.create({
  title: {
    fontFamily: "primary",
    textAlign: "center",
    color: Colors.primary500,
  },
});