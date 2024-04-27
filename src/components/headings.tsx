import { TextStyle, Text, View } from "react-native";
import React from "react";
import { DefaultTouchableOpacity } from "./touchableOpacity";
import { DefaultText } from "./texts";

interface TextProps {
  styles?: TextStyle;
  children?: React.ReactNode;
}
interface titleProps {
  tag?: string;
  title?: string;
  styles?: TextStyle;
  handler?: () => void;
}
const DefaultHeading: React.FC<TextProps> = ({ children, styles }) => {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: "800",
        color: "hsla(220, 16%, 50%, 1)",
        ...styles,
      }}
    >
      {children}
    </Text>
  );
};

const DefaultTitleWithLink: React.FC<titleProps> = ({
  handler = null,
  title,
  styles,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "900",
          color: "hsla(212, 52%, 23%, 1)",
          ...styles,
        }}
      >
        {title}
      </Text>
      <DefaultTouchableOpacity handler={handler}>
        <DefaultText>See All</DefaultText>
      </DefaultTouchableOpacity>
    </View>
  );
};

export { DefaultHeading, DefaultTitleWithLink };
