import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Pressable,
  Platform,
  Modal,
  Button,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";

// Home screen object with properties
function HomeScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();

  /*---- Check In Functionality Variables ----*/
  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  function showCheckInPicker() {
    setShowCheckIn(true);
  }
  function hideCheckInPicker() {
    setShowCheckIn(false);
  }
  // Calls appropriate date function according to OS
  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckInPicker(true);
    }
    setCheckIn(currentDate);
  }

  /*---- Check Out Functionality Variables ----*/
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }
  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }
  // Calls appropriate date function according to OS
  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckOutPicker(true);
    }
    setCheckOut(currentDate);
  }

  /*---- Guest Count Functionality Variables ----*/
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);

  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }
  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }
  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  /*---- Campsite Count Functionality Variables ----*/
  const campsiteCounts = [1, 2, 3, 4, 5];
  const [numCampsites, setNumCampsites] = useState(0);
  const [showNumCampsites, setShowNumCampsites] = useState(false);

  function showNumCampsitesPicker() {
    setShowNumCampsites(true);
  }
  function hideNumCampsitesPicker() {
    setShowNumCampsites(false);
  }
  function onChangeNumCampsites(index) {
    setNumCampsites(index);
  }

  /*---- Accumulated Results ----*/
  const [results, setResults] = useState("");

  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`;
    res = res + `Number of Campsites:\t\t${campsiteCounts[numCampsites]}\n`;
    setResults(res);
  }

  /*---- Dynanic Window Control ----*/
  const { width, height } = useWindowDimensions();

  const dateLabelFlex = {
    fontSize: width * 0.1,
  };
  const dateTextFlex = {
    fontSize: width * 0.05,
  };

  /*---- Screen HTML ----*/
  return (
    // Image Background allows image wrap on app screen
    <ImageBackground
      source={require("../assets/images/campground.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View
        // Safe Area Insets
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        {/* Scroll View for home screen components */}
        <ScrollView style={styles.scrollContainer}>
          {/* Custom title component */}
          <View style={styles.titleContainer}>
            <Title>Campbell's Campground</Title>
          </View>

          {/* Date Check In and Check Out Area */}
          <View style={styles.rowContainer}>
            <View style={styles.dateContainer}>
              {/* Date Check In Label and Pressable */}
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
              {/* Calls to open Check In Picker*/}
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {/* Check In variable */}
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
              {/* Calls to open Check Out Picker*/}
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {/* Check Out variable */}
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Check In Picker (android) or Modal and Picker (apple) */}
          <View>
            {/* Android In */}
            {showCheckIn && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckInAndroid"
                value={checkIn}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckIn}
              />
            )}
            {/* Apple In */}
            {showCheckIn && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckInIOS"
                      value={checkIn}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckIn}
                    />
                    {/* Button to close Modal */}
                    <Button title="Confirm" onPress={hideCheckInPicker} />
                  </View>
                </View>
              </Modal>
            )}

            {/* Check Out Picker (android) or Modal and Picker (apple) */}
            {showCheckOut && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckOutAndroid"
                value={checkOut}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckOut}
              />
            )}
            {/* Apple Out */}
            {showCheckOut && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckOutIOS"
                      value={checkOut}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckOut}
                    />
                    {/* Button to close Modal */}
                    <Button title="Confirm" onPress={hideCheckOutPicker} />
                  </View>
                </View>
              </Modal>
            )}
          </View>

          {/* Guests number Wheel Picker */}
          <View style={styles.rowContainer}>
            {/* Title and Number Variable */}
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Guests:
            </Text>
            <Pressable onPress={showNumGuestsPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {guestCounts[numGuests]}
                </Text>
              </View>
            </Pressable>

            {/* Modal for Wheel Picker on show */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumGuests}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Guests:
                  </Text>
                  {/* Wheel Picker Component */}
                  <WheelPicker
                    selectedIndex={numGuests}
                    options={guestCounts}
                    onChange={onChangeNumGuests}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumGuestsPicker} />
                </View>
              </View>
            </Modal>
          </View>

          {/* Campsites number Picker (android) or Modal and Picker (apple) */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Campsites:
            </Text>
            <Pressable onPress={showNumCampsitesPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {campsiteCounts[numCampsites]}
                </Text>
              </View>
            </Pressable>

            {/* Modal for Wheel Picker on show */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumCampsites}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Campsites:
                  </Text>
                  {/* Wheel Picker Component */}
                  <WheelPicker
                    selectedIndex={numCampsites}
                    options={campsiteCounts}
                    onChange={onChangeNumCampsites}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumCampsitesPicker} />
                </View>
              </View>
            </Modal>
          </View>

          {/* Navigates to destination*/}
          <View style={styles.buttonContainer}>
            {/* Custom Nav Button Component  */}
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>

          {/* Returns User's choice's results when called */}
          <View style={styles.resultsContainer}>
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

// Exports as component
export default HomeScreen;

// Dynamic width component
const windowWidth = Dimensions.get("screen").width;

// CSS
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.3,
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
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "95%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
  },
  dateLabel: {
    backgroundColor: Colors.primary500,
    fontFamily: "primary",
    fontSize: 100,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateText: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
  results: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "primary",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});
