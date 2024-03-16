import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { DESTINATIONS, COUNTRIES } from "../data/dummy-data";
import DestinationItem from "../components/DestinationItem";

// Country's Destinations Screen
function DestinationsOverviewScreen(props) {
  const countryId = props.route.params.countryId;

  // Layout Effect for country
  useLayoutEffect(() => {
    const country = COUNTRIES.find((country) => country.id === countryId);
    props.navigation.setOptions({ title: country ? country.name : null });
  }, [countryId, props.navigation]);

  // Filter through destinations and return where country id is valid
  const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
    return destinationItem.countryId === countryId;
  });

  // Render Item With Props
  function renderDestinationItem(itemData) {
    const destinationItemProps = {
      listIndex: itemData.index,
      name: itemData.item.name,
      averageCost: itemData.item.averageCost,
      yearFounded: itemData.item.yearFounded,
      rating: itemData.item.rating,
      description: itemData.item.description,
      imageUrl: itemData.item.imageUrl,
    };
    return <DestinationItem {...destinationItemProps} />;
  }

  // Flatlist of Destinations
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedDestinations}
        keyExtractor={(item) => item.id}
        renderItem={renderDestinationItem}
      />
    </View>
  );
}

export default DestinationsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
