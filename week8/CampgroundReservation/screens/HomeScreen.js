import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Pressable,
  Platform,
  Modal,
  Button,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";

// Home screen object with properties
function HomeScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();
  // Loads screen
  return (
    <ImageBackground
      source={require("../assets/images/campground.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View
        // Safe Area Insets
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      ></View>
    </ImageBackground>
  );
}

// Exports as component
export default HomeScreen;

const windowWidth = Dimensions.get("screen").width;

// CSS
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
