import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OverView from "./component/OverView";
import FeedBack from "./component/FeedBack";
import { useNavigation } from "@react-navigation/native";
import Header from "./component/header";

const DoctorDetailScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  return (
    <>
      {/* <Header navigation={navigation} />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "lightgray",
          tabBarStyle: { backgroundColor: "#009eff" },
          tabBarIndicatorStyle: { backgroundColor: "white" },
        }}
      >
        <Tab.Screen name="Over View" component={OverView} />
        <Tab.Screen name="Feed Back" component={FeedBack} />
      </Tab.Navigator> */}
    </>
  );
};

export default DoctorDetailScreen;
