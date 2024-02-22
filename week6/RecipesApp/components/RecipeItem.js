import { StyleSheet, Text, View, Button } from "react-native";
import Colors from "../constants/colors";

// Recipe Items screen object with properties
function RecipeItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="View" onPress={props.onView} />
        </View>
        <View style={styles.button}>
          <Button title="Delete" onPress={props.onDelete} />
        </View>
      </View>
    </View>
  );
}

export default RecipeItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.accent500
  },
  titleContainer: {
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    backgroundColor: Colors.accent500, // Apple
    // backgroundColor: Colors.primary300, 
    color: "#FFF", // Apple
    fontFamily: "primaryBold",
    padding: 8
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginVertical: 5,
    marginHorizontal: 3
  },
});
