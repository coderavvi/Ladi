import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Button from "./Button";

export default function Header({ onBackButtonPress, backgroundImage }) {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      imageStyle={styles.imageBorder}
      style={StyleSheet.imageStyle}
    >
      <View style={styles.buttoContainer}>
        <Button onPress={onBackButtonPress}>
          <Ionicons name="arrow-back-circle" color="white" size={50} />
        </Button>
      </View>
    </ImageBackground>
  );
}

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  buttoContainer: {
    height: height * 0.25,
    paddingTop: 50,
  },
  imageStyle: {
    height: height * 0.3,
    width: "100%",
  },
  imageBorder: {
    borderRadius: 12,
  },
});
