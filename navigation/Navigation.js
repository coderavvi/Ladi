import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import SelfCareScreen from "../screens/SelfCareScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CustomTabBar from "./CustomTabBar";
import ServiceDetails from "../screens/ServiceDetailsScreen";

const BottomBar = createBottomTabNavigator();

// create a native stack navigation for chat and services screen
const Stack = createNativeStackNavigator();

function BottomTabBar() {
  return (
    <BottomBar.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
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
        options={{ title: "Settings" }}
      />
    </BottomBar.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="homeScreen"
          component={BottomTabBar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="service"
          component={ServiceDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
