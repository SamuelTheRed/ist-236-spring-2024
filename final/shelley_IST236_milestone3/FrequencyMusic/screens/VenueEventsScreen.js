import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import { useState } from "react";
import VenueEventItem from "../components/VenueEventItems";
import { EVENTS } from "../data/dummy-data";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";
import EventModal from "../modals/EventModal";

//  Screen
function VenueScreen() {
  // Modal Functions and Methods
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalEventTitle, setModalEventTitle] = useState("");
  const [modalEventImage, setModalEventImage] = useState("");
  const [modalEventDate, setModalEventDate] = useState("");
  const [modalEventDescription, setModalEventDescription] = useState("");

  function eventViewHandler(name, image, date, description) {
    setModalEventTitle(name);
    setModalEventImage(image);
    setModalEventDate(date);
    setModalEventDescription(description);
    setModalIsVisible(true);
  }
  function closeEventViewHandler() {
    setModalIsVisible(false);
  }

  return (
    <LinearGradient
      style={styles.screenContainer}
      colors={[Colors.accent200, Colors.accent800]}
    >
      {/* Custom title component */}
      <View style={styles.titleContainer}>
        <Title>Frequency Music School</Title>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={EVENTS}
          keyExtractor={(items) => items.id}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <VenueEventItem
                name={itemData.item.name}
                image={itemData.item.image}
                date={itemData.item.date}
                description={itemData.item.description}
                onView={eventViewHandler.bind(
                  this,
                  itemData.item.name,
                  itemData.item.image,
                  itemData.item.date,
                  itemData.item.description
                )}
              />
            );
          }}
        />
      </View>
      <EventModal
        visible={modalIsVisible}
        name={modalEventTitle}
        image={modalEventImage}
        date={modalEventDate}
        description={modalEventDescription}
        onClose={closeEventViewHandler}
      />
    </LinearGradient>
  );
}

export default VenueScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  listContainer: {
    flex: 7,
    width: "90%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
  },
});
