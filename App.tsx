import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigation from "./src/navigation";
import { ThemeProvider } from "./src/theme/context";

export default function App() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" />
        <Navigation />
      </View>
    </ThemeProvider>
  );
}
