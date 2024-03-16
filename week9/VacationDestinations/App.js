import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DestinationsOverviewScreen from "./screens/DestinationsOverviewScreen";
import Colors from "./constants/colors"

const Stack = createNativeStackNavigator();

export default function App() {
  // Import fonts and store as variables
  const [fontsLoaded, fontError] = useFonts({
    primary: require("./assets/fonts/SpButchLiteBold.otf"),
  });

  // Waits to load screen until fonts loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Tests if fonts were loaded without error
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    // If no error, load screen
    return (
      <>
        <StatusBar style="light" />
        <NavigationContainer style={styles.rootContainer}>
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary500 },
              headerTintColor: Colors.primary300,
              headerTitleStyle: { fontFamily: "primary", fontSize: 40 },
              contentStyle: { backgroundColor: Colors.primary300 },
            }}
          >
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Vacay Destinations",
              }}
            />
            <Stack.Screen
              name="DestinationsOverviewScreen"
              component={DestinationsOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
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
