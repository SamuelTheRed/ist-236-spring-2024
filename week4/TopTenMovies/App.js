import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";

import MovieItem from "./components/MovieItem";

export default function App() {
  // Rating is my personal rating, all others are named
  const [movieItems, setMovieItems] = useState([
    {
      name: "Gattaca",
      image: require("./assets/images/Gattaca.png"),
      rating: "9.9",
      imdb: "7.7",
      tomatoes: "82%",
    },
    {
      name: "Warrior",
      image: require("./assets/images/Warrior.png"),
      rating: "9.9",
      imdb: "8.1",
      tomatoes: "84%",
    },
    {
      name: "The Patriot",
      image: require("./assets/images/ThePatriot.png"),
      rating: "9.8",
      imdb: "7.2",
      tomatoes: "62%",
    },
    {
      name: "Braveheart",
      image: require("./assets/images/Braveheart.png"),
      rating: "9.8",
      imdb: "8.3",
      tomatoes: "76%",
    },
    {
      name: "Gladiator",
      image: require("./assets/images/Gladiator.png"),
      rating: "9.8",
      imdb: "8.5",
      tomatoes: "79%",
    },
    {
      name: "The Book of Eli",
      image: require("./assets/images/TheBookofEli.png"),
      rating: "9.8",
      imdb: "6.8",
      tomatoes: "47%",
    },
    {
      name: "The Saint (1997)",
      image: require("./assets/images/TheSaint(1997).png"),
      rating: "9.7",
      imdb: "6.2",
      tomatoes: "30%",
    },
    {
      name: "The Truman Show",
      image: require("./assets/images/TheTrumanShow.png"),
      rating: "9.7",
      imdb: "8.2",
      tomatoes: "94%",
    },
    {
      name: "Tombstone",
      image: require("./assets/images/Tombstone.png"),
      rating: "9.7",
      imdb: "7.8",
      tomatoes: "73%",
    },
    {
      name: "Stand By Me (1986)",
      image: require("./assets/images/StandByMe(1986).png"),
      rating: "9.7",
      imdb: "8.1",
      tomatoes: "92%",
    },
  ]);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        {/* Title Container and Application Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>
        {/* List Container and List using Flat List */}
        <View style={styles.listContainer}>
          <FlatList
            data={movieItems}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                // Custom object located in components
                <MovieItem
                // Values passed through itemData to component
                  name={itemData.item.name}
                  image={itemData.item.image}
                  rating={itemData.item.rating}
                />
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#A44",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#FFF"
  },
  listContainer: {
    flex: 8,
    width: "80%",
    borderTopWidth: 5,
    borderBottomWidth: 5
  },
});
