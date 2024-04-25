import React from "react";
import { View, Text, ImageSourcePropType } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultText } from "./texts";
import { DefaultImage } from "./images";
interface CategoryProps {
  bgcolor: string;
  name: string;
  source: ImageSourcePropType;
}
const CategoryItem: React.FC<CategoryProps> = ({ source, name, bgcolor }) => {
  return (
    <View
      style={{
        width: "22%",
        height: hp(15),
        marginVertical: hp(1),
      }}
    >
      <View
        style={{
          backgroundColor: bgcolor,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          width: "100%",

          height: hp(10),
        }}
      >
        <DefaultImage source={source} styles={{ width: 35, height: 35 }} />
      </View>
      <DefaultText
        styles={{ textAlign: "center", fontSize: 15, marginTop: hp(1) }}
      >
        {name}
      </DefaultText>
    </View>
  );
};

export default CategoryItem;
