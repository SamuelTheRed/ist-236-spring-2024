import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import Colors from './constants/colors';
import { useFonts }  from 'expo-font';

export default function App() {

  // Set up Custom Fonts
  const [fontsLoad] = useFonts({
    "Squealer": require("./assets/fonts/Squealer.otf"),
    "Squealer-embossed": require("./assets/fonts/SquealerEmbossed.otf"),
  })

  // Set the state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  function eventsScreenHandler(){
    setCurrentScreen('events')
  }

  function homeScreenHandler(){
    setCurrentScreen('home')
  }
  
  // Determine which screen to be on
  let screen = <HomeScreen onNext={eventsScreenHandler}/>;

  if (currentScreen === "events"){
    screen = <EventsScreen onNext={homeScreenHandler}/>
  }

  return (
    <>
      {/* Sets the color for the user's status bar */}
      <StatusBar style='light'/>

      <SafeAreaProvider style={styles.container}>
        {screen}
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
