import React from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BoxWithShadow } from "../../../components/Views";
import { DefaultTouchableOpacity } from "../../../components/touchableOpacity";
import { DefaultHeading } from "../../../components/headings";
import { DefaultText } from "../../../components/texts";
import { DefaultImage } from "../../../components/images";
const Appointments = () => {
  return (
    <>
      <BoxWithShadow
        styles={{
          backgroundColor: "white",
          width: wp(90),
          height: hp(16),
          marginTop: hp(3),
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginHorizontal: wp(2),
            marginVertical: wp(2),
            width: wp(22),
            height: hp(15),
          }}
        >
          <DefaultImage
            source={require("../../../images/doctorimage2.jpg")}
            styles={{ width: 80, height: 110 }}
          />
        </View>
        <View
          style={{
            width: wp(63),
            height: hp(11),
            marginTop: hp(1),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <DefaultHeading tag="h4">Farooq khan</DefaultHeading>
            <DefaultHeading
              tag="h6"
              styles={{ marginRight: wp(3), color: "red" }}
            >
              Pennding
            </DefaultHeading>
          </View>
          <View
            style={{
              width: wp(63),
              height: hp(7),
              marginTop: hp(1),
            }}
          >
            <DefaultText>0000000000</DefaultText>
            <DefaultText styles={{ marginTop: hp(1) }}>
              Mar 20 2024,10:00 am
            </DefaultText>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading
                tag="h6"
                styles={{ color: "#009eff", marginRight: wp(3) }}
              >
                Approve
              </DefaultHeading>
            </DefaultTouchableOpacity>
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading tag="h6" styles={{ color: "red" }}>
                Cencel
              </DefaultHeading>
            </DefaultTouchableOpacity>
          </View>
        </View>
      </BoxWithShadow>
      <BoxWithShadow
        styles={{
          backgroundColor: "white",
          width: wp(90),
          height: hp(16),
          marginTop: hp(3),
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginHorizontal: wp(2),
            marginVertical: wp(2),
            width: wp(22),
            height: hp(15),
          }}
        >
          <DefaultImage
            source={require("../../../images/doctorimage2.jpg")}
            styles={{ width: 80, height: 110 }}
          />
        </View>
        <View
          style={{
            width: wp(63),
            height: hp(11),
            marginTop: hp(1),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <DefaultHeading tag="h4">Farooq khan</DefaultHeading>
            <DefaultHeading
              tag="h6"
              styles={{ marginRight: wp(3), color: "red" }}
            >
              Pennding
            </DefaultHeading>
          </View>
          <View
            style={{
              width: wp(63),
              height: hp(7),
              marginTop: hp(1),
            }}
          >
            <DefaultText>0000000000</DefaultText>
            <DefaultText styles={{ marginTop: hp(1) }}>
              Mar 20 2024,10:00 am
            </DefaultText>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading
                tag="h6"
                styles={{ color: "#009eff", marginRight: wp(3) }}
              >
                Approve
              </DefaultHeading>
            </DefaultTouchableOpacity>
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading tag="h6" styles={{ color: "red" }}>
                Cencel
              </DefaultHeading>
            </DefaultTouchableOpacity>
          </View>
        </View>
      </BoxWithShadow>
      <BoxWithShadow
        styles={{
          backgroundColor: "white",
          width: wp(90),
          height: hp(16),
          marginTop: hp(3),
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginHorizontal: wp(2),
            marginVertical: wp(2),
            width: wp(22),
            height: hp(15),
          }}
        >
          <DefaultImage
            source={require("../../../images/doctorimage2.jpg")}
            styles={{ width: 80, height: 110 }}
          />
        </View>
        <View
          style={{
            width: wp(63),
            height: hp(11),
            marginTop: hp(1),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <DefaultHeading tag="h4">Farooq khan</DefaultHeading>
            <DefaultHeading
              tag="h6"
              styles={{ marginRight: wp(3), color: "red" }}
            >
              Pennding
            </DefaultHeading>
          </View>
          <View
            style={{
              width: wp(63),
              height: hp(7),
              marginTop: hp(1),
            }}
          >
            <DefaultText>0000000000</DefaultText>
            <DefaultText styles={{ marginTop: hp(1) }}>
              Mar 20 2024,10:00 am
            </DefaultText>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading
                tag="h6"
                styles={{ color: "#009eff", marginRight: wp(3) }}
              >
                Approve
              </DefaultHeading>
            </DefaultTouchableOpacity>
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading tag="h6" styles={{ color: "red" }}>
                Cencel
              </DefaultHeading>
            </DefaultTouchableOpacity>
          </View>
        </View>
      </BoxWithShadow>
      <BoxWithShadow
        styles={{
          backgroundColor: "white",
          width: wp(90),
          height: hp(16),
          marginTop: hp(3),
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginHorizontal: wp(2),
            marginVertical: wp(2),
            width: wp(22),
            height: hp(15),
          }}
        >
          <DefaultImage
            source={require("../../../images/doctorimage2.jpg")}
            styles={{ width: 80, height: 110 }}
          />
        </View>
        <View
          style={{
            width: wp(63),
            height: hp(11),
            marginTop: hp(1),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <DefaultHeading tag="h4">Farooq khan</DefaultHeading>
            <DefaultHeading
              tag="h6"
              styles={{ marginRight: wp(3), color: "red" }}
            >
              Pennding
            </DefaultHeading>
          </View>
          <View
            style={{
              width: wp(63),
              height: hp(7),
              marginTop: hp(1),
            }}
          >
            <DefaultText>0000000000</DefaultText>
            <DefaultText styles={{ marginTop: hp(1) }}>
              Mar 20 2024,10:00 am
            </DefaultText>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading
                tag="h6"
                styles={{ color: "#009eff", marginRight: wp(3) }}
              >
                Approve
              </DefaultHeading>
            </DefaultTouchableOpacity>
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading tag="h6" styles={{ color: "red" }}>
                Cencel
              </DefaultHeading>
            </DefaultTouchableOpacity>
          </View>
        </View>
      </BoxWithShadow>
      <BoxWithShadow
        styles={{
          backgroundColor: "white",
          width: wp(90),
          height: hp(16),
          marginTop: hp(3),
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginHorizontal: wp(2),
            marginVertical: wp(2),
            width: wp(22),
            height: hp(15),
          }}
        >
          <DefaultImage
            source={require("../../../images/doctorimage2.jpg")}
            styles={{ width: 80, height: 110 }}
          />
        </View>
        <View
          style={{
            width: wp(63),
            height: hp(11),
            marginTop: hp(1),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <DefaultHeading tag="h4">Farooq khan</DefaultHeading>
            <DefaultHeading
              tag="h6"
              styles={{ marginRight: wp(3), color: "red" }}
            >
              Pennding
            </DefaultHeading>
          </View>
          <View
            style={{
              width: wp(63),
              height: hp(7),
              marginTop: hp(1),
            }}
          >
            <DefaultText>0000000000</DefaultText>
            <DefaultText styles={{ marginTop: hp(1) }}>
              Mar 20 2024,10:00 am
            </DefaultText>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading
                tag="h6"
                styles={{ color: "#009eff", marginRight: wp(3) }}
              >
                Approve
              </DefaultHeading>
            </DefaultTouchableOpacity>
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading tag="h6" styles={{ color: "red" }}>
                Cencel
              </DefaultHeading>
            </DefaultTouchableOpacity>
          </View>
        </View>
      </BoxWithShadow>
      <BoxWithShadow
        styles={{
          backgroundColor: "white",
          width: wp(90),
          height: hp(16),
          marginTop: hp(3),
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginHorizontal: wp(2),
            marginVertical: wp(2),
            width: wp(22),
            height: hp(15),
          }}
        >
          <DefaultImage
            source={require("../../../images/doctorimage2.jpg")}
            styles={{ width: 80, height: 110 }}
          />
        </View>
        <View
          style={{
            width: wp(63),
            height: hp(11),
            marginTop: hp(1),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <DefaultHeading tag="h4">Farooq khan</DefaultHeading>
            <DefaultHeading
              tag="h6"
              styles={{ marginRight: wp(3), color: "red" }}
            >
              Pennding
            </DefaultHeading>
          </View>
          <View
            style={{
              width: wp(63),
              height: hp(7),
              marginTop: hp(1),
            }}
          >
            <DefaultText>0000000000</DefaultText>
            <DefaultText styles={{ marginTop: hp(1) }}>
              Mar 20 2024,10:00 am
            </DefaultText>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading
                tag="h6"
                styles={{ color: "#009eff", marginRight: wp(3) }}
              >
                Approve
              </DefaultHeading>
            </DefaultTouchableOpacity>
            <DefaultTouchableOpacity handler={() => console.log("hello")}>
              <DefaultHeading tag="h6" styles={{ color: "red" }}>
                Cencel
              </DefaultHeading>
            </DefaultTouchableOpacity>
          </View>
        </View>
      </BoxWithShadow>
    </>
  );
};

export default Appointments;
