import { StyleSheet, Text, View } from "react-native";

export default function HeaderText() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.largeText}>Good Morning, Admin</Text>
      <Text style={styles.smallText}>How are you doing today?</Text>
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
