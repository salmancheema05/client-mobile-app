import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultGrid } from "../../../components/Views";
import { DefaultHeading } from "../../../components/headings";
import { DefaultText } from "../../../components/texts";
import { Card } from "react-native-shadow-cards";
const Education = () => {
  return (
    <DefaultGrid>
      <Card
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
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          1971-2024
        </DefaultHeading>
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          Degree Name
        </DefaultHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Institute Name
        </DefaultText>
      </Card>
      <Card
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
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          1971-2024
        </DefaultHeading>
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          Degree Name
        </DefaultHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Institute Name
        </DefaultText>
      </Card>
      <Card
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
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          1971-2024
        </DefaultHeading>
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          Degree Name
        </DefaultHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Institute Name
        </DefaultText>
      </Card>
      <Card
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
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          1971-2024
        </DefaultHeading>
        <DefaultHeading styles={{ marginBottom: hp(1) }}>
          Degree Name
        </DefaultHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Institute Name
        </DefaultText>
      </Card>
    </DefaultGrid>
  );
};

export default Education;
