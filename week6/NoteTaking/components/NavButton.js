import {Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

// Home screen object with properties
function NavButton(props) {

    return (
        <Pressable
            onPress={props.onPress}
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text  style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default NavButton;

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        backgroundColor: Colors.accent500,
        height: 75,
        width: 150,
        margin: 8,
        borderRadius: 0,
        backgroundColor: Colors.accent500
    },
    pressedItem: {
        opacity: 0.8
    },
    text: {
        padding: 0,
        fontSize: 22,
        textAlign: "center",
        fontFamily: "paperNoteBold",
        color: Colors.primary300,
    }
});