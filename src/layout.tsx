import {
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  ViewStyle,
} from "react-native";
import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultImage } from "./components/images";
import { DefaultHeading } from "./components/headings";
import { Ambulance, Clinic, Doctor } from "./components/icons";

interface LayoutProps {
  children?: React.ReactNode;
  headerShow?: boolean;
  component?: React.ReactNode;
  headerstyles?: ViewStyle;
  emergencyBox?: boolean;
}
type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;

const Layout: React.FC<LayoutProps> = ({
  children,
  component = null,
  headerstyles,
  emergencyBox = false,
}) => {
  const navigation: NavigationType = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {component == null ? (
          <View
            style={{
              backgroundColor: "white",
              height: hp(28),
              justifyContent: "center",
              alignItems: "center",
              ...headerstyles,
            }}
          >
            <DefaultImage
              source={require("./images/logo.png")}
              styles={{ width: 60, height: 60, marginTop: hp(3) }}
            />

            <TextInput
              placeholder="Search"
              style={{
                backgroundColor: "#f1f4f5",
                width: wp(85),
                margin: 12,
                padding: 10,
                borderRadius: 20,
                marginTop: hp(3),
              }}
            />
          </View>
        ) : (
          component
        )}
        {emergencyBox ? (
          <View
            style={{
              backgroundColor: "#009eff",
              width: wp(100),
              height: hp(35),
              marginTop: hp(-6),
              paddingHorizontal: wp(10),
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              zIndex: -1,
            }}
          >
            <View>
              <DefaultHeading
                tag="h3"
                styles={{
                  color: "white",
                  marginTop: hp(9),
                  marginBottom: hp(2),
                }}
              >
                Emergency
              </DefaultHeading>
            </View>
            <View
              style={{
                marginTop: hp(2),
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "white",
                    width: wp(20),
                    height: hp(10),
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ambulance />
                </View>
                <DefaultHeading
                  tag="h6"
                  styles={{ color: "white", marginTop: hp(2) }}
                >
                  Ambulance
                </DefaultHeading>
              </View>
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "white",
                    width: wp(20),
                    height: hp(10),
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Doctor />
                </View>
                <DefaultHeading
                  tag="h6"
                  styles={{ color: "white", marginTop: hp(2) }}
                >
                  Doctor
                </DefaultHeading>
              </View>
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "white",
                    width: wp(20),
                    height: hp(10),
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Clinic />
                </View>
                <DefaultHeading
                  tag="h6"
                  styles={{ color: "white", marginTop: hp(2) }}
                >
                  Clinic
                </DefaultHeading>
              </View>
            </View>
          </View>
        ) : null}
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
