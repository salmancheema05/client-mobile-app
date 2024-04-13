import { ScrollView, View } from "react-native";
import React from "react";
interface ScrollingProps {
  children?: React.ReactNode;
}
const DefaultHorizontalScrolling: React.FC<ScrollingProps> = ({ children }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        marginTop: 10,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export default DefaultHorizontalScrolling;
