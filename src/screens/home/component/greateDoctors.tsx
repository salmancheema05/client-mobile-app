import { View } from "react-native";
import React from "react";
import {
  DefaultGrid,
  DefaultSection,
  BoxWithShadow,
} from "../../../components/Views";
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
import { DoctorCard } from "../../../components/cards";

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
            <DoctorCard
              image={require("../../../images/doctorimage2.jpg")}
              name="Salman Akbar"
              departmentName="Dermatologist"
              rating="4.5 (3)"
            />
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
            <DoctorCard
              image={require("../../../images/doctorimage2.jpg")}
              name="Salman Akbar"
              departmentName="Dermatologist"
              rating="4.5 (3)"
            />
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
            <DoctorCard
              image={require("../../../images/doctorimage2.jpg")}
              name="Salman Akbar"
              departmentName="Dermatologist"
              rating="4.5 (3)"
            />
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
            <DoctorCard
              image={require("../../../images/doctorimage2.jpg")}
              name="Salman Akbar"
              departmentName="Dermatologist"
              rating="4 (3)"
            />
          </BoxWithShadow>
        </DefaultTouchableOpacity>
      </DefaultGrid>
    </DefaultSection>
  );
};

export default GreateDoctors;
