import {StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

// Home screen object with properties
function Title(props) {

    return (
        <Text style={styles.title}>{props.children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        textAlign: "center",
        color: Colors.primary500
    }
});