import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";
import Destination from "../models/destinations";
import Colors from "../constants/colors";

function ImageViewModal(props) {
  let info = new Destination(props.id, props.countryId, props.name, props.averageCost, props.yearFounded, props.rating, props.description)

  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <Text style={styles.info}>{info.toString()}</Text>
          <View style={styles.returnButton}><Button title="Return to Destinations" onPress={props.onClose} /></View>
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary300,
  },
  image: {
    flex: 4,
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  info: {
    flex: 1,
    fontSize: 30,
    color: Colors.accent500,
    fontFamily: "primary",
    padding: 20
  },
  returnButton: {
    flex: 1
  }
});
