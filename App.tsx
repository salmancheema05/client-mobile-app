import { View } from "react-native";
import Navigation from "./src/navigation";
import { ThemeProvider, useTheme } from "./src/theme/context";

export default function App() {
  const theme = useTheme();
  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </ThemeProvider>
  );
}
