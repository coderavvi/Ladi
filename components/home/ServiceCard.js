import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ServiceCard({ title }) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.rootContainer,
          pressed && styles.pressed,
        ]}
      >
        <Ionicons name="leaf-outline" size={24} color="#333" />
        <Text style={styles.textStyles}>{title}</Text>
        <Ionicons name="arrow-forward-circle" size={30} color="#666" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderRadius: 6,
    elevation: 8,
    shadowColor: "rgba(0, 0, 0, .5)",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
  },
  textStyles: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
});
