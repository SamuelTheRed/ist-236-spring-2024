import { View, StyleSheet, FlatList } from "react-native";
import ReportItem from "./ReportItem";

// Creates List of Report Items
function List(props) {
  // Renders each Item
  function renderReportItem(itemData) {
    const reportItemProps = {
      id: itemData.item.id,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      imageUrl: itemData.item.imageUrl,
      description: itemData.item.description,
      listIndex: itemData.index,
    };
    return <ReportItem {...reportItemProps} />;
  }
  // Creates a List of Report items
  return (
    <View style={styles.container}>
      <FlatList
        // Sends props as data
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderReportItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
