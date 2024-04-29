import {
  TextStyle,
  ImageStyle,
  StyleProp,
  ImageSourcePropType,
  View,
} from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultHeading } from "./headings";
import { DefaultText } from "./texts";
import { DefaultImage } from "./images";
import { ReadOnlyRating } from "./rating";
import { Card } from "react-native-shadow-cards";
import { Heart, OutLineHeart, OutLineLocation } from "./icons";
import { DefaultTouchableOpacity } from "./touchableOpacity";

interface ClinicCardProps {
  source: ImageSourcePropType;
  name: string;
  ClinicAddress: string;
  distance?: string;
  distanceTime?: string;
  rating: number;
  totalViews: number;
  styles?: object;
  handler?: () => void;
}
interface DoctorCardProps extends ClinicCardProps {
  departmentName: string;
  totalRating: string;
  favoritesIcone?: boolean;
  doctorDetail?: () => void;
}
export const ClinicCard: React.FC<ClinicCardProps> = ({
  source,
  name,
  ClinicAddress,
  distance,
  distanceTime,
  rating,
  totalViews,
  styles,
}) => {
  return (
    <Card
      style={{
        backgroundColor: "white",
        width: wp(70),
        borderRadius: 20,
        marginRight: wp(10),
        ...styles,
      }}
    >
      <DefaultImage
        source={source}
        styles={{
          width: "100%",
          height: 150,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderRadius: 0,
        }}
      />
      <View style={{ marginTop: hp(1), paddingHorizontal: wp(5) }}>
        <DefaultHeading>{name}</DefaultHeading>
      </View>
      <View
        style={{
          marginTop: hp(1.5),
          flexDirection: "row",
          paddingHorizontal: wp(3),
        }}
      >
        <OutLineLocation />

        <DefaultText styles={{ marginTop: hp(0.5) }}>
          {ClinicAddress}
        </DefaultText>
      </View>
      <View
        style={{
          marginTop: hp(1.5),
          paddingHorizontal: wp(6),

          flexDirection: "row",
        }}
      >
        <DefaultText styles={{ fontWeight: "600" }}>{rating}</DefaultText>
        <ReadOnlyRating
          starLenght={5}
          userRating={rating}
          starSize={16}
          styles={{ marginTop: hp(0.5) }}
        />
        <DefaultText>({totalViews} Reviews)</DefaultText>
      </View>
      <View
        style={{
          marginVertical: hp(3),
          borderTopWidth: 0.5,
          marginHorizontal: wp(5),
        }}
      >
        <View
          style={{
            marginTop: hp(3),
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: wp(3),
          }}
        >
          <DefaultText>
            {distance}/{distanceTime}
          </DefaultText>
          <DefaultText>Hospital</DefaultText>
        </View>
      </View>
    </Card>
  );
};

export const DoctorProfileCard: React.FC<DoctorCardProps> = ({
  name,
  departmentName,
  ClinicAddress,
  rating,
  totalViews,
  totalRating,
  source,
  handler,
  favoritesIcone = false,
  doctorDetail,
}) => {
  return (
    <DefaultTouchableOpacity handler={doctorDetail}>
      <Card
        style={{
          width: "100%",
          height: hp(18),
          marginBottom: wp(5),
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "35%",
            height: hp(18),
            paddingHorizontal: wp(3),
            paddingVertical: hp(1),
          }}
        >
          <DefaultImage source={source} />
        </View>
        <View
          style={{
            width: "65%",
            marginVertical: hp(1),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: hp(1),
              borderBottomWidth: 0.5,
              paddingHorizontal: wp(1.4),
            }}
          >
            <View>
              <DefaultHeading>Dr.{name}</DefaultHeading>
            </View>
            <DefaultTouchableOpacity
              styles={{ paddingRight: wp(2), paddingTop: hp(0.5) }}
              handler={handler}
            >
              {favoritesIcone == false ? (
                <OutLineHeart size={20} />
              ) : (
                <Heart size={20} />
              )}
            </DefaultTouchableOpacity>
          </View>
          <View style={{ marginTop: hp(1), paddingHorizontal: wp(1.4) }}>
            <DefaultHeading>{departmentName}</DefaultHeading>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: hp(1),
            }}
          >
            <OutLineLocation size={22} />

            <DefaultText>{ClinicAddress}</DefaultText>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: hp(1),
            }}
          >
            <View
              style={{
                borderRightWidth: 0.5,
                paddingRight: wp(3),
                borderRightColor: "hsla(220, 16%, 50%, 1)",
              }}
            >
              <ReadOnlyRating
                starLenght={1}
                userRating={rating}
                starSize={16}
                viewRating={totalRating}
              />
            </View>
            <View style={{ paddingLeft: hp(1) }}>
              <DefaultText>{totalViews} Reviews</DefaultText>
            </View>
          </View>
        </View>
      </Card>
    </DefaultTouchableOpacity>
  );
};
