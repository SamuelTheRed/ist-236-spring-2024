import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  Image,
  Button,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import Item from "./components/item";

export default function App() {
  // Create State Management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [currentID, setCurrentID] = useState(0);

  // Create Modal Screen Handler Functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function addItemHandler(enteredItemText) {
    setShoppingItems((currentShoppingItems) => [
      ...currentShoppingItems, 
      {text: enteredItemText, id: currentID}
    ]);
    setCurrentID(currentID + 1);
    endAddItemHandler();
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            android_ripple={{ color: "#b180f0" }}
            style={({ pressed }) => pressed && styles.pressedButton}
            onPress={startAddItemHandler}
          >
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Add New Item</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Items to Get:</Text>
        </View>

        <View style={styles.listContainer}>
          <FlatList 
            data={shoppingItems}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return <Item text={itemData.item.text} id={itemData.item.id} />;
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 40,
    color: "#5e08cc",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5e08cc",
  },
  pressedButton: {
    opacity: 0.8,
  },
  subtitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  subtitle: {
    fontSize: 30,
    color: "#5e08cc",
  },
  listText: {
    fontSize: 20,
    color: "black",
  },
  listContainer: {
    flex: 7,
    width: "90%",
    alignItems: "center",
  },
  modalRootContainer: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8,
  },
});
