import React, { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultImage } from "../../components/images";
import { DefaultHeading } from "../../components/headings";
import { DefaultText } from "../../components/texts";
import { ReadOnlyRating } from "../../components/rating";
import { BoxWithShadow, DefaultView } from "../../components/Views";
import { DefaultTouchableOpacity } from "../../components/touchableOpacity";
import Appointments from "./component/Appointments";
import About from "./component/about";
import Experience from "./component/experience";
import Education from "./component/education";
import { ThreeDotVertical } from "../../components/icons";

const DoctorAdminScreen = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const [selectTab, setSelectTab] = useState<number>(0);
  return (
    <>
      <View
        style={{
          backgroundColor: "#009eff",
          width: wp(100),
          height: hp(25),
          marginTop: hp(3),
          paddingTop: hp(2),
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingHorizontal: wp(5),
        }}
      >
        <BoxWithShadow
          styles={{
            backgroundColor: "white",
            width: wp(20),
            position: "absolute",
            right: 10,
            marginTop: hp(8),
            justifyContent: "center",
            display: openDropDown ? "flex" : "none",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DefaultText styles={{ marginVertical: wp(2) }}>Logout</DefaultText>
          </View>
        </BoxWithShadow>
        <View style={{ flexDirection: "row", marginTop: hp(3) }}>
          <View>
            <DefaultImage source={require("../../images/doctorimage2.jpg")} />
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <DefaultHeading
                tag="h3"
                styles={{ paddingLeft: wp(3), color: "white" }}
              >
                Dr.Salman Akbar
              </DefaultHeading>
              <DefaultTouchableOpacity
                styles={{ marginTop: hp(1), marginLeft: wp(7) }}
                handler={() => setOpenDropDown(!openDropDown)}
              >
                <ThreeDotVertical />
              </DefaultTouchableOpacity>
            </View>
            <DefaultText
              styles={{ color: "white", paddingLeft: wp(3), paddingTop: hp(1) }}
            >
              Cancer
            </DefaultText>
            <ReadOnlyRating
              userRating={4.5}
              starLenght={3}
              tintColor="#009eff"
              styles={{ paddingTop: hp(1) }}
            />
            <DefaultText
              styles={{ color: "white", paddingLeft: wp(3), paddingTop: hp(1) }}
            >
              Address
            </DefaultText>
          </View>
        </View>
      </View>
      <DefaultView>
        <View
          style={{
            marginTop: hp(2),
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.5,
          }}
        >
          <DefaultTouchableOpacity
            styles={{
              borderBottomWidth: selectTab == 0 ? 1 : null,
              borderColor: selectTab == 0 ? "#009eff" : null,
              paddingBottom: hp(2),
            }}
            handler={() => setSelectTab(0)}
          >
            <DefaultText
              styles={{
                color: selectTab == 0 ? "#009eff" : null,
              }}
            >
              Appointments
            </DefaultText>
          </DefaultTouchableOpacity>
          <DefaultTouchableOpacity
            styles={{
              borderBottomWidth: selectTab == 1 ? 1 : null,
              borderColor: selectTab == 1 ? "#009eff" : null,
              paddingBottom: hp(2),
            }}
            handler={() => setSelectTab(1)}
          >
            <DefaultText
              styles={{
                color: selectTab == 1 ? "#009eff" : null,
              }}
            >
              About
            </DefaultText>
          </DefaultTouchableOpacity>
          <DefaultTouchableOpacity
            styles={{
              borderBottomWidth: selectTab == 2 ? 1 : null,
              borderColor: selectTab == 2 ? "#009eff" : null,
              paddingBottom: hp(2),
            }}
            handler={() => setSelectTab(2)}
          >
            <DefaultText
              styles={{
                color: selectTab == 2 ? "#009eff" : null,
              }}
            >
              Education
            </DefaultText>
          </DefaultTouchableOpacity>
          <DefaultTouchableOpacity
            styles={{
              borderBottomWidth: selectTab == 3 ? 1 : null,
              borderColor: selectTab == 3 ? "#009eff" : null,
              paddingBottom: hp(2),
            }}
            handler={() => setSelectTab(3)}
          >
            <DefaultText
              styles={{
                color: selectTab == 3 ? "#009eff" : null,
              }}
            >
              Experience
            </DefaultText>
          </DefaultTouchableOpacity>
          <DefaultTouchableOpacity
            styles={{
              borderBottomWidth: selectTab == 4 ? 1 : null,
              borderColor: selectTab == 4 ? "#009eff" : null,
              paddingBottom: hp(2),
            }}
            handler={() => setSelectTab(4)}
          >
            <DefaultText
              styles={{
                color: selectTab == 4 ? "#009eff" : null,
              }}
            >
              Setting
            </DefaultText>
          </DefaultTouchableOpacity>
        </View>
        <View style={{ height: hp(61), marginTop: hp(3) }}>
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {selectTab === 0 ? (
                <Appointments />
              ) : selectTab === 1 ? (
                <About />
              ) : selectTab === 2 ? (
                <Education />
              ) : selectTab === 3 ? (
                <Experience />
              ) : null}
            </ScrollView>
          </SafeAreaView>
        </View>
      </DefaultView>
    </>
  );
};

export default DoctorAdminScreen;
