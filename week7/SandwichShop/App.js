import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const sizeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "6 Inch",
        value: "6 Inch",
        price: 6.5,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "12 Inch",
        value: "12 Inch",
        price: 12.0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const breadRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "White",
        value: "White",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Wheat",
        value: "Wheat",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Flatbread",
        value: "Flatbread",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const cheeseRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "American",
        value: "American",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Pepper Jack",
        value: "Pepper Jack",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Provalone",
        value: "Provalone",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "3",
        label: "Mozzarella",
        value: "Mozzarella",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "4",
        label: "Swiss",
        value: "Swiss",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "5",
        label: "Cheddar",
        value: "Cheddar",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "6",
        label: "Feta",
        value: "Feta",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const [sizeId, setSizeId] = useState(0);
  const [breadId, setBreadId] = useState(0);
  const [cheeseId, setCheeseId] = useState(0);
  const [meats, setMeats] = useState([
    { id: 0, name: "Bacon", value: false, price: 1.5 },
    { id: 1, name: "Ham", value: false, price: 1.5 },
    { id: 2, name: "Turkey", value: false, price: 1.5 },
    { id: 3, name: "Steak", value: false, price: 1.5 },
    { id: 4, name: "Salami", value: false, price: 1.5 },
    { id: 5, name: "Pepperoni", value: false, price: 1.5 },
    { id: 6, name: "Roast Beef", value: false, price: 1.5 },
    { id: 7, name: "Chicken Breast", value: false, price: 1.5 },
    { id: 8, name: "Teriyaki Chicken", value: false, price: 1.5 },
    { id: 9, name: "Tuna", value: false, price: 1.5 },
    { id: 10, name: "Meatballs", value: false, price: 1.5 },
  ]);
  const [sauces, setSauces] = useState([
    { id: 0, name: "Mayonnaise", value: false },
    { id: 1, name: "Mustard", value: false },
    { id: 2, name: "Ranch", value: false },
    { id: 3, name: "Chipotle", value: false },
    { id: 4, name: "Sweet Onion", value: false },
    { id: 5, name: "Honey Mustard", value: false },
    { id: 6, name: "Oil", value: false },
    { id: 7, name: "Vinegar", value: false },
    { id: 8, name: "Hot", value: false },
    { id: 9, name: "BBQ", value: false },
    { id: 10, name: "Marinara", value: false },
  ]);
  const [vegetables, setVegetables] = useState([
    { id: 0, name: "Lettuce", value: false },
    { id: 1, name: "Tomato", value: false },
    { id: 2, name: "Cucumber", value: false },
    { id: 3, name: "Onions", value: false },
    { id: 4, name: "Bell Peppers", value: false },
    { id: 5, name: "Spinach", value: false },
    { id: 6, name: "Pickles", value: false },
    { id: 7, name: "Olives", value: false },
    { id: 8, name: "Jalapenos", value: false },
    { id: 9, name: "Banana Peppers", value: false },
  ]);
  const [doubleMeat, setDoubleMeat] = useState(false);
  const [doubleCheese, setDoubleCheese] = useState(false);
  const [toasted, setToasted] = useState(false);
  const [mealCombo, setMealCombo] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
