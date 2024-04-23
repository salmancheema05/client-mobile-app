import React, { useState } from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultHeading } from "../../components/headings";
import { CircleImage } from "../../components/images";
import { ThreeDotVertical } from "../../components/icons";
import {
  BoxWithShadow,
  DefaultGrid,
  DefaultView,
} from "../../components/Views";
import { DefaultText } from "../../components/texts";
import { DoctorCard } from "../../components/cards";
import { DefaultTouchableOpacity } from "../../components/touchableOpacity";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;

const PatientAdminScreen = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const navigation: NavigationType = useNavigation();
  return (
    <>
      <View
        style={{
          backgroundColor: "#009eff",
          width: "100%",
          height: hp(10),
          marginTop: hp(3),
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: wp(85),
            height: "100%",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: wp(5),
          }}
        >
          <CircleImage
            source={require("../../images/doctorimage2.jpg")}
            styles={{
              width: hp(7),
              height: hp(7),
              borderRadius: hp(100),
              marginTop: 0,
              marginRight: wp(3),
            }}
          />
          <DefaultHeading tag="h4" styles={{ color: "white" }}>
            Salman Akbar
          </DefaultHeading>
        </View>
        <View
          style={{
            width: wp(15),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DefaultTouchableOpacity
            handler={() => setOpenDropDown(!openDropDown)}
          >
            <ThreeDotVertical />
          </DefaultTouchableOpacity>
        </View>
        <BoxWithShadow
          styles={{
            backgroundColor: "white",
            width: wp(30),
            height: hp(12),
            position: "absolute",
            right: 10,
            marginTop: hp(8),
            justifyContent: "center",
            display: openDropDown ? "flex" : "none",
          }}
        >
          <View
            style={{
              width: wp(30),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DefaultText
              styles={{ marginVertical: wp(2) }}
              handler={() => {
                navigation.navigate("Setting");
                setOpenDropDown(false);
              }}
            >
              Setting
            </DefaultText>
          </View>
          <View
            style={{
              width: wp(30),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DefaultText styles={{ marginVertical: wp(2) }}>Logout</DefaultText>
          </View>
        </BoxWithShadow>
      </View>
      <DefaultView>
        <View style={{ marginVertical: hp(4) }}>
          <DefaultHeading tag="h3" styles={{ color: "#009eff" }}>
            My Booking
          </DefaultHeading>
        </View>
        <DefaultGrid styles={{ justifyContent: "space-evenly" }}>
          <BoxWithShadow
            styles={{
              alignItems: "center",
              padding: wp(5),
              marginBottom: hp(0),
              width: "50%",
            }}
          >
            <DoctorCard
              image={require("../../images/doctorimage2.jpg")}
              name="Salman Akbar"
              departmentName="Dermatologist"
              rating="4.5 (3)"
            />
          </BoxWithShadow>
          <BoxWithShadow
            styles={{
              alignItems: "center",
              padding: wp(5),
              marginBottom: hp(0),
              width: "50%",
            }}
          >
            <DoctorCard
              image={require("../../images/doctorimage2.jpg")}
              name="Salman Akbar"
              departmentName="Dermatologist"
              rating="4.5 (3)"
            />
          </BoxWithShadow>
          <BoxWithShadow
            styles={{
              alignItems: "center",
              padding: wp(5),
              marginBottom: hp(0),
              width: "50%",
            }}
          >
            <DoctorCard
              image={require("../../images/doctorimage2.jpg")}
              name="Salman Akbar"
              departmentName="Dermatologist"
              rating="4.5 (3)"
            />
          </BoxWithShadow>
          <BoxWithShadow
            styles={{
              alignItems: "center",
              padding: wp(5),
              marginBottom: hp(0),
              width: "50%",
            }}
          >
            <DoctorCard
              image={require("../../images/doctorimage2.jpg")}
              name="Salman Akbar"
              departmentName="Dermatologist"
              rating="4.5 (3)"
            />
          </BoxWithShadow>
        </DefaultGrid>
      </DefaultView>
    </>
  );
};

export default PatientAdminScreen;
