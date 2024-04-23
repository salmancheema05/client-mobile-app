import { View, Text } from "react-native";
import React from "react";
import { DefaultView } from "../../components/Views";
import { LeftArrow } from "../../components/icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { DefaultTouchableOpacity } from "../../components/touchableOpacity";
import { DefaultHeading } from "../../components/headings";
import {
  DefaultTextInput,
  DefaultSelectBox,
} from "../../components/textinputs";
import { DefaultButton } from "../../components/buttons";

type NavigationType = NavigationProp<
  Record<string, object | undefined>,
  string,
  any,
  any,
  any
>;
const PatientSetting = () => {
  const navigation: NavigationType = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <DefaultView
        styles={{
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <DefaultTouchableOpacity
            handler={() => navigation.navigate("PatientAdmin")}
            styles={{ marginRight: 10, marginTop: 2 }}
          >
            <LeftArrow color="black" size={20} />
          </DefaultTouchableOpacity>
          <DefaultHeading tag="h4">Profile Setting</DefaultHeading>
        </View>
        <View>
          <DefaultTextInput placeholder="Full Name" />
          <DefaultTextInput placeholder="Email" />
          <DefaultTextInput placeholder="Password" />
          <DefaultTextInput placeholder="Blood Group" />
          <DefaultSelectBox
            items={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            placeholder="Gender"
          />
          <View style={{ padding: 10, paddingVertical: 20 }}>
            <DefaultButton buttonKey="update" />
          </View>
        </View>
      </DefaultView>
    </View>
  );
};

export default PatientSetting;
