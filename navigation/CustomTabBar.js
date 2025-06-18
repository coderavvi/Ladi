import { View, Pressable, StyleSheet } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text } from "@react-navigation/elements";
import { icons } from "./icons";

export default function CustomTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            <View style={isFocused && styles.icon}>
              {icons[route.name]({ color: isFocused ? "white" : "#748c94" })}
            </View>
            <Text style={{ color: isFocused ? "#2da098" : "#748c94" }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 24,
    backgroundColor: "white",
    marginHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 24,
    elevation: 8,
    shadowColor: "rgba(0, 0, 0, 0.6)",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    borderRadius: 8,
  },
  icon: {
    backgroundColor: "#2da098",
    color: "white",
    padding: 8,
    borderRadius: 8,
  },
});
