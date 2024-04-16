import { View, TextInput, TextInputProps } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// import RNPickerSelect from "react-native-picker-select";
interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
  styles?: object;
}
interface SelectProps extends TextInputProps {
  items: { label: string; value: string }[];
  placeholder: string;
  styles?: object;
}
const DefaultTextInput: React.FC<InputProps> = ({ icon, styles, ...props }) => {
  return (
    <View
      style={{
        backgroundColor: "#f1f4f5",
        width: "100%",
        padding: 10,
        borderRadius: 20,
        marginTop: hp(3),
        flexDirection: "row",
        ...styles,
      }}
    >
      <View
        style={{
          marginTop: 5,
          marginHorizontal: 5,
        }}
      >
        {icon}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          marginLeft: 5,
        }}
      >
        <TextInput {...props} />
      </View>
    </View>
  );
};

const DefaultSelectBox: React.FC<SelectProps> = ({
  items,
  placeholder,
  styles,
  ...props
}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 10,
        ...styles,
      }}
    >
      {/* <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={items}
        placeholder={{
          label: placeholder,
          value: null,
          fontSize: 10,
          color: "red",
        }}
      /> */}
    </View>
  );
};
export { DefaultTextInput, DefaultSelectBox };
