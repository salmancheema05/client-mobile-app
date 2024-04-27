import React from "react";
import { View, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultText } from "../../../components/texts";
import { DefaultHeading } from "../../../components/headings";
import { Location, Bell, Search } from "../../../components/icons";
import { DefaultSection } from "../../../components/Views";
import { DefaultTextInput } from "../../../components/textinputs";

const Header = () => {
  return (
    <>
      <View
        style={{
          width: "100%",
          height: hp(10),
          flexDirection: "row",
        }}
      >
        <View style={{ width: "60%", height: hp(10) }}>
          <View
            style={{
              width: "100%",
              height: hp(5),
              justifyContent: "flex-end",
              marginBottom: hp(1),
              paddingLeft: hp(1),
            }}
          >
            <DefaultText>Location</DefaultText>
          </View>
          <View
            style={{
              width: "100%",
              height: hp(5),
              flexDirection: "row",
            }}
          >
            <View>
              <Location />
            </View>
            <View>
              <DefaultHeading>Seattle,USA</DefaultHeading>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "40%",
            height: hp(10),
            alignItems: "flex-end",
            marginTop: hp(4),
          }}
        >
          <View
            style={{
              backgroundColor: "hsla(220, 1%, 96%, 1)",
              width: wp(10),
              height: wp(10),
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Bell />
          </View>
        </View>
      </View>
      <DefaultSection>
        <DefaultTextInput
          icon={<Search color="hsla(218, 11%, 69%, 1)" size={20} />}
          placeholder="Search Doctor"
        />
      </DefaultSection>
    </>
  );
};

export default Header;
