import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import { useState } from "react";

// Add Recipe screen object with properties
function AddRecipeScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();

  const [noteTitle, setRecipeTitle] = useState("");
  const [noteText, setRecipeText] = useState("");

  function addRecipeHandler() {
    props.onAdd(noteTitle, noteText);
    props.onCancel();
  }

  return (
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
        <Title style={styles.title}>Add New Recipe</Title>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.noteTitleContainer}>
            <TextInput
              placeholder="Enter Recipe Title Here"
              style={styles.noteTitle}
              onChangeText={setRecipeTitle}
            />
          </View>

          <View style={styles.noteTextContainer}>
            <TextInput
              placeholder="Enter Recipe Text Here"
              style={styles.noteText}
              onChangeText={setRecipeText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
            />
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <NavButton onPress={addRecipeHandler}>Submit</NavButton>
            </View>

            <View style={styles.button}>
              <NavButton onPress={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddRecipeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 50,
  },
  scrollContainer: {
    flex: 5,
  },
  noteTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  noteTitle: {
    color: Colors.accent800,
    fontWeight: "bold",
    fontSize: 30,
  },
  noteTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
    alignItems: "flex-start",
  },
  noteText: {
    color: Colors.primary800,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 10,
  },
});
