import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  View,
  Text,
} from "react-native";

export default function Card2({ title, image, color, bgImage }) {
  const navigation = useNavigation();

  function onSelectServiceHandler() {
    //navigate to service detail screen and set the necessary screen options
    navigation.navigate("service", {
      title: title,
      color: color,
      bgImage: bgImage,
    });
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.rootContainer, pressed && styles.pressed]}
      onPress={onSelectServiceHandler}
    >
      <View style={styles.contents}>
        <View style={[styles.imageContainer, { backgroundColor: color }]}>
          <Image source={image} style={styles.imageContainer} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    height: height * 0.2,
    marginRight: 16,
    overflow: "hidden",
    borderRadius: 6,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, .7)",
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
  },
  contents: {
    borderRadius: 6,
    overflow: "hidden",
    flex: 1,
  },
  imageContainer: {
    borderTopRadius: 6,
    width: width * 0.43,
    height: height * 0.2 * 0.75,
  },
  imageStyles: {
    flex: 1,
    position: "absolute",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "white",
    borderBottomEndRadius: 6,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    margin: 4,
  },
  pressed: {
    opacity: 0.7,
  },
});
