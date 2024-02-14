import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import NavButton from "../components/NavButton";
import Title from "../components/Title";
import { useState } from "react";
import MenuItem from "../components/MenuItems";

function EventsScreen(props) {
  // Set the Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [menuItems, setMenuItems] = useState([
    {
      name: "Pink Floyd Rocking Shrimp Cocktail",
      image: require("../assets/images/pinkfloyd.jpg"),
      price: "$10",
      id: 1,
    },
    {
      name: "Badfish Lobster Steak Taco",
      image: require("../assets/images/badfish.jpg"),
      price: "$12",
      id: 2,
    },
    {
      name: "Fleetwood Snack Sirloins for Two",
      image: require("../assets/images/fleetwood.jpg"),
      price: "$18",
      id: 3,
    },
    {
      name: "Blackberry Cabernet Salmon",
      image: require("../assets/images/blackberry.jpg"),
      price: "$24",
      id: 4,
    },
    {
      name: "Beach Boys Surf/Turf Platter",
      image: require("../assets/images/beachboys.jpg"),
      price: "$19",
      id: 5,
    },
  ]);

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Menu</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <MenuItem
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
              />
            );
          }}
        ></FlatList>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Home Page</NavButton>
      </View>
    </View>
  );
}

export default EventsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 400,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
  },
});
