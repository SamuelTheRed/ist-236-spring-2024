import { View, Text, FlatList, StyleSheet } from "react-native";
import { ITEMS } from "../data/dummy-data";
import ItemGridTile from "../components/ItemGridTile";
import Colors from "../constants/colors";
import Title from "../components/Title";

// Home Navigation Screen
function StoreScreen(props) {
  function renderItem(itemData) {
    // Country Tile for Grid View
    return (
      <ItemGridTile
        name={itemData.item.name}
        type={itemData.item.type}
        color={itemData.item.color}
        price={itemData.item.price}
        image={itemData.item.image}
      />
    );
  }

  return (
    <View>
      {/* Custom title component */}
      <View style={styles.titleContainer}>
        <Title>Frequency Music Store</Title>
      </View>
      {/* List of Countries in Columns */}
      <FlatList
        style={styles.list}
        data={ITEMS}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}

export default StoreScreen;

// CSS
const styles = StyleSheet.create({
  titleContainer: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  list: {
    marginBottom: 200
  }
});
