import {StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

// Event Items screen object with properties
function EventItem(props) {

    return (
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.image}/>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{props.date}</Text>
            </View>
        </View>
    );
}

export default EventItem;

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },
    titleContainer: {
        backgroundColor: Colors.primary500
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "squealer"
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "#000"
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover"
    },
    dateContainer: {
        backgroundColor: Colors.primary500,
        borderWidth: 3,
        borderRadius: 5
    },
    date: {
        fontSize: 40,
        textAlign: "center",
        fontFamily: "squealer-embossed"
    }
});