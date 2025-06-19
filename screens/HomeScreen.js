import { StyleSheet, Text, View } from "react-native";
import Header from "../components/home/Header";
import HeaderText from "../components/home/HeaderText";
import GetStarted from "../components/home/GetStarted";

export default function HomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <View>
        <Header />
        <HeaderText />
        <GetStarted />
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
