import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import Colors from './constants/colors';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';
import RecipeBookScreen from './screens/RecipeBookScreen';


export default function App() {
  // Import fonts and store as variables
  const [fontsLoaded] = useFonts({
    secondary: require("./assets/fonts/titulo.ttf"),
    primary: require("./assets/fonts/Ronysiswadi9Med.ttf"),
    primaryVarient: require("./assets/fonts/Ronysiswadi9Light.ttf"),
    primaryBold: require("./assets/fonts/Ronysiswadi9Bold.ttf"),
  });

  // Set constants
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(4);
  // Associative array of recipes
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Momma's PB&J",
      text: "Ingredients:\n\tPeanut Butter\n\tJelly\n\tSlice Bread\nDirections:\n\t1. Slap Peanut Butter on one slice\n\t2. Slap Jelly on the other slice\n\t3. Put the slices together",
    },
    {
      id: 2,
      title: "Gamer's Cereal",
      text: "Ingredients:\n\tDoritos Chips\n\tMountain Dew\nDirections:\n\t1. Put Doritos in a bowl\n\t2. Pour Mountain Dew on over",
    },
    {
      id: 3,
      title: "My Coffee",
      text: "Ingredients:\n\tCoffee\n\tCinnimon\nDirections:\n\t1. Put Cinnimon in Coffe",
    },
  ]);

  // Change screen handlers
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function recipeBookScreenHandler() {
    setCurrentScreen("book");
  }

  function addRecipesScreenHandler() {
    setCurrentScreen("add");
  }

  // Creates screen variable used to set screen state
  let screen = <HomeScreen onNext={recipeBookScreenHandler} />;

  // If current screen is "add", fill app with Add Recipe Screen including function parameters
  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen
        onAdd={addRecipeHandler}
        onCancel={recipeBookScreenHandler}
      />
    );
  }

  // If current screen is "book", fill app with Recipe Book Screen including function parameters
  if (currentScreen === "book") {
    screen = (
      <RecipeBookScreen
        onHome={homeScreenHandler}
        onAdd={addRecipesScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  // Add Recipe to array, handler
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipeBookScreenHandler();
  }
  
  // Delete Recipe from array, handler
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
    setCurrentID(currentID + 1);
    recipeBookScreenHandler();
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.rootContainer}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
