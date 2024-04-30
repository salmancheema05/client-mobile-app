import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DefaultSection, DefaultView } from "../../components/Views";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultButton } from "../../components/buttons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { DefaultTextInput } from "../../components/textinputs";
import { Email, UnLock, User } from "../../components/icons";
import { google, logo, facebook } from "../../importAllImages";
import { DefaultImage } from "../../components/images";
import { DefaultHeading } from "../../components/headings";
import RadioButton from "../../components/radioButton";

type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;

const SignUp = () => {
  const navigation: NavigationType = useNavigation();
  const [radioGender, setRadioGender] = useState({ value: null });
  return (
    <DefaultView>
      <View style={{ marginTop: hp(5), alignItems: "center" }}>
        <DefaultImage
          source={logo}
          styles={{ width: wp(20), height: hp(10) }}
        />
        <DefaultHeading styles={{ fontSize: 20, marginTop: hp(3) }}>
          HealthPal
        </DefaultHeading>
      </View>
      <View style={{ marginTop: hp(5) }}>
        <DefaultTextInput icon={<User />} placeholder="Full Name" />
      </View>
      <View style={{ marginTop: hp(5) }}>
        <DefaultTextInput icon={<Email />} placeholder="Email" />
      </View>
      <View style={{ marginTop: hp(3) }}>
        <DefaultTextInput icon={<UnLock />} placeholder="Password" />
      </View>
      <View
        style={{
          width: "100%",
          marginTop: hp(2),
          flexDirection: "row",
        }}
      >
        <RadioButton
          hander={() => setRadioGender({ value: "male" })}
          selected={radioGender.value === "male"}
          name="Male"
        />
        <RadioButton
          hander={() => setRadioGender({ value: "female" })}
          selected={radioGender.value === "female"}
          name="Female"
        />
      </View>
      <View style={{ marginTop: hp(3) }}>
        <DefaultButton buttonKey="SignIn" />
      </View>

      <DefaultSection>
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: wp(3),
            marginTop: hp(3),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <DefaultHeading styles={{ marginRight: wp(1) }}>
              Don't have an account yet?
            </DefaultHeading>
            <DefaultHeading
              styles={{ color: "hsla(220, 88%, 65%, 1)" }}
              handler={() => navigation.navigate("Login")}
            >
              Sign in
            </DefaultHeading>
          </View>
        </View>
      </DefaultSection>
    </DefaultView>
  );
};

export default SignUp;
