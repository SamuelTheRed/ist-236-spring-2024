import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  SafeAreaView,
  Button,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function App() {
  // Magic Eight Ball Responses
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  // Set max and min response value
  const maxVal = 19;
  const minVal = 0;
  // Create state management variables
  const [userQuestion, setUserQuestion] = useState("");
  const [response, setResponse] = useState(0);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startBallShakeHandler() {
    setModalIsVisible(true);
    onBallShake();
  }

  function endBallShakeHandler() {
    setModalIsVisible(false);
    setUserQuestion("");
  }

  function onBallShake() {
    const rndNum = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    setResponse(responses[rndNum]);
  }

  // Dynamically determin what type of response text to display
  let responseText = (
    <Text style={styles.responseText}>
      Ask a Question and Shake the Magic Eight Ball
    </Text>
  );
  if (userQuestion !== "") {
    responseText = (
      <Text style={styles.responseText}>
        The Magic Eight Ball Says: {response}
      </Text>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Magic Eight Ball</Text>
          </View>
        </View>

        <Text style={styles.inputLabel}>
          Enter Your Question for the Magic Eight Ball:
        </Text>
        <TextInput
          style={styles.textInput}
          // Placeholder for when it's empty
          placeholder="Enter a question"
          // When the text is changed, update the userGuess
          onChangeText={setUserQuestion}
          // Tie the entered value to the question so when
          //  it is reset to blank the input field will also reset
          value={userQuestion}
        />

        <View style={styles.shakeBallContainer}>
          <Pressable
            // Add the android ripple
            android_ripple={{ color: "#ff6f6f" }}
            // Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // When pressed, open modal screen
            onPress={startBallShakeHandler}
          >
            <View style={styles.shakeButton}>
              <Text style={styles.shakeButtonText}>Shake Magic Eight Ball</Text>
            </View>
          </Pressable>
        </View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRootContainer}>
            <View style={styles.userQuestionRepeatContainer}>
              <Text style={styles.userQuestionRepeatText}>{userQuestion}</Text>
            </View>
            <View style={styles.responseContainer}>
              <Text style={styles.responseText}>{responseText}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <View style={styles.modalButton}>
                <Button
                  title="Cancel"
                  color="#FFF"
                  onPress={endBallShakeHandler}
                />
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
    backgroundColor: "#205",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleBackground: {
    backgroundColor: "#638",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#FFF",
  },
  inputLabel: {
    fontSize: 25,
    color: "#FFF",
    marginTop: 20,
  },
  textInput: {
    backgroundColor: "#DDD",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    color: "#205",
    marginVertical: 30,
    width: "80%"
  },
  shakeBallContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 20
  },
  pressedButton: {
    opacity: 0.8,
  },
  shakeButton: {
    backgroundColor: "#FFF",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  shakeButtonText: {
    fontSize: 25,
  },
  modalRootContainer: {
    flex: 1,
    backgroundColor: "#205",
    alignItems: "center",
  },
  userQuestionRepeatContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  userQuestionRepeatText: {
    fontSize: 25,
    color: "#FFF",
  },
  responseContainer: {
    flex: 1,
    justifyContent: "center"
  },
  responseText: {
    fontSize: 25,
    color: "#FFF",
  },
  modalButtonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 16,
  },
  modalButton: {
    width: "30%",
  },
});
