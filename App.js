import { SafeAreaView } from "react-native";
import Navigation from "./navigation/Navigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
}
