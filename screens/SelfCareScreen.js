import { FlatList, StyleSheet, Text, View } from "react-native";
import HeaderText from "../components/home/HeaderText";

import { selfCare } from "../constants/data";
import Card3 from "../utils/Card3";

export default function SelfCareScreen() {
  return (
    <View style={styles.rootContainer}>
      <HeaderText title="Hi, I am Ladi" preamble="I can help you:" />
      <FlatList
        style={styles.listContainer}
        data={selfCare}
        renderItem={(itemData) => (
          <Card3
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            color={itemData.item.color}
            textColor={itemData.item.textColor}
          />
        )}
        keyExtractor={(item) => item.title}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 60,
    marginHorizontal: 16,
  },
  listContainer: {
    marginVertical: 16,
    marginBottom: 45,
    // paddingTop: 16,
  },
});
