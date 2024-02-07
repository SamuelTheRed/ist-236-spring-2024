import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';

export default function App() {

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
