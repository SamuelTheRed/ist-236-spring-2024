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

// Add Note screen object with properties
function AddNoteScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  function addNoteHandler(){
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
        <Title>Add New Note</Title>
      </View>

      <View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.noteTitleContainer}>
            <TextInput
              placeholder="Enter Note Title Here"
              style={styles.title}
              onChangeText={setNoteTitle}
            />
          </View>

          <View style={styles.noteTitleContainer}>
            <TextInput
              placeholder="Enter Note Title Here"
              style={styles.title}
              onChangeText={setNoteText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
            />
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <NavButton onNext={addNoteHandler}>Submit</NavButton>
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

export default AddNoteScreen;

const styles = StyleSheet.create({ //1:45:00
  screenContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 55,
    borderColor: Colors.accent500,
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
    alignItems: "center",
  },
});
