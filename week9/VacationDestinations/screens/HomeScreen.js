import { View, Text, FlatList } from "react-native";
import { COUNTRIES, DESTINATIONS } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";
import Colors from "../constants/colors";

function HomeScreen(props) {
  function renderCountryItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("DestinationsOverviewScreen", {
        countryId: itemData.item.id,
      });
    }

    return (
      <CountryGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderCountryItem}
        numColumns={2}
      />
    </View>
  );
}

export default HomeScreen;
