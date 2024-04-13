import { View, TouchableOpacity } from "react-native";
import React from "react";
import {
  Location,
  Services,
  Home,
  Login,
  Search,
  LeftArrow,
  Share,
} from "./components/icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;

const Bottomtab = ({}) => {
  const navigation = useNavigation<NavigationType>();

  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        height: 50,
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          width: "20%",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Home color="#009eff" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "20%",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Services color="#009eff" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("FindDoctor")}
        style={{
          width: "20%",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Search color="#009eff" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "20%",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Location color="#009eff" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          width: "20%",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Login color="#009eff" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default Bottomtab;
