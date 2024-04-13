import { View } from "react-native";
import React from "react";
import {
  DefaultGrid,
  DefaultSection,
  BoxWithShadow,
} from "../../../components/Views";
import DefaultCards from "../../../components/cards";
import { CircleImage } from "../../../components/images";
import {
  DefaultHeading,
  DefaultTitleWithLink,
} from "../../../components/headings";
import { DefaultText } from "../../../components/texts";
import { ReadOnlyRating } from "../../../components/rating";
import { DefaultTouchableOpacity } from "../../../components/touchableOpacity";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
DefaultTitleWithLink;
const GreateDoctors = () => {
  return (
    <DefaultSection styles={{}}>
      <DefaultTitleWithLink title="Top Doctors" />
      <DefaultGrid styles={{ justifyContent: "space-evenly" }}>
        <DefaultTouchableOpacity handler={() => console.log("click me")}>
          <BoxWithShadow
            styles={{
              alignItems: "center",
              padding: wp(5),
              marginBottom: hp(0),
            }}
          >
            <CircleImage source={require("../../../images/doctorimage2.jpg")} />
            <DefaultHeading tag="h5" styles={{ marginTop: 10 }}>
              Dr Salman Akbar
            </DefaultHeading>
            <DefaultText styles={{ marginTop: 10 }}>Dermatologist</DefaultText>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <ReadOnlyRating userRating={4.5} viewRating="4.5(3)" />
            </View>
          </BoxWithShadow>
        </DefaultTouchableOpacity>

        <DefaultTouchableOpacity handler={() => console.log("click me")}>
          <BoxWithShadow
            styles={{
              alignItems: "center",
              padding: wp(5),
              marginBottom: hp(1),
            }}
          >
            <CircleImage source={require("../../../images/doctorimage2.jpg")} />
            <DefaultHeading tag="h5" styles={{ marginTop: 10 }}>
              Dr Salman Akbar
            </DefaultHeading>
            <DefaultText styles={{ marginTop: 10 }}>Dermatologist</DefaultText>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <ReadOnlyRating userRating={4.5} viewRating="4.5(3)" />
            </View>
          </BoxWithShadow>
        </DefaultTouchableOpacity>

        <DefaultTouchableOpacity handler={() => console.log("click me")}>
          <BoxWithShadow
            styles={{
              alignItems: "center",
              padding: wp(5),
              marginBottom: hp(1),
            }}
          >
            <CircleImage source={require("../../../images/doctorimage2.jpg")} />
            <DefaultHeading tag="h5" styles={{ marginTop: 10 }}>
              Dr Salman Akbar
            </DefaultHeading>
            <DefaultText styles={{ marginTop: 10 }}>Dermatologist</DefaultText>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <ReadOnlyRating userRating={4.5} viewRating="4.5(3)" />
            </View>
          </BoxWithShadow>
        </DefaultTouchableOpacity>

        <DefaultTouchableOpacity handler={() => console.log("click me")}>
          <BoxWithShadow
            styles={{
              alignItems: "center",
              padding: wp(5),
              marginBottom: hp(1),
            }}
          >
            <CircleImage source={require("../../../images/doctorimage2.jpg")} />
            <DefaultHeading tag="h5" styles={{ marginTop: 10 }}>
              Dr Salman Akbar
            </DefaultHeading>
            <DefaultText styles={{ marginTop: 10 }}>Dermatologist</DefaultText>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <ReadOnlyRating userRating={4.5} viewRating="4.5(3)" />
            </View>
          </BoxWithShadow>
        </DefaultTouchableOpacity>
      </DefaultGrid>
    </DefaultSection>
  );
};

export default GreateDoctors;
