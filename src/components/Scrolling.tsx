import { ScrollView, View } from "react-native";
import React from "react";
interface ScrollingProps {
  children?: React.ReactNode;
  styles?: object;
}
const DefaultHorizontalScrolling: React.FC<ScrollingProps> = ({
  children,
  styles,
}) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        marginTop: 10,
        ...styles,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export default DefaultHorizontalScrolling;
