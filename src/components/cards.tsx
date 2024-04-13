import {
  TextStyle,
  ImageStyle,
  StyleProp,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { DefaultHeading } from "./headings";
import { DefaultText } from "./texts";
import { DefaultImage } from "./images";

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

export default DefaultCards;
