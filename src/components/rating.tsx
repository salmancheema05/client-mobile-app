import { View, Text } from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
interface ReadOnlyRatingProps {
  starLenght?: number;
  starSize?: number;
  tintColor?: string;
  userRating: number;
  viewRating?: string;
  styles?: object;
}
const DefaultRating = () => {
  const [selectRating, setSelectRating] = useState(0);
  return (
    //<Text></Text>
    <Rating
      type="heart"
      ratingColor="#3498db"
      ratingBackgroundColor="#c8c7c8"
      ratingCount={5}
      imageSize={30}
      fractions={1}
      jumpValue={0.5}
      startingValue={selectRating}
      onFinishRating={(rating) => {
        console.log(rating);
        setSelectRating(rating);
      }}
      style={{ paddingVertical: 10 }}
    />
  );
};
const ReadOnlyRating: React.FC<ReadOnlyRatingProps> = ({
  starLenght = 1,
  starSize = 20,
  tintColor,
  userRating = null,
  viewRating = "3.5",
  styles,
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Rating
        readonly
        ratingCount={starLenght}
        imageSize={starSize}
        startingValue={userRating}
        // tintColor={tintColor}
        style={{ paddingVertical: 10, ...styles }}
      />
      <Text style={{ paddingHorizontal: 5 }}>{viewRating}</Text>
    </View>
  );
};
export { DefaultRating, ReadOnlyRating };