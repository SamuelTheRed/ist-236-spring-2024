import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Modal, Image, Pressable } from "react-native";

export default function App() {
  // Create State Management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState("");
  const [enteredItemText, setEnteredItemText] = useState("");

  // Create Modal Screen Handler Functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endItemHandler() {
    setModalIsVisible(false);
  }

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    console.log(enteredItemText)
    if (shoppingItems === "") {
      setShoppingItems(enteredItemText);
    } else {
      setShoppingItems(shoppingItems + "\n" + enteredItems);
    }
    setEnteredItemText("");
    endItemHandler();
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
            android_ripple={{ color: "#fff" }}
            style={({ pressed }) => pressed && styles.pressedButton}
            onPress={startAddItemHandler}
          >
            <View>
              <Text>
                Add New Item
              </Text>
            </View>
          </Pressable>
          <Button
            title="Add New Item"
            color="#b180f0"
            onPress={startAddItemHandler}
          />
        </View>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Items to Get:</Text>
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listText}>{shoppingItems}</Text>
        </View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRootContainer}>
            <View style={styles.inputContainer}>
              <Image
                style={styles.image}
                source={require("./assets/images/ShoppingCart.png")}
              />

              <TextInput
                style={styles.textInput}
                placeholder="Enter Item Here"
                onchangeText={itemInputHandler}
                value={enteredItemText}
              />

              <View style={styles.modalButtonContainer}>
                <View style={styles.modalButton}>
                  <Button
                    title="Add Item"
                    color=""
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>

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
    justifyContent: "center"
  },
  addButton: {
    backgroundColor: "white",
    padding: 10
  },
  addButtonText: {
    fontSize: 20,
    color: ""
  },
  pressedButton: {
    opacity: 0.8
  },
  modalButtonContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 10
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
  listContainer: {
    flex: 7,
    width: "90%",
    backgroundColor: "#fff",
    alignItems: "center"
  },
  listText: {
    fontSize: 20,
    color: "black"
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
    alignitems: "center",
    width: 90,
    padding: 16,
    backgroundColor: "#311"
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "",
    backgroundColor: "",
    color: "",
    borderRadius: 6,
    width: "100%",
    padding: 12
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8
  }
});
