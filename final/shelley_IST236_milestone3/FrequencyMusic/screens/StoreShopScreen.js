import { View, Text, FlatList } from "react-native";
import { ITEMS } from "../data/dummy-data";
import ItemGridTile from "../components/ItemGridTile";
import Colors from "../constants/colors";

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
      {/* List of Countries in Columns */}
      <FlatList
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
