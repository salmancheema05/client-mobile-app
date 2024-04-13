import { View, Text } from "react-native";
import React from "react";
import { CircleImage } from "../../../components/images";
import { ReadOnlyRating } from "../../../components/rating";
import {
  DefaultHeading,
  DefaultTitleWithLink,
} from "../../../components/headings";
import { DefaultText } from "../../../components/texts";
import DefaultCards from "../../../components/cards";
import { BoxWithShadow, DefaultSection } from "../../../components/Views";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DefaultHorizontalScrolling from "../../../components/Scrolling";

const PatientSay = () => {
  return (
    <DefaultSection>
      <DefaultTitleWithLink title="Patients Reviews" />
      <DefaultHorizontalScrolling>
        <BoxWithShadow
          styles={{
            flexDirection: "row",
            width: wp(70),
            height: hp(20),
            borderRadius: 10,
            marginRight: wp(5),
          }}
        >
          <View
            style={{
              width: wp(70),
              paddingHorizontal: wp(2),
            }}
          >
            <DefaultHeading
              tag="h4"
              styles={{
                paddingLeft: 10,
                paddingTop: 30,
              }}
            >
              Ali khan
            </DefaultHeading>
            <ReadOnlyRating starLenght={5} userRating={4.5} starSize={15} />
            <DefaultText
              styles={{ paddingHorizontal: wp(3), textAlign: "left" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry....
            </DefaultText>
          </View>
        </BoxWithShadow>
        <BoxWithShadow
          styles={{
            flexDirection: "row",
            width: wp(70),
            height: hp(20),
            borderRadius: 10,
            marginRight: wp(5),
          }}
        >
          <View
            style={{
              width: wp(70),
              paddingHorizontal: wp(2),
            }}
          >
            <DefaultHeading
              tag="h4"
              styles={{
                paddingLeft: 10,
                paddingTop: 30,
              }}
            >
              Ali khan
            </DefaultHeading>
            <ReadOnlyRating starLenght={5} userRating={4.5} starSize={15} />
            <DefaultText
              styles={{ paddingHorizontal: wp(3), textAlign: "left" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry....
            </DefaultText>
          </View>
        </BoxWithShadow>
        <BoxWithShadow
          styles={{
            flexDirection: "row",
            width: wp(70),
            height: hp(20),
            borderRadius: 10,
            marginRight: wp(5),
          }}
        >
          <View
            style={{
              width: wp(70),
              paddingHorizontal: wp(2),
            }}
          >
            <DefaultHeading
              tag="h4"
              styles={{
                paddingLeft: 10,
                paddingTop: 30,
              }}
            >
              Ali khan
            </DefaultHeading>
            <ReadOnlyRating starLenght={5} userRating={4.5} starSize={15} />
            <DefaultText
              styles={{ paddingHorizontal: wp(3), textAlign: "left" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry....
            </DefaultText>
          </View>
        </BoxWithShadow>
        <BoxWithShadow
          styles={{
            flexDirection: "row",
            width: wp(70),
            height: hp(20),
            borderRadius: 10,
            marginRight: wp(5),
          }}
        >
          <View
            style={{
              width: wp(70),
              paddingHorizontal: wp(2),
            }}
          >
            <DefaultHeading
              tag="h4"
              styles={{
                paddingLeft: 10,
                paddingTop: 30,
              }}
            >
              Ali khan
            </DefaultHeading>
            <ReadOnlyRating starLenght={5} userRating={4.5} starSize={15} />
            <DefaultText
              styles={{ paddingHorizontal: wp(3), textAlign: "left" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry....
            </DefaultText>
          </View>
        </BoxWithShadow>
      </DefaultHorizontalScrolling>
    </DefaultSection>
  );
};

export default PatientSay;
