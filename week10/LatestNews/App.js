import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarksScreen from "./screens/BookmarksScreen";
import WorldNewsReportsScreen from "./screens/WorldNewsReportsScreen";
import USNewsReportsScreen from "./screens/USNewsReportsScreen";
import ReportDetailScreen from "./screens/ReportDetailScreen";
import MusicNewsReportsScreen from "./screens/MusicNewsReportsScreen";
import Colors from "./constants/colors";
import { FontAwesome5, Fontisto, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"
import { useCallback } from "react";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Reports"
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "secondary",
          fontSize: 40,
          color: Colors.accent800
        },
        sceneContainerStyle: {backgroundColor: Colors.primary300},
        drawerContentStyle: {backgroundColor: Colors.primary500},
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800
      }}
    >
      <Drawer.Screen
        name="Reports"
        component={TabsNavigator}
        options={{
          title: "All News",
          drawerLabel: "News Reports",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="th-list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="BookmarkedReports"
        component={BookmarksScreen}
        options={{
          title: "Saved Reports",
          drawerLabel: "Saved Reports",
          drawerIcon: ({ size, color }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

function TabsNavigator(){
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "primaryBold"
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500
        }
      }}
    >
      <Tabs.Screen 
        name="USNewsReports"
        component={USNewsReportsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="flag-usa" size={size} color={color} />
          ),
          tabBarLabel: "US News"
        }}
      />
      <Tabs.Screen 
        name="WorldNewsReports"
        component={WorldNewsReportsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="world" size={size} color={color} />
          ),
          tabBarLabel: "World News"
        }}
      />
      <Tabs.Screen 
        name="MusicNewsReports"
        component={MusicNewsReportsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-music" size={size} color={color} />
          ),
          tabBarLabel: "Music News"
        }}
      />
    </Tabs.Navigator>
  )
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
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: Colors.primary300,
              headerStyle: { backgroundColor: Colors.primary500 },
              contentStyle: { backgroundColor: "black" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ReportDetail"
              component={ReportDetailScreen}
              options={{
                headerBackTitleVisible: false,
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
