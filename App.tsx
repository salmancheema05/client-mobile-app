import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  HomeScreen,
  LoginScreen,
  SignupScreen,
  FindDoctorScreen,
  DoctorDetailScreen,
} from "./src/importScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bottomtab from "./src/bottomtab";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#009eff" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // Hide header for all screens
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="FindDoctor" component={FindDoctorScreen} />
          <Stack.Screen name="DoctorDetail" component={DoctorDetailScreen} />
        </Stack.Navigator>
        <Bottomtab />
      </NavigationContainer>
    </View>
  );
}
