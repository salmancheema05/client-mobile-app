import { View, Text, ScrollView } from "react-native";
import React from "react";
import { DefaultSection } from "../../../components/Views";
import {
  DefaultHeading,
  DefaultTitleWithLink,
} from "../../../components/headings";
import { DefaultTouchableOpacity } from "../../../components/touchableOpacity";
import { DefaultImage } from "../../../components/images";
import DefaultHorizontalScrolling from "../../../components/Scrolling";

const OurServices = () => {
  return (
    <DefaultSection>
      <DefaultTitleWithLink title="Services" />

      <DefaultHorizontalScrolling>
        <View
          style={{
            backgroundColor: "orange",
            width: 140,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            marginRight: 20,
          }}
        >
          <View style={{}}>
            <DefaultImage
              source={require("../../../images/2.png")}
              styles={{ width: 70, height: 70 }}
            />
          </View>
          <DefaultHeading tag="h4" styles={{ marginTop: 30, color: "white" }}>
            Cardiology
          </DefaultHeading>
        </View>
        <View
          style={{
            backgroundColor: "#009eff",
            width: 140,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            marginRight: 20,
          }}
        >
          <View style={{}}>
            <DefaultImage
              source={require("../../../images/2.png")}
              styles={{ width: 70, height: 70 }}
            />
          </View>
          <DefaultHeading tag="h4" styles={{ marginTop: 30, color: "white" }}>
            Cardiology
          </DefaultHeading>
        </View>
        <View
          style={{
            backgroundColor: "pink",
            width: 140,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            marginRight: 20,
          }}
        >
          <View style={{}}>
            <DefaultImage
              source={require("../../../images/2.png")}
              styles={{ width: 70, height: 70 }}
            />
          </View>
          <DefaultHeading tag="h4" styles={{ marginTop: 30, color: "white" }}>
            Cardiology
          </DefaultHeading>
        </View>
      </DefaultHorizontalScrolling>
    </DefaultSection>
  );
};

export default OurServices;
