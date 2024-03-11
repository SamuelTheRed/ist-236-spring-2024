import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";

function ImageViewModal(props) {
  let description = new Campground(props.id, props.stateId, props.name,  props.numSites, props.foundedYear,  props.rating)

  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <Button title="Return to Campgrounds" onPress={props.onClose} />
          <Text>{description.toString()}</Text>
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
    backgroundColor: "#8B4513",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
});
