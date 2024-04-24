import { View, StyleSheet, Text, Image, Modal } from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

// Add Note screen object with properties
function EventModal(props) {

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screenContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.name}</Text>
        </View>

        <View style={styles.textContainer}>
          <Image style={styles.image} source={props.image} />
          <Text style={styles.text}>{props.date}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onClose}>Close</NavButton>
        </View>
      </View>
    </Modal>
  );
}

export default EventModal;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.primary300,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    paddingTop: 30,
    fontSize: 50,
    textAlign: "center",
    fontFamily: "primary",
    color: Colors.primary500,
  },
  textContainer: {
    flex: 3,
    width: "90%",
    borderWidth: 3,
    borderColor: Colors.primary500,
    padding: 10,
  },
  text: {
    color: Colors.primary500,
    fontSize: 30,
    fontFamily: "primary",
  },
  description: {
    paddingTop: 20,
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "primary",
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
  buttonContainer: {
    marginTop: 10,
    flex: 1,
  },
});
