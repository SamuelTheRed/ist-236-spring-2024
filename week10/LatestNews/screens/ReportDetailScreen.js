import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect } from "react";
import { REPORTS } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";

function ReportDetailScreen(props) {
  const reportId = props.route.params.reportId;
  const selectedReport = REPORTS.find((report) => report.id === reportId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedReport.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>
          {selectedReport.headline.toLocaleString()}
        </Text>
        <Text style={styles.articleInfo}>
          {selectedReport.date} | by {selectedReport.author}
        </Text>

        <Text style={styles.agency}>
          {selectedReport.agency}
        </Text>

        <Text style={styles.description}>
            {selectedReport.description}
        </Text>
      </View>
    </View>
  );
}
export default ReportDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  headline: {
    color: Colors.primary300,
    fontSize: 35,
    fontFamily: "primaryBold",
    paddingBottom: 5,
  },
  articleInfo: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "primary",
    paddingBottom: 5,
  },
  agency: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "primary",
    marginBottom: 30,
  },
  description: {
    color: Colors.primary300,
    width: "90%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "primary",
  }
});
