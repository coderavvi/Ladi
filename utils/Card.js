import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const width = Dimensions.get("window").width;

export default function Card({ image, title, color, textColor, preamble }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        { backgroundColor: color },
      ]}
    >
      <View>
        <Image source={image} style={styles.image} />

        <View>
          <Text style={[styles.titleText, { color: textColor }]}>{title}</Text>
          <Text style={styles.text}>{preamble}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 185,
    width: width * 0.43,
    backgroundColor: "white",
    marginRight: 16,
    borderRadius: 8,
    padding: 8,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, .7)",
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
  },
  image: {
    height: "75%",
    width: "75%",
    alignSelf: "flex-end",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  text: {
    color: "#333",
    textAlign: "center",
    fontSize: 13,
  },
  pressed: {
    opacity: 0.5,
  },
});
