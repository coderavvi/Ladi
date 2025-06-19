import { ScrollView, StyleSheet, Text, View } from "react-native";
import { recommended } from "../../constants/data";
import Card2 from "../../utils/Card2";

export default function Recommended() {
  return (
    <View>
      <View>
        <Text style={styles.title}>Recommended for you</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.rootContainer}
      >
        {recommended.map((item) => (
          <Card2
            key={item.title}
            image={item.imageUrl}
            color={item.color}
            title={item.title}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 8,
    color: "#666",
  },
});
