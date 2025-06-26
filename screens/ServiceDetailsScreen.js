import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import Header from "../components/ui/Header";
import services from "../constants/services";
import ServiceCard from "../components/home/ServiceCard";

export default function ServiceDetails({ route, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, []);

  function selectBackHandler() {
    navigation.goBack();
  }

  function renderItem(itemData) {
    return <ServiceCard title={itemData.item.title} />;
  }

  // get services for each category
  const categoryServices = services.filter(
    (service) => service.category === route.params.title
  );

  return (
    <>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onBackButtonPress={selectBackHandler}
          backgroundImage={route.params.bgImage}
        />
        <View style={styles.container}>
          {categoryServices.map((item) => (
            <ServiceCard key={item.title} title={item.title} />
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 8,
  },
});
