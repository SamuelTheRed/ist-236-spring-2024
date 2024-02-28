import { View, StyleSheet, Text, ScrollView, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import BouncyCheckBox from "react-native-bouncy-checkbox";

// Home screen object with properties
function HomeScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();

  // Loads screen
  return (
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
      {/* Custom title component */}
      <View style={styles.titleContainer}>
        <Title>Mike's Bikes</Title>
      </View>

      {/* Scroll View for home screen of order selections */}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.radioContainer}>
          <Text style={styles.radioHeader}>Repair Time:</Text>
          {/* Radio Group Component with parameters for design and functionality */}
          <RadioGroup
            radioButtons={props.repairTimeRadioButtons}
            onPress={props.onSetRepairTimeId}
            selectedId={props.repairTimeId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabels}
          />
        </View>

        <View style={styles.checkBoxContainer}>
          <Text style={styles.checkBoxHeader}>Services Options:</Text>
          <View style={styles.checkBoxSubContainer}>
            {/* Mapped services checkboxes component */}
            {props.services.map((item) => {
              return (
                // Imported bouncy checkbox component
                <BouncyCheckBox
                  // Sets parameters for bouncy checkbox including style and functionality
                  key={item.id}
                  text={item.name}
                  onPress={props.onSetServices.bind(this, item.id)}
                  textStyle={{
                    textDecorationLine: "none",
                    color: Colors.primary500,
                  }}
                  innerIconStyle={{
                    borderRadius: 0,
                    borderColor: Colors.primary500,
                  }}
                  iconStyle={{
                    borderRadius: 0,
                  }}
                  fillColor={Colors.primary500}
                  style={{
                    padding: 2,
                  }}
                />
              );
            })}
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.addOnsContainer}>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Newsletter Signup</Text>
              {/* Toggle Switch Component for Newsletter */}
              <Switch
                // Parameters for component including style and functionality
                onValueChange={props.onSetNewsletter}
                value={props.newsletter}
                thumbColor={
                  props.newsletter ? Colors.primary500 : Colors.primary800
                }
                trackColor={{
                  false: Colors.primary500,
                  true: Colors.primary800,
                }}
              />
            </View>
          </View>

          <View style={styles.addOnsContainer}>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Rental Membership Signup</Text>
              {/* Toggle Switch Component for Membership */}
              <Switch
                // Parameters for component including style and functionality
                onValueChange={props.onSetRentalMembership}
                value={props.rentalMembership}
                thumbColor={
                  props.rentalMembership ? Colors.primary500 : Colors.primary800
                }
                trackColor={{
                  false: Colors.primary500,
                  true: Colors.primary800,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Transitions screen to order review */}
      <View style={styles.buttonContainer}>
        {/* Custom Nav Button Component  */}
        <NavButton onPress={props.onNext}>Submit Order</NavButton>
      </View>
    </View>
  );
}

// Exports as component
export default HomeScreen;

// CSS
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    fontFamily: "primaryVariant",
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Colors.primary500,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  scrollContainer: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Colors.primary500,
    padding: 5
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary500,
    fontFamily: "primaryBold",
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 15,
    color: Colors.primary500,
    fontFamily: "primaryBold",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {
    alignItems: "center",
    paddingVertical: 50
  },
  checkBoxHeader: {
    fontSize: 30,
    color: Colors.primary500,
    fontFamily: "primaryBold",
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  addOnsContainer: {
    justifyContent: "space-between",
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 15,
    fontFamily: "primaryVariant",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
