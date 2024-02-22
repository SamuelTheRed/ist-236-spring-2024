import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import RecipeItem from "../components/RecipeItem";
import { useState } from "react";
import RecipeView from "../modals/Recipeview";

// Recipe screen object with properties
function RecipeBookScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");

  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }
  function closeRecipeViewHandler() {
    setModalIsVisible(false);
  }

  return (
    <View
      style={[
        styles.screenContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Recipe Book</Title>
      </View>

      <View style={styles.itemContainer}>
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <RecipeItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={recipeViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />

      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onPress={props.onAdd}>Add New Recipe</NavButton>
        </View>

        <View style={styles.navButton}>
          <NavButton onPress={props.onHome}>Return Home</NavButton>
        </View>
      </View>
    </View>
  );
}

export default RecipeBookScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});
