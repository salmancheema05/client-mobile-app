import React from "react";
import { View, ScrollView, SafeAreaView, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BoxWithShadow } from "../../../components/Views";
import { DefaultHeading } from "../../../components/headings";
import { DefaultText } from "../../../components/texts";
import { DefaultRating, ReadOnlyRating } from "../../../components/rating";

const FeedBack = () => {
  return (
    <View style={{ height: hp(85) }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              paddingHorizontal: hp(3),
              paddingBottom: hp(5),
            }}
          >
            <View
              style={{
                marginVertical: hp(3),
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <DefaultHeading tag="h3">Feed Back</DefaultHeading>
              </View>
              <View style={{ marginTop: hp(3) }}>
                <DefaultRating />
              </View>

              <TextInput
                multiline
                numberOfLines={3}
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 5,
                  paddingHorizontal: wp(5),
                  fontSize: 16,
                  minHeight: 100,
                  marginTop: hp(5),
                }}
                placeholder="Enter your Feed Back"
              />
            </View>
            <View
              style={{
                marginVertical: hp(3),
                borderBottomWidth: 0.5,
                paddingBottom: hp(3),
              }}
            >
              <DefaultHeading tag="h3">Commit</DefaultHeading>
            </View>
            <BoxWithShadow
              styles={{
                flexDirection: "row",
                width: wp(90),
                borderRadius: 10,
                marginRight: wp(5),
                paddingHorizontal: wp(5),
                paddingBottom: hp(3),
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
                    paddingTop: 30,
                  }}
                >
                  Ali khan
                </DefaultHeading>
                <ReadOnlyRating starLenght={5} userRating={4.5} starSize={15} />
                <DefaultText styles={{ textAlign: "left" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry
                </DefaultText>
              </View>
            </BoxWithShadow>
            <BoxWithShadow
              styles={{
                flexDirection: "row",
                width: wp(90),
                borderRadius: 10,
                marginRight: wp(5),
                paddingHorizontal: wp(5),
                paddingBottom: hp(3),
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
                    paddingTop: 30,
                  }}
                >
                  Ali khan
                </DefaultHeading>
                <ReadOnlyRating starLenght={5} userRating={4.5} starSize={15} />
                <DefaultText styles={{ textAlign: "left" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry
                </DefaultText>
              </View>
            </BoxWithShadow>
            <BoxWithShadow
              styles={{
                flexDirection: "row",
                width: wp(90),
                borderRadius: 10,
                marginRight: wp(5),
                paddingHorizontal: wp(5),
                paddingBottom: hp(3),
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
                    paddingTop: 30,
                  }}
                >
                  Ali khan
                </DefaultHeading>
                <ReadOnlyRating starLenght={5} userRating={4.5} starSize={15} />
                <DefaultText styles={{ textAlign: "left" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry
                </DefaultText>
              </View>
            </BoxWithShadow>
            <BoxWithShadow
              styles={{
                flexDirection: "row",
                width: wp(90),
                borderRadius: 10,
                marginRight: wp(5),
                paddingHorizontal: wp(5),
                paddingBottom: hp(3),
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
                    paddingTop: 30,
                  }}
                >
                  Ali khan
                </DefaultHeading>
                <ReadOnlyRating starLenght={5} userRating={4.5} starSize={15} />
                <DefaultText styles={{ textAlign: "left" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry
                </DefaultText>
              </View>
            </BoxWithShadow>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default FeedBack;
