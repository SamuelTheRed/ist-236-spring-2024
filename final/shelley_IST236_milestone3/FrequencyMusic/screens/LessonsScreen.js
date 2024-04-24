import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  Text,
  View,
  Pressable,
  Button,
  Modal,
  Platform,
  Dimensions,
  Alert,
} from "react-native";
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import WheelPicker from "react-native-wheely";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

//  Screen
function LessonsScreen() {
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

  /*---- Guest Count Functionality Variables ----*/
  const guestCounts = [1, 2, 3];
  const [numStudents, setNumStudents] = useState(0);
  const [showNumStudents, setShowNumStudents] = useState(false);

  function showNumStudentsPicker() {
    setShowNumStudents(true);
  }
  function hideNumStudentsPicker() {
    setShowNumStudents(false);
  }
  function onChangeNumStudents(index) {
    setNumStudents(index);
  }

  /*---- Campsite Count Functionality Variables ----*/
  const campsiteCounts = [1, 2, 3, 4];
  const [numHours, setNumHours] = useState(0);
  const [showNumHours, setShowNumHours] = useState(false);

  function showNumHoursPicker() {
    setShowNumHours(true);
  }
  function hideNumHoursPicker() {
    setShowNumHours(false);
  }
  function onChangeNumHours(index) {
    setNumHours(index);
  }

  function onReserveHandler() {
    let title = `Your Lesson Reciept\n`;
    let res = `Check In: ${checkIn.toDateString()}\n`;
    res = res + `Time: 3pm-${4+numHours}pm\n`;
    res = res + `Number of Students: ${guestCounts[numStudents]}\n`;
    res = res + `Hours: ${campsiteCounts[numHours]}\n`;
    let price = (25 * (1 + numHours)) + (15 * (1 + numStudents));
    price = "On Dropoff: $" + price;
    Alert.alert(title, res + price);
  }

  /*---- Dynanic Window Control ----*/
  const { width, height } = useWindowDimensions();

  const dateLabelFlex = {
    fontSize: width * 0.08,
    padding: 5
  };
  const dateTextFlex = {
    fontSize: width * 0.05,
  };
  return (
    <View
      // Safe Area Insets
      style={styles.rootContainer}
    >
      {/* Scroll View for home screen components */}
      <ScrollView style={styles.scrollContainer}>
        {/* Custom title component */}
        <View style={styles.titleContainer}>
          <Title>Frequency Music School</Title>
        </View>

        {/* Date Check In and Check Out Area */}
        <View style={styles.rowContainer}>
          <View style={styles.dateContainer}>
            {/* Date Check In Label and Pressable */}
            <Text style={[styles.dateLabel, dateLabelFlex]}>{`Lesson Date:`}</Text>
            <Text style={styles.dateInfo}>
              Lessons are on the specified date from 3-7pm
            </Text>
            {/* Calls to open Check In Picker*/}
            <Pressable onPress={showCheckInPicker}>
              <Text style={[styles.dateText, dateTextFlex]}>
                {/* Check In variable */}
                {checkIn.toDateString()}
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
        </View>

        {/* Students number Wheel Picker */}
        <View style={styles.rowContainer}>
          {/* Title and Number Variable */}
          <Text style={[styles.dateLabel, dateLabelFlex]}>
            {`Number of Students:`}
          </Text>
          <Pressable onPress={showNumStudentsPicker}>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateText, dateTextFlex]}>
                {guestCounts[numStudents]}
              </Text>
            </View>
          </Pressable>

          {/* Modal for Wheel Picker on show */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showNumStudents}
            supportedOrientations={["portrait", "landscape"]}
          >
            <View style={styles.centeredModalView}>
              <View style={styles.modalView}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  Enter Number of Students:
                </Text>
                {/* Wheel Picker Component */}
                <WheelPicker
                  selectedIndex={numStudents}
                  options={guestCounts}
                  onChange={onChangeNumStudents}
                  containerStyle={{ width: 200 }}
                />
                <Button title="Confirm" onPress={hideNumStudentsPicker} />
              </View>
            </View>
          </Modal>
        </View>

        {/* Hours number Picker (android) or Modal and Picker (apple) */}
        <View style={styles.rowContainer}>
          <Text style={[styles.dateLabel, dateLabelFlex]}>
            Lesson Hours:
          </Text>
          <Pressable onPress={showNumHoursPicker}>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateText, dateTextFlex]}>
                {campsiteCounts[numHours]}
              </Text>
            </View>
          </Pressable>

          {/* Modal for Wheel Picker on show */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showNumHours}
            supportedOrientations={["portrait", "landscape"]}
          >
            <View style={styles.centeredModalView}>
              <View style={styles.modalView}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  Lesson Hours:
                </Text>
                {/* Wheel Picker Component */}
                <WheelPicker
                  selectedIndex={numHours}
                  options={campsiteCounts}
                  onChange={onChangeNumHours}
                  containerStyle={{ width: 200 }}
                />
                <Button title="Confirm" onPress={hideNumHoursPicker} />
              </View>
            </View>
          </Modal>
        </View>

        {/* Navigates to destination*/}
        <View style={styles.buttonContainer}>
          {/* Custom Nav Button Component  */}
          <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
        </View>
      </ScrollView>
    </View>
  );
}

export default LessonsScreen;

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
    padding: 20,
  },
  dateLabel: {
    backgroundColor: Colors.primary500,
    fontFamily: "primary",
    fontSize: 100,
    color: Colors.primary300,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateInfo: {
    fontFamily: "primary",
    fontSize: 10,
    padding: 20
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
});
