import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style="dark" />
    <SafeAreaView style={styles.rootContainer}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={required("./assets/images-code/download.jpg")}/>
        </View>
        <View style={styles.informationContainer}>
            <Text style={styles.text}>Logan's Roadhouse</Text>
            <Text style={styles.text} onPress={() => Linking.openURL("www.logansroadhouse.com")}>www.logansroadhouse.com</Text>
            <Text style={styles.text} onPress={() => Linking.openURL("tel:8438394666")}>(843) 839-4666</Text>
            <Text style={styles.text} onPress={() => Linking.openURL("https://maps.app.goo.gl/nPcvTSNudPN3XfJP8")}>Open in Google Maps</Text>
        </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#f00",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  imageContainer: {
    flex: 3,
    paddingTop: 40,
    width: "100%"
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    borderwidth: 3,
    borderColor: "#F30"
  },
  informationContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  text: {
    fontSize: 20,
    color: "#FEE",
    fontStyle: "italic",
    marginBottom: 10
  }
});
