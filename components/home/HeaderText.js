import { StyleSheet, Text, View } from "react-native";

export default function HeaderText({ title, preamble }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.largeText}>{title}</Text>
      <Text style={styles.smallText}>{preamble}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  largeText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
  },
  smallText: {
    fontSize: 14,
    color: "#666",
  },
});
