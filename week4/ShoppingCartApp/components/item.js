import { Pressable, StyleSheet, View, Text } from "react-native"

function Item(props){
    return (
        <View style={styles.item}>
            <Pressable
                android_ripple={{ color: "#b180f0" }}
                style={({ pressed }) => pressed && styles.pressedButton}
                // TODO add onpress
            >
                <Text style={styles.itemText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default Item;

const styles = StyleSheet.create({
    //1:20:00
});