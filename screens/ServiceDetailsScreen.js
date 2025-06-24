import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/ui/Header";

export default function ServiceDetails({ route, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, []);

  function selectBackHandler() {
    navigation.goBack();
  }

  return (
    <>
      <StatusBar style="light" />
      <View>
        <Header
          onBackButtonPress={selectBackHandler}
          backgroundImage={route.params.bgImage}
        />
        <Text>Service Details</Text>
      </View>
    </>
  );
}
