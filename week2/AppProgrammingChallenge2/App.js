import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style="dark" />
    <SafeAreaView style={styles.rootContainer}>
      
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={required("./assets/images-code/self.jpg")}/>
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.title}>Samuel Shelley</Text>
        <Text style={styles.text}>sshell18@hgtc.edu</Text>
        <Text style={styles.text}>(843) 325-0888</Text>
        <Text style={styles.text}>https://github.com/SamuelTheRed</Text>
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
  title: {
    fontSize: 25,
    color: "#FEE",
    fontWeight: "Bold",
    marginBottom: 10
  },
  text: {
    fontSize: 20,
    color: "#FEE",
    fontStyle: "italic",
    marginBottom: 10
  }
});