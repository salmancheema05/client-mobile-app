import { View } from "react-native";
import React from "react";
import { DefaultSection, DefaultView, Header } from "../../components/Views";
import { DefaultHeading } from "../../components/headings";
import { DefaultText } from "../../components/texts";
import { DefaultImage } from "../../components/images";
import { ReadOnlyRating } from "../../components/rating";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { DefaultTouchableOpacity } from "../../components/touchableOpacity";
import {
  LeftArrow,
  OutLineHeart,
  OutLineLocation,
  Search,
} from "../../components/icons";
import { DefaultTextInput } from "../../components/textinputs";
import {
  DefaultHorizontalScrolling,
  ScrollVertical,
} from "../../components/Scrolling";
import { Card } from "react-native-shadow-cards";
import { DoctorProfileCard } from "../../components/cards";

type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;
const FindDoctorScreen = () => {
  const navigation: NavigationType = useNavigation();
  return (
    <ScrollVertical>
      <DefaultView>
        <Header title="All Doctors" />
        <DefaultSection>
          <DefaultTextInput
            icon={<Search color="hsla(218, 11%, 69%, 1)" size={20} />}
            placeholder="Search Doctor"
          />
        </DefaultSection>
        <DefaultSection styles={{ paddingTop: hp(2) }}>
          <DefaultHorizontalScrolling>
            <View
              style={{
                borderWidth: 1,
                width: wp(20),
                height: hp(5),
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "hsla(212, 52%, 23%, 1)",
                backgroundColor: "hsla(212, 52%, 23%, 1)",
                marginRight: wp(4),
                paddingHorizontal: wp(5),
              }}
            >
              <DefaultText styles={{ color: "white" }}>All</DefaultText>
            </View>
            <View
              style={{
                borderWidth: 1,
                height: hp(5),
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "hsla(212, 52%, 23%, 1)",
                marginRight: wp(4),
                paddingHorizontal: wp(5),
              }}
            >
              <DefaultText>General</DefaultText>
            </View>
            <View
              style={{
                borderWidth: 1,
                height: hp(5),
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "hsla(212, 52%, 23%, 1)",
                marginRight: wp(4),
                paddingHorizontal: wp(5),
              }}
            >
              <DefaultText>Cardiologist</DefaultText>
            </View>
            <View
              style={{
                borderWidth: 1,
                height: hp(5),
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "hsla(212, 52%, 23%, 1)",
                marginRight: wp(4),
                paddingHorizontal: wp(5),
              }}
            >
              <DefaultText>Cardiologist</DefaultText>
            </View>
          </DefaultHorizontalScrolling>
        </DefaultSection>
        <DefaultSection>
          <DoctorProfileCard
            name="David Patel"
            departmentName="Cardiologist"
            ClinicAddress="Cardiologist Center,USA"
            totalViews={1800}
            rating={4.5}
            totalRating="4.5"
            source={require("../../images/doctorImage1.png")}
          />
          <DoctorProfileCard
            name="David Patel"
            departmentName="Cardiologist"
            ClinicAddress="Cardiologist Center,USA"
            totalViews={1800}
            rating={4.5}
            totalRating="4.5"
            source={require("../../images/doctorImage1.png")}
          />
          <DoctorProfileCard
            name="David Patel"
            departmentName="Cardiologist"
            ClinicAddress="Cardiologist Center,USA"
            totalViews={1800}
            rating={4.5}
            totalRating="4.5"
            source={require("../../images/doctorImage1.png")}
          />
          <DoctorProfileCard
            name="David Patel"
            departmentName="Cardiologist"
            ClinicAddress="Cardiologist Center,USA"
            totalViews={1800}
            rating={4.5}
            totalRating="4.5"
            source={require("../../images/doctorImage1.png")}
          />
        </DefaultSection>
      </DefaultView>
    </ScrollVertical>
  );
};

export default FindDoctorScreen;
