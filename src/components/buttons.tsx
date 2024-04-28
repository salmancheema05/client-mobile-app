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
    Remove: {
      name: "Yes,Remove",
      style: {
        backgroundColor: "hsla(212, 52%, 23%, 1)",
        width: "50%",
        color: "white",
        padding: 10,
        borderRadius: 40,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 18,
        alignSelf: "center",
        color: "white",
        ...textStyle,
      },
    },
    Cancel: {
      name: "Cancel",
      style: {
        backgroundColor: "hsla(220, 3%, 92%, 1)",
        width: "50%",
        color: "white",
        padding: 10,
        borderRadius: 40,
      },
      textStyle: {
        textTransform: "none",
        fontSize: 18,
        alignSelf: "center",
        color: "hsla(212, 52%, 23%, 1)",
        ...textStyle,
      },
    },
    update: {
      name: " Update",
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
    signup: {
      name: "Sign Up",
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
    book_appointment: {
      name: "Booking Appointment",
      style: {
        backgroundColor: "#009eff",
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
