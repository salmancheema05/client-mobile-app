import { View, TextInput, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DefaultView } from "../../components/Views";
import { DefaultText } from "../../components/texts";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultButton } from "../../components/buttons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;
const SignUp = () => {
  const navigation: NavigationType = useNavigation();
  return (
    <DefaultView
      styles={{
        backgroundColor: "#009eff",
        marginBottom: 0,
        marginHorizontal: 0,
      }}
    >
      <DefaultText
        styles={{
          marginTop: hp(10),
          marginBottom: hp(5),
          fontSize: 30,
          marginHorizontal: wp(10),
          color: "white",
          fontWeight: "900",
        }}
      >
        Signup
      </DefaultText>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",

          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
        }}
      >
        <View style={{ marginTop: hp(20) }}>
          <TextInput
            placeholder="Email"
            style={{
              backgroundColor: "#f1f4f5",
              height: hp(8),
              margin: 12,
              padding: 10,
            }}
          />
          <TextInput
            placeholder="Password"
            style={{
              backgroundColor: "#f1f4f5",
              height: hp(8),
              margin: 12,
              padding: 10,
            }}
          />
          <DefaultButton
            buttonKey="login"
            styles={{ marginTop: hp(5), marginHorizontal: wp(5) }}
          />
          <View style={{ marginTop: hp(5), marginHorizontal: wp(25) }}>
            <View style={{ flexDirection: "row" }}>
              <Text>You have already Account? </Text>
              <Text
                style={{ color: "#009eff" }}
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </View>
          </View>
        </View>
      </View>
    </DefaultView>
  );
};

export default SignUp;
