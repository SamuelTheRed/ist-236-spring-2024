import {Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

// Home screen object with properties
function NavButton(props) {

    return (
        // Pressable component for customizable button
        <Pressable
            onPress={props.onPress}
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    {/* Pulls from properties to place button info */}
                    <Text  style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    );
}

// Exports as component
export default NavButton;

// CSS
const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 300,
        backgroundColor: Colors.primary500,
        width: 300,
        marginHorizontal: 10,
        marginVertical: 10
    },
    pressedItem: {
        opacity: 0.3
    },
    text: {
        padding: 8,
        fontSize: 25,
        fontFamily: "primaryBold",
        textAlign: "center",
        color: Colors.accent500
    }
});