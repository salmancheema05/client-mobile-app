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
  return <View style={{ height: hp(105) }}></View>;
};

export default FindDoctorScreen;
