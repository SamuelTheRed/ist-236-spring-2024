import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/self.jpg")}
          />
        </View>
        <View style={styles.informationContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Samuel Shelley</Text>
          </View>
          <View style={styles.otherContainer}>
            <Text
              style={styles.text}
              onPress={() =>
                Linking.openURL("mailto:samuelshelley02@gmail.com")
              }
            >
              samuelshelley02@gmail.com
            </Text>
            <Text
              style={styles.text}
              onPress={() => Linking.openURL("tel:8433250888")}
            >
              (843) 325-0888
            </Text>
            <Text
              style={styles.text}
              onPress={() => Linking.openURL("https://github.com/SamuelTheRed")}
            >
              https://github.com/SamuelTheRed
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "rgb(0, 170, 255)",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    padding: 20,
    width: "100%",
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 10,
    borderColor: "rgb(68, 0, 255)",
  },
  informationContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    padding: 20,
    width: "100%",
  },
  title: {
    paddingTop: 20,
    fontSize: 50,
    color: "#FEE",
    fontWeight: "bold",
  },
  otherContainer: {
    flex: 5,
    width: "100%",
  },
  text: {
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 10,
  },
});
