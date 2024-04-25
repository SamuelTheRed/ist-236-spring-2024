import { View, StyleSheet, Text, Linking, Image } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";

// Home Screen
function HomeScreen() {
  return (
    <View style={styles.rootContainer}>
      {/* Title Container for home */}
      <View style={styles.titleContainer}>
        <Title>Frequency Music</Title>
        <Text style={styles.infoText}>Store ~ Lessons ~ Venue</Text>
      </View>
      {/* Image for home */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/pexels-photo-1613472.jpeg")}
        />
      </View>
      {/* Info for phone */}
      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:8433250888")}
        >
          843-325-0888
        </Text>
        {/* Info for location */}
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/csnGeT83gWJnFmwX7")
          }
        >
          2058 Middle St,{"\n"} Sullivan's Island, {"\n"}SC 29482
        </Text>
        {/* Info for website */}
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://osbeorn.net/home/")}
        >
          www.frequencymusic.com
        </Text>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 2,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380,
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center",
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    color: Colors.primary500,
    fontFamily: "primary",
  },
  buttonContainer: {
    flex: 1,
  },
});
