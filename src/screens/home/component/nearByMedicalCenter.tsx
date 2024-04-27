import React from "react";
import { View, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultSection } from "../../../components/Views";
import DefaultHorizontalScrolling from "../../../components/Scrolling";
import {
  DefaultHeading,
  DefaultTitleWithLink,
} from "../../../components/headings";
import { DefaultImage } from "../../../components/images";
import { OutLineLocation } from "../../../components/icons";
import { DefaultText } from "../../../components/texts";
import { ReadOnlyRating } from "../../../components/rating";
import { Card } from "react-native-shadow-cards";
const NearByMedicalCenter = () => {
  return (
    <DefaultSection>
      <DefaultTitleWithLink title="NearBy Medical Center" />
      <DefaultHorizontalScrolling>
        <Card
          style={{
            backgroundColor: "white",
            width: wp(70),
            borderRadius: 20,
            marginRight: wp(10),
          }}
        >
          <DefaultImage
            source={require("../../../images/centerImage1.png")}
            styles={{
              width: "100%",
              height: 150,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderRadius: 0,
            }}
          />
          <View style={{ marginTop: hp(1), paddingHorizontal: wp(5) }}>
            <DefaultHeading>Sunrise Health Clinic</DefaultHeading>
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
              123 Oak Street,CA 98765
            </DefaultText>
          </View>
          <View
            style={{
              marginTop: hp(1.5),
              paddingHorizontal: wp(6),

              flexDirection: "row",
            }}
          >
            <DefaultText styles={{ fontWeight: "600" }}>5.0</DefaultText>
            <ReadOnlyRating
              starLenght={5}
              userRating={5}
              starSize={16}
              styles={{ marginTop: hp(0.5) }}
            />
            <DefaultText>(58 Reviews)</DefaultText>
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
              <DefaultText>2.5km/45min</DefaultText>
              <DefaultText>Hospital</DefaultText>
            </View>
          </View>
        </Card>
        <Card
          style={{
            backgroundColor: "white",
            width: wp(70),
            borderRadius: 20,
            marginRight: wp(10),
          }}
        >
          <DefaultImage
            source={require("../../../images/centerImage1.png")}
            styles={{
              width: "100%",
              height: 150,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderRadius: 0,
            }}
          />
          <View style={{ marginTop: hp(1), paddingHorizontal: wp(5) }}>
            <DefaultHeading>Sunrise Health Clinic</DefaultHeading>
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
              123 Oak Street,CA 98765
            </DefaultText>
          </View>
          <View
            style={{
              marginTop: hp(1.5),
              paddingHorizontal: wp(6),

              flexDirection: "row",
            }}
          >
            <DefaultText styles={{ fontWeight: "600" }}>5.0</DefaultText>
            <ReadOnlyRating
              starLenght={5}
              userRating={5}
              starSize={16}
              styles={{ marginTop: hp(0.5) }}
            />
            <DefaultText>(58 Reviews)</DefaultText>
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
              <DefaultText>2.5km/45min</DefaultText>
              <DefaultText>Hospital</DefaultText>
            </View>
          </View>
        </Card>
        <Card
          style={{
            backgroundColor: "white",
            width: wp(70),
            borderRadius: 20,
            marginRight: wp(10),
          }}
        >
          <DefaultImage
            source={require("../../../images/centerImage1.png")}
            styles={{
              width: "100%",
              height: 150,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderRadius: 0,
            }}
          />
          <View style={{ marginTop: hp(1), paddingHorizontal: wp(5) }}>
            <DefaultHeading>Sunrise Health Clinic</DefaultHeading>
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
              123 Oak Street,CA 98765
            </DefaultText>
          </View>
          <View
            style={{
              marginTop: hp(1.5),
              paddingHorizontal: wp(6),

              flexDirection: "row",
            }}
          >
            <DefaultText styles={{ fontWeight: "600" }}>5.0</DefaultText>
            <ReadOnlyRating
              starLenght={5}
              userRating={5}
              starSize={16}
              styles={{ marginTop: hp(0.5) }}
            />
            <DefaultText>(58 Reviews)</DefaultText>
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
              <DefaultText>2.5km/45min</DefaultText>
              <DefaultText>Hospital</DefaultText>
            </View>
          </View>
        </Card>
        <Card
          style={{
            backgroundColor: "white",
            width: wp(70),
            borderRadius: 20,
            marginRight: wp(10),
          }}
        >
          <DefaultImage
            source={require("../../../images/centerImage1.png")}
            styles={{
              width: "100%",
              height: 150,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderRadius: 0,
            }}
          />
          <View style={{ marginTop: hp(1), paddingHorizontal: wp(5) }}>
            <DefaultHeading>Sunrise Health Clinic</DefaultHeading>
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
              123 Oak Street,CA 98765
            </DefaultText>
          </View>
          <View
            style={{
              marginTop: hp(1.5),
              paddingHorizontal: wp(6),

              flexDirection: "row",
            }}
          >
            <DefaultText styles={{ fontWeight: "600" }}>5.0</DefaultText>
            <ReadOnlyRating
              starLenght={5}
              userRating={5}
              starSize={16}
              styles={{ marginTop: hp(0.5) }}
            />
            <DefaultText>(58 Reviews)</DefaultText>
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
              <DefaultText>2.5km/45min</DefaultText>
              <DefaultText>Hospital</DefaultText>
            </View>
          </View>
        </Card>
      </DefaultHorizontalScrolling>
    </DefaultSection>
  );
};

export default NearByMedicalCenter;
