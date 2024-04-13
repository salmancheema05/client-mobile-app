import React from "react";
import { TouchableOpacity, Text, TextStyle, ViewStyle } from "react-native";
// import { DefaultTouchableOpacity } from "./TouchableOpacity";

interface ButtonProps {
  buttonKey?: string;
  styles?: ViewStyle;
  textStyle?: TextStyle;
  handler?: () => void;
  children?: React.ReactNode;
}
interface ButtonMapping {
  [key: string]: {
    name: string;
    style: object;
    textStyle: object;
  };
}
const DefaultButton: React.FC<ButtonProps> = ({
  buttonKey = "default",
  styles,
  textStyle,
  handler = null,
  children = null,
}) => {
  const buttonMappings: ButtonMapping = {
    default: {
      name: "Default",
      style: {
        backgroundColor: "#009eff", // Provide default color if theme not accessible
        width: "100%",
        color: "white",
        padding: 10, // Use numbers for padding instead of strings
        borderRadius: 10,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 18,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    view_profile: {
      name: " Profile",
      style: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#009eff",
        fontSize: 16,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 18,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    login: {
      name: "Login",
      style: {
        backgroundColor: "#009eff",
        borderRadius: 40,
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 18,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    request_an_appointment: {
      name: "  Appointment",
      style: {
        backgroundColor: "#000",
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 18,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    book_appointment: {
      name: "Book Appointment",
      style: {
        backgroundColor: "#000",
        borderRadius: 10,
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 18,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    learn_more: {
      name: "Learn More",
      style: {
        backgroundColor: "#000",
        borderRadius: 40,
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 18,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
  };

  return (
    <TouchableOpacity
      style={{
        ...buttonMappings[buttonKey].style,
        ...styles,
      }}
      onPress={handler}
    >
      <Text style={{ ...buttonMappings[buttonKey].textStyle }}>
        {children != null ? children : buttonMappings[buttonKey].name}
      </Text>
    </TouchableOpacity>
  );
};

export { DefaultButton };
