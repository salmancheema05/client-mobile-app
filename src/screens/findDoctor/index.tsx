import { View, Text } from "react-native";
import React from "react";
import Layout from "../../layout";
import {
  BoxWithShadow,
  DefaultSection,
  DefaultView,
} from "../../components/Views";
import DefaultCards from "../../components/cards";
import { DefaultHeading } from "../../components/headings";
import { DefaultText } from "../../components/texts";
import { CircleImage } from "../../components/images";
import { ReadOnlyRating } from "../../components/rating";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultButton } from "../../components/buttons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { DefaultTouchableOpacity } from "../../components/touchableOpacity";
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
    <Layout>
      <DefaultView>
        <DefaultTouchableOpacity
          handler={() => navigation.navigate("DoctorDetail")}
        >
          <DefaultSection
            styles={{
              paddingHorizontal: wp(1),
              paddingVertical: hp(0),
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingTop: hp(1),
                justifyContent: "center",
                width: "25%",
              }}
            >
              <CircleImage
                source={require("../../images/doctorimage2.jpg")}
                styles={{ marginTop: hp(0) }}
              />
            </View>
            <View
              style={{
                paddingTop: hp(1),
                width: "75%",
                marginHorizontal: wp(2),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: hp(2),
                  marginBottom: hp(1),
                  paddingRight: wp(5),
                }}
              >
                <DefaultHeading tag="h6">Dr Salman Akbar</DefaultHeading>
                <ReadOnlyRating
                  userRating={4.5}
                  starSize={16}
                  viewRating="4.5"
                  styles={{ paddingVertical: 2 }}
                />
              </View>

              <DefaultText styles={{ marginBottom: hp(1) }}>Skin</DefaultText>
              <DefaultText styles={{ marginBottom: hp(1) }}>
                4 yrs experience, faisalabad
              </DefaultText>
              <DefaultHeading tag="h6" styles={{ marginBottom: hp(1) }}>
                Rs 1000 Fee
              </DefaultHeading>
            </View>
          </DefaultSection>
        </DefaultTouchableOpacity>
        <DefaultTouchableOpacity
          handler={() => navigation.navigate("DoctorDetail")}
        >
          <DefaultSection
            styles={{
              paddingHorizontal: wp(1),
              paddingVertical: hp(0),
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingTop: hp(1),
                justifyContent: "center",
                width: "25%",
              }}
            >
              <CircleImage
                source={require("../../images/doctorimage2.jpg")}
                styles={{ marginTop: hp(0) }}
              />
            </View>
            <View
              style={{
                paddingTop: hp(1),
                width: "75%",
                marginHorizontal: wp(2),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: hp(2),
                  marginBottom: hp(1),
                  paddingRight: wp(5),
                }}
              >
                <DefaultHeading tag="h6">Dr Salman Akbar</DefaultHeading>
                <ReadOnlyRating
                  userRating={4.5}
                  starSize={16}
                  viewRating="4.5"
                  styles={{ paddingVertical: 2 }}
                />
              </View>

              <DefaultText styles={{ marginBottom: hp(1) }}>Skin</DefaultText>
              <DefaultText styles={{ marginBottom: hp(1) }}>
                4 yrs experience, faisalabad
              </DefaultText>
              <DefaultHeading tag="h6" styles={{ marginBottom: hp(1) }}>
                Rs 1000 Fee
              </DefaultHeading>
            </View>
          </DefaultSection>
        </DefaultTouchableOpacity>
        <DefaultTouchableOpacity
          handler={() => navigation.navigate("DoctorDetail")}
        >
          <DefaultSection
            styles={{
              paddingHorizontal: wp(1),
              paddingVertical: hp(0),
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingTop: hp(1),
                justifyContent: "center",
                width: "25%",
              }}
            >
              <CircleImage
                source={require("../../images/doctorimage2.jpg")}
                styles={{ marginTop: hp(0) }}
              />
            </View>
            <View
              style={{
                paddingTop: hp(1),
                width: "75%",
                marginHorizontal: wp(2),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: hp(2),
                  marginBottom: hp(1),
                  paddingRight: wp(5),
                }}
              >
                <DefaultHeading tag="h6">Dr Salman Akbar</DefaultHeading>
                <ReadOnlyRating
                  userRating={4.5}
                  starSize={16}
                  viewRating="4.5"
                  styles={{ paddingVertical: 2 }}
                />
              </View>

              <DefaultText styles={{ marginBottom: hp(1) }}>Skin</DefaultText>
              <DefaultText styles={{ marginBottom: hp(1) }}>
                4 yrs experience, faisalabad
              </DefaultText>
              <DefaultHeading tag="h6" styles={{ marginBottom: hp(1) }}>
                Rs 1000 Fee
              </DefaultHeading>
            </View>
          </DefaultSection>
        </DefaultTouchableOpacity>
        <DefaultTouchableOpacity
          handler={() => navigation.navigate("DoctorDetail")}
        >
          <DefaultSection
            styles={{
              paddingHorizontal: wp(1),
              paddingVertical: hp(0),
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingTop: hp(1),
                justifyContent: "center",
                width: "25%",
              }}
            >
              <CircleImage
                source={require("../../images/doctorimage2.jpg")}
                styles={{ marginTop: hp(0) }}
              />
            </View>
            <View
              style={{
                paddingTop: hp(1),
                width: "75%",
                marginHorizontal: wp(2),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: hp(2),
                  marginBottom: hp(1),
                  paddingRight: wp(5),
                }}
              >
                <DefaultHeading tag="h6">Dr Salman Akbar</DefaultHeading>
                <ReadOnlyRating
                  userRating={4.5}
                  starSize={16}
                  viewRating="4.5"
                  styles={{ paddingVertical: 2 }}
                />
              </View>

              <DefaultText styles={{ marginBottom: hp(1) }}>Skin</DefaultText>
              <DefaultText styles={{ marginBottom: hp(1) }}>
                4 yrs experience, faisalabad
              </DefaultText>
              <DefaultHeading tag="h6" styles={{ marginBottom: hp(1) }}>
                Rs 1000 Fee
              </DefaultHeading>
            </View>
          </DefaultSection>
        </DefaultTouchableOpacity>
      </DefaultView>
    </Layout>
  );
};

export default FindDoctorScreen;
