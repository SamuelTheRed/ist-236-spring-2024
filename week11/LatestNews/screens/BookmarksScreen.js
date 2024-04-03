import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { REPORTS } from "../data/dummy_data";
import List from "../components/List/List";
import Colors from "../constants/colors";


function BookmarksScreen (){
    const bookmarkedReportsCtx = useContext(BookmarksContext)
    const bookmarkedReports = REPORTS.filter((reportItem) => {
        return bookmarkedReportsCtx.ids.includes(reportItem.id);
    })

    if (bookmarkedReports.length === 0 ){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You Have No Saved News Reports!</Text>
        </View>
    }

    return <List items={bookmarkedReports}/>
}

export default BookmarksScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'black',
    },
    text: {
        fontSize: 30,
        textAlign:'center', 
        fontFamily:"primaryBoldItalic",
        fontWeight: 'bold',
        color: Colors.primary300,
        opacity: 0.6,
    },
})