import { Image, View, Text, StyleSheet } from "react-native";

// Movie Item for List
function MovieItem(props) {
    return (
        <View style={styles.itemRoot}>
            {/* Title for each movie */}
            <View style={styles.titleContainer}>
                <Text style={styles.itemTitle}>{props.name}</Text>
            </View>
            {/* Image and container */}
            <View style={styles.imageContainer}>
                <Image source={props.image} alt={props.name + " image"}></Image>
            </View>
            {/* Ratings and Container */}
            <View style={styles.ratingContainer}>
                <Text style={styles.itemRating}>{props.rating} / 10</Text>
            </View>
        </View>
    );
}

export default MovieItem;

const styles = StyleSheet.create({
    itemRoot: {
        marginBottom: 40
    },
    itemContainer: {
        marginBottom: 20
    },
    titleContainer: {
        backgroundColor: "#FFF",
        borderWidth: 3,
        borderRadius: 5
    },
    itemTitle: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5,
        minHeight: 50,
        backgroundColor: "#000"
    },
    itemImage: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    },
    ratingContainer: {
        backgroundColor: "#FFF",
        borderWidth: 3,
        borderRadius: 5
    },
    itemRating: {
        fontSize: 30,
        textAlign: "center"
    }
});