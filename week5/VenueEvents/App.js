import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import EventsScreen from './screens/EventsScreen';

export default function App() {
  // Set up our custom fonts
  const [fontsLoaded] = useFonts({
    "squealer": require("./assets/fonts/Squealer.otf"),
    "squealer-embossed": require("./assets/fonts/SquealerEmbossed.otf")
  })

  // Set state variable for the current screen
  const[currentScreen, setCurrentScreen] = useState("home");

  function eventsScreenHandler(){
    setCurrentScreen("events");
  }

  function homeScreenHandler(){
    setCurrentScreen("home");
  }

  // Determine which screen to utilize
  let screen = <HomeScreen onNext={eventsScreenHandler}/>;

  if (currentScreen === "events"){
    screen = <EventsScreen onNext={homeScreenHandler}/>;
  }

  return (
    <>
      <StatusBar style='light'/>
      <SafeAreaProvider style={styles.rootContainer}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainerontainer: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
