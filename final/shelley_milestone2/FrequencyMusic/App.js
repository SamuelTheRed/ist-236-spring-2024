import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LessonsScreen from "./screens/LessonsScreen";
import HomeScreen from "./screens/HomeScreen";
import StoreScreen from "./screens/StoreShopScreen";
import VenueScreen from "./screens/VenueEventsScreen";
import Colors from "./constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCallback } from "react";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

// Tabs on bottom of screen
function TabsNavigator() {
  return (
    // Main Tabs Navigator
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "primaryBold",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* Tabs Screens */}
      <Tabs.Screen
        // US News
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-heart"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        // World News
        name="Lessons"
        component={LessonsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="school" size={size} color={color} />
          ),
          tabBarLabel: "Lessons",
        }}
      />
      <Tabs.Screen
        // Music News
        name="StoreShop"
        component={StoreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" size={size} color={color} />
          ),
          tabBarLabel: "Shop",
        }}
      />
      <Tabs.Screen
        // Music News
        name="Venue"
        component={VenueScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="outdoor-lamp"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Venue",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  // Import fonts and store as variables
  const [fontsLoaded, fontError] = useFonts({
    primary: require("./assets/fonts/Arvo.ttf"),
    primaryBold: require("./assets/fonts/Arvo-Bold.ttf"),
    primaryBoldItalic: require("./assets/fonts/Arvo-BoldItalic.ttf"),
    secondary: require("./assets/fonts/Cinzel-Medium.ttf"),
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
              headerTintColor: Colors.primary300,
              headerStyle: { backgroundColor: Colors.primary500 },
              contentStyle: { backgroundColor: "black" },
            }}
          >
            {/* Screens within Drawer */}
            <Stack.Screen
              name="FrequencyMusic"
              component={TabsNavigator}
              // Reports options
              options={{
                title: "Frequency Music",
              }}
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
