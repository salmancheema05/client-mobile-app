import { View, ViewStyle, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
interface ViewProps {
  styles?: ViewStyle;
  children: React.ReactNode;
}

const DefaultView: React.FC<ViewProps> = ({ children, styles }) => {
  const wudth = Dimensions.get("window").width;
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: wp(5),
        marginBottom: hp(10),
        ...styles,
      }}
    >
      {children}
    </View>
  );
};
const DefaultGrid: React.FC<ViewProps> = ({ children, styles }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        ...styles,
      }}
    >
      {children}
    </View>
  );
};

const DefaultSection: React.FC<ViewProps> = ({ children, styles }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: hp(3),
        paddingHorizontal: wp(3),
        paddingVertical: hp(3),
        borderRadius: 20,
        ...styles,
      }}
    >
      {children}
    </View>
  );
};

const BoxWithShadow: React.FC<ViewProps> = ({ children, styles }) => {
  return (
    <View
      style={{
        shadowColor: "lightgray",
        shadowOffset: { width: 0, height: 0 },
        elevation: 5,
        borderRadius: 5,
        ...styles,
      }}
    >
      {children}
    </View>
  );
};

export { DefaultView, DefaultGrid, DefaultSection, BoxWithShadow };
