import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultGrid } from "../../../components/Views";
import { DefaultHeading } from "../../../components/headings";
const Education = () => {
  return (
    <DefaultGrid>
      <View
        style={{
          backgroundColor: "white",
          marginTop: hp(3),
          paddingHorizontal: wp(3),
          paddingVertical: wp(5),
          width: "45%",
          marginRight: wp(4),
          alignItems: "center",
        }}
      >
        <DefaultHeading
          tag="h6"
          styles={{ color: "#009eff", marginBottom: hp(1) }}
        >
          1971-2024
        </DefaultHeading>
        <DefaultHeading tag="h5" styles={{ marginBottom: hp(1) }}>
          Degree Name
        </DefaultHeading>
        <DefaultHeading tag="h6" styles={{ marginBottom: hp(1) }}>
          Institute Name
        </DefaultHeading>
      </View>
    </DefaultGrid>
  );
};

export default Education;
