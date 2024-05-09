import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultHeading } from "../../components/headings";
import { CircleImage } from "../../components/images";
import { ThreeDotVertical } from "../../components/icons";
import {
  DefaultGrid,
  DefaultSection,
  DefaultView,
} from "../../components/Views";
import { DefaultText } from "../../components/texts";
import { DefaultTouchableOpacity } from "../../components/touchableOpacity";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { DoctorProfileCard } from "../../components/cards";
import { ScrollVertical } from "../../components/Scrolling";
import { useTheme } from "../../theme/context";

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
  const theme = useTheme();
  return (
    <ScrollVertical>
      {openDropDown ? (
        <DefaultTouchableOpacity
          styles={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
          handler={() => setOpenDropDown(false)}
        >
          <View
            style={{
              backgroundColor: theme.primary.bg,
              shadowColor: theme.primary.shadowColor,
              elevation: 3,
              width: wp(30),
              height: hp(12),
              position: "absolute",
              right: 10,
              marginTop: hp(12),
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
                  navigation.navigate("PatientSetting");
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
              <DefaultText styles={{ marginVertical: wp(2) }}>
                Logout
              </DefaultText>
            </View>
          </View>
        </DefaultTouchableOpacity>
      ) : null}

      <DefaultView>
        <View
          style={{
            width: "100%",
            height: hp(10),
            marginTop: hp(3),
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "100%",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <CircleImage
              source={require("../../images/doctorImage2.jpg")}
              styles={{
                width: hp(7),
                height: hp(7),
                borderRadius: hp(100),
                marginTop: 0,
                marginRight: wp(3),
              }}
            />
            <DefaultHeading>Salman Akbar</DefaultHeading>
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
        </View>
        <DefaultSection>
          <View>
            <DefaultHeading>My Bookings</DefaultHeading>
          </View>
          <DefaultSection>
            <DoctorProfileCard
              doctorDetail={() => navigation.navigate("DoctorDetail")}
              name="David Patel"
              departmentName="Cardiologist"
              ClinicAddress="Cardiologist Center,USA"
              fee={1800}
              rating={4.5}
              totalRating="4.5"
              source={require("../../images/doctorImage1.png")}
            />
            <DoctorProfileCard
              doctorDetail={() => navigation.navigate("DoctorDetail")}
              name="David Patel"
              departmentName="Cardiologist"
              ClinicAddress="Cardiologist Center,USA"
              fee={1800}
              rating={4.5}
              totalRating="4.5"
              source={require("../../images/doctorImage1.png")}
            />
            <DoctorProfileCard
              doctorDetail={() => navigation.navigate("DoctorDetail")}
              name="David Patel"
              departmentName="Cardiologist"
              ClinicAddress="Cardiologist Center,USA"
              fee={1800}
              rating={4.5}
              totalRating="4.5"
              source={require("../../images/doctorImage1.png")}
            />
            <DoctorProfileCard
              doctorDetail={() => navigation.navigate("DoctorDetail")}
              name="David Patel"
              departmentName="Cardiologist"
              ClinicAddress="Cardiologist Center,USA"
              fee={1800}
              rating={4.5}
              totalRating="4.5"
              source={require("../../images/doctorImage1.png")}
            />
            <DoctorProfileCard
              doctorDetail={() => navigation.navigate("DoctorDetail")}
              name="David Patel"
              departmentName="Cardiologist"
              ClinicAddress="Cardiologist Center,USA"
              fee={1800}
              rating={4.5}
              totalRating="4.5"
              source={require("../../images/doctorImage1.png")}
            />
          </DefaultSection>
        </DefaultSection>
      </DefaultView>
    </ScrollVertical>
  );
};

export default PatientAdminScreen;
