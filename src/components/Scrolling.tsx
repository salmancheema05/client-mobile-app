import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
interface ScrollingProps {
  children?: React.ReactNode;
  styles?: object;
}
const DefaultHorizontalScrolling: React.FC<ScrollingProps> = ({
  children,
  styles,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: wp(1.5) }}
    >
      {children}
    </ScrollView>
  );
};
const ScrollVertical: React.FC<ScrollingProps> = ({ children }) => {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
export { DefaultHorizontalScrolling, ScrollVertical };
