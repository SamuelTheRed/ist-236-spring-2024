import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "../constants/colors";

// Event Items screen object with properties
function VenueEventItem(props) {
  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={props.onView}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={props.image} />
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default VenueEventItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    width: "100%",
  },
  titleContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 5,
    backgroundColor: Colors.primary300,
  },
  title: {
    fontSize: 40,
    borderWidth: 3,
    borderRadius: 5,
    textAlign: "center",
    fontFamily: "primaryBold",
    color: Colors.primary800,
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  dateContainer: {
    backgroundColor: Colors.primary500,
    borderWidth: 3,
    borderRadius: 5,
  },
  date: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "primaryBoldItalic",
    color: Colors.primary300o5,
  },
});
