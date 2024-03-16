import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";

// Country Grid Tile
function CountryGridTile(props) {
  return (
    // Grid Item 
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={props.onPress}
      >
        {/* Linear Gradient Design */}
        <LinearGradient
          style={styles.innerContainer}
          colors={[
            props.color,
            props.color,
            props.color,
            props.color,
            Colors.accent300o75,
          ]}
        >
          {/* Name of Country */}
          <Text style={styles.name}>{props.name}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

export default CountryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    marginBottom: 30,
    height: 100,
    borderRadius: 20,
    elevation: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.50,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "primary",
    color: "#FFF",
  },
});
