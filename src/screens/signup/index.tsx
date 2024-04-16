import React from "react";
import { DefaultView } from "../../components/Views";
import { DefaultText } from "../../components/texts";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultButton } from "../../components/buttons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {
  DefaultSelectBox,
  DefaultTextInput,
} from "../../components/textinputs";
import { Email, UnLock } from "../../components/icons";

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
          paddingHorizontal: wp(4),
          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
        }}
      >
        <View style={{ marginTop: hp(15) }}>
          <View>
            <DefaultTextInput placeholder="Full Name" />
          </View>
          <View>
            <DefaultTextInput
              icon={<Email color="gray" />}
              placeholder="Email"
            />
          </View>
          <View>
            <DefaultTextInput
              icon={<UnLock color="gray" />}
              placeholder="Password"
            />
          </View>
          <View
            style={{
              marginTop: hp(5),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: wp(40) }}>
              <DefaultSelectBox
                items={[
                  { label: "Doctor", value: "doctor" },
                  { label: "Patient", value: "patient" },
                ]}
                placeholder="Who are You"
              />
            </View>
            <View style={{ width: wp(40) }}>
              <DefaultSelectBox
                items={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                placeholder="Gender"
              />
            </View>
          </View>

          <DefaultButton buttonKey="signup" styles={{ marginTop: hp(5) }} />
          <View style={{ marginTop: hp(5), marginHorizontal: wp(25) }}>
            <View style={{ flexDirection: "row" }}>
              <DefaultText styles={{ fontSize: 13, marginRight: wp(1) }}>
                You have already Account?
              </DefaultText>
              <Text
                style={{ color: "#009eff", fontSize: 13 }}
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
