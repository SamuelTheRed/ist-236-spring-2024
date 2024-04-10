<<<<<<< HEAD
import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../../../week11/RealEstate/store/context/bookmarks-context";
import { LISTINGS } from "../../../week11/RealEstate/data/dummy_data";
import List from "../../../week11/RealEstate/components/List/List";
import Colors from "../../../week11/RealEstate/constants/colors";
=======
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { LISTINGS } from "../data/dummy_data";
import List from "../components/List/List";
import Colors from "../constants/colors";
>>>>>>> 5193ba79a10a735fc8b0b3f484417a631b10f05e

function BookmarksScreen() {
  const bookmarkedListingsCtx = useContext(BookmarksContext);
  const bookmarkedListings = LISTINGS.filter((listingIem) => {
    return bookmarkedListingsCtx.ids.includes(listingIem);
  });

<<<<<<< HEAD
  if (bookmarkedListings.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved listings yet...</Text>
      </View>
    );
  } else {
    return <List items={bookmarkedListings} />;
  }
=======
function BookmarksScreen (){
    const bookmarkedListingsCtx = useContext(BookmarksContext)
    const bookmarkedListings = LISTINGS.filter((listingItem) => {
        return bookmarkedListingsCtx.ids.includes(listingItem.id);
    })

    if (bookmarkedListings.length === 0 ){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You Have No Saved Listings!</Text>
        </View>
    }

    return <List items={bookmarkedListings}/>
>>>>>>> 5193ba79a10a735fc8b0b3f484417a631b10f05e
}

export default BookmarksScreen;

const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
    rootContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'black',
    },
    text: {
        fontSize: 30,
        textAlign:'center', 
        fontFamily:"primaryItalic",
        fontWeight: 'bold',
        color: Colors.primary300,
        opacity: 0.6,
    },
})
>>>>>>> 5193ba79a10a735fc8b0b3f484417a631b10f05e
