import { View, StyleSheet, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import NotesItem from "../components/NotesItem";

// Note screen object with properties
function NoteScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();

  function noteViewHandler(title, text){
    setModalNoteTitle(title),
    setModalNoteText(text)
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
        <Title>Current Thoughts</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={prop.currentNotes}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <NotesItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={noteViewHandler}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onPress={props.onAdd}>Add New Note</NavButton>
        </View>

        <View style={styles.button}>
          <NavButton onPress={props.onHome}>Return Home</NavButton>
        </View>
      </View>
    </View>
  );
}

export default NoteScreen;

const styles = StyleSheet.create({ //1:24:00
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
