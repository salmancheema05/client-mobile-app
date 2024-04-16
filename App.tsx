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
import { Home, Login, Search } from "./src/components/icons";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#009eff" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarIcon: () => <Home color="#009eff" size={25} /> }}
          />
          <Tab.Screen
            name="FindDoctor"
            component={FindDoctorScreen}
            options={{
              tabBarIcon: () => <Search color="#009eff" size={25} />,
            }}
          />
          <Tab.Screen
            name="Login"
            component={LoginScreen}
            options={{
              tabBarStyle: { display: "none" },
              tabBarIcon: () => <Login color="#009eff" size={25} />,
            }}
          />
          <Tab.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              tabBarStyle: { display: "none" },
              tabBarButton: () => null,
            }}
          />

          <Tab.Screen
            name="DoctorDetail"
            component={DoctorDetailScreen}
            options={{
              tabBarStyle: { display: "none" },
              tabBarButton: () => null,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
