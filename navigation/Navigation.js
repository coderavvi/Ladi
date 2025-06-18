import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import SelfCareScreen from "../screens/SelfCareScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabIcon from "../components/TabIcon";
import CustomTabBar from "./CustomTabBar";

const BottomBar = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomBar.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <BottomBar.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <BottomBar.Screen
          name="chat"
          component={ChatScreen}
          options={{ title: "Chat" }}
        />
        <BottomBar.Screen
          name="selfCare"
          component={SelfCareScreen}
          options={{ title: "Self Care" }}
        />
        <BottomBar.Screen
          name="settings"
          component={SettingsScreen}
          options={{ title: "Profile" }}
        />
      </BottomBar.Navigator>
    </NavigationContainer>
  );
}
