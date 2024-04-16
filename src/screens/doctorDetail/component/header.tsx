import { View, Text } from "react-native";
import React from "react";
import { DefaultHeading } from "../../../components/headings";
import { LeftArrow, Share } from "../../../components/icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { DefaultTouchableOpacity } from "../../../components/touchableOpacity";

type headerProps = {
  navigation: NavigationProp<any>;
};
const Header: React.FC<headerProps> = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#009eff",
        width: "100%",
        height: hp(8),
        marginTop: hp(3),
        flexDirection: "row",
      }}
    >
      <DefaultTouchableOpacity
        styles={{
          width: wp(20),
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        handler={() => navigation.navigate("FindDoctor")}
      >
        <LeftArrow />
      </DefaultTouchableOpacity>
      <View
        style={{
          width: wp(60),
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DefaultHeading tag="h4" styles={{ color: "white" }}>
          Dr.Salman Akbar
        </DefaultHeading>
      </View>
      <View
        style={{
          width: wp(20),
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Share />
      </View>
    </View>
  );
};

export default Header;
