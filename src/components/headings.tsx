import { TextStyle, Text, View } from "react-native";
import React from "react";
import { DefaultTouchableOpacity } from "./touchableOpacity";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
interface TextProps {
  tag?: string;
  styles?: TextStyle;
  handler?: () => void;
  children?: React.ReactNode;
}
interface titleProps {
  tag?: string;
  title?: string;
  styles?: TextStyle;
  handler?: () => void;
}
const DefaultHeading: React.FC<TextProps> = ({
  children,
  handler = null,
  tag = "h1",
  styles,
}) => {
  const renderText = () => {
    return (
      <Text
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize:
            tag === "h1"
              ? 30
              : tag === "h2"
              ? 25
              : tag === "h3"
              ? 22
              : tag === "h4"
              ? 18
              : tag === "h5"
              ? 16
              : tag === "h6"
              ? 14
              : null,
          ...styles,
        }}
      >
        {children}
      </Text>
    );
  };

  return handler ? (
    <DefaultTouchableOpacity handler={handler}>
      {renderText()}
    </DefaultTouchableOpacity>
  ) : (
    renderText()
  );
};

const DefaultTitleWithLink: React.FC<titleProps> = ({
  tag = "h4",
  handler = null,
  title,
  styles,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
      }}
    >
      <DefaultHeading tag={tag}>{title}</DefaultHeading>
      <DefaultTouchableOpacity handler={handler}>
        <DefaultHeading
          tag="h4"
          styles={{ marginRight: 0, color: "blue", ...styles }}
        >
          See All
        </DefaultHeading>
      </DefaultTouchableOpacity>
    </View>
  );
};

export { DefaultHeading, DefaultTitleWithLink };
