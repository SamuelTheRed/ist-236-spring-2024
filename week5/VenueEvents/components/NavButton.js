import {Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

// Home screen object with properties
function NavButton(props) {

    return (
        <Pressable
            android_ripple={{color: "grey"}}
            onPress={props.onPress}
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
        borderWidth: 3,
        borderColor: Colors.primary500,
        backgroundColor: Colors.accent500,
        width: 300,
        margin: 10
    },
    textContainer: {

    },
    text: {
        padding: 0,
        fontSize: 22,
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "squealer"
    }
});