import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../../../week11/RealEstate/store/context/bookmarks-context";
import { LISTINGS } from "../../../week11/RealEstate/data/dummy_data";
import List from "../../../week11/RealEstate/components/List/List";
import Colors from "../../../week11/RealEstate/constants/colors";

function BookmarksScreen() {
  const bookmarkedListingsCtx = useContext(BookmarksContext);
  const bookmarkedListings = LISTINGS.filter((listingIem) => {
    return bookmarkedListingsCtx.ids.includes(listingIem);
  });

  if (bookmarkedListings.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved listings yet...</Text>
      </View>
    );
  } else {
    return <List items={bookmarkedListings} />;
  }
}

export default BookmarksScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary300,
  },
});
