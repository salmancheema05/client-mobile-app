import { TouchableOpacity, View, ViewStyle, StyleProp } from "react-native";
import React from "react";
interface TouchableOpacityProps {
  styles?: object;
  handler: () => void;
  children?: React.ReactNode;
}
const DefaultTouchableOpacity: React.FC<TouchableOpacityProps> = ({
  children,
  handler,
  styles,
}) => {
  return (
    <TouchableOpacity onPress={handler} style={styles}>
      {children}
    </TouchableOpacity>
  );
};

export { DefaultTouchableOpacity };
