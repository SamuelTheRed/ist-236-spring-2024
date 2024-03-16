import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ListingItem(props) {
  const navigation = useNavigation();

    function selectedListingHandler() {
      navigation.navigate("ListingDetail", {
        listingId: props.id,
      });
    }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedListingHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.price}>${props.price.toLocaleString()}</Text>
          <Text style={styles.space}>
            {props.bedrooms} Bed | {props.bathrooms} Bath | {props.squareFeet}{" "}
            SqFt
          </Text>

          <Text style={styles.address}>
            {props.address}, {props.city} {props.state} {props.zipCode}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ListingItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 300
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center"
  },
  price: {
    fontSize: 35,
    fontFamily: "playfairBold",
    paddingBottom: 5
  },
  space: {
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5
  },
  address: {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5
  }
});
