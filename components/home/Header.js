import { Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.imageStyle}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
  },
  imageStyle: {
    width: 70,
    height: 70,
  },
});
