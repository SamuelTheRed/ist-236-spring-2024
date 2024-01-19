import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

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
          <Text style={styles.title}>Samuel Shelley</Text>
          <Text style={styles.text}>sshell18@hgtc.edu</Text>
          <Text style={styles.text}>(843) 325-0888</Text>
          <Text style={styles.text}>https://github.com/SamuelTheRed</Text>
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
    paddingTop: 40,
    width: "100%",
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "rgb(68, 0, 255)",
  },
  informationContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    color: "#FEE",
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 10,
  },
});
