import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import SelfCareScreen from "./screens/SelfCareScreen";
import SettingsScreen from "./screens/SettingsScreen";
import TabIcon from "./components/TabIcon";

const BottomBar = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomBar.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#2da098",
          tabBarActiveBackgroundColor: "#2da098",
          tabBarStyle: {
            position: "absolute",
          },
        }}
      >
        <BottomBar.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <TabIcon name="home" color={color} />,
          }}
        />
        <BottomBar.Screen
          name="chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <TabIcon name="chatbubble-ellipses-outline" color={color} />
            ),
          }}
        />
        <BottomBar.Screen
          name="selfCare"
          component={SelfCareScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <TabIcon name="medical-outline" color={color} />
            ), //shield-half
          }}
        />
        <BottomBar.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <TabIcon name="settings-outline" color={color} />
            ),
          }}
        />
      </BottomBar.Navigator>
    </NavigationContainer>
  );
}
