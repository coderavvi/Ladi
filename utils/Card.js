import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

const width = Dimensions.get("window").width;

export default function Card({ image, title, preamble, category }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        category === "stress" ? styles.stress : styles.axiety,
        pressed && styles.pressed,
      ]}
    >
      <View>
        <View>{image}</View>

        <View>
          <Text>{title}</Text>
          <Text>{preamble}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
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
  stress: {
    backgroundColor: "#8e97fd",
  },

  axiety: {
    backgroundColor: "#ffc97e",
  },
  pressed: {
    opacity: 0.5,
  },
});
