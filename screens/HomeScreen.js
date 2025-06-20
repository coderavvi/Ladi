import { StyleSheet, Text, View } from "react-native";
import Header from "../components/home/Header";
import HeaderText from "../components/home/HeaderText";
import GetStarted from "../components/home/GetStarted";
import DailyTips from "../components/home/DailyTips";

import { dailyTips } from "../constants/data";
import Recommended from "../components/home/Recommended";

export default function HomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <View>
        <Header />
        <HeaderText
          title="Good morning, Admin"
          preamble="How are you doing today?"
        />
        <GetStarted />
        <DailyTips tip={dailyTips[0].title} />
        <Recommended />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
