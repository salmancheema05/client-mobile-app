import { View, Text } from "react-native";
import React from "react";
import Layout from "../../layout";
import { DefaultHeading } from "../../components/headings";
import { DefaultText } from "../../components/texts";
import { CircleImage } from "../../components/images";
import { ReadOnlyRating } from "../../components/rating";
import { DefaultView } from "../../components/Views";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "./component/header";

const DoctorDetailScreen = () => {
  return (
    <Layout component={<Header />}>
      <DefaultView>
        <View
          style={{
            flexDirection: "row",
            height: hp(15),
            paddingLeft: 10,
            borderRadius: 10,
            borderBottomWidth: 2,
            borderColor: "#009eff",
          }}
        >
          <View style={{ width: wp(20) }}>
            <CircleImage
              source={require("../../images/doctorimage2.jpg")}
              styles={{
                marginTop: hp(3),
              }}
            />
          </View>
          <View
            style={{
              width: wp(67),
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: hp(3),
              }}
            >
              <View
                style={{
                  width: wp(25),
                  justifyContent: "center",
                }}
              >
                <DefaultHeading tag="h6">DR Ali khan</DefaultHeading>
              </View>
              <View style={{ width: wp(25) }}>
                <ReadOnlyRating starLenght={5} userRating={4.5} starSize={15} />
              </View>
            </View>

            <DefaultText>Dermatologist</DefaultText>
            <View style={{ flexDirection: "row", marginTop: hp(4) }}></View>
          </View>
        </View>
        <View style={{ marginTop: hp(3) }}>
          <DefaultHeading tag="h3" styles={{ color: "#009eff" }}>
            About
          </DefaultHeading>
          <DefaultText styles={{ textAlign: "left", marginTop: hp(3) }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            accusantium distinctio rem, ipsam libero, optio porro similique ab,
            voluptas molestias reiciendis. Molestias accusamus eligendi vero.
            Repellat maxime nam possimus minima? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Magni accusantium distinctio rem,
            ipsam libero, optio porro similique ab, voluptas molestias
            reiciendis. Molestias accusamus eligendi vero. Repellat maxime nam
            possimus minima? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Magni accusantium distinctio rem, ipsam libero, optio porro
            similique ab, voluptas molestias reiciendis. Molestias accusamus
            eligendi vero. Repellat maxime nam possimus minima?
          </DefaultText>
        </View>
        <View style={{ marginTop: hp(10) }}>
          <View
            style={{
              marginBottom: hp(5),
              borderBottomWidth: 2,
              borderColor: "#009eff",
            }}
          >
            <DefaultHeading tag="h3">Comments</DefaultHeading>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              borderRadius: 10,
            }}
          >
            <View style={{ width: wp(20) }}>
              <CircleImage
                source={require("../../images/doctorimage2.jpg")}
                styles={{
                  marginTop: hp(3),
                }}
              />
            </View>
            <View
              style={{
                width: wp(67),
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: hp(3),
                }}
              >
                <View
                  style={{
                    width: wp(25),
                    justifyContent: "center",
                  }}
                >
                  <DefaultHeading tag="h6">DR Ali khan</DefaultHeading>
                </View>
                <View style={{ width: wp(25) }}>
                  <ReadOnlyRating
                    starLenght={5}
                    userRating={4.5}
                    starSize={15}
                  />
                </View>
              </View>

              <DefaultText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti maxime repellat inventore porro impedit officiis
                molestiae, voluptatum dolorum sint et commodi architecto magni
                veniam odio, ratione esse eveniet? Ratione, blanditiis!
              </DefaultText>
              <View style={{ flexDirection: "row", marginTop: hp(4) }}></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              borderRadius: 10,
            }}
          >
            <View style={{ width: wp(20) }}>
              <CircleImage
                source={require("../../images/doctorimage2.jpg")}
                styles={{
                  marginTop: hp(3),
                }}
              />
            </View>
            <View
              style={{
                width: wp(67),
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: hp(3),
                }}
              >
                <View
                  style={{
                    width: wp(25),
                    justifyContent: "center",
                  }}
                >
                  <DefaultHeading tag="h6">Ali khan</DefaultHeading>
                </View>
                <View style={{ width: wp(25) }}>
                  <ReadOnlyRating
                    starLenght={5}
                    userRating={4.5}
                    starSize={15}
                  />
                </View>
              </View>

              <DefaultText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti maxime repellat inventore porro impedit officiis
                molestiae, voluptatum dolorum sint et commodi architecto magni
                veniam odio, ratione esse eveniet? Ratione, blanditiis!
              </DefaultText>
              <View style={{ flexDirection: "row", marginTop: hp(4) }}></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              borderRadius: 10,
            }}
          >
            <View style={{ width: wp(20) }}>
              <CircleImage
                source={require("../../images/doctorimage2.jpg")}
                styles={{
                  marginTop: hp(3),
                }}
              />
            </View>
            <View
              style={{
                width: wp(67),
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: hp(3),
                }}
              >
                <View
                  style={{
                    width: wp(25),
                    justifyContent: "center",
                  }}
                >
                  <DefaultHeading tag="h6"> Ali khan</DefaultHeading>
                </View>
                <View style={{ width: wp(25) }}>
                  <ReadOnlyRating
                    starLenght={5}
                    userRating={4.5}
                    starSize={15}
                  />
                </View>
              </View>

              <DefaultText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti maxime repellat inventore porro impedit officiis
                molestiae, voluptatum dolorum sint et commodi architecto magni
                veniam odio, ratione esse eveniet? Ratione, blanditiis!
              </DefaultText>
              <View style={{ flexDirection: "row", marginTop: hp(4) }}></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              borderRadius: 10,
            }}
          >
            <View style={{ width: wp(20) }}>
              <CircleImage
                source={require("../../images/doctorimage2.jpg")}
                styles={{
                  marginTop: hp(3),
                }}
              />
            </View>
            <View
              style={{
                width: wp(67),
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: hp(3),
                }}
              >
                <View
                  style={{
                    width: wp(25),
                    justifyContent: "center",
                  }}
                >
                  <DefaultHeading tag="h6"> Ali khan</DefaultHeading>
                </View>
                <View style={{ width: wp(25) }}>
                  <ReadOnlyRating
                    starLenght={5}
                    userRating={4.5}
                    starSize={15}
                  />
                </View>
              </View>

              <DefaultText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti maxime repellat inventore porro impedit officiis
                molestiae, voluptatum dolorum sint et commodi architecto magni
                veniam odio, ratione esse eveniet? Ratione, blanditiis!
              </DefaultText>
              <View style={{ flexDirection: "row", marginTop: hp(4) }}></View>
            </View>
          </View>
        </View>
      </DefaultView>
    </Layout>
  );
};

export default DoctorDetailScreen;
