import { View, Text } from "react-native";
import React from "react";
import { DefaultHeading } from "../../../components/headings";
import { LeftArrow, Share } from "../../../components/icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#009eff",
        width: "100%",
        height: hp(12),
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: wp(20),
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LeftArrow />
      </View>
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
