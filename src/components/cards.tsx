import {
  TextStyle,
  ImageStyle,
  StyleProp,
  ImageSourcePropType,
  View,
} from "react-native";
import React from "react";
import { DefaultHeading } from "./headings";
import { DefaultText } from "./texts";
import { CircleImage, DefaultImage } from "./images";
import { ReadOnlyRating } from "./rating";
import { stringConvertInterger } from "../../ulitity/functions";

interface CardsProps {
  tag?: string;
  handlers?: { text?: () => void; heading?: () => void };
  styles?: {
    text?: TextStyle;
    heading?: TextStyle;
    image?: StyleProp<ImageStyle>;
  };
  source?: ImageSourcePropType;
  heading?: string;
  text?: string;
  children?: React.ReactNode;
}
interface DoctorCardProps {
  image?: ImageSourcePropType;
  name: string;
  departmentName: string;
  rating: string;
  starLenght?: number;
}
const DefaultCards: React.FC<CardsProps> = ({
  tag = "h3",
  handlers = { text: null, heading: null },
  styles = {
    text: { textAlign: "justify" },
    heading: { marginBottom: 20 },
    image: {},
  },
  heading,
  text,
  children,
  source = null,
}) => {
  return (
    <>
      {source ? (
        <DefaultImage
          source={source}
          styles={[{ marginBottom: 20 }, styles.image]}
        />
      ) : null}
      <DefaultHeading
        handler={handlers.heading}
        tag={tag}
        styles={styles.heading}
      >
        {heading}
      </DefaultHeading>
      <DefaultText handler={handlers.text} styles={styles.text}>
        {text}
      </DefaultText>
      {children}
    </>
  );
};

export const DoctorCard: React.FC<DoctorCardProps> = ({
  image,
  name,
  departmentName,
  rating,
  starLenght = 1,
}) => {
  const userRating = stringConvertInterger(rating, starLenght);
  return (
    <>
      <CircleImage source={image} />
      <DefaultHeading tag="h5" styles={{ marginTop: 5 }}>
        {name}
      </DefaultHeading>
      <DefaultText styles={{ marginVertical: 5 }}>{departmentName}</DefaultText>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <ReadOnlyRating
          userRating={userRating}
          viewRating={rating}
          starLenght={starLenght}
          styles={{ paddingHorizontal: 5 }}
        />
      </View>
    </>
  );
};
export default DefaultCards;
