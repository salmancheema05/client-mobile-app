import { View, Text } from "react-native";
import React from "react";
import { DefaultView, Header } from "../../components/Views";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DoctorList from "./components/doctorList";
import ClinicList from "./components/clinicList";

const FavoritesScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <DefaultView>
      <Header title="Favorites" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "hsla(212, 52%, 23%, 1)",
          tabBarInactiveTintColor: "hsla(218, 11%, 69%, 1)",
          tabBarStyle: { backgroundColor: "white" },
          tabBarIndicatorStyle: { backgroundColor: "hsla(212, 52%, 23%, 1)" },
          tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        }}
      >
        <Tab.Screen name="Doctors" component={DoctorList} />
        <Tab.Screen name="Clinic" component={ClinicList} />
      </Tab.Navigator>
    </DefaultView>
  );
};

export default FavoritesScreen;
