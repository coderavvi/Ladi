import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ children, onPress }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 8,
    borderRadius: 50,
  },
  button: {},
  pressed: {
    opacity: 0.7,
  },
  text: {},
});
