import { View, StyleSheet, Text, Image, Modal } from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

// Add Note screen object with properties
function LessonModal(props) {

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screenContainer}>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>{props.title}</Title>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onClose}>Close</NavButton>
        </View>
      </View>
    </Modal>
  );
}

export default LessonModal;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.accent800,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "primary",
    color: Colors.primary300,
  },
  textContainer: {
    flex: 5,
    width: "90%",
    borderWidth: 3,
    borderColor: Colors.primary500,
    padding: 10,
  },
  text: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "primary",
  },
  buttonContainer: {
    marginTop: 10,
    flex: 1,
  },
});
