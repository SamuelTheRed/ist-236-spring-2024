import { View, StyleSheet, Text, Linking, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import Title from "../components/Title";

function HomeScreen(props) {
  // Set the Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Rock & Roll &</Title>
        <Title>Surf & Turf</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/restaurant.png")}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:8435550888")}
        >
          843-555-0888
        </Text>

        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://maps.app.goo.gl/8wJvUnJPrntEBB8f9")}
        >
          33 Humvee Wv{'\n'}Myrtle Beach{'\n'}SC
        </Text>

        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://osbeorn.net/home/")}
        >
          www.rockrollsurfturf.com
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>View Menu</NavButton>
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
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380,
  },
  infoContainer:{
    flex:3,
    justifyContent:'center',
  },
  infoText:{
    fontSize:30,
    textAlign:'center',
    padding:7,
    color:Colors.primary500,
    fontFamily:"Wonderbar",
  },
  buttonContainer:{
    flex:1,
  }
});
