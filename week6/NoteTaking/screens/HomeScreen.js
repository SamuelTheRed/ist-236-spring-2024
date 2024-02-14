import { View, StyleSheet, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

// Home screen object with properties
function HomeScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();

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
        <Title>Thought Vault</Title>
      </View>

      <View>
        <Image
          style={styles.image}
          source={require("../assets/images/note-taking.jpg")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Go To Notes</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
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
