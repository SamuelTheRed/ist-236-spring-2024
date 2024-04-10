import { FontAwesome } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from "../constants/colors";

// Retunrs a Bookmark Button for use in bookmark functionality
function BookmarkButton(props) {
  if (props.pressed) {
    // Bookmark is pressable with onpress functionality
    return (
      <Pressable onPress={props.onPress}>
        <FontAwesome name="bookmark" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    // Is left as outline when not pressed
    return (
      <Pressable onPress={props.onPress}>
        <FontAwesome name="bookmark-o" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}

export default BookmarkButton;
