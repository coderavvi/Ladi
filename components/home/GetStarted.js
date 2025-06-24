import { StyleSheet, View, Text } from "react-native";
import Card from "../../utils/Card";

import { getStarted } from "../../constants/data.js";

export default function GetStarted() {
  return (
    <View>
      <Text style={styles.text}>Get Started</Text>
      <View style={styles.container}>
        {getStarted.map((category) => (
          <Card
            key={category.title}
            title={category.title}
            color={category.color}
            image={category.imageUrl}
            textColor={category.textColor}
            preamble={category.preamble}
            bg={category.bgImage}
          />
        ))}
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
    color: "#666",
  },
});
