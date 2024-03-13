import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarksScreen from "./screens/BookmarksScreen";
import CondoListingsScreen from "./screens/CondoListingsScreen";
import HouseListingsScreen from "./screens/HouseListingsScreen";
import ListingDetailScreen from "./screens/ListingDetailScreen";
import TownhouseListingsScreen from "./screens/TownhouseListingsScreen";
import TrailerListingsScreen from "./screens/TrailerListingsScreen";
import Colors from "./constants/colors";
import { Entypo, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { useCallback } from "react";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Listings"
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
        name="Listings"
        component={TabsNavigator}
        options={{
          title: "All Listings",
          drawerLabel: "Real Estate Listings",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="BookmarkedListings"
        component={BookmarksScreen}
        options={{
          title: "Saved Listings",
          drawerLabel: "Saved Listings",
          drawerIcon: ({ size, color }) => (
            <Entypo name="bookmark" size={size} color={color} />
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
        name="HouseListings"
        component={HouseListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          tabBarLabel: "Houses"
        }}
      />
      <Tabs.Screen 
        name="CondoListings"
        component={CondoListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="apartment" size={size} color={color} />
          ),
          tabBarLabel: "Condos"
        }}
      />
      <Tabs.Screen 
        name="TownhouseListings"
        component={TownhouseListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="holiday-village" size={size} color={color} />
          ),
          tabBarLabel: "Townhouses"
        }}
      />
      <Tabs.Screen 
        name="TrailerListings"
        component={TrailerListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="truck-trailer" size={size} color={color} />
          ),
          tabBarLabel: "Mobile Homes"
        }}
      />
    </Tabs.Navigator>
  )
}

export default function App() {
  // Import fonts and store as variables
  const [fontsLoaded, fontError] = useFonts({
    primary: require("./assets/fonts/Playfair.ttf"),
    primaryBold: require("./assets/fonts/PlayfairBold.ttf"),
    primaryBoldItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
    secondary: require("./assets/fonts/NolluqaRegular.otf"),
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
              name="ListingDetail"
              component={ListingDetailScreen}
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
