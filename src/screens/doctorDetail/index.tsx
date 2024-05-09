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
  SubHeading,
} from "../../components/headings";
import { DefaultText } from "../../components/texts";
import { CircleImage } from "../../components/images";
import { ReadOnlyRating } from "../../components/rating";
import { DefaultButton } from "../../components/buttons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ScrollVertical } from "../../components/Scrolling";
import { useTheme } from "../../theme/context";
type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;

const DoctorDetailScreen = () => {
  const navigation: NavigationType = useNavigation();
  const theme = useTheme();
  return (
    <>
      <DefaultView>
        <ScrollVertical styles={{ marginBottom: hp(7) }}>
          <Header title="Doctor Detail" />
          <DefaultSection styles={{ paddingHorizontal: wp(1) }}>
            <DoctorProfileCard
              name="David Patel"
              departmentName="Cardiologist"
              ClinicAddress="Cardiologist Center,USA"
              fee={1800}
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
                    backgroundColor: theme.primary.circleBg,
                    width: wp(16),
                    height: wp(16),
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PatientIcon color={theme.primary.iconColor} />
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: hp(2),
                  }}
                >
                  <SubHeading>1000 +</SubHeading>
                  <DefaultText>patients</DefaultText>
                </View>
              </View>
              <View>
                <View
                  style={{
                    backgroundColor: theme.primary.circleBg,
                    width: wp(16),
                    height: wp(16),
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Clock color={theme.primary.iconColor} />
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: hp(2),
                  }}
                >
                  <SubHeading>10 +</SubHeading>
                  <DefaultText>experience</DefaultText>
                </View>
              </View>
              <View>
                <View
                  style={{
                    backgroundColor: theme.primary.circleBg,
                    width: wp(16),
                    height: wp(16),
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Star color={theme.primary.iconColor} />
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: hp(2),
                  }}
                >
                  <SubHeading>5</SubHeading>
                  <DefaultText>rating</DefaultText>
                </View>
              </View>
              <View>
                <View
                  style={{
                    backgroundColor: theme.primary.circleBg,
                    width: wp(16),
                    height: wp(16),
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Chat color={theme.primary.iconColor} />
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: hp(2),
                  }}
                >
                  <SubHeading>1000</SubHeading>
                  <DefaultText>reviews</DefaultText>
                </View>
              </View>
            </View>
          </DefaultSection>
          <DefaultSection>
            <DefaultHeading>About US</DefaultHeading>
            <DefaultSection>
              <DefaultText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit molestias voluptatibus accusamus, totam qui voluptates
                facere corporis eligendi accusantium commodi obcaecati est
                dolores...
              </DefaultText>
            </DefaultSection>
            <DefaultText styles={{ fontSize: 15, fontWeight: "500" }}>
              See More
            </DefaultText>
          </DefaultSection>
          <DefaultSection>
            <DefaultHeading>Working Time</DefaultHeading>
            <DefaultSection>
              <DefaultText>
                Mon - Fri 8:00 AM To 11:00 AM - 8:00 PM To 11:00 PM
              </DefaultText>
            </DefaultSection>
          </DefaultSection>
          <DefaultSection>
            <DefaultTitleWithLink title="Reviews" />

            <DefaultSection>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <CircleImage source={require("../../images/user1.png")} />
                </View>
                <View style={{ marginHorizontal: wp(3), marginTop: hp(0) }}>
                  <SubHeading>Emily Anderson</SubHeading>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit molestias voluptatibus accusamus, Lorem ipsum, dolor sit
                amet consectetur adipisicing elit.
              </DefaultText>
            </DefaultSection>
            <DefaultSection>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <CircleImage source={require("../../images/user1.png")} />
                </View>
                <View style={{ marginHorizontal: wp(3), marginTop: hp(0) }}>
                  <SubHeading>Emily Anderson</SubHeading>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit molestias voluptatibus accusamus, Lorem ipsum, dolor sit
                amet consectetur adipisicing elit.
              </DefaultText>
            </DefaultSection>
          </DefaultSection>
        </ScrollVertical>
      </DefaultView>
      <DefaultSection
        styles={{
          width: "100%",
          height: hp(8),
          marginTop: hp(4),
          paddingHorizontal: wp(3),
          paddingVertical: hp(1),
          backgroundColor: theme.primary.bg,
          bottom: 0,
          left: 0,
          right: 0,
          position: "absolute",
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
