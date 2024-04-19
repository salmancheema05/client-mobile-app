import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { DefaultHeading } from "../../../components/headings";
import { DefaultText } from "../../../components/texts";
import { CircleImage } from "../../../components/images";
import { ReadOnlyRating } from "../../../components/rating";
import { DefaultView } from "../../../components/Views";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DefaultHorizontalScrolling from "../../../components/Scrolling";
import { DefaultButton } from "../../../components/buttons";
const DoctorDetailScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <DefaultView
            styles={{
              marginHorizontal: wp(0),
              paddingHorizontal: wp(5),
            }}
          >
            <View style={{ marginTop: hp(3), flexDirection: "row" }}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: hp(14),
                  height: hp(14),
                  borderRadius: hp(100),
                }}
              >
                <CircleImage
                  source={require("../../../images/doctorimage2.jpg")}
                  styles={{
                    width: hp(13),
                    height: hp(13),
                    borderRadius: hp(100),
                  }}
                />
              </View>
              <View style={{ marginTop: hp(2), marginHorizontal: wp(5) }}>
                <DefaultHeading tag="h5" styles={{ marginBottom: hp(2) }}>
                  Dr Salman Akbar
                </DefaultHeading>
                <DefaultText styles={{ marginBottom: hp(2) }}>
                  Cardiology
                </DefaultText>
                <ReadOnlyRating
                  userRating={3.5}
                  starLenght={5}
                  styles={{ paddingVertical: 0 }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginHorizontal: wp(5),
                marginTop: hp(3),
              }}
            >
              <View
                style={{
                  borderRightWidth: 1,
                  borderColor: "lightgray",
                  width: wp(20),
                  justifyContent: "center",
                }}
              >
                <DefaultText styles={{ marginBottom: hp(1) }}>
                  Patient
                </DefaultText>
                <DefaultHeading tag="h5" styles={{ marginBottom: hp(1) }}>
                  320 +
                </DefaultHeading>
              </View>
              <View
                style={{
                  borderRightWidth: 1,
                  borderColor: "lightgray",
                  width: wp(35),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DefaultText styles={{ marginBottom: hp(1) }}>
                  Experience
                </DefaultText>
                <DefaultHeading tag="h5" styles={{ marginBottom: hp(1) }}>
                  5 Years +
                </DefaultHeading>
              </View>
              <View
                style={{
                  width: wp(35),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DefaultText styles={{ marginBottom: hp(1) }}>Fee</DefaultText>
                <DefaultHeading tag="h5">1000</DefaultHeading>
              </View>
            </View>

            <View style={{ marginTop: hp(5) }}>
              <View>
                <DefaultHeading tag="h4" styles={{ marginBottom: hp(1) }}>
                  Select Date
                </DefaultHeading>
              </View>

              <DefaultHorizontalScrolling styles={{ marginTop: hp(2) }}>
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(20),
                    height: hp(15),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText styles={{ paddingTop: hp(3) }}>Mon</DefaultText>
                  <DefaultText styles={{ paddingTop: hp(3) }}>20</DefaultText>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(20),
                    height: hp(15),
                    borderRadius: 50,
                    backgroundColor: "#009eff",
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText styles={{ paddingTop: hp(3), color: "white" }}>
                    Mon
                  </DefaultText>
                  <DefaultText styles={{ paddingTop: hp(3), color: "white" }}>
                    20
                  </DefaultText>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(20),
                    height: hp(15),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText styles={{ paddingTop: hp(3) }}>Mon</DefaultText>
                  <DefaultText styles={{ paddingTop: hp(3) }}>20</DefaultText>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(20),
                    height: hp(15),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText styles={{ paddingTop: hp(3) }}>Mon</DefaultText>
                  <DefaultText styles={{ paddingTop: hp(3) }}>20</DefaultText>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(20),
                    height: hp(15),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText styles={{ paddingTop: hp(3) }}>Mon</DefaultText>
                  <DefaultText styles={{ paddingTop: hp(3) }}>20</DefaultText>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(20),
                    height: hp(15),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText styles={{ paddingTop: hp(3) }}>Mon</DefaultText>
                  <DefaultText styles={{ paddingTop: hp(3) }}>20</DefaultText>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(20),
                    height: hp(15),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText styles={{ paddingTop: hp(3) }}>Mon</DefaultText>
                  <DefaultText styles={{ paddingTop: hp(3) }}>20</DefaultText>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(20),
                    height: hp(15),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText styles={{ paddingTop: hp(3) }}>Mon</DefaultText>
                  <DefaultText styles={{ paddingTop: hp(3) }}>20</DefaultText>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(20),
                    height: hp(15),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText styles={{ paddingTop: hp(3) }}>Mon</DefaultText>
                  <DefaultText styles={{ paddingTop: hp(3) }}>20</DefaultText>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(20),
                    height: hp(15),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText styles={{ paddingTop: hp(3) }}>Mon</DefaultText>
                  <DefaultText styles={{ paddingTop: hp(3) }}>20</DefaultText>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(20),
                    height: hp(15),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText styles={{ paddingTop: hp(3) }}>Mon</DefaultText>
                  <DefaultText styles={{ paddingTop: hp(3) }}>20</DefaultText>
                </View>
              </DefaultHorizontalScrolling>
            </View>

            <View style={{ marginTop: hp(5) }}>
              <View>
                <DefaultHeading tag="h4" styles={{ marginBottom: hp(1) }}>
                  Select Time
                </DefaultHeading>
              </View>
              <DefaultHorizontalScrolling styles={{ marginTop: hp(2) }}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(35),
                    height: hp(5),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText>4:00 PM</DefaultText>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(35),
                    height: hp(5),
                    borderRadius: 50,
                    marginRight: wp(5),
                    backgroundColor: "#009eff",
                  }}
                >
                  <DefaultText styles={{ color: "white" }}>4:00 PM</DefaultText>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(35),
                    height: hp(5),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText>4:00 PM</DefaultText>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(35),
                    height: hp(5),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText>4:00 PM</DefaultText>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "lightgray",
                    width: wp(35),
                    height: hp(5),
                    borderRadius: 50,
                    marginRight: wp(5),
                  }}
                >
                  <DefaultText>4:00 PM</DefaultText>
                </View>
              </DefaultHorizontalScrolling>
            </View>

            <View style={{ marginTop: hp(5) }}>
              <View>
                <DefaultHeading tag="h3" styles={{ marginBottom: hp(1) }}>
                  About
                </DefaultHeading>
              </View>
              <View>
                <DefaultText styles={{ paddingTop: hp(1) }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </DefaultText>
              </View>
              <View style={{ marginTop: hp(5) }}>
                <DefaultButton
                  buttonKey="book_appointment"
                  styles={{ borderRadius: 50 }}
                />
              </View>
            </View>
          </DefaultView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default DoctorDetailScreen;
