import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function DailyTips({ tip }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View>
        <Image
          source={require("../../assets/images/tips.png")}
          style={styles.imageStyle}
        />
        <View style={styles.contents}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Tip for the Day</Text>
            <Text style={styles.text}>{tip}</Text>
          </View>
          {/* Icon of idea */}
          <Ionicons name="information-circle" color="white" size={45} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.15,
    borderRadius: 6,
    marginVertical: 16,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, .7)",
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
  },
  contents: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  textContainer: {},
  titleText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  text: {
    color: "#eeeeee",
  },
  imageStyle: {
    height: height * 0.15,
    width: "100%",
    borderRadius: 6,
    position: "absolute",
  },
  pressed: {
    opacity: 0.5,
  },
});
