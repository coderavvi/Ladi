import { StyleSheet, View, Text } from "react-native";
import Card from "../../utils/Card";

export default function GetStarted() {
  return (
    <View>
      <Text style={styles.text}>Get Started</Text>
      <View style={styles.container}>
        <Card title="Reduce Stress" category="stress" />
        <Card title="Reduce Anxiety" category="axiety" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 8,
    color: "#666",
  },
});
