import React from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultSection, DefaultView, Header } from "../../components/Views";
import { DoctorProfileCard } from "../../components/cards";
import { Chat, Clock, PatientIcon, Star } from "../../components/icons";
import {
  DefaultHeading,
  DefaultTitleWithLink,
} from "../../components/headings";
import { DefaultText } from "../../components/texts";
import { CircleImage } from "../../components/images";
import { ReadOnlyRating } from "../../components/rating";
import { DefaultButton } from "../../components/buttons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;
const DoctorDetailScreen = () => {
  const navigation: NavigationType = useNavigation();
  return (
    <>
      <DefaultView>
        <Header title="Doctor Detail" />
        <DefaultSection>
          <DoctorProfileCard
            doctorDetail={() => null}
            name="David Patel"
            departmentName="Cardiologist"
            ClinicAddress="Cardiologist Center,USA"
            totalViews={1800}
            rating={4.5}
            totalRating="4.5"
            source={require("../../images/doctorImage1.png")}
          />
        </DefaultSection>
        <DefaultSection>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <View
                style={{
                  backgroundColor: "hsla(220, 1%, 96%, 1)",
                  width: wp(16),
                  height: wp(16),
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PatientIcon />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: hp(2),
                }}
              >
                <DefaultHeading>1000 +</DefaultHeading>
                <DefaultText>patients</DefaultText>
              </View>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "hsla(220, 1%, 96%, 1)",
                  width: wp(16),
                  height: wp(16),
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Clock />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: hp(2),
                }}
              >
                <DefaultHeading>10 +</DefaultHeading>
                <DefaultText>experience</DefaultText>
              </View>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "hsla(220, 1%, 96%, 1)",
                  width: wp(16),
                  height: wp(16),
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Star />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: hp(2),
                }}
              >
                <DefaultHeading>5</DefaultHeading>
                <DefaultText>rating</DefaultText>
              </View>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "hsla(220, 1%, 96%, 1)",
                  width: wp(16),
                  height: wp(16),
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Chat />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: hp(2),
                }}
              >
                <DefaultHeading>1000</DefaultHeading>
                <DefaultText>reviews</DefaultText>
              </View>
            </View>
          </View>
        </DefaultSection>
        <DefaultSection>
          <DefaultHeading styles={{ fontSize: 20 }}>About US</DefaultHeading>
          <DefaultText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            molestias voluptatibus accusamus, totam qui voluptates facere
            corporis eligendi accusantium commodi obcaecati est dolores...
          </DefaultText>
          <DefaultText styles={{ fontSize: 15, fontWeight: "500" }}>
            See More
          </DefaultText>
        </DefaultSection>
        <DefaultSection>
          <DefaultHeading styles={{ fontSize: 20 }}>
            Working Time
          </DefaultHeading>
          <DefaultText>
            Mon - Fri 8:00 AM To 11:00 AM - 8:00 PM To 11:00 PM
          </DefaultText>
        </DefaultSection>
        <DefaultSection>
          <DefaultTitleWithLink title="Reviews" />

          <View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <CircleImage source={require("../../images/user1.png")} />
              </View>
              <View style={{ marginHorizontal: wp(3), marginTop: hp(0) }}>
                <DefaultHeading>Emily Anderson</DefaultHeading>
                <View style={{ marginTop: hp(1) }}></View>
                <ReadOnlyRating
                  userRating={5}
                  viewRating="5.0"
                  starLenght={5}
                  starSize={15}
                  styles={{ paddingRight: 10, paddingTop: 2 }}
                />
              </View>
            </View>
            <DefaultText styles={{ marginTop: hp(1) }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              molestias voluptatibus accusamus,...
            </DefaultText>
          </View>
        </DefaultSection>
      </DefaultView>
      <DefaultSection
        styles={{
          width: "100%",
          height: hp(8),
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          marginTop: hp(4),
          paddingHorizontal: wp(3),
          paddingVertical: hp(1),
        }}
      >
        <DefaultButton
          buttonKey="Booking"
          handler={() => navigation.navigate("Booking")}
        />
      </DefaultSection>
    </>
  );
};

export default DoctorDetailScreen;
