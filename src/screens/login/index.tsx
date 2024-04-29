import React from "react";
import { View, Text } from "react-native";
import { DefaultView } from "../../components/Views";
import { DefaultText } from "../../components/texts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultButton } from "../../components/buttons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { DefaultTextInput } from "../../components/textinputs";
import { Email, UnLock } from "../../components/icons";
import { logo } from "../../importAllImages";
import { DefaultImage } from "../../components/images";
import { DefaultHeading } from "../../components/headings";

type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;

const Login = () => {
  const navigation: NavigationType = useNavigation();
  return (
    <DefaultView>
      <View style={{ marginTop: hp(15), alignItems: "center" }}>
        <DefaultImage source={logo} styles={{ width: 100, height: 100 }} />
        <DefaultHeading styles={{ fontSize: 25, marginTop: hp(3) }}>
          HealthPal
        </DefaultHeading>
      </View>
      <View style={{ marginTop: hp(5) }}>
        <DefaultTextInput icon={<Email />} placeholder="Email" />
      </View>
      <View style={{ marginTop: hp(3) }}>
        <DefaultTextInput icon={<UnLock />} placeholder="Password" />
      </View>
      <View style={{ marginTop: hp(3) }}>
        <DefaultButton buttonKey="SignIn" />
      </View>
    </DefaultView>
  );
};

export default Login;
