import { View, Text, FlatList } from "react-native";
import { ITEMS } from "../data/dummy-data";
import ItemGridTile from "../components/ItemGridTile";
import Colors from "../constants/colors";

// Home Navigation Screen
function StoreScreen(props) {
  function renderItem(itemData) {
    // Navigates to country overview screen
    // function pressHandler() {
    //   props.navigation.navigate("DestinationsOverviewScreen", {
    //     countryId: itemData.item.id,
    //   });
    // }

    // Country Tile for Grid View
    return (
      <ItemGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        // onPress={pressHandler}
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
