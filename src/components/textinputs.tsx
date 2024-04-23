import React, { useState } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import DropDownPicker, { ItemType } from "react-native-dropdown-picker";
interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
  styles?: object;
}
interface SelectProps extends TextInputProps {
  items: { label: string; value: string }[];
  placeholder?: string;
  styles?: object;
}
interface Item {
  label: string;
  value: string;
}
const DefaultTextInput: React.FC<InputProps> = ({
  icon = null,
  styles,
  ...props
}) => {
  return (
    <View
      style={{
        width: "100%",
        padding: 10,
        borderRadius: 20,
        marginTop: hp(3),
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: "lightgray",
        ...styles,
      }}
    >
      {icon ? (
        <View
          style={{
            marginTop: 5,
            marginHorizontal: 5,
          }}
        >
          {icon}
        </View>
      ) : null}

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
  const [open, setOpen] = useState<boolean>(false);
  const [singleValue, setSingleValue] = useState<string | null>(null);
  const [menu, setMenu] = useState<Item[]>(items);
  return (
    <View>
      <DropDownPicker
        open={open}
        value={singleValue}
        items={menu}
        setOpen={setOpen}
        setValue={setSingleValue}
        setItems={setMenu}
        placeholder={placeholder}
        multiple={false}
        style={{
          borderColor: "lightgray",
          borderRadius: 20,
          borderWidth: 1,
          backgroundColor: "white",
          marginTop: 20,
          paddingHorizontal: 10,
          width: "100%",
        }}
        dropDownContainerStyle={{
          backgroundColor: "white",
          borderColor: "lightgray",
          borderRadius: 20,
          marginTop: 10,
        }}
        listItemContainerStyle={{
          borderColor: "red",
        }}
      />
    </View>
  );
};
export { DefaultTextInput, DefaultSelectBox };
