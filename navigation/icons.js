import { Ionicons } from "@expo/vector-icons";

export const icons = {
  home: (props) => <Ionicons name="home" size={24} {...props} />,
  chat: (props) => <Ionicons name="chatbubble-ellipses" size={24} {...props} />,
  selfCare: (props) => <Ionicons name="medical-outline" size={24} {...props} />,
  settings: (props) => (
    <Ionicons name="settings-outline" size={24} {...props} />
  ),
};

// tabBarActiveTintColor: "#2da098",
//   tabBarInactiveTintColor: "#748c94",
