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
        Login
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
        <View style={{ marginTop: hp(20) }}>
          <View style={{}}>
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
          <DefaultButton
            buttonKey="login"
            handler={() => navigation.navigate("DoctorAdmin")}
            styles={{ marginTop: hp(5) }}
          />
          <View style={{ marginTop: hp(5), marginHorizontal: wp(25) }}>
            <View style={{ flexDirection: "row" }}>
              <DefaultText styles={{ fontSize: 13, marginRight: wp(1) }}>
                You don't have Account?
              </DefaultText>
              <Text
                style={{ color: "#009eff", fontSize: 13 }}
                onPress={() => navigation.navigate("Signup")}
              >
                Signup
              </Text>
            </View>
          </View>
        </View>
      </View>
    </DefaultView>
  );
};

export default Login;
