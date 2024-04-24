import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Colors from "../constants/colors";

// Country Grid Tile
function ItemGridTile(props) {
  return (
    // Grid Item
    <View style={styles.gridItem}>
      {/* Linear Gradient Design */}
      <LinearGradient
        style={styles.innerContainer}
        colors={[
          props.color,
          Colors.accent300o75,
        ]}
      >
        {/* Name of Country */}
        <Text style={styles.name}>{props.name}</Text>
        <Image style={styles.image} source={{ uri: props.image }} />
        <Text style={styles.type}>{props.type}</Text>
        <Text style={styles.price}>${props.price}</Text>
      </LinearGradient>
    </View>
  );
}

export default ItemGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    marginBottom: 30,
    height: 250,
    borderRadius: 20,
    elevation: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
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
    fontSize: 20,
    fontFamily: "primary",
    color: "#000",
  },
  type: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "primary",
    color: "#000",
  },
  price: {
    textAlign: "center",
    fontSize: 10,
    fontFamily: "primary",
    color: "#000",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
    borderRadius: 15,
  },
});
