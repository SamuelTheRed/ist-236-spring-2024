import {StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

// Home screen object with properties
function Title(props) {
    return (
        // Pulls from properties to place title string
        <Text style={styles.title}>{props.children}</Text>
    );
}

// Exports as component
export default Title;

// CSS
const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontFamily: "primary",
        textAlign: "center",
        color: Colors.primary500
    }
});