import { View, StyleSheet, FlatList } from "react-native";
import ListingItem from "./ListingItem";

function List(props) {
  function renderListingItem(itemData) {
    const listingItemProps = {
      id: itemData.item.id,
      price: itemData.item.price,
      bedrooms: itemData.item.bedrooms,
      bathrooms: itemData.item.bathrooms,
      squareFeet: itemData.item.squareFeet,
      yearBuilt: itemData.item.yearBuilt,
      address: itemData.item.address,
      city: itemData.item.city,
      state: itemData.item.state,
      zipCode: itemData.item.zipCode,
      imageUrl: itemData.item.imageUrl,
      description: itemData.item.description,
      listIndex: itemData.index,
    };
    return <ListingItem {...listingItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderListingItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
