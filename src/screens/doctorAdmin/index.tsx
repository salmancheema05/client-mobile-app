import React, { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultImage } from "../../components/images";
import { DefaultHeading } from "../../components/headings";
import { DefaultText } from "../../components/texts";
import { ReadOnlyRating } from "../../components/rating";
import { DefaultSection, DefaultView, Header } from "../../components/Views";
import { DefaultTouchableOpacity } from "../../components/touchableOpacity";
import Appointments from "./component/Appointments";
import About from "./component/about";
import Experience from "./component/experience";
import Education from "./component/education";
import { ThreeDotVertical } from "../../components/icons";
import { DoctorProfileCard } from "../../components/cards";
import { useTheme } from "../../theme/context";

const DoctorAdminScreen = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const [selectTab, setSelectTab] = useState<number>(0);
  const theme = useTheme();
  return (
    <DefaultView>
      <Header title="Dr. David Patel " />
      <DefaultSection>
        <DoctorProfileCard
          name="David Patel"
          departmentName="Cardiologist"
          ClinicAddress="Cardiologist Center,USA"
          fee={1800}
          rating={4.5}
          totalRating="4.5"
          source={require("../../images/doctorImage1.png")}
        />
      </DefaultSection>
      <DefaultSection
        styles={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 0.5,
          borderColor: theme.primary.borderColor,
        }}
      >
        <DefaultTouchableOpacity
          styles={{
            borderBottomWidth: selectTab == 0 ? 1 : null,
            borderColor: selectTab == 0 ? "hsla(220, 16%, 50%, 1)" : null,
            paddingBottom: hp(2),
          }}
          handler={() => setSelectTab(0)}
        >
          <DefaultHeading
            styles={{
              color:
                selectTab == 0
                  ? "hsla(220, 16%, 50%, 1)"
                  : "hsla(220, 16%, 80%, 1)",
              fontSize: 13,
            }}
          >
            Appointments
          </DefaultHeading>
        </DefaultTouchableOpacity>
        <DefaultTouchableOpacity
          styles={{
            borderBottomWidth: selectTab == 1 ? 1 : null,
            borderColor: selectTab == 1 ? "hsla(220, 16%, 50%, 1)" : null,
            paddingBottom: hp(2),
          }}
          handler={() => setSelectTab(1)}
        >
          <DefaultHeading
            styles={{
              color:
                selectTab == 1
                  ? "hsla(220, 16%, 50%, 1)"
                  : "hsla(220, 16%, 80%, 1)",
              fontSize: 13,
            }}
          >
            About
          </DefaultHeading>
        </DefaultTouchableOpacity>
        <DefaultTouchableOpacity
          styles={{
            borderBottomWidth: selectTab == 2 ? 1 : null,
            borderColor: selectTab == 2 ? "hsla(220, 16%, 50%, 1)" : null,
            paddingBottom: hp(2),
          }}
          handler={() => setSelectTab(2)}
        >
          <DefaultHeading
            styles={{
              color:
                selectTab == 2
                  ? "hsla(220, 16%, 50%, 1)"
                  : "hsla(220, 16%, 80%, 1)",
              fontSize: 13,
            }}
          >
            Education
          </DefaultHeading>
        </DefaultTouchableOpacity>
        <DefaultTouchableOpacity
          styles={{
            borderBottomWidth: selectTab == 3 ? 1 : null,
            borderColor: selectTab == 3 ? "hsla(220, 16%, 50%, 1)" : null,
            paddingBottom: hp(2),
          }}
          handler={() => setSelectTab(3)}
        >
          <DefaultHeading
            styles={{
              color:
                selectTab == 3
                  ? "hsla(220, 16%, 50%, 1)"
                  : "hsla(220, 16%, 80%, 1)",
              fontSize: 13,
            }}
          >
            Experience
          </DefaultHeading>
        </DefaultTouchableOpacity>
        <DefaultTouchableOpacity
          styles={{
            borderBottomWidth: selectTab == 4 ? 1 : null,
            borderColor: selectTab == 4 ? "hsla(220, 16%, 50%, 1)" : null,
            paddingBottom: hp(2),
          }}
          handler={() => setSelectTab(4)}
        >
          <DefaultHeading
            styles={{
              color:
                selectTab == 4
                  ? "hsla(220, 16%, 50%, 1)"
                  : "hsla(220, 16%, 80%, 1)",
              fontSize: 13,
            }}
          >
            Setting
          </DefaultHeading>
        </DefaultTouchableOpacity>
      </DefaultSection>
      <View style={{ height: hp(61) }}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {selectTab === 0 ? (
              <Appointments />
            ) : selectTab === 1 ? (
              <About />
            ) : selectTab === 2 ? (
              <Education />
            ) : selectTab === 3 ? (
              <Experience />
            ) : null}
          </ScrollView>
        </SafeAreaView>
      </View>
    </DefaultView>
  );
};

export default DoctorAdminScreen;
