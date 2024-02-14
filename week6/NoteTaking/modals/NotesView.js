import { View, StyleSheet, Text, Image, Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

// Add Note screen object with properties
function AddNoteScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={props.visible} animationType="slide">
      <View
        style={[
          styles.screenContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Title>{props.title}</Title>
        </View>

        <View style={styles.textContainer}>
          <Title>{props.text}</Title>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Return to Thoughts</NavButton>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({ //1:33:00
    screenContainer: {
      flex: 1,
      width: "90%",
    },
    titleContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20
    },
    imageContainer: {
      flex: 2,
      justifyContent: "center",
      borderWidth: 4,
      borderRadius: 55,
      borderColor: Colors.accent500
    },
    image: {
      resizeMode: "cover",
      height: "100%",
      weight: "100%",
      resizeMode: "stretch",
    },
    buttonContainer: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center"
    },
  });