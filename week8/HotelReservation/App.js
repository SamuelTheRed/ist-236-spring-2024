import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/colors";

export default function App() {
  // Import fonts and store as variables
  const [fontsLoaded, fontError] = useFonts({
    primary: require("./assets/fonts/TheHotelio.ttf"),
  });

  // Waits to load screen until fonts loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  let screen = <HomeScreen />;

  // Tests if fonts were loaded without error
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    // If no error, load screen
    return (
      <>
        <StatusBar style="auto" />
        <SafeAreaProvider style={styles.rootContainer}>
          {screen}
        </SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
