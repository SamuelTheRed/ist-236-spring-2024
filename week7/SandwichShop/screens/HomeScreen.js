import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";

// Home screen object with properties
function HomeScreen(props) {
  // Set safe area screen boundaries
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
        <Title>Deli Delights</Title>
      </View>

      <ScrollView>
        <Image
          style={styles.image}
          source={require("../assets/images/note-taking.jpg")}
        />
        </ScrollView>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Go To Notes</NavButton></View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    }
})