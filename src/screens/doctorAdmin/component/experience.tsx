import React from "react";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultGrid } from "../../../components/Views";
import { DefaultHeading } from "../../../components/headings";
import { DefaultText } from "../../../components/texts";
import { Card } from "react-native-shadow-cards";
const Experience = () => {
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
          Position
        </DefaultHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Hospital Name
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
          Position
        </DefaultHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Hospital Name
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
          Position
        </DefaultHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Hospital Name
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
          Position
        </DefaultHeading>
        <DefaultText styles={{ marginBottom: hp(1) }}>
          Hospital Name
        </DefaultText>
      </Card>
    </DefaultGrid>
  );
};

export default Experience;
