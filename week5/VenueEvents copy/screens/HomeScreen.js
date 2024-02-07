import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Home screen object with properties
function HomeScreen(props) {
    // Set safe area screen boundaries
    const insets = useSafeAreaInsets();

    return (
        <View style={[
            styles.screenContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            }
        ]}>
            <Text>HomeScreen</Text>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    screenContainer: {
    }
});