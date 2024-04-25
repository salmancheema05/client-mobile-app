import React from "react";
import { View, TextInput, Text } from "react-native";
import {
  DefaultGrid,
  DefaultSection,
  DefaultView,
} from "../../components/Views";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Bell, Location, Search } from "../../components/icons";
import { DefaultText } from "../../components/texts";
import { DefaultImage } from "../../components/images";
import CategoryItem from "../../components/categories";
const HomeScreen = () => {
  return (
    <DefaultView>
      <View
        style={{
          width: "100%",
          height: hp(10),
          flexDirection: "row",
        }}
      >
        <View style={{ width: "60%", height: hp(10) }}>
          <View
            style={{
              width: "100%",
              height: hp(5),
              justifyContent: "flex-end",
              marginBottom: hp(1),
              paddingLeft: hp(1),
            }}
          >
            <DefaultText>Location</DefaultText>
          </View>
          <View
            style={{
              width: "100%",
              height: hp(5),
              flexDirection: "row",
            }}
          >
            <View>
              <Location />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "hsla(220, 16%, 50%, 1)",
                }}
              >
                Seattle,USA
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "40%",
            height: hp(10),
            alignItems: "flex-end",
            marginTop: hp(4),
          }}
        >
          <View
            style={{
              backgroundColor: "hsla(220, 1%, 96%, 1)",
              width: wp(10),
              height: wp(10),
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Bell />
          </View>
        </View>
      </View>
      <DefaultSection
        styles={{
          backgroundColor: "hsla(220, 1%, 96%, 1)",
          paddingHorizontal: wp(3),
          paddingVertical: hp(2),
          borderRadius: 10,

          flexDirection: "row",
        }}
      >
        <Search color="hsla(218, 11%, 69%, 1)" />
        <TextInput
          style={{ paddingHorizontal: wp(3), fontWeight: "400" }}
          placeholder="Search Doctor..."
        />
      </DefaultSection>
      <DefaultSection>
        <View
          style={{
            width: "100%",
            height: hp(4),
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              color: "hsla(212, 52%, 23%, 1)",
            }}
          >
            Categories
          </Text>
          <DefaultText>See All</DefaultText>
        </View>
        <DefaultGrid styles={{ justifyContent: "space-between" }}>
          <CategoryItem
            source={require("../../images/category1.png")}
            bgcolor="hsla(357, 33%, 86%, 1)"
            name=" Dentistry"
          />
          <CategoryItem
            source={require("../../images/category2.png")}
            bgcolor="hsla(134, 24%, 80%, 1)"
            name=" Cardiolo.."
          />
          <CategoryItem
            source={require("../../images/category1.png")}
            bgcolor="hsla(24, 49%, 80%, 1)"
            name="Pulmono.."
          />
          <CategoryItem
            source={require("../../images/category1.png")}
            bgcolor="hsla(255, 21%, 70%, 1)"
            name="General"
          />
          <CategoryItem
            source={require("../../images/category1.png")}
            bgcolor="hsla(186, 50%, 40%, 1)"
            name=" Neurolo.."
          />
          <CategoryItem
            source={require("../../images/category1.png")}
            bgcolor="hsla(258, 65%, 58%, 1)"
            name="Gastroen.."
          />
          <CategoryItem
            source={require("../../images/category7.png")}
            bgcolor="hsla(1, 18%, 80%, 1)"
            name="Laborato.."
          />
          <CategoryItem
            source={require("../../images/category8.png")}
            bgcolor="hsla(191, 38%, 76%, 1))"
            name=" Vaccinat.."
          />
        </DefaultGrid>
      </DefaultSection>
    </DefaultView>
  );
};

export default HomeScreen;
